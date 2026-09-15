import { describe, expect, it } from "vitest";

import {
  aboutHighlights,
  communities,
  communityDirectory,
  contactItems,
  footerLinks,
  navigation,
  neighborhoods,
  pageMetadata,
  primaryNavigation,
  siteConfig,
  testimonials,
  topBuyerTips,
  topDollarTips,
} from "@/data/site";

describe("centralized site content", () => {
  it("defines every required top-level route", () => {
    expect(navigation.map((item) => item.href)).toEqual([
      "/",
      "/buy",
      "/communities",
      "/neighborhoods",
      "/reviews",
      "/about",
      "/sell",
      "/contact",
    ]);
  });

  it("builds the primary navigation with the required hierarchy", () => {
    expect(primaryNavigation.map((item) => item.label)).toEqual([
      "Communities",
      "Neighborhoods",
      "Reviews",
      "About",
      "Buy",
      "Sell",
      "Contact",
    ]);

    const buy = primaryNavigation.find((item) => item.label === "Buy");
    expect(buy?.children?.map((item) => item.label)).toEqual([
      "Featured Listings",
      "Top Buyer Tips",
      "Marina Del Palma",
      "Palm Harbor",
      "Grand Haven",
      "The Conservatory at Hammock Beach",
      "Hammock Dunes",
      "Tidelands",
    ]);

    const communitiesNav = primaryNavigation.find((item) => item.label === "Communities");
    expect(communitiesNav?.href).toBe("/communities");
    expect(communitiesNav?.children).toBeUndefined();

    const neighborhoodsNav = primaryNavigation.find((item) => item.label === "Neighborhoods");
    expect(neighborhoodsNav?.href).toBe("/neighborhoods");
    expect(neighborhoodsNav?.children).toBeUndefined();

    const reviewsNav = primaryNavigation.find((item) => item.label === "Reviews");
    expect(reviewsNav?.href).toBe("/reviews");
    expect(reviewsNav?.children).toBeUndefined();

    const about = primaryNavigation.find((item) => item.label === "About");
    expect(about?.children?.map((item) => item.label)).toEqual(["Contact", "Book an Appointment"]);

    const sell = primaryNavigation.find((item) => item.label === "Sell");
    expect(sell?.children?.map((item) => item.label)).toEqual(["Sell My Home", "Home Valuation"]);

    const contactEntries = primaryNavigation.filter((item) => item.href === "/contact");
    expect(contactEntries.some((item) => !item.children)).toBe(true);
  });

  it("defines the neighborhoods and communities directories", () => {
    expect(neighborhoods.length).toBeGreaterThanOrEqual(11);
    for (const neighborhood of neighborhoods) {
      expect(neighborhood.sections.length).toBeGreaterThan(0);
    }

    expect(communityDirectory.length).toBeGreaterThanOrEqual(25);
    const grandHaven = communityDirectory.find((item) => item.name === "Grand Haven");
    expect(grandHaven?.href).toBe("/buy/grand-haven");

    const subItems = communityDirectory.filter((item) => item.parent === "Grand Haven");
    expect(subItems.map((item) => item.name)).toEqual(["The Crossings", "Wild Oaks"]);
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
