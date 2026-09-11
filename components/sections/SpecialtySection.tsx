import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/interactive/Reveal";

const specialties = [
  {
    byline: "Claire Swartzlander Realtor",
    title: "Coastal Homes",
    text: "I know the ins and outs of the local coastal market, from oceanfront condos to canal front getaways, and I will guide you through every step of the process, ensuring a seamless and successful real estate experience.",
  },
  {
    byline: "Claire Swartzlander Realtor",
    title: "Listings",
    text: "Embrace a life where the ocean is your backdrop and elegance is your standard. Explore our exquisite listings and embark on a journey to discover your dream coastal property. The art of living awaits.",
  },
  {
    byline: "Claire Swartzlander Realtor",
    title: "Relocation",
    text: "I am a trusted relocation specialist offering bespoke services to clients moving from other areas. If you're looking to move to the coast, I'm here to provide essential local information, housing assistance, and logistical support. I thrive on making every transition seamless.",
  },
  {
    byline: "Claire Swartzlander, PA",
    title: "Buyer Services",
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
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group h-full bg-white p-8 transition duration-500 hover:bg-paper md:p-10">
                <p className="ui-title text-[11px] text-primary">{item.byline}</p>
                <h3 className="editorial-title display-title mt-3 text-2xl leading-tight text-ink md:text-3xl">{item.title}</h3>
                <p className="supporting-copy mt-4 text-sm leading-7 text-slate">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
