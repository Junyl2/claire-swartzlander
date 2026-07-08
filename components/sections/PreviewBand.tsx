import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { homeServicePreviewCategories } from "@/data/site";

type PreviewBandProps = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  index: number;
  layout: "split" | "stacked" | "offset" | "services-bento";
  images: [
    {
      src: string;
      alt: string;
      label: string;
    },
    {
      src: string;
      alt: string;
      label: string;
    },
  ];
  details: string[];
  mirrored?: boolean;
};

function ServicesBentoPreview() {
  const tileClasses = [
    "md:col-span-2 md:row-span-2",
    "",
    "",
    "md:col-span-1",
    "md:col-span-2",
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[minmax(11rem,1.35fr)_minmax(10rem,1fr)_minmax(10rem,1fr)]">
      {homeServicePreviewCategories.map((category, index) => (
        <MotionItem key={category.href} distance={26}>
          <Link
            href={category.href}
            className={`group relative block overflow-hidden rounded-[var(--radius-panel)] border border-primary/12 bg-ink ${tileClasses[index]}`}
          >
            <div className="relative min-h-[11rem] md:h-full">
              <Image src={category.image.src} alt={category.image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/42 to-ink/10" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,hsl(36_58%_56%_/_0.18),transparent_48%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="block text-balance text-2xl font-semibold uppercase tracking-[0.14em] text-paper md:text-3xl">
                  {category.title}
                </span>
              </div>
            </div>
          </Link>
        </MotionItem>
      ))}
    </div>
  );
}

function PreviewMedia({
  layout,
  images,
}: Pick<PreviewBandProps, "layout" | "images">) {
  if (layout === "stacked") {
    return (
      <div className="grid gap-4">
        <ImagePlaceholder src={images[0].src} alt={images[0].alt} label={images[0].label} ratio="cinema" />
        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <ImagePlaceholder src={images[1].src} alt={images[1].alt} label={images[1].label} ratio="wide" />
          <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-ink p-6 text-paper">
            <p className="eyebrow">Editorial Layout</p>
            <p className="editorial-title mt-4 text-3xl leading-tight">A layered preview that reads closer to a project spread.</p>
          </div>
        </div>
      </div>
    );
  }

  if (layout === "offset") {
    return (
      <div className="relative min-h-[22rem] md:min-h-[28rem]">
        <div className="w-[82%]">
          <ImagePlaceholder src={images[0].src} alt={images[0].alt} label={images[0].label} ratio="portrait" />
        </div>
        <div className="relative mt-4 md:absolute md:-bottom-2 md:right-0 md:mt-0 md:w-[52%]">
          <ImagePlaceholder src={images[1].src} alt={images[1].alt} label={images[1].label} ratio="square" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
      <ImagePlaceholder src={images[0].src} alt={images[0].alt} label={images[0].label} ratio="tall" />
      <div className="grid gap-4">
        <ImagePlaceholder src={images[1].src} alt={images[1].alt} label={images[1].label} ratio="wide" />
        <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-primary/6 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Composed Preview</p>
          <p className="mt-3 text-sm leading-7 text-slate">Multiple image moments help each destination feel intentional instead of repeated.</p>
        </div>
      </div>
    </div>
  );
}

export function PreviewBand({ kicker, title, description, href, index, layout, images, details, mirrored = false }: PreviewBandProps) {
  if (layout === "services-bento") {
    return (
      <article className="border-t border-primary/15 py-10 first:border-t-0">
        <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ServicesBentoPreview />
            <StaggerGroup className="max-w-2xl" stagger={0.08}>
              <MotionItem><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index}</p></MotionItem>
              <MotionItem><p className="eyebrow mt-4">{kicker}</p></MotionItem>
              <MotionItem><h3 className="editorial-title mt-5 text-balance text-3xl leading-tight text-ink md:text-5xl">{title}</h3></MotionItem>
              <MotionItem><p className="mt-5 text-base leading-8 text-slate">{description}</p></MotionItem>
              <div className="mt-6 flex flex-wrap gap-2">
                {details.map((detail) => (
                  <MotionItem key={detail}>
                    <span className="rounded-[var(--radius-sharp)] border border-primary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:border-primary hover:bg-primary/5">
                      {detail}
                    </span>
                  </MotionItem>
                ))}
              </div>
              <StaggerGroup className="mt-7 flex flex-wrap items-center gap-4" delay={0.06} stagger={0.08}>
                <MotionItem>
                  <Button href={href} variant="secondary">
                    View All Services
                  </Button>
                </MotionItem>
                <MotionItem>
                  <Link href={href} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MotionItem>
              </StaggerGroup>
            </StaggerGroup>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="border-t border-primary/15 py-10 first:border-t-0">
      <div
        className={`rounded-[var(--radius-panel)] border border-primary/12 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 ${
          mirrored ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <PreviewMedia layout={layout} images={images} />
        <StaggerGroup className="mt-8 max-w-2xl lg:mt-0" stagger={0.08}>
          <MotionItem><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index}</p></MotionItem>
          <MotionItem><p className="eyebrow mt-4">{kicker}</p></MotionItem>
          <MotionItem><h3 className="editorial-title mt-5 text-balance text-3xl leading-tight text-ink md:text-5xl">{title}</h3></MotionItem>
          <MotionItem><p className="mt-5 text-base leading-8 text-slate">{description}</p></MotionItem>
          <div className="mt-6 flex flex-wrap gap-2">
            {details.map((detail) => (
              <MotionItem key={detail}>
                <span className="rounded-[var(--radius-sharp)] border border-primary/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:border-primary hover:bg-primary/5">
                  {detail}
                </span>
              </MotionItem>
            ))}
          </div>
          <StaggerGroup className="mt-7 flex items-center gap-4" delay={0.06} stagger={0.08}>
            <MotionItem>
              <Button href={href} variant="secondary">
                Explore Page
              </Button>
            </MotionItem>
            <MotionItem>
              <Link href={href} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-ink">
                View Destination
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MotionItem>
          </StaggerGroup>
        </StaggerGroup>
      </div>
    </article>
  );
}
