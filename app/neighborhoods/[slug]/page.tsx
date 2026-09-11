import { notFound } from "next/navigation";

import { NeighborhoodDetailPage } from "@/components/sections/NeighborhoodDetailPage";
import { neighborhoods } from "@/data/site";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({ slug: neighborhood.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

const MAX_META_DESCRIPTION_LENGTH = 155;

function buildMetaDescription(overview: string) {
  if (overview.length <= MAX_META_DESCRIPTION_LENGTH) {
    return overview;
  }

  const truncated = overview.slice(0, MAX_META_DESCRIPTION_LENGTH);
  return `${truncated.slice(0, truncated.lastIndexOf(" "))}…`;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((item) => item.slug === slug);

  return createPageMetadata({
    title: neighborhood ? `${neighborhood.name} Homes For Sale` : "Neighborhood",
    description: neighborhood ? buildMetaDescription(neighborhood.overview) : "Palm Coast neighborhood.",
    path: `/neighborhoods/${slug}`,
  });
}

export default async function NeighborhoodSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((item) => item.slug === slug);

  if (!neighborhood) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Neighborhoods", path: "/neighborhoods" },
    { name: neighborhood.name, path: `/neighborhoods/${neighborhood.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NeighborhoodDetailPage neighborhood={neighborhood} />
    </>
  );
}
