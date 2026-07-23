import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand.name,
    short_name: siteConfig.brand.name,
    description: siteConfig.brand.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e13",
    theme_color: "#fcb41c",
    icons: [
      {
        src: siteConfig.brand.assets.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteConfig.brand.assets.icon512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
