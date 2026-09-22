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
  alt: "Clarissa Swartzlander, Coastal Property Specialist with RE/MAX Signature",
  label: "Clarissa Swartzlander",
};

export function AboutIntroSection() {
  return (
    <section id="introduction" className="section-y bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="relative min-h-[28rem] md:min-h-[36rem] lg:min-h-[42rem]">
            <ImagePlaceholder
              src={sceneImage.src}
              alt={sceneImage.alt}
              label={sceneImage.label}
              className="!absolute !inset-0 !aspect-auto shadow-[var(--shadow-soft)]"
            />
            <div className="absolute left-6 top-6 z-30">
              <BrokerageBadge className="bg-ink/80 backdrop-blur-md" />
            </div>
            <div className="absolute bottom-6 right-6 z-20 w-[45%] max-w-[15rem] border-4 border-paper shadow-[0_30px_70px_hsl(215_19%_10%_/_0.28)] sm:bottom-8 sm:right-8">
              <ImagePlaceholder
                src={claireImage.src}
                alt={claireImage.alt}
                label={claireImage.label}
                ratio="portrait"
                objectPosition="center 18%"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow supporting-kicker">About Clarissa Swartzlander</p>
            <MixedTitle
              text="Rooted In The Coast She Calls Home"
              as="h2"
              className="editorial-title display-title mt-5 max-w-4xl text-balance text-4xl leading-[0.92] text-ink md:text-6xl"
            />
            <div className="supporting-copy mt-7 grid gap-5 text-base text-slate md:text-lg">
              <p>
                Clarissa Swartzlander built her practice around one idea: the coast isn&apos;t just a backdrop, it&apos;s the
                reason people move here in the first place. She spends as much time walking canal-front lots and
                gated golf communities as she does at the negotiating table, so when she tells a buyer a neighborhood
                is right for them, it&apos;s because she&apos;s actually stood in it.
              </p>
              <p>
                That local knowledge pairs with a straightforward approach to the transaction itself. Clients get
                direct answers about pricing, timelines, and paperwork instead of vague reassurance, and Clarissa
                stays available through every stage of a deal, not just the parts that are easy to schedule around.
              </p>
              <p>
                She works under RE/MAX Signature and has closed a multimillion-dollar volume of sales across Palm
                Coast and the surrounding Northeast Florida coast. Just as importantly, she lives here too, which
                means the recommendations she makes for clients are the same ones she&apos;d make to a neighbor.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2 border-y border-primary/15 py-6">
              {aboutHighlights.map((highlight, index) => (
                <span
                  key={highlight}
                  className={`border-y border-r border-primary/15 bg-white py-2 pl-3 pr-3 text-xs font-bold uppercase tracking-[0.12em] text-ink ${
                    index % 2 === 0 ? "border-l-4 border-l-primary" : "border-l-4 border-l-secondary"
                  }`}
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
