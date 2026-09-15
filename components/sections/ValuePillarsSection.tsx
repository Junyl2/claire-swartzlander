import { Building2, MapPinned, Users, Waves } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

const pillars = [
  {
    title: "Coastal Homes",
    icon: Waves,
    text: "I know the ins and outs of the local coastal market, from oceanfront condos to canal front getaways, and I will guide you through every step of the process, ensuring a seamless and successful real estate experience.",
  },
  {
    title: "Listings",
    icon: Building2,
    text: "Embrace a life where the ocean is your backdrop and elegance is your standard. Explore our exquisite listings and embark on a journey to discover your dream coastal property.",
  },
  {
    title: "Relocation",
    icon: MapPinned,
    text: "I am a trusted relocation specialist offering bespoke services to clients moving from other areas, with essential local information, housing assistance, and logistical support every step of the way.",
  },
  {
    title: "Buyer Services",
    icon: Users,
    text: "I excel as a buyer's specialist, expertly guiding clients through the home buying process with personalized property searches, strategic negotiations, and comprehensive market insights.",
  },
];

const sceneImage = {
  src: "/why-work.webp",
  alt: "Aerial view of oceanfront homes on Flagler County's coastline, with the Atlantic Ocean in the foreground and the Intracoastal Waterway beyond",
  label: "Ocean To Intracoastal",
};

const claireImage = {
  src: "/value/claire.jpg",
  alt: "Claire Swartzlander, Coastal Property Specialist",
  label: "It's Claire.",
};

export function ValuePillarsSection() {
  return (
    <section id="introduction" className="section-y bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="relative min-h-[32rem] md:min-h-[40rem] lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:min-h-[48rem]">
            <ImagePlaceholder
              src={sceneImage.src}
              alt={sceneImage.alt}
              label={sceneImage.label}
              className="h-full shadow-[var(--shadow-soft)]"
            />
            <div className="absolute bottom-6 right-6 z-20 w-[45%] max-w-[16rem] border-4 border-paper shadow-[0_30px_70px_hsl(215_19%_10%_/_0.28)] sm:bottom-8 sm:right-8">
              <ImagePlaceholder
                src={claireImage.src}
                alt={claireImage.alt}
                label={claireImage.label}
                ratio="portrait"
                objectPosition="center 15%"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="bg-secondary px-8 py-10 text-paper shadow-[var(--shadow-soft)] md:px-12 md:py-14">
            <p className="eyebrow supporting-kicker">Why Work With Claire</p>
            <MixedTitle
              text="A coastal specialist who knows every community by name."
              as="h2"
              className="editorial-title display-title mt-4 max-w-4xl text-balance text-4xl leading-[0.92] text-paper md:text-6xl"
            />
            <p className="supporting-copy mt-6 max-w-3xl text-base text-paper/70 md:text-lg">
              Buying and selling on the coast comes with its own pace and priorities. Claire built her practice around
              understanding both, so every recommendation fits how you actually want to live.
            </p>

            <div className="mt-10 divide-y divide-paper/15 border-t border-paper/15">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <Reveal key={pillar.title} delay={index * 0.06}>
                    <div className="group flex items-start gap-6 py-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="text-lg font-bold text-paper md:text-xl">{pillar.title}</h3>
                        <p className="supporting-copy mt-2 text-sm leading-7 text-paper/65 md:text-base">{pillar.text}</p>
                      </div>
                    </div>
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
