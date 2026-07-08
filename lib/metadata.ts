import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata(page: PageMetadataInput): Metadata {
  const url = new URL(page.path, siteConfig.url).toString();
  const title = `${page.title} | ${siteConfig.name}`;

  return {
    title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/placeholders/hero-structure.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} construction placeholder`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: ["/placeholders/hero-structure.svg"],
    },
  };
}
