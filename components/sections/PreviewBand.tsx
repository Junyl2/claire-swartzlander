import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { homeCommunityPreviews, homeListingPreviews, siteConfig } from "@/data/site";

type PreviewBandProps = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  index: number;
  layout: "split" | "stacked" | "offset" | "communities-bento" | "listings-editorial" | "about-editorial" | "review-feature";
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

function CommunitiesBentoPreview() {
  const tileClasses = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
  ];

  return (
    <>
      {homeCommunityPreviews.map((community, index) => (
        <MotionItem key={community.href} distance={26} className={tileClasses[index]}>
          <article
            className="group relative block h-full overflow-hidden rounded-[var(--radius-panel)] bg-ink"
          >
            <div className="relative min-h-[14rem] md:h-full">
              <Image
                src={community.image.src}
                alt={community.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/96 via-ink/48 to-ink/12 transition duration-500 group-hover:from-ink/98 group-hover:via-ink/68 group-hover:to-ink/28" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,hsl(25_30%_66%_/_0.18),transparent_48%)] opacity-90 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  <span className="display-title block text-balance text-2xl leading-[0.92] text-paper md:text-3xl">
                    {community.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="display-title text-lg leading-none text-paper/0 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-paper"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-3 overflow-hidden">
                  <p className="ui-title text-[11px] text-paper/68">{community.region}</p>
                  <p className="supporting-copy mt-2 max-w-[22rem] text-sm text-paper/0 transition duration-300 group-hover:text-paper/82">
                    {community.highlights.join(" • ")}
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

function CommunitiesBentoCta({ href }: { href: string }) {
  return (
    <MotionItem distance={26} className="md:col-span-2 md:row-span-1">
      <article className="relative h-full overflow-hidden rounded-[var(--radius-panel)] border border-primary/18 bg-primary/6">
        <div className="flex min-h-[14rem] h-full flex-col justify-between p-6 md:min-h-0">
          <div>
            <p className="ui-title text-[11px] text-primary/72">Full Community Index</p>
            <MixedTitle text="Every Coastal Community" as="h4" className="editorial-title display-title mt-4 max-w-[12rem] text-3xl leading-[0.9] text-ink" />
            <p className="supporting-copy mt-4 max-w-xs text-sm text-slate">
              Review every community Claire covers, from marina and Intracoastal addresses to gated golf living.
            </p>
          </div>
          <div className="pt-5">
            <Button href={href} variant="secondary">
              View All Communities
            </Button>
          </div>
        </div>
      </article>
    </MotionItem>
  );
}

function ListingsEditorialPreview() {
  const rows = [
    homeListingPreviews.slice(0, 3),
    homeListingPreviews.slice(3, 6),
  ];

  return (
    <MotionItem distance={26}>
      <div className="relative overflow-hidden bg-ink py-4 md:py-5">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent md:w-28" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent md:w-28" />
        <div className="grid gap-4 md:gap-5">
          {rows.map((row, rowIndex) => (
            <div
              key={`listing-marquee-row-${rowIndex}`}
              className="project-marquee-row"
              data-direction={rowIndex === 0 ? "left" : "right"}
            >
              {[...row, ...row].map((listing, index) => {
                const isDuplicate = index >= row.length;

                return (
                  <article
                    key={`${listing.title}-${rowIndex}-${index}`}
                    aria-hidden={isDuplicate ? true : undefined}
                    className="project-marquee-card group relative h-[15rem] w-[78vw] shrink-0 overflow-hidden rounded-[var(--radius-panel)] bg-charcoal sm:w-[28rem] md:h-[18rem] md:w-[34rem]"
                  >
                    <Image
                      src={listing.image.src}
                      alt={isDuplicate ? "" : listing.image.alt}
                      fill
                      sizes="(min-width: 768px) 34rem, 78vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/34 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="ui-title text-[11px] text-paper/62">{listing.category}</p>
                      <h4 className="editorial-title display-title mt-3 text-2xl leading-[0.9] text-paper md:text-3xl">
                        {listing.title}
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
  details,
  images,
}: Pick<PreviewBandProps, "title" | "description" | "href" | "kicker" | "details" | "images">) {
  return (
    <div className="py-16 lg:flex lg:items-center lg:gap-20">
      <MotionItem distance={26} className="relative mx-auto max-w-md lg:mx-0 lg:w-1/2 lg:max-w-none lg:shrink-0">
        <div aria-hidden="true" className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full border border-primary/30 lg:block" />
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={750}
          height={1000}
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="h-auto w-full shadow-[var(--shadow-soft)]"
        />
      </MotionItem>

      <StaggerGroup className="mt-14 max-w-xl lg:mt-0" stagger={0.08}>
        <MotionItem>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
            <p className="eyebrow supporting-kicker">{kicker}</p>
          </div>
        </MotionItem>
        <MotionItem>
          <MixedTitle
            text={title}
            as="h3"
            className="editorial-title display-title mt-6 text-balance text-4xl leading-[1.05] text-ink md:text-6xl"
          />
        </MotionItem>
        <MotionItem>
          <div className="supporting-copy mt-7 grid gap-5 whitespace-pre-line text-base leading-8 text-slate md:text-lg">
            {description}
          </div>
        </MotionItem>
        <MotionItem>
          <p className="brand-title-script mt-6 text-3xl text-ink/80 md:text-4xl">{siteConfig.name}</p>
        </MotionItem>
        <MotionItem>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            {details.map((detail, detailIndex) => (
              <span key={detail} className="flex items-center gap-3">
                {detailIndex > 0 ? <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-primary/50" /> : null}
                <span className="ui-title text-[11px] text-slate">{detail}</span>
              </span>
            ))}
          </div>
        </MotionItem>
        <MotionItem className="mt-9">
          <Link
            href={href}
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:text-primary"
          >
            Explore Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionItem>
      </StaggerGroup>
    </div>
  );
}

function ReviewFeaturePreview({
  kicker,
  title,
  description,
  href,
  details,
}: Pick<PreviewBandProps, "kicker" | "title" | "description" | "href" | "details">) {
  const [reviewerName = "Client Name", reviewerRole = "Client"] = details;

  return (
    <article className="border-t border-primary/15 py-10 first:border-t-0">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <StaggerGroup className="max-w-md" stagger={0.08}>
          <MotionItem><p className="eyebrow supporting-kicker">{kicker}</p></MotionItem>
          <MotionItem><MixedTitle text={title} as="h3" className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl" /></MotionItem>
          <MotionItem>
            <div className="mt-7 flex gap-1 border-y border-primary/15 py-5 text-primary" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </MotionItem>
          <MotionItem>
            <Button href={href} variant="secondary">
              View All Reviews
            </Button>
          </MotionItem>
        </StaggerGroup>
        <MotionItem distance={26}>
          <figure className="relative border-l border-primary/18 pl-6 md:pl-8 lg:pl-10">
            <blockquote className="supporting-copy max-w-4xl text-2xl leading-10 text-ink md:text-3xl md:leading-[1.45]">
              &ldquo;{description}&rdquo;
            </blockquote>
            <figcaption className="ui-title mt-7 text-sm text-ink">
              {reviewerName}
              <span className="ui-title ml-3 text-primary">{reviewerRole}</span>
            </figcaption>
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
            <p className="eyebrow">Local Coverage</p>
            <MixedTitle text="A layered view of the communities and coastline Claire serves." as="h4" className="editorial-title display-title mt-4 text-3xl leading-[0.92]" />
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
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Coastal Living</p>
          <p className="mt-3 text-sm leading-7 text-slate">Community, lifestyle, and property details stay connected under one guided process.</p>
        </div>
      </div>
    </div>
  );
}

export function PreviewBand({ kicker, title, description, href, index, layout, images, details, mirrored = false }: PreviewBandProps) {
  if (layout === "communities-bento") {
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
          <CommunitiesBentoPreview />
          <CommunitiesBentoCta href={href} />
        </div>
      </article>
    );
  }

  if (layout === "listings-editorial") {
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
              View Communities
            </Button>
          </MotionItem>
        </div>
        <ListingsEditorialPreview />
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
        details={details}
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
