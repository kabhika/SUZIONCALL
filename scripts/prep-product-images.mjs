import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

// Local input paths are deliberately excluded from version control.
const inputs = JSON.parse(await fs.readFile(new URL('./product-image-inputs.local.json', import.meta.url), 'utf8'));
const publicDir = path.resolve('public/products');
const deliveryDir = path.resolve(process.argv[2] || 'output/product-images');
await fs.mkdir(publicDir, { recursive: true });
await fs.mkdir(deliveryDir, { recursive: true });
const manifest = [];
for (let i = 1; i <= 4; i++) {
  const source = inputs.originals[i - 1];
  // Deterministic enlargement retains photographed geometry without AI reconstruction.
  const master = path.join(deliveryDir, `stock-${i}-upscaled.jpg`);
  await sharp(source).rotate().resize({ height: 4096, kernel: 'lanczos3' }).sharpen({sigma: 0.65}).jpeg({ quality: 95 }).toFile(master);
  await sharp(source).rotate().resize({height: 1200}).webp({quality: 85}).toFile(path.join(publicDir, `stock-${i}.webp`));
  await sharp(master).resize({height: 2400}).webp({quality: 88}).toFile(path.join(publicDir, `stock-${i}-large.webp`));
  manifest.push({id:`stock-${i}`, type:'supplied photograph; deterministic upscale', master:path.basename(master), dimensions:await sharp(master).metadata().then(({width,height})=>({width,height}))});
}
for (const asset of inputs.generated) {
  await fs.copyFile(asset.path, path.join(deliveryDir, `${asset.id}-generated.png`));
  await sharp(asset.path).resize({width: asset.id === 'hero' ? 1600 : 900}).webp({quality: 85}).toFile(path.join(publicDir, `${asset.id}.webp`));
  await sharp(asset.path).webp({quality: 92}).toFile(path.join(publicDir, `${asset.id}-large.webp`));
  manifest.push({id:asset.id,type:'AI-generated category illustration; not a verified make/model'});
}
for (const asset of inputs.enhanced) {
  await sharp(asset.path).resize({height:4096}).png().toFile(path.join(deliveryDir, `${asset.id}-ai.png`));
  const stockId = asset.id.replace('enhanced-', 'stock-');
  await sharp(asset.path).resize({height:1400}).webp({quality:87}).toFile(path.join(publicDir, `${stockId}-enhanced.webp`));
  manifest.push({id:asset.id,type:'AI-enhanced interpretation of supplied photo; inspect against original before using for exact product identification'});
}
await fs.writeFile(path.join(deliveryDir, 'manifest.json'), JSON.stringify(manifest,null,2));
await fs.writeFile(path.join(deliveryDir, 'generation-prompts.json'), JSON.stringify({mode:'built-in image_gen',prompts:inputs.prompts},null,2));
await fs.cp(publicDir, path.join(deliveryDir, 'website-webp'), {recursive:true});
console.log(JSON.stringify(manifest,null,2));
