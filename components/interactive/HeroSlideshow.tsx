"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { ImageToken } from "@/data/site";

type HeroSlideshowProps = {
  slides: ImageToken[];
};

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 bg-ink">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.src}
          initial={false}
          animate={{
            opacity: index === activeIndex ? 1 : 0,
            scale: index === activeIndex ? 1 : 1.035,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 will-change-transform"
          aria-hidden={index === activeIndex ? undefined : true}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(25_27%_59%_/_0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/8 via-ink/20 to-ink/46" />
    </div>
  );
}
