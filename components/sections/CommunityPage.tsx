import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import type { Community } from "@/data/site";

type CommunityPageProps = {
  community: Community;
};

export function CommunityPage({ community }: CommunityPageProps) {
  return (
    <main>
      <PageHero
        kicker="Buy"
        title={community.name}
        description={community.description}
        image={community.image}
        primaryCta={{ href: "/contact", label: "Inquire About This Community" }}
        secondaryCta={{ href: "/buy", label: "View All Communities" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading kicker={community.region} title={community.tagline} description={community.description} />
            <div className="mt-8 flex flex-wrap gap-2">
              {community.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-[var(--radius-sharp)] border border-primary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <ImagePlaceholder src="/placeholders/listing.svg" alt={`${community.name} listing placeholder`} label={community.name} ratio="cinema" />
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
