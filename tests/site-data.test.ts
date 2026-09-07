import { describe, expect, it } from "vitest";

import {
  aboutHighlights,
  communities,
  contactItems,
  footerLinks,
  navigation,
  pageMetadata,
  primaryNavigation,
  siteConfig,
  testimonials,
  topBuyerTips,
  topDollarTips,
} from "@/data/site";

describe("centralized site content", () => {
  it("defines every required top-level route", () => {
    expect(navigation.map((item) => item.href)).toEqual(["/", "/buy", "/about", "/sell", "/contact"]);
  });

  it("builds the primary navigation with the required Home / Buy / About / Sell / Contact hierarchy", () => {
    expect(primaryNavigation.map((item) => item.label)).toEqual(["Home", "Buy", "About", "Sell", "Contact"]);

    const home = primaryNavigation.find((item) => item.label === "Home");
    expect(home?.children).toBeUndefined();

    const buy = primaryNavigation.find((item) => item.label === "Buy");
    expect(buy?.children?.map((item) => item.label)).toEqual([
      "Top Buyer Tips",
      "Marina Del Palma",
      "Palm Harbor",
      "Grand Haven",
      "The Conservatory at Hammock Beach",
      "Hammock Dunes",
      "Tidelands",
    ]);

    const about = primaryNavigation.find((item) => item.label === "About");
    expect(about?.children?.map((item) => item.label)).toEqual(["Contact", "Book an Appointment", "Reviews"]);

    const sell = primaryNavigation.find((item) => item.label === "Sell");
    expect(sell?.children?.map((item) => item.label)).toEqual([
      "Cash Offer",
      "Sell My Home",
      "What's My Home Worth?",
      "Top Dollar Tips",
    ]);

    const contactEntries = primaryNavigation.filter((item) => item.href === "/contact");
    expect(contactEntries.some((item) => !item.children)).toBe(true);
  });

  it("keeps community pages in sync with the Buy dropdown", () => {
    expect(communities.map((community) => community.href)).toEqual([
      "/buy/marina-del-palma",
      "/buy/palm-harbor",
      "/buy/grand-haven",
      "/buy/the-conservatory-at-hammock-beach",
      "/buy/hammock-dunes",
      "/buy/tidelands",
    ]);

    for (const community of communities) {
      expect(community.highlights.length).toBeGreaterThan(0);
      expect(community.description.length).toBeGreaterThan(0);
    }
  });

  it("keeps replaceable placeholder content outside component logic", () => {
    expect(siteConfig.name).toBe("Claire Swartzlander");
    expect(siteConfig.brokerage).toBe("RE/MAX Signature");
    expect(testimonials.length).toBeGreaterThanOrEqual(6);
    expect(aboutHighlights.length).toBeGreaterThanOrEqual(4);
    expect(topBuyerTips.length).toBeGreaterThanOrEqual(6);
    expect(topDollarTips.length).toBeGreaterThanOrEqual(6);
    expect(footerLinks.length).toBeGreaterThanOrEqual(4);
    expect(contactItems.length).toBe(3);
  });

  it("defines metadata for every top-level and sub-navigation page", () => {
    expect(Object.keys(pageMetadata)).toEqual(
      expect.arrayContaining(["home", "buy", "about", "sell", "reviews", "contact", "bookAppointment"]),
    );
  });
});
