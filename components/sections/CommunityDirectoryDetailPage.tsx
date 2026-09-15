import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { Button } from "@/components/ui/Button";
import type { CommunityDirectoryItem } from "@/data/site";

const whatToExpect = [
  { title: "Location", description: "Palm Coast, Florida, along the Flagler County coastline." },
  { title: "Community Style", description: "A named, distinct community within the greater Palm Coast area." },
  { title: "Home Types", description: "Inventory varies by community — single-family, townhome, or condo." },
  { title: "Access & HOA", description: "Gate access, HOA structure, and fees are confirmed directly, community by community." },
];

type CommunityDirectoryDetailPageProps = {
  community: CommunityDirectoryItem;
};

export function CommunityDirectoryDetailPage({ community }: CommunityDirectoryDetailPageProps) {
  const description = community.parent
    ? `${community.name} is part of ${community.parent}, one of Palm Coast's gated communities.`
    : `${community.name} is one of Palm Coast's gated and master-planned communities.`;

  return (
    <main>
      <PageHero
        kicker="Communities"
        title={community.name}
        description={description}
        image={{ src: "/placeholders/community.svg", alt: `${community.name} placeholder`, label: community.name }}
        primaryCta={{ href: "/contact", label: `Ask About ${community.name}` }}
        secondaryCta={{ href: "/communities", label: "View All Communities" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Overview"
            title={`Living In ${community.name}`}
            description={`${community.name} sits within Palm Coast, Florida${community.parent ? `, as part of ${community.parent}` : ""}. Current listings, pricing, and availability are confirmed directly with Claire, since inventory changes often.`}
          />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading kicker="What To Expect" title="Community basics, confirmed before you tour." />
          <StaggerGroup className="mt-10 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {whatToExpect.map((item) => (
              <MotionItem key={item.title}>
                <div className="h-full bg-paper p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate">{item.description}</p>
                </div>
              </MotionItem>
            ))}
          </StaggerGroup>
          <div className="mt-10">
            <Button href="/contact">{`Get Listings In ${community.name}`}</Button>
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
