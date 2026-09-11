import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeroSlideshow } from "@/components/interactive/HeroSlideshow";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { Footer } from "@/components/site/Footer";
import { Navigation } from "@/components/site/Navigation";
import { HomeHero } from "@/components/sections/HomeHero";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import BuyPage from "@/app/buy/page";
import SellPage from "@/app/sell/page";
import ContactPage from "@/app/contact/page";
import ReviewsPage from "@/app/reviews/page";
import BookAppointmentPage from "@/app/book-an-appointment/page";
import HammockDunesPage from "@/app/buy/hammock-dunes/page";
import CashOfferPage from "@/app/sell/cash-offer/page";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heroSlides, pageCopy, primaryNavigation, siteConfig } from "@/data/site";

describe("core UI components", () => {
  it("renders accessible call-to-action links", () => {
    render(<Button href="/contact">Lorem Ipsum</Button>);

    expect(screen.getByRole("link", { name: "Lorem Ipsum" })).toHaveAttribute("href", "/contact");
  });

  it("renders section headings with visible kicker and title", () => {
    render(<SectionHeading kicker="Lorem" title="Coastal Property Specialist" description="Lorem ipsum dolor sit amet." />);

    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Coastal Property Specialist" })).toBeInTheDocument();
  });

  it("renders the hero headline and eyebrow, centered and minimal", () => {
    render(<HomeHero />);

    expect(screen.getAllByRole("heading", { name: pageCopy.home.title }).length).toBeGreaterThan(0);
    expect(screen.getByText(pageCopy.home.eyebrow)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore communities/i })).toHaveAttribute("href", "/buy");
  });

  it("keeps all hero slides mounted for seamless crossfades", () => {
    render(<HeroSlideshow slides={heroSlides} />);

    for (const slide of heroSlides) {
      expect(screen.getByAltText(slide.alt)).toBeInTheDocument();
    }
  });

  it("renders the text wordmark logo consistently across navigation, footer, and mobile menu", () => {
    render(
      <>
        <Navigation />
        <Footer />
        <MobileMenu items={primaryNavigation} open onClose={() => undefined} />
      </>,
    );

    expect(screen.getAllByText(siteConfig.name).length).toBeGreaterThanOrEqual(3);
  });

  it("renders Contact as a direct link with no dropdown", () => {
    render(<Navigation />);

    const contactLinks = screen.getAllByRole("link", { name: "Contact" });
    expect(contactLinks.some((link) => link.getAttribute("href") === "/contact")).toBe(true);
  });

  it("opens the Buy dropdown on hover and lists every community plus buyer tips", () => {
    const { container } = render(<Navigation />);

    const buyTrigger = container.querySelector('[data-nav-dropdown="buy"] > a');
    const buyDropdown = container.querySelector('[data-nav-dropdown="buy"]');

    expect(buyTrigger).not.toBeNull();
    fireEvent.mouseEnter(buyTrigger!);
    expect(buyDropdown).toHaveAttribute("data-state", "open");

    expect(screen.getByRole("link", { name: "Top Buyer Tips" })).toHaveAttribute("href", "/buy/top-buyer-tips");
    expect(screen.getByRole("link", { name: "Marina Del Palma" })).toHaveAttribute("href", "/buy/marina-del-palma");
    expect(screen.getByRole("link", { name: "Tidelands" })).toHaveAttribute("href", "/buy/tidelands");
  });

  it("opens the About dropdown independently from Buy and Sell", () => {
    const { container } = render(<Navigation />);

    const aboutTrigger = container.querySelector('[data-nav-dropdown="about"] > a');
    const aboutDropdown = container.querySelector('[data-nav-dropdown="about"]');
    const buyDropdown = container.querySelector('[data-nav-dropdown="buy"]');

    fireEvent.mouseEnter(aboutTrigger!);
    expect(aboutDropdown).toHaveAttribute("data-state", "open");
    expect(buyDropdown).toHaveAttribute("data-state", "closed");

    expect(screen.getByRole("link", { name: "Book an Appointment" })).toHaveAttribute("href", "/book-an-appointment");
  });

  it("opens the Sell dropdown and lists Sell My Home and Home Valuation", () => {
    const { container } = render(<Navigation />);

    const sellTrigger = container.querySelector('[data-nav-dropdown="sell"] > a');
    const sellDropdown = container.querySelector('[data-nav-dropdown="sell"]');

    fireEvent.mouseEnter(sellTrigger!);
    expect(sellDropdown).toHaveAttribute("data-state", "open");

    expect(screen.getByRole("link", { name: "Sell My Home" })).toHaveAttribute("href", "/sell/sell-my-home");
    expect(screen.getByRole("link", { name: "Home Valuation" })).toHaveAttribute("href", "/sell/whats-my-home-worth");
  });

  it("renders the standalone Contact item as a plain nav link, not a CTA button", () => {
    const { container } = render(<Navigation />);

    const contactLink = screen.getAllByRole("link", { name: "Contact" }).find((link) => !link.closest("[data-nav-dropdown]"));

    expect(contactLink).toBeDefined();
    expect(contactLink).not.toHaveClass("bg-primary");
    expect(contactLink).toHaveClass("premium-link");
    expect(container.querySelector('[data-nav-dropdown="contact"]')).toBeNull();
  });

  it("expands Buy, About, and Sell independently on mobile without nested dropdowns", () => {
    render(<MobileMenu items={primaryNavigation} open onClose={() => undefined} />);

    expect(screen.queryByText("Marina Del Palma")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /buy/i }));
    expect(screen.getByText("Marina Del Palma")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /about/i }));
    expect(screen.getByText("Book an Appointment")).toBeInTheDocument();
    expect(screen.getByText("Marina Del Palma")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /sell/i }));
    expect(screen.getByText("Home Valuation")).toBeInTheDocument();
  });

  it("renders the mobile Contact item as a plain nav link, not a CTA button", () => {
    render(<MobileMenu items={primaryNavigation} open onClose={() => undefined} />);

    const contactLink = screen.getAllByRole("link", { name: /contact/i })[0];
    expect(contactLink).not.toHaveClass("bg-primary");
    expect(contactLink).toHaveClass("display-title");
  });

  it("broadcasts mobile menu lock state when opening and closing the drawer", () => {
    const dispatchSpy = vi.spyOn(window, "dispatchEvent");

    render(<Navigation />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: "mobile-menu-lock-change", detail: { locked: true } }),
    );

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: "mobile-menu-lock-change", detail: { locked: false } }),
    );

    dispatchSpy.mockRestore();
  });

  it("switches the header to a solid scrolled treatment", () => {
    const { container } = render(<Navigation />);

    Object.defineProperty(window, "scrollY", { value: 48, writable: true, configurable: true });
    fireEvent.scroll(window);

    const headerShell = container.querySelector('[data-header-shell="true"]');
    const topbar = container.querySelector('[data-topbar="true"]');

    expect(headerShell).toHaveClass("bg-white");
    expect(topbar).toHaveClass("bg-primary");
  });
});

