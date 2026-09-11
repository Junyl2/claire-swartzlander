"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MixedTitle } from "@/components/ui/MixedTitle";

type NeighborhoodCinematicHeroProps = {
  kicker: string;
  title: string;
  description: string;
  caption: string;
  image: { src: string; alt: string };
};

export function NeighborhoodCinematicHero({ kicker, title, description, caption, image }: NeighborhoodCinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.56, 1]);
  const overlay = useTransform(scrollYProgress, [0, 0.6], [0.5, 0.22]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.16], [0, -32]);

  const captionOpacity = useTransform(scrollYProgress, [0.58, 0.78], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.58, 0.78], [16, 0]);

  const cueOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <section ref={containerRef} data-cinematic-hero="true" className="relative h-[220vh] bg-ink">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="relative h-full w-full overflow-hidden will-change-transform">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
          <motion.div aria-hidden="true" style={{ opacity: overlay }} className="absolute inset-0 bg-ink" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/25" />
        </motion.div>

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 pt-[var(--header-height)] text-center text-paper"
        >
          <p className="eyebrow mb-5 text-paper!">{kicker}</p>
          <MixedTitle
            text={title}
            as="h1"
            className="editorial-title display-title text-balance text-4xl leading-[1.02] md:text-7xl"
          />
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-paper/80 md:text-lg">{description}</p>
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity, y: captionY }}
          className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center px-6 md:bottom-14 md:justify-start md:px-14"
        >
          <p className="ui-title text-xs text-paper/85 md:text-sm">{caption}</p>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center text-paper/70"
        >
          <span className="ui-title text-[11px] tracking-[0.2em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
