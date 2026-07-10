import type { Project } from "@/data/site";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MixedTitle } from "@/components/ui/MixedTitle";

type ProjectCardProps = {
  project: Project;
  ratio?: "square" | "portrait" | "wide" | "cinema" | "tall";
};

export function ProjectCard({ project, ratio = "portrait" }: ProjectCardProps) {
  return (
    <article className="group">
      <ImagePlaceholder src={project.image.src} alt={project.image.alt} label={project.image.label} ratio={ratio} />
      <StaggerGroup className="mt-5 flex items-start justify-between gap-6" stagger={0.06}>
        <div>
          <MotionItem><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{project.category}</p></MotionItem>
          <MotionItem><MixedTitle text={project.title} as="h3" className="editorial-title display-title mt-3 text-2xl leading-[0.92] text-ink transition-transform duration-500 group-hover:translate-y-[-2px]" /></MotionItem>
          <MotionItem><p className="mt-3 max-w-md text-sm leading-7 text-slate">{project.description}</p></MotionItem>
        </div>
        <MotionItem className="text-right text-xs font-bold uppercase tracking-[0.12em] text-slate">
          <p>{project.location}</p>
          <p className="mt-2 text-primary">{project.year}</p>
        </MotionItem>
      </StaggerGroup>
    </article>
  );
}
