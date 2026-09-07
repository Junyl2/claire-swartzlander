import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { BrokerageBadge } from "@/components/ui/BrokerageBadge";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { aboutHighlights } from "@/data/site";

const pillars = [
  {
    title: "Hard Work & Integrity",
    icon: CheckCircle2,
    text: "Claire carries the values of hard work, integrity, and outstanding client service into everything she does, prioritizing your needs at every step of the journey.",
  },
  {
    title: "Stress-Free Assurances",
    icon: ShieldCheck,
    text: "Her unwavering dedication to exceptional customer service surpasses expectations in every transaction, alleviating the stress of buying or selling.",
  },
  {
    title: "Deep Community Roots",
    icon: HeartHandshake,
    text: "Claire lives and works in the community she serves, giving her an implicit understanding of what local buyers and sellers actually need.",
  },
];

const stackedImages = [
  { src: "/about/claire-about.png", alt: "Claire Swartzlander, Coastal Property Specialist with RE/MAX Signature", label: "Claire Swartzlander" },
  { src: "/placeholders/community.svg", alt: "Palm Coast community placeholder", label: "Coastal Communities" },
  { src: "/placeholders/hero-2.svg", alt: "Palm Coast Intracoastal waterway placeholder", label: "The Intracoastal" },
];

export function AboutIntroSection() {
  return (
    <section id="introduction" className="section-y overflow-hidden bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative min-h-[34rem] md:min-h-[42rem]">
            {stackedImages.map((image, index) => (
              <div
                key={image.label}
                className={[
                  "absolute w-[72%] max-w-[30rem]",
                  index === 0 ? "left-0 top-0 z-20" : "",
                  index === 1 ? "right-0 top-[22%] z-10" : "",
                  index === 2 ? "bottom-0 left-[12%] z-30 w-[66%]" : "",
                ].join(" ")}
              >
                <ImagePlaceholder
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  ratio={index === 0 ? "tall" : index === 1 ? "portrait" : "cinema"}
                  className="shadow-[var(--shadow-soft)]"
                />
              </div>
            ))}
            <div className="absolute left-6 top-6 z-40">
              <BrokerageBadge className="bg-ink" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow supporting-kicker">About Claire Swartzlander</p>
            <MixedTitle
              text="Highly Regarded In The Northeast Florida Coastal Region"
              as="h2"
              className="editorial-title display-title mt-5 max-w-4xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
            />
            <div className="supporting-copy mt-7 grid gap-5 text-base text-slate md:text-lg">
              <p>
                With her passion towards educating buyers and sellers on the real estate process when looking for the
                Florida Coastal Lifestyle, Claire is committed to carrying her values of hard work, integrity, and
                outstanding client service into everything she does. Her success stems from prioritizing her
                clients&apos; needs at every step of the home buying and selling journey.
              </p>
              <p>
                Her unwavering dedication to exceptional customer service surpasses expectations in every
                transaction. Claire alleviates the stress of home transactions by offering various assurances.
              </p>
              <p>
                Claire&apos;s mission is to ensure each client feels uniquely valued, knowing they are her sole focus.
                With deep roots in the community, both living and working here, you can rely on Claire Swartzlander
                to understand your needs implicitly.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2 border-y border-primary/15 py-6">
              {aboutHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-[var(--radius-sharp)] border border-primary/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-primary/15 pt-10" delay={0.12}>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="eyebrow supporting-kicker">Why Buyers &amp; Sellers Choose Claire</p>
              <MixedTitle
                text="Hard Work, Integrity, and Peace of Mind"
                as="h3"
                className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl"
              />
              <p className="supporting-copy mt-5 max-w-xl text-base text-slate">
                Every buyer and seller relationship is handled with the same standard, whether it&apos;s a first
                coastal home or a long-planned move.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article key={pillar.title} className="group border-t border-primary/18 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary/10 text-primary transition duration-500 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-ink">{pillar.title}</h4>
                    <p className="supporting-copy mt-3 text-sm leading-7 text-slate">{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
