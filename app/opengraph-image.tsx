import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0b0e13",
          backgroundImage:
            "linear-gradient(135deg, #121821 0%, #0b0e13 60%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, color: "#f5a524", fontWeight: 700 }}>
            {siteConfig.brand.name.toUpperCase()}
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#a8b2c0", marginTop: 4 }}>
            {siteConfig.brand.parentLine}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 60, color: "#f3f5f7", fontWeight: 700, lineHeight: 1.15 }}>
            Emergency Suzi Cable
          </div>
          <div style={{ display: "flex", fontSize: 60, color: "#f3f5f7", fontWeight: 700, lineHeight: 1.15 }}>
            Replacement Sydney
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a8b2c0", marginTop: 20 }}>
            Delivered to your breakdown location. Call, WhatsApp, or book online.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
