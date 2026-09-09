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

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((item) => item.slug === slug);

  return createPageMetadata({
    title: neighborhood ? neighborhood.name : "Neighborhood",
    description: neighborhood
      ? `Homes for sale in ${neighborhood.name}, Palm Coast.`
      : "Palm Coast neighborhood.",
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
