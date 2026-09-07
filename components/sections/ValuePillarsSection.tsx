import { Compass, HeartHandshake, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

const pillars = [
  {
    title: "Local Expertise",
    icon: Compass,
    text: "Every recommendation is grounded in real, on-the-ground knowledge of Palm Coast's coastal communities, not a generic market report.",
  },
  {
    title: "Client-First Communication",
    icon: HeartHandshake,
    text: "You'll always know where your transaction stands, with direct access and straight answers at every step.",
  },
  {
    title: "Full-Service Support",
    icon: ShieldCheck,
    text: "From first search to final walkthrough, Claire and RE/MAX Signature coordinate every detail of the process.",
  },
];

const stackedImages = [
  { src: "/placeholders/hero-1.svg", alt: "Palm Coast waterfront placeholder", label: "Coastal Living" },
  { src: "/placeholders/community.svg", alt: "Palm Coast community placeholder", label: "Local Communities" },
  { src: "/placeholders/hero-3.svg", alt: "Palm Coast dunes placeholder", label: "The Dunes" },
];

export function ValuePillarsSection() {
  return (
    <section id="introduction" className="section-y overflow-hidden bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative min-h-[32rem] md:min-h-[40rem]">
            {stackedImages.map((image, index) => (
              <div
                key={image.label}
                className={[
                  "absolute w-[72%] max-w-[29rem]",
                  index === 0 ? "left-0 top-0 z-20" : "",
                  index === 1 ? "right-0 top-[24%] z-10" : "",
                  index === 2 ? "bottom-0 left-[14%] z-30 w-[64%]" : "",
                ].join(" ")}
              >
                <ImagePlaceholder
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  ratio={index === 1 ? "portrait" : "cinema"}
                  className="shadow-[var(--shadow-soft)]"
                />
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6 border-y border-primary/15 py-10">
              <div>
                <p className="eyebrow supporting-kicker">Why Work With Claire</p>
                <MixedTitle
                  text="A coastal specialist who knows every community by name."
                  as="h2"
                  className="editorial-title display-title mt-4 max-w-4xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
                />
              </div>
              <p className="supporting-copy max-w-3xl text-base text-slate md:text-lg">
                Buying and selling on the coast comes with its own pace and priorities. Claire built her practice around
                understanding both, so every recommendation fits how you actually want to live.
              </p>
            </div>

            <div className="mt-10 grid gap-px border-y border-primary/15 bg-primary/15 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <Reveal key={pillar.title} delay={index * 0.06}>
                    <article className="group h-full bg-paper p-6 transition duration-500 hover:bg-white">
                      <div className="flex h-12 w-12 items-center justify-center border border-primary/18 text-primary transition duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-ink">{pillar.title}</h3>
                      <p className="supporting-copy mt-3 text-sm leading-7 text-slate">{pillar.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
