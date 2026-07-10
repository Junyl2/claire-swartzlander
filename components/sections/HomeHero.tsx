import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { heroSlides, pageCopy } from "@/data/site";
import { HeroSlideshow } from "@/components/interactive/HeroSlideshow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MixedTitle } from "@/components/ui/MixedTitle";

const googleReviewUrl =
  "https://www.google.com/maps/place/ERE+CARE+Management+%26+Maintenance/@29.5556973,-81.2696434,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88e69592f5569731:0xb436c61d1279e0e2!8m2!3d29.5556973!4d-81.2670685!16s%2Fg%2F11rc6j079h?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D";

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

function GoogleRatingBadge({
  className = "",
  variant = "filled",
}: {
  className?: string;
  variant?: "filled" | "minimal";
}) {
  const isMinimal = variant === "minimal";
  const linkClasses = isMinimal
    ? "group inline-flex w-fit items-center gap-3 rounded-[var(--radius-panel)] border border-white/24 px-4 py-3 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/46"
    : "group inline-flex w-fit items-center gap-3 rounded-[var(--radius-panel)] border border-primary/15 bg-white/92 px-4 py-3 text-ink shadow-[var(--shadow-soft)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-primary/35";

  return (
    <a
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View ERE CARE 4.8 star rating on Google Maps from 76 reviews"
      className={`${linkClasses} ${className}`}
    >
      <span className={`grid h-9 w-9 place-items-center rounded-full ${isMinimal ? "bg-white/95" : "bg-white shadow-[var(--shadow-line)]"}`}>
        <GoogleIcon className="h-5 w-5" />
      </span>
      <span className="grid gap-0.5">
        <span className="flex items-center gap-1.5">
          <span className={`ui-title text-sm leading-none ${isMinimal ? "text-white" : "text-ink"}`}>4.8</span>
          <span className={`flex ${isMinimal ? "text-[#fbbc04]" : "text-primary"}`} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
        </span>
        <span className={`supporting-copy text-xs leading-none ${isMinimal ? "text-white/72" : "text-slate"}`}>(76) Google Reviews</span>
      </span>
    </a>
  );
}

export function HomeHero() {
  return (
    <section className="relative flex h-screen items-end overflow-hidden bg-ink text-paper lg:mt-32 lg:h-[calc(100vh-8rem)] lg:items-start lg:bg-white lg:text-ink">
      <div className="lg:hidden">
        <HeroSlideshow slides={heroSlides} />
      </div>

      <Container className="hidden h-full py-4 xl:py-6 lg:block">
        <div className="grid h-full grid-cols-[0.92fr_1.08fr] gap-4 xl:gap-6">
          <div className="relative h-full overflow-hidden rounded-[8px]">
            <Image
              src={heroSlides[0].src}
              alt={heroSlides[0].alt}
              fill
              priority
              sizes="46vw"
              className="object-cover"
            />
          </div>
          <div className="grid h-full grid-rows-[1.35fr_0.65fr] gap-4 xl:gap-6">
            <div className="flex items-end rounded-[8px] bg-paper px-10 pb-12 pt-10 xl:px-14 xl:pb-14">
              <StaggerGroup className="max-w-3xl" delay={0.08} stagger={0.11}>
                <MotionItem><p className="eyebrow supporting-kicker mb-5">{pageCopy.home.eyebrow}</p></MotionItem>
                <MotionItem>
                  <MixedTitle
                    text="One Call Property Care, Managed With Precision"
                    as="h1"
                    className="editorial-title display-title text-balance max-w-3xl text-5xl leading-[0.9] xl:text-6xl"
                  />
                </MotionItem>
                <MotionItem>
                  <p className="supporting-copy mt-6 max-w-2xl text-base text-slate xl:text-lg">
                    {pageCopy.home.description}
                  </p>
                </MotionItem>
                <MotionItem>
                  <div className="mt-8 flex gap-3">
                    <Button href="/contact">Start A Project</Button>
                    <Button href="/projects" variant="secondary">
                      View Projects
                    </Button>
                  </div>
                </MotionItem>
              </StaggerGroup>
            </div>
            <div className="relative min-h-0 overflow-hidden rounded-[8px]">
              <Image
                src={heroSlides[1].src}
                alt={heroSlides[1].alt}
                fill
                sizes="54vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/10 to-transparent" />
              <div className="absolute bottom-6 right-6">
                <GoogleRatingBadge variant="minimal" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 grid h-full items-end pb-8 pt-24 md:pb-14 md:pt-36 lg:hidden">
        <div className="grid gap-8">
          <StaggerGroup className="max-w-4xl" delay={0.08} stagger={0.11}>
            <MotionItem><p className="eyebrow supporting-kicker mb-5">{pageCopy.home.eyebrow}</p></MotionItem>
            <MotionItem>
              <MixedTitle
                text={pageCopy.home.title}
                as="h1"
                className="editorial-title display-title text-balance max-w-5xl text-4xl leading-[0.9] sm:text-5xl md:text-7xl"
              />
            </MotionItem>
            <MotionItem>
              <p className="supporting-copy mt-5 max-w-2xl text-sm text-paper/82 sm:text-base md:text-lg">
                {pageCopy.home.description}
              </p>
            </MotionItem>
            <MotionItem>
              <GoogleRatingBadge className="mt-6" />
            </MotionItem>
            <MotionItem>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Start A Project</Button>
                <Button href="/projects" variant="ghost">
                  View Projects
                </Button>
              </div>
            </MotionItem>
          </StaggerGroup>
        </div>
        <MotionItem delay={0.45}>
          <a href="#introduction" className="ui-title mt-12 inline-flex items-center gap-3 text-xs text-paper/75">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition-transform duration-500 hover:translate-y-1">
              <ArrowDown className="h-4 w-4" />
            </span>
            Scroll To Explore
          </a>
        </MotionItem>
      </Container>
    </section>
  );
}
