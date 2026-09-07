import { notFound } from "next/navigation";

import { CommunityDirectoryDetailPage } from "@/components/sections/CommunityDirectoryDetailPage";
import { communityDirectory } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const internalCommunities = communityDirectory.filter((item) => item.href.startsWith("/communities/"));

export function generateStaticParams() {
  return internalCommunities.map((community) => ({ slug: community.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const community = internalCommunities.find((item) => item.slug === slug);

  return createPageMetadata({
    title: community ? community.name : "Community",
    description: community
      ? `Homes for sale in ${community.name}, one of Palm Coast's gated communities.`
      : "Palm Coast gated community.",
    path: `/communities/${slug}`,
  });
}

export default async function CommunitySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const community = internalCommunities.find((item) => item.slug === slug);

  if (!community) {
    notFound();
  }

  return <CommunityDirectoryDetailPage community={community} />;
}
