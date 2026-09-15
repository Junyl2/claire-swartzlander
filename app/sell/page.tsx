import Link from "next/link";
import { ArrowUpRight, Banknote, Calculator, Home as HomeIcon, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { pageCopy, pageMetadata, processSteps } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.sell);

const sellPaths = [
  { title: "Cash Offer", href: "/sell/cash-offer", icon: Banknote, description: "Request a no-obligation cash offer and skip the showings entirely." },
  { title: "Sell My Home", href: "/sell/sell-my-home", icon: HomeIcon, description: "A fully marketed listing built for maximum buyer exposure." },
  { title: "Home Valuation", href: "/sell/whats-my-home-worth", icon: Calculator, description: "Get a current, no-obligation estimate of your home's value." },
  { title: "Top Dollar Tips", href: "/sell/top-dollar-tips", icon: TrendingUp, description: "Practical steps to get the strongest possible price for your home." },
];

export default function SellPage() {
  return (
    <main>
      <PageHero
        kicker="Sell"
        title={pageCopy.sell.title}
        description={pageCopy.sell.description}
        image={{ src: "/placeholders/interior.svg", alt: "Home selling placeholder", label: "Ready To List" }}
        primaryCta={{ href: "/sell/whats-my-home-worth", label: "Get A Home Valuation" }}
        secondaryCta={{ href: "/sell/cash-offer", label: "Request A Cash Offer" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Choose Your Path"
            title="Four ways to start, depending on what you need."
            description="Whether you want speed, top dollar, or just a starting number, there's a path that fits."
          />
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-primary/15 sm:grid-cols-2" stagger={0.08}>
            {sellPaths.map((path) => {
              const Icon = path.icon;

              return (
                <MotionItem key={path.href}>
                  <Link href={path.href} className="group flex h-full flex-col justify-between gap-6 bg-white p-6 transition duration-300 hover:bg-paper">
                    <div>
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-5 text-xl font-bold text-ink">{path.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate">{path.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Learn More
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </MotionItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ImagePlaceholder src="/placeholders/listing.svg" alt="Selling process placeholder" label="From List To Close" ratio="cinema" />
          <div>
            <SectionHeading
              kicker="The Process"
              title="A clear path, from first consultation to closing day."
              description="The same process applies whether you choose a cash offer or a fully marketed listing."
            />
            <div className="mt-10">
              <Timeline items={processSteps} />
            </div>
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
