import { TestimonialCarousel } from "@/components/interactive/TestimonialCarousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { pageCopy, pageMetadata, testimonials } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.reviews);

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        kicker="Reviews"
        title={pageCopy.reviews.title}
        description={pageCopy.reviews.description}
        image={{ src: "/placeholders/team.svg", alt: "Client reviews placeholder", label: "Client Confidence" }}
        primaryCta={{ href: "/contact", label: "Start A Conversation" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            kicker="Editorial Quotes"
            title="Long-form praise displayed with the same restraint as the rest of the site."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla."
          />
          <TestimonialCarousel items={testimonials} />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Review Grid"
            title="Additional testimonials can expand in a consistent premium card system."
            description="Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-${testimonial.company}`} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
