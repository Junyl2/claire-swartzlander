import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { Reveal } from "@/components/interactive/Reveal";
import { siteConfig } from "@/data/site";
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
        kicker="Sell · Sell My Home"
        title="Sell My Home"
        description="We love working with sellers and look forward to sharing our home-selling plan with you!"
        image={{ src: "/placeholders/listing.svg", alt: "Sell my home placeholder", label: "Sell My Home" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <form className="rounded-[var(--radius-panel)] border border-primary/15 bg-white p-6 shadow-[var(--shadow-soft)] md:p-10">
              <label htmlFor="street-address" className="grid gap-2 text-sm font-semibold text-ink">
                Enter Your Street Address <span className="text-primary">*</span>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                  <input
                    id="street-address"
                    type="text"
                    name="address"
                    required
                    aria-required="true"
                    autoComplete="street-address"
                    placeholder="123 Ocean Palm Way, Palm Coast, FL"
                    className="supporting-copy min-h-14 w-full rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent pl-12 pr-4 text-base transition duration-300 focus:border-primary focus:bg-primary/4"
                  />
                </div>
              </label>
              <p className="supporting-copy mt-3 text-xs text-slate">
                We&apos;ll use this to start building your personalized home-selling plan.
              </p>
              <button
                type="submit"
                className="ui-title mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-[var(--radius-sharp)] bg-primary px-6 text-sm text-white transition duration-300 hover:bg-secondary hover:-translate-y-0.5 sm:w-auto sm:px-10"
              >
                Submit
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-panel)] border border-primary/15 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden border border-primary/15 bg-paper">
                  <Image src="/profile.jpg" alt="Clarissa Swartzlander" width={64} height={64} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="ui-title text-[11px] text-primary">Listing Agent</p>
                  <p className="editorial-title display-title mt-1 text-2xl leading-none text-ink">Clarissa Swartzlander</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 border-t border-primary/15 pt-6 text-sm text-slate">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </div>
              <p className="supporting-copy mt-6 border-t border-primary/15 pt-6 text-sm leading-7 text-slate">
                Our team of professionals will be with you every step of the way, from preparing your home for the
                sale, to handing the keys to the new buyer.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
