import type { Project } from "@/data/site";
import { ProjectCard } from "@/components/sections/ProjectCard";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const ratios = ["tall", "wide", "portrait", "cinema", "portrait", "wide"] as const;

  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} ratio={ratios[index % ratios.length]} />
      ))}
    </div>
  );
}
