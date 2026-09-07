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
        image={{ src: "/placeholders/agent.svg", alt: "Client reviews placeholder", label: "Client Confidence" }}
        primaryCta={{ href: "/contact", label: "Start A Conversation" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            kicker="Client Feedback"
            title="Service that feels organized, from first showing to closing."
            description="The lead review area is shaped around the details buyers and sellers remember: fast responses, clear updates, and steady follow-through."
          />
          <TestimonialCarousel items={testimonials} />
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            kicker="Review Grid"
            title="Trust signals, ready for buyers and sellers alike."
            description="Additional reviews can be grouped around buying, selling, valuations, and long-term coastal relocation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${testimonial.company}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
