import { TipsPage } from "@/components/sections/TipsPage";
import { topDollarTips } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Top Dollar Tips",
  description: "Practical steps for getting the strongest possible price when selling your Palm Coast home.",
  path: "/sell/top-dollar-tips",
});

export default function TopDollarTipsPage() {
  return (
    <TipsPage
      kicker="Before You List"
      title="Top Dollar Tips"
      description="Small, practical steps that make a real difference in how fast your home sells and what it sells for."
      image={{ src: "/placeholders/listing.svg", alt: "Top dollar tips placeholder", label: "Seller Guidance" }}
      primaryCta={{ href: "/sell/whats-my-home-worth", label: "Get A Home Valuation" }}
      sectionKicker="Before You List"
      sectionTitle="Six things every seller should do first."
      tips={topDollarTips}
    />
  );
}
