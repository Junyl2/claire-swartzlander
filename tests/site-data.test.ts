import { describe, expect, it } from "vitest";

import {
  careerRoles,
  footerLinks,
  navigation,
  primaryNavigation,
  projects,
  serviceMenuGroups,
  serviceAreas,
  services,
  siteConfig,
  statistics,
  testimonials,
} from "@/data/site";

describe("centralized site content", () => {
  it("defines every required top-level route", () => {
    expect(navigation.map((item) => item.href)).toEqual([
      "/",
      "/services",
      "/about",
      "/projects",
      "/reviews",
      "/careers",
      "/service-areas",
      "/contact",
    ]);
  });

  it("groups company routes into the primary navbar without losing page routes", () => {
    expect(primaryNavigation.map((item) => item.href)).toEqual([
      "/",
      "/services",
      "/about",
      "/projects",
      "/service-areas",
      "/contact",
    ]);

    expect(primaryNavigation.find((item) => item.href === "/about")?.children?.map((item) => item.href)).toEqual([
      "/about",
      "/reviews",
      "/careers",
    ]);
  });

  it("defines grouped service menu content for the desktop mega menu", () => {
    expect(serviceMenuGroups.map((group) => group.title)).toEqual([
      "Pool Care",
      "Lawn Care",
      "Renovation",
      "Construction",
      "Landscaping",
      "Site Services",
      "Cleaning",
    ]);

    expect(serviceMenuGroups.find((group) => group.title === "Pool Care")?.items.map((item) => item.label)).toEqual([
      "Maintenance",
      "Resurfacing",
      "Design",
      "Motor Repair",
      "Pump Installation",
    ]);
  });

  it("keeps replaceable placeholder content outside component logic", () => {
    expect(siteConfig.name).toBe("Company Name");
    expect(services.length).toBeGreaterThanOrEqual(6);
    expect(projects.length).toBeGreaterThanOrEqual(6);
    expect(testimonials.length).toBeGreaterThanOrEqual(6);
    expect(statistics.length).toBeGreaterThanOrEqual(4);
    expect(careerRoles.length).toBeGreaterThanOrEqual(3);
    expect(serviceAreas.length).toBeGreaterThanOrEqual(8);
    expect(footerLinks.length).toBeGreaterThanOrEqual(4);
  });
});
