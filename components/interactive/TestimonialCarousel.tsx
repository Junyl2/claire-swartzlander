"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import type { Testimonial } from "@/data/site";

type TestimonialCarouselProps = {
  items: Testimonial[];
};

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const active = items[index];

  return (
    <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8" stagger={0.08}>
      <MotionItem>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: active.rating }).map((_, ratingIndex) => (
              <Star key={ratingIndex} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-[var(--radius-sharp)] border border-primary/15 transition duration-300 hover:-translate-y-0.5 hover:border-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((current) => (current + 1) % items.length)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-[var(--radius-sharp)] border border-primary/15 transition duration-300 hover:-translate-y-0.5 hover:border-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </MotionItem>
      <motion.blockquote
        key={`${active.name}-${index}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8"
      >
        <p className="editorial-title max-w-3xl text-2xl leading-tight text-ink md:text-4xl">&ldquo;{active.quote}&rdquo;</p>
        <footer className="mt-6">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{active.name}</p>
          <p className="mt-2 text-sm text-slate">
            {active.role}, {active.company}
          </p>
        </footer>
      </motion.blockquote>
    </StaggerGroup>
  );
}
