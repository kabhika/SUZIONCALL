// Brand asset pipeline for SuziOnCall.
// Reads 8k/4k originals from brand-src/, trims transparent padding,
// and emits optimized production files into public/brand/ plus
// favicon.ico, apple-touch-icon.png, and og-default.png in public/.
//
// Run: node scripts/prep-brand.mjs

import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC_LOGO = "brand-src/suzioncall-logo-v3-side-profile-8k.png";
const SRC_ICON = "brand-src/suzioncall-icon-v3-side-profile-4k.png";
const OUT_DIR = "public/brand";
const PUBLIC_DIR = "public";

const OG_BG = "#0b0e13"; // --background token from globals.css

async function trimmed(file) {
  const buf = await sharp(file).trim().png().toBuffer();
  const meta = await sharp(buf).metadata();
  return { buf, width: meta.width, height: meta.height };
}

async function resizePng(buf, opts, outFile, pngOpts = {}) {
  const out = await sharp(buf)
    .resize(opts)
    .png({ compressionLevel: 9, palette: true, ...pngOpts })
    .toBuffer();
  await writeFile(outFile, out);
  const meta = await sharp(out).metadata();
  console.log(
    `${outFile}  ${meta.width}x${meta.height}  ${(out.length / 1024).toFixed(1)}KB`
  );
  return out;
}

// Wrap a single PNG in an ICO container (valid since Vista).
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(22, 12); // data offset
  return Buffer.concat([header, entry, pngBuf]);
}

// Scan raw pixels for the dominant amber and dominant dark ink colors.
async function sampleBrandColors(buf) {
  const { data, info } = await sharp(buf)
    .resize({ width: 256 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const amber = new Map();
  const ink = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3] ?? 255];
    if (a < 200) continue;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const key = `${r >> 3},${g >> 3},${b >> 3}`; // 5-bit buckets
    if (max > 140 && r > g && g > b && max - min > 60) {
      amber.set(key, (amber.get(key) ?? 0) + 1);
    } else if (max < 70) {
      ink.set(key, (ink.get(key) ?? 0) + 1);
    }
  }
  const top = (m) => {
    let best = null;
    for (const [k, v] of m) if (!best || v > best[1]) best = [k, v];
    if (!best) return null;
    const [r, g, b] = best[0].split(",").map((n) => (Number(n) << 3) + 4);
    return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
  };
  return { amber: top(amber), ink: top(ink) };
}

async function main() {
  await mkdir(path.join(OUT_DIR), { recursive: true });

  const logo = await trimmed(SRC_LOGO);
  const icon = await trimmed(SRC_ICON);
  console.log(`trimmed logo: ${logo.width}x${logo.height}`);
  console.log(`trimmed icon: ${icon.width}x${icon.height}`);

  // Header/footer lockup — dark backgrounds only.
  await resizePng(logo.buf, { width: 1200 }, `${OUT_DIR}/logo-dark-bg.png`, { quality: 70 });
  const logo600 = await resizePng(
    logo.buf,
    { width: 600 },
    `${OUT_DIR}/logo-dark-bg-600w.png`
  );
  const logo600meta = await sharp(logo600).metadata();

  // Icon set — safe on light or dark.
  await resizePng(icon.buf, { width: 1024, height: 1024, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }, `${OUT_DIR}/icon.png`, { quality: 40, colors: 64 });
  await resizePng(icon.buf, { width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }, `${OUT_DIR}/icon-512.png`, { quality: 70 });
  await resizePng(icon.buf, { width: 192, height: 192, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }, `${OUT_DIR}/icon-192.png`);
  await resizePng(icon.buf, { width: 64, height: 64, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }, `${OUT_DIR}/icon-64.png`);

  // Apple touch icon: opaque background (iOS renders transparency as black).
  const apple = await sharp(icon.buf)
    .resize({ width: 148, height: 148, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 16, bottom: 16, left: 16, right: 16, background: OG_BG })
    .flatten({ background: OG_BG })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(`${PUBLIC_DIR}/apple-touch-icon.png`, apple);
  console.log(`${PUBLIC_DIR}/apple-touch-icon.png  180x180  ${(apple.length / 1024).toFixed(1)}KB`);

  // favicon.ico (32px PNG in ICO container).
  const fav32 = await sharp(icon.buf)
    .resize({ width: 32, height: 32, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await writeFile(`${PUBLIC_DIR}/favicon.ico`, pngToIco(fav32, 32));
  console.log(`${PUBLIC_DIR}/favicon.ico  32x32`);

  // OG image 1200x630: full lockup (icon + wordmark) centered, tagline below.
  const ogLogoW = 980;
  const ogLogo = await sharp(logo.buf).resize({ width: ogLogoW }).png().toBuffer();
  const ogLogoMeta = await sharp(ogLogo).metadata();
  const tagline = "Emergency Suzi Cable Delivery — Sydney";
  const taglineSvg = Buffer.from(
    `<svg width="1200" height="80" xmlns="http://www.w3.org/2000/svg">
      <text x="600" y="52" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif"
        font-size="40" font-weight="600" fill="#a8b2c0">${tagline.replace("&", "&amp;")}</text>
    </svg>`
  );
  const og = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: OG_BG },
  })
    .composite([
      {
        input: ogLogo,
        left: Math.round((1200 - ogLogoW) / 2),
        top: Math.round(265 - ogLogoMeta.height / 2),
      },
      { input: taglineSvg, left: 0, top: 470 },
    ])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
  await writeFile(`${PUBLIC_DIR}/og-default.png`, og);
  console.log(`${PUBLIC_DIR}/og-default.png  1200x630  ${(og.length / 1024).toFixed(1)}KB`);

  const colors = await sampleBrandColors(icon.buf);
  console.log(`sampled brand amber: ${colors.amber}`);
  console.log(`sampled brand ink:   ${colors.ink}`);
  console.log(
    `logo-dark-bg-600w intrinsic: ${logo600meta.width}x${logo600meta.height} (aspect ${(logo600meta.width / logo600meta.height).toFixed(3)})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
