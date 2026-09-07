import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { Reveal } from "@/components/interactive/Reveal";
import { siteConfig } from "@/data/site";
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
        kicker="Sell · Home Valuation"
        title="What's Your Home Worth?"
        description="Share a few details and we'll put together a current, no-obligation estimate based on recent sales in your community."
        image={{ src: "/placeholders/interior.svg", alt: "Home valuation placeholder", label: "Home Valuation" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <form className="rounded-[var(--radius-panel)] border border-primary/15 bg-white p-6 shadow-[var(--shadow-soft)] md:p-10">
              <label htmlFor="valuation-address" className="grid gap-2 text-sm font-semibold text-ink">
                Enter Your Street Address <span className="text-primary">*</span>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                  <input
                    id="valuation-address"
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

              <label htmlFor="valuation-email" className="mt-5 grid gap-2 text-sm font-semibold text-ink">
                Email Address <span className="text-primary">*</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                  <input
                    id="valuation-email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className="supporting-copy min-h-14 w-full rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent pl-12 pr-4 text-base transition duration-300 focus:border-primary focus:bg-primary/4"
                  />
                </div>
              </label>

              <p className="supporting-copy mt-3 text-xs text-slate">
                We&apos;ll send your personalized home value estimate to this email. There&apos;s no cost or
                obligation.
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
                Every estimate is grounded in real, recent sales in your community, not an automated guess.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
