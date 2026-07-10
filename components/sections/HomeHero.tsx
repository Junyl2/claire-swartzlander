import { ArrowDown } from "lucide-react";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { heroSlides, pageCopy } from "@/data/site";
import { HeroSlideshow } from "@/components/interactive/HeroSlideshow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="relative flex h-screen items-end overflow-hidden bg-ink text-paper">
      <HeroSlideshow slides={heroSlides} />
      <Container className="relative z-10 grid h-full items-end pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <StaggerGroup className="max-w-4xl" delay={0.08} stagger={0.11}>
            <MotionItem><p className="eyebrow supporting-kicker mb-6">{pageCopy.home.eyebrow}</p></MotionItem>
            <MotionItem>
              <h1 className="editorial-title display-title text-balance max-w-5xl text-5xl leading-[0.88] md:text-7xl lg:text-[6rem]">
                {pageCopy.home.title}
              </h1>
            </MotionItem>
            <MotionItem>
              <p className="supporting-copy mt-7 max-w-2xl text-base text-paper/82 md:text-lg">
                {pageCopy.home.description}
              </p>
            </MotionItem>
            <MotionItem>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Start A Project</Button>
                <Button href="/projects" variant="ghost">
                  View Projects
                </Button>
              </div>
            </MotionItem>
          </StaggerGroup>
          <StaggerGroup className="grid gap-6 self-end rounded-[var(--radius-panel)] border border-white/12 bg-white/5 p-6 backdrop-blur-sm" delay={0.22} stagger={0.08}>
            <MotionItem>
              <p className="ui-title text-xs text-paper/60">Editorial Construction Template</p>
            </MotionItem>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {heroSlides.map((slide) => (
                <MotionItem key={slide.label}>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-sm font-semibold text-paper">{slide.label}</span>
                    <span className="h-px w-10 bg-primary transition-all duration-500 hover:w-16" />
                  </div>
                </MotionItem>
              ))}
            </div>
          </StaggerGroup>
        </div>
        <MotionItem delay={0.45}>
          <a href="#introduction" className="ui-title mt-12 inline-flex items-center gap-3 text-xs text-paper/75">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition-transform duration-500 hover:translate-y-1">
              <ArrowDown className="h-4 w-4" />
            </span>
            Scroll To Explore
          </a>
        </MotionItem>
      </Container>
    </section>
  );
}
