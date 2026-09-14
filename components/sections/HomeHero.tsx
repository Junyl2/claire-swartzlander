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
    </section>
  );
}
