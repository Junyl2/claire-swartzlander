import { Reveal } from "@/components/interactive/Reveal";
import { BrokerageBadge } from "@/components/ui/BrokerageBadge";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { aboutHighlights } from "@/data/site";

const sceneImage = {
  src: "/neighborhoods/palm-coast.jpg",
  alt: "Aerial view of waves breaking along a Palm Coast beach",
  label: "Palm Coast, FL",
};

const claireImage = {
  src: "/about/claire-about.png",
  alt: "Claire Swartzlander, Coastal Property Specialist with RE/MAX Signature",
  label: "Claire Swartzlander",
};

export function AboutIntroSection() {
  return (
    <section id="introduction" className="section-y overflow-hidden bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative min-h-[34rem] md:min-h-[42rem]">
            <ImagePlaceholder
              src={sceneImage.src}
              alt={sceneImage.alt}
              label={sceneImage.label}
              className="h-full shadow-[var(--shadow-soft)]"
            />
            <div className="absolute left-6 top-6 z-30">
              <BrokerageBadge className="bg-ink" />
            </div>
            <div className="absolute bottom-6 right-6 z-20 w-[45%] max-w-[15rem] border-4 border-paper shadow-[0_30px_70px_hsl(215_19%_10%_/_0.28)] sm:bottom-8 sm:right-8">
              <ImagePlaceholder
                src={claireImage.src}
                alt={claireImage.alt}
                label={claireImage.label}
                ratio="portrait"
                objectPosition="center 20%"
              />
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
      </Container>
    </section>
  );
}
