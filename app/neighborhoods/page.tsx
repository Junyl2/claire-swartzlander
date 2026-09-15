import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { neighborhoodSections, neighborhoods } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Palm Coast Neighborhoods",
  description: "Browse Palm Coast by neighborhood or by section, and see how each area of the coast connects.",
  path: "/neighborhoods",
});

export default function NeighborhoodsPage() {
  return (
    <main>
      <PageHero
        kicker="Neighborhoods"
        title="Palm Coast Neighborhoods"
        description="Two ways to find your part of the coast: browse by neighborhood name, or look up a section you already know."
        image={{ src: "/placeholders/map.svg", alt: "Palm Coast neighborhoods placeholder", label: "Neighborhoods" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Browse By Name"
            title="Neighborhoods by Name"
            description="These are the names you'll see on each community's entrance monument sign — select one to learn more."
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {neighborhoods.map((neighborhood) => (
              <MotionItem key={neighborhood.slug}>
                <Link href={`/neighborhoods/${neighborhood.slug}`} className="group block h-full bg-white p-6 transition duration-300 hover:bg-paper">
                  <h3 className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-primary">{neighborhood.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {neighborhood.sections.map((section) => (
                      <span
                        key={section}
                        className="rounded-[var(--radius-sharp)] border border-primary/15 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-primary"
                      >
                        {section} Section
                      </span>
                    ))}
                  </div>
                </Link>
              </MotionItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Browse By Section"
            title="Neighborhoods by Section"
            description="Section letters come from the street names within each area — the system most locals use day to day. Already know yours? Find which neighborhood it belongs to."
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-3 lg:grid-cols-5" stagger={0.03}>
            {neighborhoodSections.map((entry) => (
              <MotionItem key={entry.section}>
                <Link href={`/neighborhoods/${entry.slug}`} className="group block h-full bg-paper p-5 text-center transition duration-300 hover:bg-white">
                  <p className="display-title text-3xl leading-none text-primary">{entry.section}</p>
                  <p className="ui-title mt-2 text-[11px] text-ink transition-colors duration-300 group-hover:text-primary">{entry.name}</p>
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
