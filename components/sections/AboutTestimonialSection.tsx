import { Star } from "lucide-react";

import { Reveal } from "@/components/interactive/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { reviewStats, testimonials } from "@/data/site";

export function AboutTestimonialSection() {
  const highlight = testimonials.find((review) => review.name === "robert ratcliff") ?? testimonials[0];

  return (
    <section className="section-y bg-ink text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
          <Reveal>
            <p className="eyebrow supporting-kicker">Client Feedback</p>
            <p className="editorial-title display-title mt-5 text-7xl leading-none text-paper">
              {reviewStats.rating.toFixed(1)}
            </p>
            <div className="mt-4 flex gap-1 text-primary" aria-label={`${reviewStats.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="supporting-copy mt-4 max-w-xs text-base leading-7 text-paper/65">
              Based on {reviewStats.count} verified {reviewStats.source} reviews from buyers and sellers Claire has
              worked with directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/reviews" variant="light">
                Read All Reviews
              </Button>
              <Button href={reviewStats.sourceUrl} variant="ghost" external ariaLabel="View reviews on Zillow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/zillow.svg" alt="" className="h-4 w-auto" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border-t border-paper/15 pt-10 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
            <blockquote className="editorial-title text-3xl leading-snug text-paper md:text-4xl">
              &ldquo;{highlight.quote}&rdquo;
            </blockquote>
            <p className="ui-title mt-8 text-xs text-primary">{highlight.name}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
