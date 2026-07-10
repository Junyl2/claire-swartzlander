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
            kicker="Owner Feedback"
            title="Service that feels organized, from first call to final sweep."
            description="The lead review area is shaped around the details owners remember: punctual crews, protected surfaces, clear updates, and complete closeout."
          />
          <TestimonialCarousel items={testimonials} />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Review Grid"
            title="Trust signals, ready for every service category."
            description="Additional reviews can be grouped around renovation, landscaping, pool care, site services, cleaning, and recurring maintenance."
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
