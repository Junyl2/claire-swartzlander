import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { communityDirectory } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Palm Coast Gated Communities",
  description: "A full directory of Palm Coast's gated and master-planned communities.",
  path: "/communities",
});

export default function CommunitiesPage() {
  return (
    <main>
      <PageHero
        kicker="Communities"
        title="Palm Coast Gated Communities"
        description="A full directory of Palm Coast's gated and master-planned communities, from established neighborhoods to newer developments."
        image={{ src: "/placeholders/community.svg", alt: "Palm Coast communities placeholder", label: "Communities" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Full Directory"
            title="Every gated community across Palm Coast."
            description="Communities already featured on Buy link straight to their page. Every other community has its own page here."
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-3" stagger={0.03}>
            {communityDirectory.map((community) => (
              <MotionItem key={community.slug}>
                <Link href={community.href} className="group block h-full bg-white p-6 transition duration-300 hover:bg-paper">
                  <h3 className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-primary">{community.name}</h3>
                  {community.parent ? <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-primary">Part Of {community.parent}</p> : null}
                </Link>
              </MotionItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
