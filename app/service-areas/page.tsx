import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { pageCopy, pageMetadata, serviceAreas } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.serviceAreas);

export default function ServiceAreasPage() {
  return (
    <main>
      <PageHero
        kicker="Service Areas"
        title={pageCopy.serviceAreas.title}
        description={pageCopy.serviceAreas.description}
        image={{ src: "/placeholders/map.svg", alt: "Service area map placeholder", label: "Regional Coverage" }}
        primaryCta={{ href: "/contact", label: "Check Availability" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ImagePlaceholder src="/placeholders/map.svg" alt="Regional map placeholder" label="Interactive Map Placeholder" ratio="cinema" />
          <div>
            <SectionHeading
              kicker="Coverage"
              title="A premium map placeholder and coverage matrix designed to feel complete from day one."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis."
            />
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Region List"
            title="Coverage cards that can expand or contract as the real business footprint changes."
            description="Praesent commodo cursus magna, vel scelerisque nisl consectetur. Aenean eu leo quam."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-primary/15 lg:grid-cols-4 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <article key={area.city} className="bg-paper p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{area.region}</p>
                <h3 className="mt-3 text-xl font-bold">{area.city}</h3>
                <p className="mt-3 text-sm leading-7 text-slate">{area.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
