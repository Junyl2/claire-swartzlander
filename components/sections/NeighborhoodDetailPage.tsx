import { MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NeighborhoodCinematicHero } from "@/components/sections/NeighborhoodCinematicHero";
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

      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <span
          aria-hidden="true"
          className="display-title pointer-events-none absolute -right-[8vw] top-1/2 hidden -translate-y-1/2 select-none text-[46vw] leading-none text-primary/[0.04] xl:block"
        >
          {sectionGlyph}
        </span>

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
            <Reveal className="relative min-h-[26rem] md:min-h-[36rem]">
              <ImagePlaceholder
                src={heroImage.src}
                alt={heroImage.alt}
                label={neighborhood.name}
                className="h-full shadow-[var(--shadow-soft)]"
              />
              <div className="absolute left-6 top-6 z-20 flex w-32 flex-col items-center bg-[linear-gradient(135deg,hsl(220_85%_16%)_0%,hsl(218_100%_32%)_45%,hsl(354_60%_34%)_75%,hsl(354_77%_46%)_100%)] px-5 py-6 text-center text-paper shadow-[0_20px_45px_hsl(215_19%_10%_/_0.35)] sm:w-36">
                <p className="ui-title text-[9px] text-paper/70">{sectionLabel}</p>
                <p className="display-title mt-2 text-5xl leading-none text-paper">{sectionGlyph}</p>
                <span aria-hidden="true" className="mt-3 h-px w-8 bg-paper/40" />
                <p className="ui-title mt-3 text-[9px] text-paper/85">Palm Coast, FL</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-primary" />
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <p className="eyebrow supporting-kicker">Overview</p>
              </div>
              <MixedTitle
                text={`Living In ${neighborhood.name}`}
                as="h2"
                className="editorial-title display-title mt-5 max-w-2xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
              />
              <p className="supporting-copy mt-6 max-w-2xl text-base text-slate md:text-lg">{neighborhood.overview}</p>

              <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">Notable Nearby</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {neighborhood.landmarks.map((landmark, index) => (
                  <li
                    key={landmark}
                    className={`flex items-start gap-3 rounded-[var(--radius-sharp)] border border-primary/12 bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink shadow-[var(--shadow-soft)] ${
                      index % 2 === 0 ? "border-l-4 border-l-primary" : "border-l-4 border-l-secondary"
                    }`}
                  >
                    <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${index % 2 === 0 ? "text-primary" : "text-secondary"}`} />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact">{`Ask About ${neighborhood.name}`}</Button>
                <Button href="/neighborhoods" variant="secondary">
                  View All Neighborhoods
                </Button>
              </div>
            </Reveal>
          </div>
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
