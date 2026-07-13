import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroSlideshow } from "@/components/interactive/HeroSlideshow";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { Footer } from "@/components/site/Footer";
import { Navigation } from "@/components/site/Navigation";
import { HomeHero } from "@/components/sections/HomeHero";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import CareersPage from "@/app/careers/page";
import ContactPage from "@/app/contact/page";
import ProjectsPage from "@/app/projects/page";
import ReviewsPage from "@/app/reviews/page";
import ServiceAreasPage from "@/app/service-areas/page";
import ServicesPage from "@/app/services/page";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  heroSlides,
  homeProjectPreviewProjects,
  homeServicePreviewCategories,
  pageCopy,
  primaryNavigation,
  siteConfig,
} from "@/data/site";

describe("core UI components", () => {
  it("renders accessible call-to-action links", () => {
    render(<Button href="/contact">Lorem Ipsum</Button>);

    expect(screen.getByRole("link", { name: "Lorem Ipsum" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("renders section headings with visible kicker and title", () => {
    render(
      <SectionHeading
        kicker="Lorem"
        title="Premium Construction"
        description="Lorem ipsum dolor sit amet."
      />,
    );

    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Premium Construction" })).toBeInTheDocument();
  });

  it("applies the industrial typography hierarchy to display and supporting text", () => {
    const { container } = render(
      <>
        <Navigation />
        <HomeHero />
        <SectionHeading
          kicker="Lorem"
          title="Premium Construction"
          description="Lorem ipsum dolor sit amet."
        />
        <Button href="/contact">Start A Project</Button>
      </>,
    );

    const heroHeading = screen.getByRole("heading", { name: pageCopy.home.title });
    const sectionHeading = screen.getByRole("heading", { name: "Premium Construction" });
    const heroDescription = screen.getAllByText(pageCopy.home.description)[0];
    const navLink = screen.getByRole("link", { name: /^services$/i });
    const ctaLink = screen.getAllByRole("link", { name: "Start A Project" })[0];
    const wordmark = screen
      .getByRole("link", { name: new RegExp(`${siteConfig.tagline} ${siteConfig.name}`, "i") })
      .firstElementChild;

    expect(heroHeading).toHaveClass("display-title");
    expect(sectionHeading).toHaveClass("display-title");
    expect(heroDescription).toHaveClass("supporting-copy");
    expect(navLink).toHaveClass("ui-title");
    expect(ctaLink).toHaveClass("ui-title");
    expect(wordmark).toHaveClass("brand-title");
    expect(container.querySelector(".eyebrow")).toHaveClass("supporting-kicker");
  });

  it("renders labeled premium image placeholders", () => {
    const { container } = render(
      <ImagePlaceholder
        src="/placeholders/site.svg"
        alt="Construction site placeholder"
        label="Construction Site"
        ratio="wide"
      />,
    );

    expect(screen.getByAltText("Construction site placeholder")).toBeInTheDocument();
    expect(screen.getByText("Construction Site")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("min-w-0");
    expect(screen.getByText("Construction Site")).toHaveClass("truncate");
  });

  it("keeps the homepage hero constrained to a single viewport shell", () => {
    const { container } = render(<HomeHero />);

    const heroHeading = screen.getByRole("heading", { name: pageCopy.home.title });
    const heroSection = heroHeading.closest("section");
    const heroShell = container.querySelector(".container-shell");
    const desktopHeroGrid = heroShell?.firstElementChild;
    const desktopLeadImage = screen.getAllByAltText(heroSlides[0].alt)[1];
    const desktopDetailImage = screen.getAllByAltText(heroSlides[1].alt)[1];
    const googleBadges = screen.getAllByRole("link", { name: /view ere care 4\.8 star rating on google maps/i });

    expect(heroSection).toHaveClass("h-screen");
    expect(heroSection).toHaveClass("lg:mt-32");
    expect(heroSection).toHaveClass("lg:h-[calc(100vh-8rem)]");
    expect(heroSection).toHaveClass("lg:items-start");
    expect(heroSection).toHaveClass("overflow-hidden");
    expect(heroShell).toHaveClass("h-full");
    expect(heroShell).toHaveClass("py-4");
    expect(heroShell).toHaveClass("xl:py-6");
    expect(heroShell).not.toHaveClass("min-h-screen");
    expect(desktopHeroGrid).toHaveClass("h-full");
    expect(desktopHeroGrid).toHaveClass("gap-4");
    expect(desktopHeroGrid).toHaveClass("xl:gap-6");
    expect(desktopLeadImage.parentElement).toHaveClass("h-full");
    expect(desktopLeadImage.parentElement).toHaveClass("rounded-[8px]");
    expect(desktopDetailImage.parentElement).toHaveClass("min-h-0");
    expect(desktopDetailImage.parentElement).toHaveClass("rounded-[8px]");
    expect(googleBadges).toHaveLength(2);
    expect(googleBadges[0]).toHaveAttribute("href", expect.stringContaining("google.com/maps/place/ERE+CARE"));
    expect(googleBadges[0]).toHaveClass("border-white/24");
    expect(googleBadges[0].parentElement).toHaveClass("bottom-6");
    expect(googleBadges[0].parentElement).toHaveClass("right-6");
    expect(googleBadges[1]).toHaveClass("bg-white/92");
    expect(screen.getAllByText("4.8")).toHaveLength(2);
    expect(screen.getAllByText("(76) Google Reviews")).toHaveLength(2);
    expect(screen.queryByText("Full Property Services")).not.toBeInTheDocument();
    expect(screen.queryByText("Structural Works")).not.toBeInTheDocument();
    expect(screen.queryByText("Craft Detail")).not.toBeInTheDocument();
    expect(screen.queryByText("Engineering Precision")).not.toBeInTheDocument();
  });

  it("keeps all hero slides mounted for seamless crossfades", () => {
    const { container } = render(<HeroSlideshow slides={heroSlides} />);

    for (const slide of heroSlides) {
      expect(screen.getByAltText(slide.alt)).toBeInTheDocument();
    }

    expect(container.firstChild).toHaveClass("bg-ink");
  });

  it("closes the desktop about dropdown after clicking a child link", () => {
    const { container } = render(<Navigation />);

    const aboutTrigger = container.querySelector('[data-nav-dropdown="about"] > a');
    const desktopDropdown = container.querySelector('[data-nav-dropdown="about"]');
    const aboutPanel = container.querySelector('[data-nav-dropdown="about"] > div:last-child');

    expect(aboutTrigger).not.toBeNull();
    expect(desktopDropdown).not.toBeNull();
    expect(aboutPanel).not.toBeNull();
    expect(aboutPanel).toHaveClass("left-1/2");
    expect(aboutPanel).toHaveClass("-translate-x-1/2");
    expect(aboutPanel).not.toHaveClass("right-0");

    fireEvent.mouseEnter(aboutTrigger);
    expect(desktopDropdown).toHaveAttribute("data-state", "open");

    const reviewsLink = screen.getByRole("link", { name: /reviews/i });
    reviewsLink.addEventListener("click", (event) => event.preventDefault());

    fireEvent.click(reviewsLink);
    expect(desktopDropdown).toHaveAttribute("data-state", "closed");
  });

  it("renders a services mega menu with category-driven service lists", () => {
    const { container } = render(<Navigation />);

    const servicesTrigger = container.querySelector('[data-nav-dropdown="services"] > a');
    const servicesDropdown = container.querySelector('[data-nav-dropdown="services"]');
    const servicesPanel = container.querySelector('[data-nav-dropdown="services"] > div:last-child');

    expect(servicesTrigger).not.toBeNull();
    expect(servicesDropdown).not.toBeNull();
    expect(servicesPanel).not.toBeNull();
    expect(servicesPanel).toHaveClass("left-1/2");
    expect(servicesPanel).toHaveClass("-translate-x-1/2");
    expect(servicesPanel).not.toHaveClass("right-0");

    fireEvent.mouseEnter(servicesTrigger);

    expect(servicesDropdown).toHaveAttribute("data-state", "open");
    expect(screen.getByText("How We Can Serve")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /pool care/i })).toBeInTheDocument();
    expect(screen.getByText("Pump Installation")).toBeInTheDocument();

    fireEvent.mouseEnter(screen.getByRole("button", { name: /landscaping/i }));
    expect(screen.getByText("Pressure Washing")).toBeInTheDocument();
    expect(screen.getByText("Custom Design")).toBeInTheDocument();
  });

  it("renders a centered mobile menu with scrollable links, pinned details, and collapsed nested sections by default", () => {
    const { container } = render(<MobileMenu items={primaryNavigation} open onClose={() => undefined} />);

    const panel = container.querySelector('[data-mobile-menu-panel="true"]');
    const scrollRegion = container.querySelector('[data-mobile-menu-scroll="true"]');
    const footerDetails = container.querySelector('[data-mobile-menu-details="true"]');

    expect(panel).not.toBeNull();
    expect(panel).toHaveClass("w-[min(92vw,28rem)]");
    expect(panel).toHaveClass("max-w-[28rem]");
    expect(panel).toHaveClass("h-full");
    expect(panel).toHaveClass("ml-auto");

    expect(scrollRegion).not.toBeNull();
    expect(scrollRegion).toHaveClass("overflow-y-auto");
    expect(scrollRegion).toHaveClass("min-h-0");

    expect(footerDetails).not.toBeNull();
    expect(screen.getByText("+13862372856")).toBeInTheDocument();
    expect(screen.getByText("erecapital@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Mon-Fri 08:00-18:00")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(screen.queryByText("Reviews")).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: /services/i })).toBeInTheDocument();
    expect(screen.queryByText("Pool Care")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /about/i }));
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /services/i }));
    expect(screen.getByText("Pool Care")).toBeInTheDocument();
    expect(screen.getByText("Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Cleaning")).toBeInTheDocument();
    expect(screen.getByText("Commercial Properties")).toBeInTheDocument();
  });

  it("uses the image logo across navigation, footer, and mobile menu branding", () => {
    const { container } = render(
      <>
        <Navigation />
        <Footer />
        <MobileMenu items={primaryNavigation} open onClose={() => undefined} />
      </>,
    );

    const logoImages = screen.getAllByAltText(siteConfig.name);

    expect(logoImages).toHaveLength(3);
    expect(container.querySelectorAll('img[src="/logo/ere-logo.png"]')).toHaveLength(3);
    expect(screen.queryByText("Premium Construction")).not.toBeInTheDocument();
  });

  it("switches the header to a solid scrolled treatment with a reduced desktop logo", () => {
    const { container } = render(<Navigation />);

    Object.defineProperty(window, "scrollY", {
      value: 48,
      writable: true,
      configurable: true,
    });

    fireEvent.scroll(window);

    const headerShell = container.querySelector('[data-header-shell="true"]');
    const topbar = container.querySelector('[data-topbar="true"]');
    const navbar = container.querySelector('[data-navbar="true"]');
    const navbarInner = container.querySelector('[data-navbar-inner="true"]');
    const logoWrap = container.querySelector('[data-nav-logo="true"]');

    expect(headerShell).toHaveClass("bg-white");
    expect(headerShell).toHaveClass("text-ink");
    expect(headerShell).not.toHaveClass("glass-nav");
    expect(topbar).toHaveClass("bg-primary");
    expect(topbar).toHaveClass("text-white");
    expect(navbar).toHaveClass("bg-white");
    expect(navbarInner).toHaveClass("lg:py-2");
    expect(logoWrap).toHaveClass("lg:w-18");
    expect(logoWrap).toHaveClass("xl:w-20");
  });

  it("broadcasts mobile menu lock state when opening and closing the drawer", () => {
    const dispatchSpy = vi.spyOn(window, "dispatchEvent");

    render(<Navigation />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mobile-menu-lock-change",
        detail: { locked: true },
      }),
    );

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mobile-menu-lock-change",
        detail: { locked: false },
      }),
    );

    dispatchSpy.mockRestore();
  });

  it("renders the homepage services preview as a non-clickable editorial bento grid with a section CTA", () => {
    render(<HomePage />);

    expect(screen.queryByRole("heading", { name: /the homepage now follows the same sequence as the navigation bar/i })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /one property team, structured across the trades that matter/i })).toBeInTheDocument();
    expect(
      screen.getAllByText(/pool care, lawn maintenance, renovation, construction, landscaping, site support, and cleaning/i).some((node) =>
        node.className.includes("max-w-3xl"),
      ),
    ).toBe(true);
    expect(screen.getAllByText("Pool Care").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Lawn Care").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Renovation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Construction").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Landscaping").length).toBeGreaterThan(0);
    for (const category of homeServicePreviewCategories) {
      expect(screen.getByAltText(category.image.alt)).toHaveAttribute("src", category.image.src);
    }
    expect(screen.queryByRole("link", { name: "Pool Care" })).not.toBeInTheDocument();
    const servicesCta = screen.getByRole("link", { name: "View All Services" });
    expect(servicesCta).toHaveAttribute("href", "/services");

    const leadTile = screen.getAllByText("Pool Care")[0].closest("article");
    const bridgeTile = screen.getAllByText("Construction")[0].closest("article");
    const wideTile = screen.getAllByText("Landscaping")[0].closest("article");
    const ctaGridItem = servicesCta.closest("article")?.parentElement;
    const leadGridItem = leadTile?.parentElement;
    const bridgeGridItem = bridgeTile?.parentElement;
    const wideGridItem = wideTile?.parentElement;
    const bentoGrid = leadGridItem?.parentElement;

    expect(bentoGrid).toHaveClass("gap-3");
    expect(bentoGrid).toHaveClass("md:grid-cols-4");
    expect(leadGridItem).toHaveClass("md:col-span-2");
    expect(leadGridItem).toHaveClass("md:row-span-2");
    expect(bridgeGridItem).toHaveClass("md:col-span-1");
    expect(bridgeGridItem).toHaveClass("md:row-span-1");
    expect(wideGridItem).toHaveClass("md:col-span-2");
    expect(ctaGridItem).toHaveClass("md:col-span-2");
    expect(ctaGridItem).toHaveClass("md:row-span-1");
    expect(screen.getAllByText("Renovation")[0].closest("article")?.parentElement).toHaveClass("md:row-span-1");
  });

  it("renders the homepage about preview as a cinematic split layout with a separate context image", () => {
    render(<HomePage />);

    const aboutHeading = screen.getByRole("heading", {
      name: /refined property care with unwavering dedication/i,
    });
    const aboutSection = aboutHeading.closest("article");

    expect(aboutSection).not.toBeNull();
    expect(within(aboutSection as HTMLElement).getByRole("link", { name: "Explore Page" })).toHaveAttribute("href", "/about");
    expect(within(aboutSection as HTMLElement).queryByRole("link", { name: /view destination/i })).not.toBeInTheDocument();
    expect(within(aboutSection as HTMLElement).getByAltText("ERE CARE about preview image")).toBeInTheDocument();
    expect(within(aboutSection as HTMLElement).getByAltText("ERE CARE about detail image")).toBeInTheDocument();

    const aboutLayout = aboutSection?.firstElementChild;
    const aboutLeadWrap = aboutSection?.querySelector('[data-about-image-column="true"]');
    const aboutCopyWrap = aboutSection?.querySelector('[data-about-copy-column="true"]');
    const aboutTexture = aboutSection?.querySelector('[data-about-texture="true"]');
    const aboutLeadImage = within(aboutSection as HTMLElement).getByAltText("ERE CARE about preview image").closest("figure");
    const aboutContextImage = within(aboutSection as HTMLElement).getByAltText("ERE CARE about detail image").closest("figure");

    expect(aboutLayout).toHaveClass("lg:grid");
    expect(aboutLayout).toHaveClass("lg:grid-cols-[1.2fr_0.8fr]");
    expect(aboutLayout).toHaveClass("lg:gap-10");
    expect(aboutLayout).toHaveClass("lg:items-start");
    expect(aboutLayout).not.toHaveClass("bg-ink");
    expect(aboutLayout).not.toHaveClass("shadow-[var(--shadow-soft)]");
    expect(aboutLayout).toHaveClass("about-preview-texture");
    expect(aboutTexture).toBe(aboutLayout);
    expect(aboutLeadWrap).toHaveClass("min-w-0");
    expect(aboutCopyWrap).toHaveClass("min-w-0");
    expect(aboutLeadWrap).toHaveClass("lg:sticky");
    expect(aboutLeadWrap).toHaveClass("lg:top-36");
    expect(aboutLeadImage).toHaveClass("min-h-[16rem]");
    expect(aboutLeadImage).toHaveClass("aspect-[16/9]");
    expect(aboutContextImage).toHaveClass("aspect-[4/3]");
    expect(within(aboutSection as HTMLElement).getByAltText("ERE CARE about preview image")).toHaveAttribute("src", "/hero/hero-2.jpeg");
    expect(within(aboutSection as HTMLElement).getByAltText("ERE CARE about detail image")).toHaveAttribute("src", "/hero/hero-3.jpeg");
    expect(within(aboutSection as HTMLElement).getByText("Years Serving")).toBeInTheDocument();
    expect(within(aboutSection as HTMLElement).getByText("Days In Business")).toBeInTheDocument();
    expect(within(aboutSection as HTMLElement).getByText("Completed Projects")).toBeInTheDocument();
    expect(within(aboutSection as HTMLElement).getByText("Team Members")).toBeInTheDocument();
  });

  it("renders the homepage projects preview as a two-row marquee", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /real property improvements, shown by scope and condition/i,
      }),
    ).toBeInTheDocument();
    const projectsHeading = screen.getByRole("heading", {
      name: /real property improvements, shown by scope and condition/i,
    });
    const projectsSection = projectsHeading.closest("article");
    const projectsKicker = within(projectsSection as HTMLElement).getByText("Field Work Examples");
    const projectsCta = within(projectsSection as HTMLElement).getByRole("link", { name: "View Projects" });
    const projectsHeader = projectsCta.parentElement?.parentElement;

    expect(projectsKicker).toHaveClass("supporting-kicker");
    expect(projectsHeader).toHaveClass("md:flex");
    expect(projectsHeader).toHaveClass("md:items-end");
    expect(projectsHeader).toHaveClass("md:justify-between");
    expect(projectsCta).toHaveAttribute("href", "/projects");
    expect(projectsCta.parentElement).toHaveClass("md:mt-0");
    expect(projectsCta.parentElement).toHaveClass("shrink-0");
    expect(within(projectsSection as HTMLElement).queryByRole("link", { name: /explore portfolio/i })).not.toBeInTheDocument();

    for (const project of homeProjectPreviewProjects) {
      expect(screen.getByAltText(project.image.alt)).toBeInTheDocument();
    }

    const projectsHeroImage = screen.getByAltText(homeProjectPreviewProjects[0].image.alt);
    const marqueeCard = projectsHeroImage.closest("article");
    const marqueeRow = marqueeCard?.parentElement;
    const marqueeStage = marqueeRow?.parentElement?.parentElement;
    const marqueeRows = projectsSection?.querySelectorAll(".project-marquee-row");

    expect(marqueeRows).toHaveLength(2);
    expect(marqueeRows?.[0]).toHaveAttribute("data-direction", "left");
    expect(marqueeRows?.[1]).toHaveAttribute("data-direction", "right");
    expect(marqueeRow).toHaveClass("project-marquee-row");
    expect(marqueeStage).toHaveClass("overflow-hidden");
    expect(marqueeStage).not.toHaveClass("shadow-[var(--shadow-soft)]");
    expect(marqueeCard).toHaveClass("project-marquee-card");
  });

  it("renders the homepage reviews preview as a single elegant Google review feature", () => {
    render(<HomePage />);

    const reviewHeading = screen.getByRole("heading", {
      name: /a homeowner’s words after ere care fence work/i,
    });
    const reviewSection = reviewHeading.closest("article");
    const reviewLayout = reviewSection?.firstElementChild;
    const reviewFigure = within(reviewSection as HTMLElement).getByText("Martin Shell").closest("figure");

    expect(within(reviewSection as HTMLElement).getByText("Trusted By Property Owners")).toHaveClass("supporting-kicker");
    expect(reviewLayout).not.toHaveClass("bg-ink");
    expect(reviewLayout).not.toHaveClass("shadow-[var(--shadow-soft)]");
    expect(reviewFigure).toHaveClass("border-l");
    expect(reviewFigure).not.toHaveClass("bg-paper");
    expect(within(reviewSection as HTMLElement).getByText("Martin Shell")).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByText("4 reviews · 3 photos")).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByText("Google")).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByText("4.8")).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByText("76 Reviews")).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByLabelText("5 star review").querySelectorAll("svg")).toHaveLength(5);
    expect(
      within(reviewSection as HTMLElement).getByText(/pablo and his team did a great job installing a vinyl fence around my home/i),
    ).toBeInTheDocument();
    expect(within(reviewSection as HTMLElement).getByRole("link", { name: "View All Reviews" })).toHaveAttribute("href", "/reviews");
    expect(within(reviewSection as HTMLElement).getByRole("link", { name: /google reviews/i })).toHaveAttribute(
      "href",
      expect.stringContaining("google.com/maps/place/ERE+CARE"),
    );
    expect(within(reviewSection as HTMLElement).queryByAltText("ERE CARE reviews preview image")).not.toBeInTheDocument();
  });

  it("renders the shared contact endcap on every non-contact page and skips it on the contact page", () => {
    const pages = [
      <HomePage key="home" />,
      <AboutPage key="about" />,
      <ServicesPage key="services" />,
      <ProjectsPage key="projects" />,
      <ReviewsPage key="reviews" />,
      <CareersPage key="careers" />,
      <ServiceAreasPage key="service-areas" />,
    ];

    for (const page of pages) {
      const { unmount } = render(page);

      const contactImage = screen.getByAltText("ERE CARE contact preview image");
      const contactSection = contactImage.closest("section");
      const contactHeading = within(contactSection as HTMLElement).getByRole("heading", {
        name: /start with the property, then build the right scope/i,
      });
      const contactLayout = contactSection?.querySelector(".container-shell");
      const contactCopyPanel = contactHeading.parentElement;
      const contactImageFrame = contactImage.closest("figure");

      expect(contactSection).not.toBeNull();
      expect(contactHeading).toBeInTheDocument();
      expect(within(contactSection as HTMLElement).getByAltText("ERE CARE contact preview image")).toBeInTheDocument();
      expect(within(contactSection as HTMLElement).queryByAltText("ERE CARE contact map image")).not.toBeInTheDocument();
      expect(within(contactSection as HTMLElement).getByRole("link", { name: "Send An Inquiry" })).toHaveAttribute("href", "/contact");
      expect(contactLayout).toHaveClass("lg:grid-cols-[1.08fr_0.92fr]");
      expect(contactLayout).toHaveClass("lg:items-stretch");
      expect(contactImageFrame).toHaveClass("lg:min-h-[36rem]");
      expect(contactCopyPanel).not.toHaveClass("bg-white");
      expect(contactCopyPanel).not.toHaveClass("shadow-[var(--shadow-soft)]");

      unmount();
    }

    render(<ContactPage />);
    expect(screen.queryByAltText("ERE CARE contact preview image")).not.toBeInTheDocument();
  });
});
