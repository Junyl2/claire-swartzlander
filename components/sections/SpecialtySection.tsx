import { Building2, MapPinned, Users, Waves } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/interactive/Reveal";

const specialties = [
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Coastal Homes",
    icon: Waves,
    text: "I know the ins and outs of the local coastal market, from oceanfront condos to canal front getaways, and I will guide you through every step of the process, ensuring a seamless and successful real estate experience.",
  },
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Listings",
    icon: Building2,
    text: "Embrace a life where the ocean is your backdrop and elegance is your standard. Explore our exquisite listings and embark on a journey to discover your dream coastal property. The art of living awaits.",
  },
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Relocation",
    icon: MapPinned,
    text: "I am a trusted relocation specialist offering bespoke services to clients moving from other areas. If you're looking to move to the coast, I'm here to provide essential local information, housing assistance, and logistical support. I thrive on making every transition seamless.",
  },
  {
    byline: "Clarissa Swartzlander, PA",
    title: "Buyer Services",
    icon: Users,
    text: "I excel as a buyer's specialist, expertly guiding clients through the home buying process with personalized property searches, strategic negotiations, and comprehensive market insights to secure your dream home.",
  },
];

export function SpecialtySection() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          kicker="Specialties"
          title="My Specialty"
          description="The essence of a dedicated real estate professional's services in each specialty."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            const accent = index % 2 === 0 ? "primary" : "secondary";

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="group h-full bg-white p-8 transition duration-500 hover:bg-paper md:p-10">
                  <div
                    className={
                      accent === "primary"
                        ? "flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                        : "flex h-12 w-12 items-center justify-center rounded-full border border-secondary/40 text-secondary transition duration-500 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className={`ui-title mt-6 text-[11px] ${accent === "primary" ? "text-primary" : "text-secondary"}`}>{item.byline}</p>
                  <h3 className="editorial-title display-title mt-3 text-2xl leading-tight text-ink md:text-3xl">{item.title}</h3>
                  <p className="supporting-copy mt-4 text-sm leading-7 text-slate">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
