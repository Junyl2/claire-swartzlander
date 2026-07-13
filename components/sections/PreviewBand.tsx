import Link from "next/link";
import { ArrowRight, Star, UserRound } from "lucide-react";
import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { homeProjectPreviewProjects, homeServicePreviewCategories } from "@/data/site";

type PreviewBandProps = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  index: number;
  layout: "split" | "stacked" | "offset" | "services-bento" | "projects-editorial" | "about-editorial" | "review-feature";
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

const googleReviewsUrl =
  "https://www.google.com/maps/place/ERE+CARE+Management+%26+Maintenance/@29.5556973,-81.2696434,828m/data=!3m1!1e3!4m8!3m7!1s0x88e69592f5569731:0xb436c61d1279e0e2!8m2!3d29.5556973!4d-81.2670685!9m1!1b1!16s%2Fg%2F11rc6j079h?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D";

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}

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
            <MixedTitle text="Complete Service Index" as="h4" className="editorial-title display-title mt-4 max-w-[12rem] text-3xl leading-[0.9] text-ink" />
            <p className="supporting-copy mt-4 max-w-xs text-sm text-slate">
              Review every trade, exterior service, and property support category from one destination.
            </p>
          </div>
          <div className="pt-5">
            <Button href={href} variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </article>
    </MotionItem>
  );
}

