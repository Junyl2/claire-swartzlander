import { ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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
        image={{ src: "/placeholders/office.svg", alt: "Contact page placeholder", label: "Contact & Inquiry" }}
        primaryCta={{ href: "#contact-form", label: "Send An Inquiry" }}
      />

      <section className="section-y bg-paper" id="contact-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              kicker="Business Information"
              title="A split-screen contact layout tuned for clarity and conversion."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
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
          <ImagePlaceholder src="/placeholders/map.svg" alt="Map placeholder" label="Embedded Map Placeholder" ratio="cinema" />
          <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-paper p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Visit</p>
            <h2 className="editorial-title mt-4 text-4xl leading-tight">A premium secondary contact block for office visits and studio conversations.</h2>
            <p className="mt-6 text-base leading-8 text-slate">{siteConfig.address}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-primary">{siteConfig.hours}</p>
          </div>
        </Container>
      </section>

      <CTASection
        kicker="Ready"
        title="The contact architecture is already structured for real inquiries, real routes, and real business details."
        description="Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."
        primaryHref="/services"
        primaryLabel="Review Services"
      />
    </main>
  );
}
