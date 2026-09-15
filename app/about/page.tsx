import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { AboutTestimonialSection } from "@/components/sections/AboutTestimonialSection";
import { SpecialtySection } from "@/components/sections/SpecialtySection";
import { PageHero } from "@/components/sections/PageHero";
import { SharedContactSection } from "@/components/sections/SharedContactSection";
import { pageCopy, pageMetadata } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.about);

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title={pageCopy.about.title}
        description={pageCopy.about.description}
        image={{
          src: "/about-banner.jpg",
          alt: "Aerial view of the Flagler County coastline, with beach, dunes, and a Palm Coast area neighborhood beyond",
          label: "The Flagler Coast",
        }}
        primaryCta={{ href: "/contact", label: "Get In Touch" }}
        secondaryCta={{ href: "/book-an-appointment", label: "Book An Appointment" }}
      />

      <AboutIntroSection />

      <SpecialtySection />

      <AboutTestimonialSection />

      <SharedContactSection />
    </main>
  );
}
