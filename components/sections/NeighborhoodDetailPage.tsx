import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/interactive/Reveal";
import type { Neighborhood } from "@/data/site";

type NeighborhoodDetailPageProps = {
  neighborhood: Neighborhood;
};

export function NeighborhoodDetailPage({ neighborhood }: NeighborhoodDetailPageProps) {
  const sectionLabel = neighborhood.sections.length > 1 ? "Sections" : "Section";
  const sectionList = neighborhood.sections.join(", ");
  const mapQuery = encodeURIComponent(`${neighborhood.name}, Palm Coast, FL`);

  return (
    <main>
      <PageHero
        kicker="Neighborhoods"
        title={neighborhood.name}
        description={`${neighborhood.name} is one of Palm Coast's original platted neighborhoods, covering the ${sectionList} ${sectionLabel}.`}
        image={{ src: "/placeholders/map.svg", alt: `${neighborhood.name} placeholder`, label: neighborhood.name }}
        primaryCta={{ href: "/contact", label: `Ask About ${neighborhood.name}` }}
        secondaryCta={{ href: "/neighborhoods", label: "View All Neighborhoods" }}
      />

      <section className="section-y bg-paper">
        <Container className="lg:flex lg:items-center lg:gap-16">
          <Reveal className="relative mx-auto max-w-xl lg:mx-0 lg:w-[42%] lg:shrink-0">
            <Image
              src="/neighborhoods/palm-coast.jpg"
              alt="Aerial view of the Flagler Coast, Florida"
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="h-auto w-full shadow-[var(--shadow-soft)]"
            />
            <p className="ui-title mt-3 text-[10px] text-slate">The Flagler Coast, Florida</p>
          </Reveal>

          <div className="mt-10 max-w-xl lg:mt-0">
            <SectionHeading kicker="Overview" title={`Living In ${neighborhood.name}`} description={neighborhood.overview} />
            <div className="mt-8 flex flex-wrap gap-2">
              {neighborhood.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="rounded-[var(--radius-sharp)] border border-primary/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink"
                >
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              kicker="Find It"
              title={`Where ${neighborhood.name} Sits`}
              description="A real, live look at the neighborhood's location within Palm Coast."
            />
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-primary/15">
              <iframe
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                title={`Map of ${neighborhood.name}, Palm Coast, FL`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              kicker="At A Glance"
              title={`${neighborhood.name} ${sectionLabel}`}
              description="Section letters are how Palm Coast's original platted neighborhoods are organized on county maps. Current listings, home types, and pricing are confirmed directly with Claire, since inventory changes often."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {neighborhood.sections.map((section) => (
                <span
                  key={section}
                  className="rounded-[var(--radius-sharp)] border border-primary/15 bg-paper px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink"
                >
                  {section} Section
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact">{`Get Listings In ${neighborhood.name}`}</Button>
              <a
                href="https://www.flaglerschools.com/school-zones"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-title inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sharp)] border border-primary/35 px-6 py-3 text-sm text-ink transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                Check School Zoning
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
