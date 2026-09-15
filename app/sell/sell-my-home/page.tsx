import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { AddressLeadForm } from "@/components/sections/AddressLeadForm";
import { ListingAgentProfile } from "@/components/sections/ListingAgentProfile";
import { Reveal } from "@/components/interactive/Reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sell My Home",
  description: "Share your street address to start your personalized home-selling plan with Clarissa Swartzlander.",
  path: "/sell/sell-my-home",
});

export default function SellMyHomePage() {
  return (
    <main>
      <PageHero
        kicker="List With Claire"
        title="Sell My Home"
        description="We love working with sellers and look forward to sharing our home-selling plan with you!"
        image={{ src: "/sell-home.jpg", alt: "Coastal home for sale with Clarissa Swartzlander", label: "Sell My Home" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24">
          <Reveal>
            <AddressLeadForm
              idPrefix="sell"
              eyebrow="Start Here"
              heading="Tell Us About Your Home"
              addressLabel="Enter Your Street Address"
              addressPlaceholder="123 Ocean Palm Way, Palm Coast, FL"
              helperText="We'll use this to start building your personalized home-selling plan."
              interestType="Selling My Home"
              successMessage="Thanks — your home-selling plan request is on its way to Claire. She typically replies within one business day."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ListingAgentProfile note="Our team of professionals will be with you every step of the way, from preparing your home for the sale, to handing the keys to the new buyer." />
          </Reveal>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
