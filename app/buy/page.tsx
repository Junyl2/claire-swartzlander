import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { communities, pageCopy, pageMetadata } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.buy);

export default function BuyPage() {
  return (
    <main>
      <PageHero
        kicker="Buy"
        title={pageCopy.buy.title}
        description={pageCopy.buy.description}
        image={{ src: "/placeholders/community.svg", alt: "Palm Coast communities placeholder", label: "Coastal Communities" }}
        primaryCta={{ href: "#communities", label: "Explore Communities" }}
        secondaryCta={{ href: "/buy/top-buyer-tips", label: "Top Buyer Tips" }}
      />

      <section className="section-y bg-paper" id="communities">
        <Container>
          <SectionHeading
            kicker="Coastal Communities"
            title="Every community Claire covers, from marina addresses to gated golf living."
            description="Each community has its own pace, price point, and lifestyle. Explore each one, or reach out and Claire will help narrow it down."
          />
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {communities.map((community) => (
              <MotionItem key={community.slug}>
                <Link href={community.href} className="group block h-full">
                  <ImagePlaceholder src={community.image.src} alt={community.image.alt} label={community.image.label} ratio="wide" />
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{community.region}</p>
                    <h3 className="editorial-title mt-2 text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-primary">
                      {community.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{community.tagline}</p>
                  </div>
                </Link>
              </MotionItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
