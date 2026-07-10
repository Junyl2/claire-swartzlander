import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    label: string;
  };
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function PageHero({ kicker, title, description, image, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="bg-ink pt-40 text-paper">
      <Container className="grid items-end gap-12 pb-14 lg:grid-cols-[0.85fr_1.15fr]">
        <StaggerGroup className="max-w-2xl" delay={0.06} stagger={0.1}>
          <MotionItem><p className="eyebrow mb-5">{kicker}</p></MotionItem>
          <MotionItem>
            <MixedTitle text={title} as="h1" className="editorial-title display-title text-balance text-5xl leading-[0.92] md:text-7xl" />
          </MotionItem>
          <MotionItem><p className="mt-7 max-w-xl text-base leading-8 text-paper/72 md:text-lg">{description}</p></MotionItem>
          {(primaryCta || secondaryCta) ? (
            <MotionItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="ghost">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            </MotionItem>
          ) : null}
        </StaggerGroup>
        <ImagePlaceholder src={image.src} alt={image.alt} label={image.label} ratio="cinema" priority className="shadow-[var(--shadow-soft)]" />
      </Container>
    </section>
  );
}
