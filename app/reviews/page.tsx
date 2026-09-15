import Image from "next/image";
import { CircleUserRound, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { Reveal } from "@/components/interactive/Reveal";
import { pageCopy, pageMetadata, reviewStats, testimonials } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.reviews);

export default function ReviewsPage() {
  const highlight = testimonials.find((review) => review.name === "robert ratcliff") ?? testimonials[0];
  const remainingReviews = testimonials.filter((review) => review.name !== highlight.name);

  return (
    <main>
      <PageHero
        kicker="Reviews"
        title={pageCopy.reviews.title}
        description={pageCopy.reviews.description}
        image={{ src: "/reviews.jpg", alt: "Happy clients with Clarissa Swartzlander", label: "Client Confidence" }}
        primaryCta={{ href: "/contact", label: "Start A Conversation" }}
      />

      <section className="section-y bg-paper">
        <Container className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div className="lg:sticky lg:top-44">
            <Reveal>
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-[var(--shadow-soft)] lg:mx-0">
                <Image
                  src="/about/claire-about.png"
                  alt="Claire Swartzlander"
                  fill
                  sizes="144px"
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <p className="eyebrow supporting-kicker mt-6">Client Feedback</p>
              <p className="display-title mt-4 text-7xl leading-none text-ink">{reviewStats.rating.toFixed(1)}</p>
              <div className="mt-4 flex gap-1 text-primary" aria-label={`${reviewStats.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="supporting-copy mt-4 max-w-xs text-base leading-7 text-slate">
                Based on {reviewStats.count} verified {reviewStats.source} reviews from buyers and sellers Claire has
                worked with directly.
              </p>
              <div className="mt-8">
                <Button href={reviewStats.sourceUrl} variant="secondary" external ariaLabel="View reviews on Zillow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/zillow.svg" alt="" className="h-4 w-auto" />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal>
              <figure className="flex flex-col justify-between border border-primary/18 bg-ink p-8 text-paper shadow-[var(--shadow-soft)] md:p-10">
                <div>
                  <p className="eyebrow text-primary">Featured Review</p>
                  <div className="mt-4 flex gap-1 text-primary" aria-label="5 star review">
                    {Array.from({ length: highlight.rating }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="editorial-title mt-6 text-2xl leading-snug text-paper md:text-3xl">
                    &ldquo;{highlight.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-paper/15 pt-6">
                  <CircleUserRound className="h-9 w-9 shrink-0 text-primary" aria-hidden="true" />
                  <span className="ui-title text-sm text-paper">{highlight.name}</span>
                </figcaption>
              </figure>
            </Reveal>

            {remainingReviews.map((review, index) => (
              <Reveal key={review.name} delay={Math.min(index * 0.03, 0.3)}>
                <article className="border border-primary/15 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
                  <div className="flex gap-1 text-primary" aria-label="5 star review">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="supporting-copy mt-4 text-base leading-8 text-ink">&ldquo;{review.quote}&rdquo;</blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-primary/10 pt-4">
                    <CircleUserRound className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                    <p className="ui-title text-xs text-primary">{review.name}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
