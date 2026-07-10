import { Compass, HardHat, MapPin, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HomeHero } from "@/components/sections/HomeHero";
import { PreviewBand } from "@/components/sections/PreviewBand";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import {
  homePagePreviews,
  pageMetadata,
} from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.home);

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section id="introduction" className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              kicker="Introduction"
              title="Built to preview the whole brand story from the first screen onward."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
            />
          </Reveal>
          <Reveal className="grid gap-6 md:grid-cols-2" delay={0.08}>
            {[
              { title: "Trust", icon: ShieldCheck, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "Craft", icon: HardHat, text: "Praesent commodo cursus magna vel scelerisque nisl consectetur." },
              { title: "Coverage", icon: MapPin, text: "Sed posuere consectetur est at lobortis in regional delivery." },
              { title: "Planning", icon: Compass, text: "Donec ullamcorper nulla non metus auctor fringilla." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)]">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{item.text}</p>
                </article>
              );
            })}
          </Reveal>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <div>
            {homePagePreviews.filter((page) => page.href !== "/contact").map((page, index) => (
              <PreviewBand
                key={page.href}
                kicker={page.kicker}
                title={page.title}
                description={page.description}
                href={page.href}
                index={index + 1}
                layout={page.layout}
                images={page.images}
                details={page.details}
                mirrored={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
