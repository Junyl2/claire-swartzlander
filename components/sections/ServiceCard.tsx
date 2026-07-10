import type { Service } from "@/data/site";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

type ServiceCardProps = {
  service: Service;
  mirrored?: boolean;
};

export function ServiceCard({ service, mirrored = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      className={`grid gap-8 border-t border-primary/15 py-8 lg:grid-cols-2 lg:items-center ${mirrored ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <ImagePlaceholder src={service.image.src} alt={service.image.alt} label={service.image.label} ratio="cinema" />
      <StaggerGroup className="max-w-xl" stagger={0.08}>
        <MotionItem>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border border-primary/15 text-primary transition-transform duration-500 hover:-translate-y-0.5">
              <Icon className="h-5 w-5" />
            </span>
            <p className="eyebrow">{service.eyebrow}</p>
          </div>
        </MotionItem>
        <MotionItem><MixedTitle text={service.title} as="h3" className="editorial-title display-title mt-6 text-3xl leading-[0.92] text-ink md:text-4xl" /></MotionItem>
        <MotionItem><p className="mt-5 text-base leading-8 text-slate">{service.description}</p></MotionItem>
        <div className="mt-6 grid gap-3 text-sm leading-7 text-slate sm:grid-cols-2">
          {service.details.map((detail) => (
            <MotionItem key={detail}>
              <div className="border-b border-primary/10 pb-2 transition-colors duration-300 hover:border-primary/35">{detail}</div>
            </MotionItem>
          ))}
        </div>
        <MotionItem className="mt-7">
          <Button href="/contact" variant="secondary">
            Discuss This Service
          </Button>
        </MotionItem>
      </StaggerGroup>
    </article>
  );
}
