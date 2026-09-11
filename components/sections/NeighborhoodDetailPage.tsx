import { MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NeighborhoodCinematicHero } from "@/components/sections/NeighborhoodCinematicHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/interactive/Reveal";
import { ScrollPull } from "@/components/interactive/ScrollPull";
import type { Neighborhood } from "@/data/site";

type NeighborhoodDetailPageProps = {
  neighborhood: Neighborhood;
};

export function NeighborhoodDetailPage({ neighborhood }: NeighborhoodDetailPageProps) {
  const sectionLabel = neighborhood.sections.length > 1 ? "Sections" : "Section";
  const sectionList = neighborhood.sections.join(", ");
  const sectionGlyph = neighborhood.sections[0].charAt(0);
  const mapQuery = encodeURIComponent(`${neighborhood.name}, Palm Coast, FL`);
  const heroImage = neighborhood.image ?? {
    src: "/neighborhoods/palm-coast.jpg",
    alt: "Aerial view of the Flagler Coast, Florida",
  };

  return (
    <main>
      <NeighborhoodCinematicHero
        kicker="Neighborhoods"
        title={neighborhood.name}
        description={`${neighborhood.name} is one of Palm Coast's original platted neighborhoods, covering the ${sectionList} ${sectionLabel}.`}
        caption={`${neighborhood.name} — ${sectionList} ${sectionLabel}, Palm Coast, FL`}
        image={{ src: heroImage.src, alt: heroImage.alt }}
      />

      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-paper py-20 md:py-24">
        <span
          aria-hidden="true"
          className="display-title pointer-events-none absolute -right-[8vw] top-1/2 hidden -translate-y-1/2 select-none text-[46vw] leading-none text-primary/[0.04] xl:block"
        >
          {sectionGlyph}
        </span>

        <Container className="relative">
          <ScrollPull>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:items-center lg:gap-16">
              <div className="mx-auto flex w-full max-w-[15rem] flex-col items-center border border-primary/15 bg-white px-8 py-12 text-center shadow-[var(--shadow-soft)] lg:mx-0">
                <p className="ui-title text-[11px] text-slate">{sectionLabel}</p>
                <p className="display-title mt-4 text-8xl leading-none text-primary">{sectionGlyph}</p>
                <span aria-hidden="true" className="mt-6 h-px w-12 bg-primary/40" />
                <p className="ui-title mt-6 text-[11px] text-ink">{neighborhood.name}</p>
                <p className="mt-1 text-[11px] text-slate">Palm Coast, FL</p>
              </div>

              <div className="max-w-2xl">
                <SectionHeading kicker="Overview" title={`Living In ${neighborhood.name}`} description={neighborhood.overview} />

                <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">Notable Nearby</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {neighborhood.landmarks.map((landmark) => (
                    <li
                      key={landmark}
                      className="flex items-start gap-3 rounded-[var(--radius-sharp)] border border-primary/12 bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink shadow-[var(--shadow-soft)]"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{landmark}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">{`Ask About ${neighborhood.name}`}</Button>
                  <Button href="/neighborhoods" variant="secondary">
                    View All Neighborhoods
                  </Button>
                </div>
              </div>
            </div>
          </ScrollPull>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Find It"
              title={`Where ${neighborhood.name} Sits`}
              description={`A real, live look at ${neighborhood.name}'s location within Palm Coast — plus the section, city, and county at a glance.`}
            />
          </Reveal>
        </Container>

        <Reveal delay={0.1} className="relative left-1/2 mt-10 w-screen -translate-x-1/2 md:mt-14">
          <div className="relative h-[62vh] max-h-[620px] min-h-[420px] w-full overflow-hidden border-y border-primary/15">
            <a
              href={`https://www.google.com/maps?q=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-title absolute right-4 top-4 z-10 border border-primary/15 bg-white px-4 py-2 text-[11px] text-ink shadow-[var(--shadow-soft)] transition duration-300 hover:border-primary hover:bg-primary hover:text-white md:right-8 md:top-8"
            >
              Open In Google Maps
            </a>
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              title={`Map of ${neighborhood.name}, Palm Coast, FL`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="relative z-10 mx-4 -mt-16 border border-primary/15 bg-white/95 p-6 shadow-[0_30px_80px_hsl(215_19%_10%_/_0.22)] backdrop-blur-md sm:mx-auto sm:max-w-sm md:absolute md:bottom-10 md:left-10 md:mt-0">
            <p className="ui-title text-[11px] text-primary">At A Glance</p>
            <dl className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <dt className="ui-title text-[10px] text-slate">{sectionLabel}</dt>
                <dd className="display-title mt-1 text-2xl leading-none text-primary">{sectionList}</dd>
              </div>
              <div>
                <dt className="ui-title text-[10px] text-slate">City</dt>
                <dd className="mt-1 text-sm font-bold leading-tight text-ink">Palm Coast</dd>
              </div>
              <div>
                <dt className="ui-title text-[10px] text-slate">County</dt>
                <dd className="mt-1 text-sm font-bold leading-tight text-ink">Flagler</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/contact" className="w-full justify-center">
                {`Get Listings In ${neighborhood.name}`}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <SharedContactSection />
    </main>
  );
}
