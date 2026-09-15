import { TipsPage } from "@/components/sections/TipsPage";
import { topBuyerTips } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Top Buyer Tips",
  description: "Practical guidance for buying a home along the Palm Coast, from financing to closing.",
  path: "/buy/top-buyer-tips",
});

export default function TopBuyerTipsPage() {
  return (
    <TipsPage
      kicker="Before You Buy"
      title="Top Buyer Tips"
      description="Practical, no-nonsense guidance for buying a home on the coast, from financing to closing day."
      image={{ src: "/placeholders/agent.svg", alt: "Top buyer tips placeholder", label: "Buyer Guidance" }}
      primaryCta={{ href: "/buy", label: "Explore Communities" }}
      sectionKicker="Before You Make An Offer"
      sectionTitle="Six things every coastal buyer should know."
      tips={topBuyerTips}
    />
  );
}
