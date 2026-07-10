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
        image={{ src: "/placeholders/office.svg", alt: "Contact page placeholder", label: "Contact & Inquiry" }}
        primaryCta={{ href: "#contact-form", label: "Send An Inquiry" }}
      />

      <section className="section-y bg-paper" id="contact-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              kicker="Business Information"
              title="Clear contact paths, for repairs, routes, and larger scopes."
              description="The inquiry area is written for real property needs: urgent issues, maintenance plans, walkthroughs, and construction-led improvements."
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
          <ImagePlaceholder src="/placeholders/map.svg" alt="Service area map" label="Service Area Map" ratio="cinema" />
          <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-paper p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Visit</p>
            <MixedTitle
              text="Visit, plan, and coordinate the next site walk."
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
        title="Bring the property need, we will shape the scope."
        description="Use the service index to identify the right category, or send the issue directly and let the team route it."
        primaryHref="/services"
        primaryLabel="Review Services"
      />
    </main>
  );
}