describe("page rendering", () => {
  it("renders the homepage with Buy, About, Listings, Sell, and Reviews preview bands", () => {
    render(<HomePage />);

    expect(screen.getAllByRole("heading", { name: pageCopy.home.title }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "View All Communities" })).toHaveAttribute("href", "/buy");
    expect(screen.getByRole("heading", { name: /coastal property specialist, re\/max signature/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View reviews on Zillow" })).toHaveAttribute(
      "href",
      "https://www.zillow.com/profile/clairesellsthecoast#reviews",
    );
    expect(screen.getByRole("link", { name: "Reviews Page" })).toHaveAttribute("href", "/reviews");
  });

  it("renders the Buy landing page with every community linked", () => {
    render(<BuyPage />);

    expect(screen.getByRole("heading", { name: pageCopy.buy.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /marina del palma/i })).toHaveAttribute("href", "/buy/marina-del-palma");
    expect(screen.getByRole("link", { name: /tidelands/i })).toHaveAttribute("href", "/buy/tidelands");
  });

  it("renders an individual community page", () => {
    render(<HammockDunesPage />);

    expect(screen.getByRole("heading", { name: "Hammock Dunes" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view all communities/i })).toHaveAttribute("href", "/buy");
  });

  it("renders the Sell landing page with all four seller paths", () => {
    render(<SellPage />);

    expect(screen.getByRole("heading", { name: pageCopy.sell.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Cash Offer" }).closest("a")).toHaveAttribute("href", "/sell/cash-offer");
    expect(screen.getByRole("heading", { name: "Home Valuation" }).closest("a")).toHaveAttribute(
      "href",
      "/sell/whats-my-home-worth",
    );
  });

  it("renders the cash offer page with a request form", () => {
    render(<CashOfferPage />);

    expect(screen.getByRole("heading", { name: /request a no-obligation cash offer/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit inquiry/i })).toBeInTheDocument();
  });

  it("renders the About page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: pageCopy.about.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /book an appointment/i })).toHaveAttribute("href", "/book-an-appointment");
  });

  it("renders the Book an Appointment page with a request form", () => {
    render(<BookAppointmentPage />);

    expect(screen.getByRole("heading", { name: pageCopy.bookAppointment.title })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /request appointment/i })).toBeInTheDocument();
  });

  it("renders the Reviews page", () => {
    render(<ReviewsPage />);

    expect(screen.getByRole("heading", { name: pageCopy.reviews.title })).toBeInTheDocument();
  });

  it("renders the Contact page and omits the shared contact endcap", async () => {
    render(await ContactPage({ searchParams: Promise.resolve({}) }));

    expect(screen.getByRole("heading", { name: pageCopy.contact.title })).toBeInTheDocument();
    expect(screen.queryByAltText("Aerial view of an oceanfront condo community along the Flagler County coastline")).not.toBeInTheDocument();
  });

  it("renders the shared contact endcap on non-contact pages", () => {
    render(<AboutPage />);

    expect(screen.getByAltText("Aerial view of an oceanfront condo community along the Flagler County coastline")).toBeInTheDocument();
  });
});
