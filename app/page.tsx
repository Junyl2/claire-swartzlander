import { Container } from "@/components/ui/Container";
import { HomeHero } from "@/components/sections/HomeHero";
import { OneCallValuesSection } from "@/components/sections/OneCallValuesSection";
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

      <OneCallValuesSection />

      <section className="section-y bg-white">
        <Container>
          <div>
            {homePagePreviews.filter((page) => page.href !== "/contact").map((page, index) => (
              <PreviewBand
                key={page.href}
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
