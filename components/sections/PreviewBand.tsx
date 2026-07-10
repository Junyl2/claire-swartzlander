import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { homeServicePreviewCategories, projects } from "@/data/site";

type PreviewBandProps = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  index: number;
  layout: "split" | "stacked" | "offset" | "services-bento" | "projects-editorial" | "about-editorial";
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
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
  ];

  return (
    <>
      {homeServicePreviewCategories.map((category, index) => (
        <MotionItem key={category.href} distance={26} className={tileClasses[index]}>
          <article
            className="group relative block h-full overflow-hidden rounded-[var(--radius-panel)] bg-ink"
          >
            <div className="relative min-h-[14rem] md:h-full">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/96 via-ink/48 to-ink/12 transition duration-500 group-hover:from-ink/98 group-hover:via-ink/68 group-hover:to-ink/28" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,hsl(36_58%_56%_/_0.18),transparent_48%)] opacity-90 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  <span className="display-title block text-balance text-2xl leading-[0.92] text-paper md:text-3xl">
                    {category.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="display-title text-lg leading-none text-paper/0 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-paper"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-3 overflow-hidden">
                  <p className="ui-title text-[11px] text-paper/68">
                    {String(category.serviceCount).padStart(2, "0")} Services
                  </p>
                  <p className="supporting-copy mt-2 max-w-[22rem] text-sm text-paper/0 transition duration-300 group-hover:text-paper/82">
                    {category.previewItems.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </MotionItem>
      ))}
    </>
  );
}

function ServicesBentoCta({ href }: { href: string }) {
  return (
    <MotionItem distance={26} className="md:col-span-2 md:row-span-1">
      <article className="relative h-full overflow-hidden rounded-[var(--radius-panel)] border border-primary/18 bg-primary/6">
        <div className="flex min-h-[14rem] h-full flex-col justify-between p-6 md:min-h-0">
          <div>
            <p className="ui-title text-[11px] text-primary/72">Service Index</p>
            <h4 className="editorial-title display-title mt-4 max-w-[12rem] text-3xl leading-[0.9] text-ink">
              View All Services Category
            </h4>
            <p className="supporting-copy mt-4 max-w-xs text-sm text-slate">
              Explore the full service structure from one dedicated destination.
            </p>
          </div>
          <div className="pt-5">
            <Button href={href} variant="secondary">
              View All Services Category
            </Button>
          </div>
        </div>
      </article>
    </MotionItem>
  );
}

function ProjectsEditorialPreview() {
  const tileClasses = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
  ];

  return (
    <div className="grid gap-3 md:grid-cols-4 md:grid-rows-[minmax(16rem,1.45fr)_minmax(13rem,1fr)_minmax(13rem,1fr)]">
      {projects.slice(0, 6).map((project, index) => (
        <MotionItem key={project.title} distance={26} className={tileClasses[index]}>
          <article className="group relative block h-full overflow-hidden rounded-[var(--radius-panel)] bg-ink">
            <div className="relative min-h-[14rem] md:h-full">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/96 via-ink/42 to-ink/8" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="ui-title text-[11px] text-paper/62">{project.category}</p>
                <h4 className="editorial-title display-title mt-3 max-w-[14rem] text-3xl leading-[0.9] text-paper">
                  {project.image.label}
                </h4>
              </div>
            </div>
          </article>
        </MotionItem>
      ))}
    </div>
  );
}

function AboutEditorialPreview({
  title,
  description,
  href,
  kicker,
  index,
  details,
  images,
}: Pick<PreviewBandProps, "title" | "description" | "href" | "kicker" | "index" | "details" | "images">) {
  return (
    <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-ink p-5 shadow-[var(--shadow-soft)] md:p-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-8">
      <div className="min-w-0 border border-white/8 bg-paper/5 p-2 lg:sticky lg:top-36 lg:self-start">
        <ImagePlaceholder
          src={images[0].src}
          alt={images[0].alt}
          label={images[0].label}
          ratio="cinema"
          className="min-h-[16rem] bg-ink md:min-h-[24rem] lg:min-h-[30rem]"
        />
      </div>
      <div className="mt-6 flex min-w-0 h-full flex-col lg:mt-0">
        <StaggerGroup className="max-w-2xl" stagger={0.08}>
          <MotionItem><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index}</p></MotionItem>
          <MotionItem><p className="eyebrow supporting-kicker mt-4 text-paper/74">{kicker}</p></MotionItem>
          <MotionItem><h3 className="editorial-title display-title mt-5 text-balance text-3xl leading-[0.92] text-paper md:text-5xl">{title}</h3></MotionItem>
          <MotionItem><p className="supporting-copy mt-5 max-w-2xl text-base text-paper/74 md:text-lg">{description}</p></MotionItem>
          <div className="mt-6 flex flex-wrap gap-2">
            {details.map((detail) => (
              <MotionItem key={detail}>
                <span className="rounded-[var(--radius-sharp)] border border-white/12 bg-white/4 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-all duration-300 hover:border-primary hover:bg-primary/10">
                  {detail}
                </span>
              </MotionItem>
            ))}
          </div>
          <MotionItem className="mt-7">
            <Button href={href} variant="secondary">
              Explore Page
            </Button>
          </MotionItem>
        </StaggerGroup>
        <div className="mt-6 border-t border-white/10 pt-6">
          <ImagePlaceholder
            src={images[1].src}
            alt={images[1].alt}
            label={images[1].label}
            ratio="wide"
          />
        </div>
      </div>
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
        <StaggerGroup className="mb-8 max-w-5xl" stagger={0.08}>
          <MotionItem><p className="eyebrow supporting-kicker">{kicker}</p></MotionItem>
          <MotionItem><h3 className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl">{title}</h3></MotionItem>
          <MotionItem>
            <p className="supporting-copy mt-4 max-w-3xl text-base text-slate md:text-lg">
              {description}
            </p>
          </MotionItem>
        </StaggerGroup>
        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-[minmax(16rem,1.45fr)_minmax(13rem,1fr)_minmax(13rem,1fr)]">
          <ServicesBentoPreview />
          <ServicesBentoCta href={href} />
        </div>
      </article>
    );
  }

  if (layout === "projects-editorial") {
    return (
      <article className="border-t border-primary/15 py-10 first:border-t-0">
        <StaggerGroup className="mb-8 max-w-4xl" stagger={0.08}>
          <MotionItem><h3 className="editorial-title display-title text-balance text-3xl leading-[0.92] text-ink md:text-5xl">{title}</h3></MotionItem>
          <MotionItem><p className="supporting-copy mt-4 max-w-3xl text-base text-slate md:text-lg">{description}</p></MotionItem>
          <MotionItem className="mt-7">
            <Button href={href} variant="secondary">
              View Projects
            </Button>
          </MotionItem>
        </StaggerGroup>
        <div className="rounded-[var(--radius-panel)] border border-primary/12 bg-white p-4 shadow-[var(--shadow-soft)] md:p-5">
          <ProjectsEditorialPreview />
        </div>
      </article>
    );
  }

  if (layout === "about-editorial") {
    return (
      <article className="border-t border-primary/15 py-10 first:border-t-0">
        <AboutEditorialPreview
          title={title}
          description={description}
          href={href}
          kicker={kicker}
          index={index}
          details={details}
          images={images}
        />
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
