import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroSlideshow } from "@/components/interactive/HeroSlideshow";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { Navigation } from "@/components/site/Navigation";
import { HomeHero } from "@/components/sections/HomeHero";
import HomePage from "@/app/page";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heroSlides, pageCopy, primaryNavigation } from "@/data/site";

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

  it("renders labeled premium image placeholders", () => {
    render(
      <ImagePlaceholder
        src="/placeholders/site.svg"
        alt="Construction site placeholder"
        label="Construction Site"
        ratio="wide"
      />,
    );

    expect(screen.getByAltText("Construction site placeholder")).toBeInTheDocument();
    expect(screen.getByText("Construction Site")).toBeInTheDocument();
  });

  it("keeps the homepage hero constrained to a single viewport shell", () => {
    const { container } = render(<HomeHero />);

    const heroHeading = screen.getByRole("heading", { name: pageCopy.home.title });
    const heroSection = heroHeading.closest("section");
    const heroShell = container.querySelector(".container-shell");

    expect(heroSection).toHaveClass("h-screen");
    expect(heroSection).toHaveClass("overflow-hidden");
    expect(heroShell).toHaveClass("h-full");
    expect(heroShell).not.toHaveClass("min-h-screen");
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
    expect(screen.getByText("+1 (000) 000-0000")).toBeInTheDocument();
    expect(screen.getByText("hello@companyname.com")).toBeInTheDocument();
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

  it("renders the homepage services preview as a five-category bento grid with a services CTA", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /service-led editorial layouts preview/i })).toBeInTheDocument();
    expect(screen.getByText("Pool Care")).toBeInTheDocument();
    expect(screen.getByText("Lawn Care")).toBeInTheDocument();
    expect(screen.getByText("Renovation")).toBeInTheDocument();
    expect(screen.getByText("Construction")).toBeInTheDocument();
    expect(screen.getByText("Landscaping")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View All Services" })).toHaveAttribute("href", "/services");
  });
});
