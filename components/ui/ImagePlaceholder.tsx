import Image from "next/image";

import { MotionItem } from "@/components/interactive/MotionSequence";
import { cn } from "@/lib/utils";

type Ratio = "square" | "portrait" | "wide" | "cinema" | "tall";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  ratio?: Ratio;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
};

const ratios: Record<Ratio, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[4/3]",
  cinema: "aspect-[16/9]",
  tall: "aspect-[3/4]",
};

export function ImagePlaceholder({ src, alt, label, ratio = "wide", priority = false, className, objectPosition }: ImagePlaceholderProps) {
  return (
    <MotionItem distance={28} className="min-w-0 w-full">
      <figure className={cn("image-frame isolate w-full will-change-transform", ratios[ratio], className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={priority}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-paper/5" />
        <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/15 bg-ink/35 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-paper backdrop-blur-sm">
          <span className="min-w-0 truncate pr-4">{label}</span>
          <span className="h-px w-12 shrink-0 bg-primary transition-all duration-500 group-hover:w-16" />
        </figcaption>
      </figure>
    </MotionItem>
  );
}
