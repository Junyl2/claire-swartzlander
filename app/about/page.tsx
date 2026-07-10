import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/ui/Timeline";
import { EreCareValuesSection } from "@/components/sections/EreCareValuesSection";
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
        image={{ src: "/placeholders/team.svg", alt: "About company placeholder", label: "Company Story" }}
        primaryCta={{ href: "/contact", label: "Meet The Team" }}
      />

      <EreCareValuesSection />

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ImagePlaceholder src="/placeholders/office.svg" alt="History timeline placeholder" label="History & Leadership" ratio="cinema" />
          <div id="process">
            <SectionHeading
              kicker="Service Process"
              title="From walkthrough to closeout, every step stays visible."
              description="The process is built for maintenance calls and larger construction scopes alike, with clear handoffs from first look to final review."
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
