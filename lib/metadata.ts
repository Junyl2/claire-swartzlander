import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export function createRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: "Coastal Property Specialist with RE/MAX Signature, serving buyers and sellers across Palm Coast, FL.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "775 W Granada Blvd STE 201",
      addressLocality: "Ormond Beach",
      addressRegion: "FL",
      postalCode: "32174",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Palm Coast, FL",
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.brokerage,
    },
    sameAs: siteConfig.socials.map((social) => social.href).filter((href) => href && !href.includes("example.com")),
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

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
          url: "/placeholders/hero-1.svg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} placeholder`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: ["/placeholders/hero-1.svg"],
    },
  };
}
