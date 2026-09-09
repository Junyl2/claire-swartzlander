import type { MetadataRoute } from "next";

import { communityDirectory, neighborhoods, siteConfig } from "@/data/site";

const staticRoutes = [
  "/",
  "/about",
  "/book-an-appointment",
  "/buy",
  "/buy/grand-haven",
  "/buy/hammock-dunes",
  "/buy/listings",
  "/buy/marina-del-palma",
  "/buy/palm-harbor",
  "/buy/the-conservatory-at-hammock-beach",
  "/buy/tidelands",
  "/buy/top-buyer-tips",
  "/communities",
  "/contact",
  "/neighborhoods",
  "/reviews",
  "/sell",
  "/sell/cash-offer",
  "/sell/sell-my-home",
  "/sell/top-dollar-tips",
  "/sell/whats-my-home-worth",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const toUrl = (path: string) => new URL(path, siteConfig.url).toString();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: toUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const neighborhoodEntries: MetadataRoute.Sitemap = neighborhoods.map((neighborhood) => ({
    url: toUrl(`/neighborhoods/${neighborhood.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const communityEntries: MetadataRoute.Sitemap = communityDirectory
    .filter((item) => item.href.startsWith("/communities/"))
    .map((item) => ({
      url: toUrl(item.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticEntries, ...neighborhoodEntries, ...communityEntries];
}
