"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    let frameId = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    };

    frameId = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) {
      return;
    }

    lenisRef.current.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [pathname]);

  useEffect(() => {
    const handleMenuLockChange = (event: Event) => {
      if (!lenisRef.current) {
        return;
      }

      const locked = (event as CustomEvent<{ locked?: boolean }>).detail?.locked;

      if (locked) {
        lenisRef.current.stop();
        return;
      }

      lenisRef.current.start();
    };

    window.addEventListener("mobile-menu-lock-change", handleMenuLockChange);

    return () => {
      window.removeEventListener("mobile-menu-lock-change", handleMenuLockChange);
    };
  }, []);

  return children;
}
