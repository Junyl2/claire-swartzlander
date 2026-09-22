import { Building2, MapPinned, Users, Waves } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/interactive/Reveal";

const specialties = [
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Coastal Homes",
    icon: Waves,
    text: "I spend as much time on the water as I do at open houses. Oceanfront condos, canal-front lots, Intracoastal addresses, I know what each one is actually worth to live in, not just what it's listed for.",
  },
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Listings",
    icon: Building2,
    text: "My listings are priced from real comparable sales, not wishful thinking, and marketed with photography and copy built to get serious buyers through the door quickly.",
  },
  {
    byline: "Clarissa Swartzlander Realtor",
    title: "Relocation",
    icon: MapPinned,
    text: "Clients relocating from out of state lean on me for the groundwork, flood zones, HOA rules, commute realities, so a move here starts with facts instead of guesswork.",
  },
  {
    byline: "Clarissa Swartzlander, PA",
    title: "Buyer Services",
    icon: Users,
    text: "I build every buyer search around how someone actually wants to live on the coast, then negotiate hard once we find the right property.",
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
