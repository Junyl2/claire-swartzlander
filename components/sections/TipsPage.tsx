import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import type { ImageToken, Tip } from "@/data/site";

type TipsPageProps = {
  kicker: string;
  title: string;
  description: string;
  image: ImageToken;
  primaryCta: { href: string; label: string };
  sectionKicker: string;
  sectionTitle: string;
  tips: Tip[];
};

export function TipsPage({ kicker, title, description, image, primaryCta, sectionKicker, sectionTitle, tips }: TipsPageProps) {
  return (
    <main>
      <PageHero kicker={kicker} title={title} description={description} image={image} primaryCta={primaryCta} />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading kicker={sectionKicker} title={sectionTitle} />
          <StaggerGroup className="mt-12 grid gap-2" stagger={0.06}>
            {tips.map((tip, index) => (
              <MotionItem key={tip.title}>
                <article className="grid gap-3 border-t border-primary/15 py-6 md:grid-cols-[0.14fr_0.86fr] md:items-start">
                  <p className="display-title text-4xl leading-none text-primary">0{index + 1}</p>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{tip.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate">{tip.description}</p>
                  </div>
                </article>
              </MotionItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
