import { ArrowDown } from "lucide-react";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { heroSlides, pageCopy } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MixedTitle } from "@/components/ui/MixedTitle";

export function HomeHero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-ink pt-[var(--header-height)] text-paper">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroSlides[0].src}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 bg-ink/12" />

      <Container className="relative z-10">
        <StaggerGroup className="mx-auto max-w-3xl text-center" delay={0.08} stagger={0.11}>
          <MotionItem><p className="eyebrow supporting-kicker mb-6 text-paper!">{pageCopy.home.eyebrow}</p></MotionItem>
          <MotionItem>
            <MixedTitle
              text={pageCopy.home.title}
              as="h1"
              className="editorial-title display-title text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl"
            />
          </MotionItem>
          <MotionItem>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/buy">Explore Communities</Button>
              <Button href="/contact" variant="ghost">
                Contact Claire
              </Button>
            </div>
          </MotionItem>
        </StaggerGroup>
      </Container>

      <MotionItem delay={0.45} className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-12">
        <a href="#introduction" className="ui-title inline-flex items-center gap-3 text-xs text-paper">
          <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border border-white/15 transition-transform duration-500 hover:translate-y-1">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll To Explore
        </a>
      </MotionItem>
    </section>
  );
}
