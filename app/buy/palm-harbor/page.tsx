import { CommunityPage } from "@/components/sections/CommunityPage";
import { communities } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const community = communities.find((item) => item.slug === "palm-harbor")!;

export const metadata = createPageMetadata({
  title: community.name,
  description: community.description,
  path: community.href,
});

export default function PalmHarborPage() {
  return <CommunityPage community={community} />;
}
