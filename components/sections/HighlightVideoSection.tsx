"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components/ui/Container";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/SdJjizUlZq0?enablejsapi=1";
const YOUTUBE_ORIGIN = "https://www.youtube.com";

export function HighlightVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.55, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const sendCommand = (func: string, args: (string | number)[] = []) => {
      iframe.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), YOUTUBE_ORIGIN);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sendCommand("unMute");
          sendCommand("setVolume", [100]);
          sendCommand("playVideo");
        } else {
          sendCommand("pauseVideo");
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-y relative z-20 overflow-hidden bg-white text-ink"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -left-48 -top-48 -z-10 h-[36rem] w-[36rem] opacity-[0.06]"
      >
        <circle cx="400" cy="400" r="400" fill="hsl(var(--color-primary))" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 800 800"
        className="pointer-events-none absolute -bottom-48 -right-48 -z-10 h-[36rem] w-[36rem] opacity-[0.06]"
      >
        <circle cx="400" cy="400" r="400" fill="hsl(var(--color-secondary))" />
      </svg>

      <Container>
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            style={{ scale, opacity }}
            className="aspect-video w-full origin-center overflow-hidden border border-primary/15 shadow-[var(--shadow-soft)] max-h-[calc(100vh-8rem)]"
          >
            <iframe
              ref={iframeRef}
              src={YOUTUBE_EMBED_URL}
              title="Clarissa Swartzlander highlight video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
