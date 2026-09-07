import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ListingCard } from "@/components/sections/ListingCard";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { listings, pageMetadata } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.listings);

export default function ListingsPage() {
  return (
    <main>
      <PageHero
        kicker="Featured Listings"
        title="A first look at the kind of homes Claire places buyers in."
        description="These are sample listings standing in for live inventory. Reach out for current availability, pricing, and showings in any Palm Coast community."
        image={{ src: "/placeholders/listing.svg", alt: "Featured listings placeholder", label: "Featured Listings" }}
        primaryCta={{ href: "/contact", label: "Ask About Current Inventory" }}
        secondaryCta={{ href: "/buy", label: "Browse Communities" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Sample Inventory"
            title="Waterfront, golf, and family homes across Palm Coast."
            description="Every home below is a placeholder standing in for real inventory. Tap Request Info on any card and it goes straight to Claire."
          />
          <StaggerGroup className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {listings.map((listing) => (
              <MotionItem key={listing.slug}>
                <ListingCard listing={listing} />
              </MotionItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
