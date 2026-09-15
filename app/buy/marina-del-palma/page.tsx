import { CommunityPage } from "@/components/sections/CommunityPage";
import { communities } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const community = communities.find((item) => item.slug === "marina-del-palma")!;

export const metadata = createPageMetadata({
  title: community.name,
  description: community.description,
  path: community.href,
});

export default function MarinaDelPalmaPage() {
  return <CommunityPage community={community} />;
}
