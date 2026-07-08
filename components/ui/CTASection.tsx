import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTASectionProps = {
  kicker: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({ kicker, title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTASectionProps) {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <Container className="grid items-end gap-10 md:grid-cols-[1.1fr_0.7fr]">
        <StaggerGroup className="max-w-3xl" stagger={0.09}>
          <MotionItem><p className="eyebrow mb-4">{kicker}</p></MotionItem>
          <MotionItem><h2 className="editorial-title text-balance text-4xl leading-none md:text-6xl">{title}</h2></MotionItem>
          <MotionItem><p className="mt-6 max-w-2xl text-base leading-8 text-paper/70">{description}</p></MotionItem>
        </StaggerGroup>
        <StaggerGroup className="flex flex-col gap-3 sm:flex-row md:justify-end" delay={0.12} stagger={0.08}>
          <MotionItem><Button href={primaryHref} variant="light">{primaryLabel}</Button></MotionItem>
          {secondaryHref && secondaryLabel ? (
            <MotionItem><Button href={secondaryHref} variant="ghost">{secondaryLabel}</Button></MotionItem>
          ) : null}
        </StaggerGroup>
      </Container>
    </section>
  );
}
