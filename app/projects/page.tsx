import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { pageCopy, pageMetadata, projects } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.projects);

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        kicker="Projects"
        title={pageCopy.projects.title}
        description={pageCopy.projects.description}
        image={{ src: "/placeholders/project.svg", alt: "Projects gallery placeholder", label: "Featured Projects" }}
        primaryCta={{ href: "/contact", label: "Discuss A Similar Project" }}
      />

      <section className="section-y bg-paper">
        <Container>
          <SectionHeading
            kicker="Work Gallery"
            title="Property scopes, shown with the weight they deserve."
            description="Project cards now support the full range of services: repairs, renovation, pool systems, grounds care, exterior construction, cleaning, and site preparation."
          />
          <div className="mt-12">
            <ProjectGallery projects={projects} />
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
