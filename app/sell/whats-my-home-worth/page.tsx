import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { AddressLeadForm } from "@/components/sections/AddressLeadForm";
import { ListingAgentProfile } from "@/components/sections/ListingAgentProfile";
import { Reveal } from "@/components/interactive/Reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home Valuation",
  description: "Share your street address to get a no-obligation home value estimate from Clarissa Swartzlander.",
  path: "/sell/whats-my-home-worth",
});

export default function HomeValuationPage() {
  return (
    <main>
      <PageHero
        kicker="Know Your Value"
        title="What's Your Home Worth?"
        description="Share a few details and we'll put together a current, no-obligation estimate based on recent sales in your community."
        image={{ src: "/home-valuation.jpg", alt: "Coastal Florida home exterior for home valuation", label: "Home Valuation" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24">
          <Reveal>
            <AddressLeadForm
              idPrefix="valuation"
              eyebrow="Get Your Estimate"
              heading="Request Your Home Valuation"
              addressLabel="Enter Your Street Address"
              addressPlaceholder="123 Ocean Palm Way, Palm Coast, FL"
              helperText="We'll send your personalized home value estimate to this email. There's no cost or obligation."
              interestType="Home Valuation"
              successMessage="Thanks — your home valuation request is on its way to Claire. She typically replies within one business day."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ListingAgentProfile note="Every estimate is grounded in real, recent sales in your community, not an automated guess." />
          </Reveal>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
