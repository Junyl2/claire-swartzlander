import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/ui/Timeline";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { pageCopy, pageMetadata, processSteps } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createPageMetadata(pageMetadata.about);

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title={pageCopy.about.title}
        description={pageCopy.about.description}
        image={{ src: "/placeholders/hero-2.svg", alt: "Palm Coast coastal placeholder", label: "The Coast" }}
        primaryCta={{ href: "/contact", label: "Get In Touch" }}
        secondaryCta={{ href: "/book-an-appointment", label: "Book An Appointment" }}
      />

      <AboutIntroSection />

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ImagePlaceholder src="/placeholders/office.svg" alt="Claire Swartzlander process placeholder" label="How We Work Together" ratio="cinema" />
          <div id="process">
            <SectionHeading
              kicker="Client Process"
              title="From first conversation to closing day, every step stays visible."
              description="The process is built to support first-time buyers, seasoned sellers, and everything in between, with clear handoffs at every stage."
            />
            <div className="mt-10">
              <Timeline items={processSteps} />
            </div>
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
