import { Star } from "lucide-react";

import type { Testimonial } from "@/data/site";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-paper p-6 shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-1" stagger={0.08}>
      <MotionItem>
        <div className="flex gap-1 text-primary">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </MotionItem>
      <MotionItem>
        <blockquote className="mt-6">
          <p className="editorial-title text-2xl leading-snug text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
      </MotionItem>
      <MotionItem>
        <footer className="mt-8 border-t border-primary/10 pt-4">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{testimonial.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate">
            {testimonial.role}, {testimonial.company}
          </p>
        </footer>
      </MotionItem>
    </StaggerGroup>
  );
}
