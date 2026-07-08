import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { PageHero } from "@/components/sections/PageHero";
import { pageCopy, pageMetadata, processSteps, values } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

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

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            kicker="Mission, Vision, Values"
            title="Magazine-style storytelling with strong whitespace and deliberate pacing."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)]">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{value.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ImagePlaceholder src="/placeholders/office.svg" alt="History timeline placeholder" label="History & Leadership" ratio="cinema" />
          <div id="process">
            <SectionHeading
              kicker="History Timeline"
              title="A clear timeline block that can carry real milestones without reformatting."
              description="Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
            />
            <div className="mt-10">
              <Timeline items={processSteps} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Achievements"
        title="Swap placeholder milestones for verified achievements when real company data is ready."
        description="Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. No structural redesign required."
        primaryHref="/projects"
        primaryLabel="See The Work"
      />
    </main>
  );
}
