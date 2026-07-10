import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { pageCopy, pageMetadata, services } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.services);

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title={pageCopy.services.title}
        description={pageCopy.services.description}
        image={{ src: "/placeholders/site.svg", alt: "Construction services placeholder", label: "Services Overview" }}
        primaryCta={{ href: "/contact", label: "Request A Consultation" }}
        secondaryCta={{ href: "/projects", label: "View Projects" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Service Matrix"
            title="Trade categories, arranged for quick owner decisions."
            description="Each section is written around the actual service menu, so visitors can move from a property problem to the right crew category without decoding template language."
          />
          <div className="mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} mirrored={index % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
