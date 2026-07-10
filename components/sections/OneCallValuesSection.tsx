import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

const pillars = [
  {
    title: "Convenience",
    icon: CheckCircle2,
    text: 'Bid farewell to the complexities of managing your property care needs. At ERE CARE, we simplify the process with our signature motto: "One Call Does It All."',
  },
  {
    title: "Reliability",
    icon: ShieldCheck,
    text: "Count on one trusted team to coordinate the right service, communicate clearly, and follow through with dependable property care.",
  },
  {
    title: "Peace of Mind",
    icon: HeartHandshake,
    text: "Enjoy the confidence that comes with knowing your property care needs are handled by one reliable service provider.",
  },
];

const stackedImages = [
  { src: "/hero/hero-1.jpeg", alt: "ERE CARE property care response", label: "One Call" },
  { src: "/hero/hero-2.jpeg", alt: "ERE CARE home maintenance detail", label: "Reliable Care" },
  { src: "/hero/hero-3.jpeg", alt: "ERE CARE coordinated property service", label: "Peace Of Mind" },
];

export function OneCallValuesSection() {
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
                <p className="eyebrow supporting-kicker">One Call Does It All</p>
                <MixedTitle
                  text="Experience Convenience, Reliability, and Peace of Mind"
                  as="h2"
                  className="editorial-title display-title mt-4 max-w-4xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
                />
              </div>
              <p className="supporting-copy max-w-3xl text-base text-slate md:text-lg">
                Say goodbye to the hassle of coordinating multiple service providers. With ERE CARE, one call is all it takes to address all your
                property care needs.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <Reveal key={pillar.title} delay={index * 0.06}>
                    <article className="group h-full border-t border-primary/18 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary/10 text-primary transition duration-500 group-hover:bg-primary group-hover:text-white">
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
