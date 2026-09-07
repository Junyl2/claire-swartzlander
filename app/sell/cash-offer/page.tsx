import { Banknote, CalendarClock, ClipboardCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cash Offer",
  description: "Request a no-obligation cash offer evaluation for your Palm Coast home.",
  path: "/sell/cash-offer",
});

const steps = [
  { title: "Request", icon: ClipboardCheck, description: "Share your property details and we'll begin a review of your home and the local market." },
  { title: "Review", icon: Banknote, description: "You'll receive a no-obligation cash offer estimate based on your home's condition and comparable sales." },
  { title: "Close On Your Timeline", icon: CalendarClock, description: "If you move forward, closing can be scheduled around your timeline, without staging or showings." },
];

export default function CashOfferPage() {
  return (
    <main>
      <PageHero
        kicker="Sell · Cash Offer"
        title="Request a no-obligation cash offer."
        description="Skip the showings and the staging. Share a few details about your home and get a straightforward cash offer evaluation from Claire's team."
        image={{ src: "/placeholders/listing.svg", alt: "Cash offer placeholder", label: "Cash Offer Program" }}
        primaryCta={{ href: "#cash-offer-form", label: "Request Your Offer" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading kicker="How It Works" title="Three steps, start to finish." />
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionItem key={step.title}>
                  <article className="h-full rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)]">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Step 0{index + 1}</p>
                    <Icon className="mt-4 h-6 w-6 text-primary" />
                    <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate">{step.description}</p>
                  </article>
                </MotionItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section-y bg-white" id="cash-offer-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="Get Started"
            title="Tell us about your home."
            description="The more detail you share, the more accurate the estimate. There's no obligation to move forward."
          />
          <ContactForm />
        </Container>
      </section>

      <CTASection
        kicker="Not Sure Yet?"
        title="Compare the cash offer path against a full listing."
        description="A cash offer trades speed and simplicity for a faster close. A full listing can bring more competition and a stronger final price."
        primaryHref="/sell/sell-my-home"
        primaryLabel="See The Full Listing Path"
        secondaryHref="/sell/whats-my-home-worth"
        secondaryLabel="Get A Home Valuation"
      />
    </main>
  );
}