function ProjectsEditorialPreview() {
  const rows = [
    homeProjectPreviewProjects.slice(0, 3),
    homeProjectPreviewProjects.slice(3, 6),
  ];

  return (
    <MotionItem distance={26}>
      <div className="relative overflow-hidden bg-ink py-4 md:py-5">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-28" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-28" />
        <div className="grid gap-4 md:gap-5">
          {rows.map((row, rowIndex) => (
            <div
              key={`project-marquee-row-${rowIndex}`}
              className="project-marquee-row"
              data-direction={rowIndex === 0 ? "left" : "right"}
            >
              {[...row, ...row].map((project, index) => {
                const isDuplicate = index >= row.length;

                return (
                  <article
                    key={`${project.title}-${rowIndex}-${index}`}
                    aria-hidden={isDuplicate ? true : undefined}
                    className="project-marquee-card group relative h-[15rem] w-[78vw] shrink-0 overflow-hidden rounded-[var(--radius-panel)] bg-charcoal sm:w-[28rem] md:h-[18rem] md:w-[34rem]"
                  >
                    <Image
                      src={project.image.src}
                      alt={isDuplicate ? "" : project.image.alt}
                      fill
                      sizes="(min-width: 768px) 34rem, 78vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/34 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="ui-title text-[11px] text-paper/62">{project.category}</p>
                      <h4 className="editorial-title display-title mt-3 text-2xl leading-[0.9] text-paper md:text-3xl">
                        {project.image.label}
                      </h4>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </MotionItem>
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
  const statDetails = details.map((detail) => {
    const [value = "", ...labelParts] = detail.split(" ");

    return { value, label: labelParts.join(" ") };
  });

  return (
    <div
      data-about-texture="true"
      className="about-preview-texture py-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10"
    >
      <div data-about-image-column="true" className="min-w-0 border-y border-primary/15 py-2 lg:sticky lg:top-36 lg:self-start">
        <ImagePlaceholder
          src={images[0].src}
          alt={images[0].alt}
          label={images[0].label}
          ratio="cinema"
          className="min-h-[16rem] bg-ink md:min-h-[24rem] lg:min-h-[30rem]"
        />
      </div>
      <div data-about-copy-column="true" className="mt-6 flex min-w-0 h-full flex-col lg:mt-0">
        <StaggerGroup className="relative max-w-2xl" stagger={0.08}>
          <MotionItem><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index}</p></MotionItem>
          <MotionItem><p className="eyebrow supporting-kicker mt-4">{kicker}</p></MotionItem>
          <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-5 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
          <MotionItem>
            <div className="supporting-copy mt-5 grid max-w-2xl gap-5 whitespace-pre-line text-base text-slate md:text-lg">
              {description}
            </div>
          </MotionItem>
          <div className="mt-7 grid gap-px border-y border-primary/15 bg-primary/15 sm:grid-cols-2">
            {statDetails.map((stat) => (
              <MotionItem key={`${stat.value}-${stat.label}`}>
                <div className="bg-paper p-4">
                  <p className="display-title text-4xl leading-none text-primary">{stat.value}</p>
                  <p className="ui-title mt-2 text-[11px] text-ink">{stat.label}</p>
                </div>
              </MotionItem>
            ))}
          </div>
          <MotionItem className="mt-7">
            <Button href={href} variant="secondary">
              Explore Page
            </Button>
          </MotionItem>
        </StaggerGroup>
        <div className="mt-6 border-t border-primary/15 pt-6">
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

function ReviewFeaturePreview({
  kicker,
  title,
  description,
  href,
}: Pick<PreviewBandProps, "kicker" | "title" | "description" | "href">) {
  return (
    <article className="border-t border-primary/15 py-10 first:border-t-0">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <StaggerGroup className="max-w-md" stagger={0.08}>
          <MotionItem><p className="eyebrow supporting-kicker">{kicker}</p></MotionItem>
          <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
          <MotionItem>
            <div className="mt-7 border-y border-primary/15 py-5">
              <p className="ui-title text-[11px] text-primary">Google</p>
              <p className="display-title text-5xl leading-none text-primary">4.8</p>
              <p className="ui-title mt-2 text-[11px] text-slate">76 Reviews</p>
            </div>
          </MotionItem>
          <StaggerGroup className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col" delay={0.06} stagger={0.08}>
            <MotionItem>
              <Button href={href} variant="secondary">
                View All Reviews
              </Button>
            </MotionItem>
            <MotionItem>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-title inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-sharp)] border border-primary/15 bg-white px-5 py-3 text-sm text-ink transition duration-300 hover:-translate-y-0.5 hover:border-primary"
              >
                <GoogleIcon className="h-5 w-5" />
                Google Reviews
              </a>
            </MotionItem>
          </StaggerGroup>
        </StaggerGroup>
        <MotionItem distance={26}>
          <figure className="relative border-l border-primary/18 pl-6 md:pl-8 lg:pl-10">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                <UserRound className="h-7 w-7" />
              </div>
              <div>
                <figcaption className="ui-title text-sm text-ink">Martin Shell</figcaption>
                <p className="supporting-copy mt-1 text-xs text-slate">4 reviews · 3 photos</p>
              </div>
            </div>
            <div className="mt-6 flex gap-1 text-[#fbbc04]" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="supporting-copy mt-7 max-w-4xl text-2xl leading-10 text-ink md:text-3xl md:leading-[1.45]">
              “{description}”
            </blockquote>
          </figure>
        </MotionItem>
      </div>
    </article>
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
            <p className="eyebrow">Local Control</p>
            <MixedTitle text="A layered view of field teams, routes, and response coverage." as="h4" className="editorial-title display-title mt-4 text-3xl leading-[0.92]" />
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
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Property Scope</p>
          <p className="mt-3 text-sm leading-7 text-slate">Exterior, interior, and site details stay connected under one service standard.</p>
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
          <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
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
        <div className="mb-8 gap-8 md:flex md:items-end md:justify-between">
          <StaggerGroup className="max-w-4xl" stagger={0.08}>
            <MotionItem><p className="eyebrow supporting-kicker">{kicker}</p></MotionItem>
            <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
            <MotionItem><p className="supporting-copy mt-4 max-w-3xl text-base text-slate md:text-lg">{description}</p></MotionItem>
          </StaggerGroup>
          <MotionItem distance={18} className="mt-7 shrink-0 md:mt-0">
            <Button href={href} variant="secondary">
              View Projects
            </Button>
          </MotionItem>
        </div>
        <ProjectsEditorialPreview />
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

  if (layout === "review-feature") {
    return (
      <ReviewFeaturePreview
        kicker={kicker}
        title={title}
        description={description}
        href={href}
      />
    );
  }

  return (
    <article className="border-t border-primary/15 py-10 first:border-t-0">
      <div
        className={`border-y border-primary/15 py-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 ${
          mirrored ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <PreviewMedia layout={layout} images={images} />
        <StaggerGroup className="mt-8 max-w-2xl lg:mt-0" stagger={0.08}>
          <MotionItem><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index}</p></MotionItem>
          <MotionItem><p className="eyebrow mt-4">{kicker}</p></MotionItem>
          <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-5 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
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
