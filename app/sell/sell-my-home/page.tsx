import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { processSteps } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sell My Home",
  description: "A fully marketed listing strategy for selling your Palm Coast home, from pricing to closing.",
  path: "/sell/sell-my-home",
});

export default function SellMyHomePage() {
  return (
    <main>
      <PageHero
        kicker="Sell · Full Listing"
        title="A fully marketed listing, built for maximum exposure."
        description="Professional photography, coordinated showings, and a pricing strategy grounded in real Palm Coast market data — all managed under one plan."
        image={{ src: "/placeholders/listing.svg", alt: "Sell my home placeholder", label: "Full Listing Service" }}
        primaryCta={{ href: "/sell/whats-my-home-worth", label: "Get A Home Valuation" }}
        secondaryCta={{ href: "/sell/top-dollar-tips", label: "Top Dollar Tips" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ImagePlaceholder src="/placeholders/interior.svg" alt="Full listing marketing placeholder" label="Marketing & Showings" ratio="cinema" />
          <div>
            <SectionHeading
              kicker="How It Works"
              title="From consultation to closing, every step stays visible."
              description="The same process applies to a first-time seller or someone who has sold a coastal home before."
            />
            <div className="mt-10">
              <Timeline items={processSteps} />
            </div>
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
