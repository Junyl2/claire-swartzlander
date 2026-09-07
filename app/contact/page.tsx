import { ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { contactItems, pageCopy, pageMetadata, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.contact);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title={pageCopy.contact.title}
        description={pageCopy.contact.description}
        image={{ src: "/placeholders/office.svg", alt: "Contact Claire Swartzlander placeholder", label: "Contact & Inquiry" }}
        primaryCta={{ href: "#contact-form", label: "Send An Inquiry" }}
      />

      <section className="section-y bg-paper" id="contact-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              kicker="Get In Touch"
              title="Clear contact paths, for buying, selling, or just exploring."
              description="The inquiry area is written for real coastal property needs: buying, selling, valuations, appointments, and general questions."
            />
            <div className="mt-10 grid gap-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex items-center justify-between rounded-[var(--radius-panel)] border border-primary/12 bg-white p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex items-center gap-4">
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{item.label}</p>
                        <p className="mt-2 text-sm leading-7 text-slate">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate" />
                  </a>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <ImagePlaceholder src="/placeholders/map.svg" alt="Palm Coast coverage map" label="Coastal Coverage Map" ratio="cinema" />
          <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-paper p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Meet</p>
            <MixedTitle
              text="Visit, plan, or schedule your next conversation."
              as="h2"
              className="editorial-title display-title mt-4 text-4xl leading-[0.92]"
            />
            <p className="mt-6 text-base leading-8 text-slate">{siteConfig.address}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">{siteConfig.hours}</p>
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Ready"
        title="Bring the goal, we will shape the plan."
        description="Use the community index to explore where you might want to live, or send your question directly and Claire will route it."
        primaryHref="/buy"
        primaryLabel="Explore Communities"
      />
    </main>
  );
}
