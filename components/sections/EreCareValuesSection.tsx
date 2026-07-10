import { CheckCircle2, Clock3, Gem, HeartHandshake, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

const stats = [
  { value: "19", label: "Years", detail: "Serving" },
  { value: "6,935+", label: "Days", detail: "In Business" },
  { value: "0", label: "Completed", detail: "Projects" },
  { value: "0", label: "Team", detail: "Members" },
];

const pillars = [
  {
    title: "Convenience",
    icon: CheckCircle2,
    text: 'Bid farewell to the complexities of managing your property care needs. At ERE CARE, we simplify the process with our signature motto: "One Call Does It All."',
  },
  {
    title: "Reliability",
    icon: ShieldCheck,
    text: "Embrace the ease and efficiency of entrusting your property to a single, trusted partner for coordinated care, clear response, and steady follow-through.",
  },
  {
    title: "Peace of Mind",
    icon: HeartHandshake,
    text: "Enjoy the peace of mind that comes with knowing all your property care needs are handled by one reliable service provider.",
  },
];

const stackedImages = [
  { src: "/hero/hero-1.jpeg", alt: "ERE CARE property service team at a residence", label: "Property Care" },
  { src: "/hero/hero-2.jpeg", alt: "ERE CARE refined home maintenance detail", label: "Refined Detail" },
  { src: "/hero/hero-3.jpeg", alt: "ERE CARE site coordination and maintenance planning", label: "Site Control" },
];

export function EreCareValuesSection() {
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
                  ratio={index === 1 ? "portrait" : "cinema"}
                  className="shadow-[var(--shadow-soft)]"
                />
              </div>
            ))}
            <div className="absolute left-6 top-6 z-40 border border-white/16 bg-ink px-6 py-5 text-paper shadow-[var(--shadow-soft)]">
              <p className="ui-title text-[11px] text-primary">Years of Excellence</p>
              <div className="mt-2 flex items-end gap-3">
                <span className="display-title text-7xl leading-none">19</span>
                <span className="supporting-copy max-w-[7rem] pb-2 text-sm leading-5 text-paper/72">
                  Serving Flagler County
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow supporting-kicker">Let Your Home Be Unique And Stylish</p>
            <div className="mt-5 flex items-center gap-3 text-primary">
              <Gem className="h-5 w-5" />
              <p className="ui-title text-xs">Welcome to ERE CARE Management & Maintenance</p>
            </div>
            <MixedTitle
              text="Refined Property Care with Unwavering Dedication"
              as="h2"
              className="editorial-title display-title mt-5 max-w-4xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
            />
            <div className="supporting-copy mt-7 grid gap-5 text-base text-slate md:text-lg">
              <p>
                Nestled in the heart of Flagler County, our esteemed establishment has been a beacon of excellence for over 19 illustrious years.
                As guardians of your property&apos;s integrity, we stand ready to serve with grace and precision.
              </p>
              <p>
                Indulge in the seamless convenience of our renowned motto: &quot;One call does it all.&quot; Within moments, your concerns are met with
                swift resolution, leaving you to revel in the tranquility of knowing that your property is in capable hands.
              </p>
            </div>

            <div className="mt-9 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-primary/15 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={`${stat.label}-${stat.detail}`} className="bg-white p-5">
                  <p className="display-title text-5xl leading-none text-primary">{stat.value}</p>
                  <p className="ui-title mt-3 text-[11px] text-ink">{stat.label}</p>
                  <p className="supporting-copy mt-1 text-sm text-slate">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-primary/15 pt-10" delay={0.12}>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="eyebrow supporting-kicker">One Call Does It All</p>
              <MixedTitle
                text="Experience Convenience, Reliability, and Peace of Mind"
                as="h3"
                className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl"
              />
              <p className="supporting-copy mt-5 max-w-xl text-base text-slate">
                Say goodbye to the hassle of coordinating multiple service providers. With ERE CARE, one call is all it takes to address all your
                property care needs.
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

        <Reveal className="mt-10 flex items-center gap-3 border-t border-primary/15 pt-6 text-slate" delay={0.16}>
          <Clock3 className="h-5 w-5 text-primary" />
          <p className="ui-title text-xs">About Us / ERE CARE Management & Maintenance</p>
        </Reveal>
      </Container>
    </section>
  );
}
