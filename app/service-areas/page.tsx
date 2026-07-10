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
          <ImagePlaceholder src="/placeholders/map.svg" alt="Regional service map" label="Regional Service Map" ratio="cinema" />
          <div>
            <SectionHeading
              kicker="Coverage"
              title="Routes, response windows, and local property knowledge."
              description="Coverage language now supports real availability: recurring care zones, project scheduling, equipment access, and service calls by area."
            />
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Region List"
            title="Service areas, grouped for owners and property managers."
            description="Each coverage card can grow with actual city names, neighborhoods, communities, or HOA service routes."
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
