import { Container } from "@/components/ui/Container";
import { HomeHero } from "@/components/sections/HomeHero";
import { HighlightVideoSection } from "@/components/sections/HighlightVideoSection";
import { ValuePillarsSection } from "@/components/sections/ValuePillarsSection";
import { PreviewBand } from "@/components/sections/PreviewBand";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import {
  homePagePreviews,
  pageMetadata,
} from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.home);

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <HighlightVideoSection />

      <ValuePillarsSection />

      <section className="section-y bg-white">
        <Container>
          <div>
            {homePagePreviews.map((page, index) => (
              <PreviewBand
                key={page.label}
                kicker={page.kicker}
                title={page.title}
                description={page.description}
                href={page.href}
                index={index + 1}
                layout={page.layout}
                images={page.images}
                details={page.details}
                mirrored={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <SharedContactSection />
    </main>
  );
}
