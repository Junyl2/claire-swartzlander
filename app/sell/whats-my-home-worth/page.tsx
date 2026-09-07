import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "What's My Home Worth?",
  description: "Request a no-obligation home value estimate for your Palm Coast property.",
  path: "/sell/whats-my-home-worth",
});

export default function WhatsMyHomeWorthPage() {
  return (
    <main>
      <PageHero
        kicker="Sell · Home Valuation"
        title="What's your home actually worth right now?"
        description="Share a few details and Claire will put together a current, no-obligation estimate based on recent sales in your community."
        image={{ src: "/placeholders/interior.svg", alt: "Home valuation placeholder", label: "Home Valuation" }}
        primaryCta={{ href: "#valuation-form", label: "Request My Estimate" }}
      />

      <section className="section-y bg-paper" id="valuation-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="Get Your Estimate"
            title="Tell us about your property."
            description="Address, condition, and any recent updates all factor into an accurate estimate. There's no cost or obligation."
          />
          <ContactForm />
        </Container>
      </section>

      <CTASection
        kicker="Ready To List?"
        title="Turn your estimate into a listing strategy."
        description="Once you know your number, Claire can help you decide between a fast cash offer and a fully marketed listing."
        primaryHref="/sell/sell-my-home"
        primaryLabel="Explore Full Listing"
        secondaryHref="/sell/cash-offer"
        secondaryLabel="Request A Cash Offer"
      />
    </main>
  );
}
