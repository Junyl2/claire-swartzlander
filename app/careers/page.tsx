import { BriefcaseBusiness, Clock3, HeartHandshake } from "lucide-react";

import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { PageHero } from "@/components/sections/PageHero";
import { careerRoles, pageCopy, pageMetadata, processSteps } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.careers);

export default function CareersPage() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title={pageCopy.careers.title}
        description={pageCopy.careers.description}
        image={{ src: "/placeholders/team.svg", alt: "Careers placeholder", label: "Construction Careers" }}
        primaryCta={{ href: "/contact", label: "Introduce Yourself" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            kicker="Culture"
            title="A careers page that feels like a premium workplace publication rather than a list dump."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Ownership", icon: BriefcaseBusiness },
              { title: "Balance", icon: Clock3 },
              { title: "Mentorship", icon: HeartHandshake },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)]">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ImagePlaceholder src="/placeholders/office.svg" alt="Company culture placeholder" label="Company Culture" ratio="cinema" />
          <div>
            <SectionHeading
              kicker="Hiring Process"
              title="A calm and structured hiring sequence aligned with the site’s overall tone."
              description="Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus."
            />
            <div className="mt-10">
              <Timeline items={processSteps.slice(0, 4)} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Open Positions"
            title="Placeholder roles are centralized and ready to replace with real openings."
            description="Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum."
          />
          <div className="mt-12 grid gap-5">
            {careerRoles.map((role) => (
              <article key={role.title} className="grid gap-6 border-t border-primary/15 py-6 md:grid-cols-[0.32fr_0.48fr_0.2fr] md:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{role.type}</p>
                  <h3 className="editorial-title mt-3 text-3xl leading-tight">{role.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate">{role.description}</p>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate md:text-right">{role.location}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Join The Team"
        title="The layout is ready now, and the hiring content can evolve later without component churn."
        description="Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."
        primaryHref="/contact"
        primaryLabel="Send Your Details"
      />
    </main>
  );
}
