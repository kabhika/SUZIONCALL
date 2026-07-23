import type { MetadataRoute } from "next";
import { siteConfig, areaPages } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.brand.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/book",
    "/fleets",
    "/caravan",
    "/transition-adapters",
    "/guides/suzi-cable",
    "/guides/trailer-lights-not-working",
    "/areas",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7,
  }));

  const areaEntries: MetadataRoute.Sitemap = areaPages.map((area) => ({
    url: `${base}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...entries, ...areaEntries];
}
