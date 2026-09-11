import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
    <section
      className="relative flex h-[64vh] min-h-[480px] items-center justify-center overflow-hidden bg-ink pt-[var(--header-height)] text-paper md:h-[70vh] md:min-h-[560px]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />

      <Container className="relative z-10">
        <StaggerGroup className="mx-auto max-w-3xl text-center" delay={0.06} stagger={0.1}>
          <MotionItem><p className="eyebrow mb-5 text-paper!">{kicker}</p></MotionItem>
          <MotionItem>
            <MixedTitle text={title} as="h1" className="editorial-title display-title text-balance text-4xl leading-[1.05] md:text-6xl" />
          </MotionItem>
          <MotionItem><p className="mx-auto mt-7 max-w-xl text-base leading-8 text-paper/80 md:text-lg">{description}</p></MotionItem>
          {(primaryCta || secondaryCta) ? (
            <MotionItem>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </Container>
    </section>
  );
}
