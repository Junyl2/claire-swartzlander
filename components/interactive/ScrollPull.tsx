"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ScrollPullProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
};

export function ScrollPull({ children, className, distance = 140 }: ScrollPullProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });

  const y = useTransform(smoothProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.94, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}
