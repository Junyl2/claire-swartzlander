import {
  Award,
  Building2,
  Compass,
  Factory,
  Hammer,
  Home,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ServiceMenuGroup = {
  title: string;
  href: string;
  items: NavItem[];
};

export type ImageToken = {
  src: string;
  alt: string;
  label: string;
};

export type Service = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  image: ImageToken;
  icon: LucideIcon;
  details: string[];
};

export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: ImageToken;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
};

export type CareerRole = {
  title: string;
  location: string;
  type: string;
  description: string;
};

export type ServiceArea = {
  city: string;
  region: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};

export type HomePagePreview = {
  label: string;
  href: string;
  kicker: string;
  title: string;
  description: string;
  layout: "split" | "stacked" | "offset" | "services-bento" | "projects-editorial" | "about-editorial" | "review-feature";
  images: [ImageToken, ImageToken];
  details: string[];
};

export type HomeServiceCategoryPreview = {
  title: string;
  href: string;
  image: ImageToken;
  serviceCount: number;
  previewItems: string[];
};

export type HomeProjectPreview = {
  title: string;
  category: string;
  image: ImageToken;
};

export const siteConfig = {
  name: "Company Name",
  tagline: "Premium Construction Company",
  url: "https://example.com",
  phone: "+13862372856",
  email: "erecapital@gmail.com",
  address: "000 Landmark Avenue, City, Region 00000",
  hours: "Mon-Fri 08:00-18:00",
  socials: [
    { label: "LinkedIn", href: "https://example.com" },
    { label: "Instagram", href: "https://example.com" },
    { label: "Facebook", href: "https://example.com" },
  ],
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

const toServiceHref = (group: string, item: string) =>
  `/services#${`${group}-${item}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export const serviceMenuGroups: ServiceMenuGroup[] = [
  {
    title: "Pool Care",
    href: "/services#pool-care",
    items: [
      { label: "Maintenance", href: toServiceHref("pool-care", "maintenance") },
      { label: "Resurfacing", href: toServiceHref("pool-care", "resurfacing") },
      { label: "Design", href: toServiceHref("pool-care", "design") },
      { label: "Motor Repair", href: toServiceHref("pool-care", "motor-repair") },
      { label: "Pump Installation", href: toServiceHref("pool-care", "pump-installation") },
    ],
  },
  {
    title: "Lawn Care",
    href: "/services#lawn-care",
    items: [
      { label: "Lawn Maintenance", href: toServiceHref("lawn-care", "lawn-maintenance") },
      { label: "Gardening", href: toServiceHref("lawn-care", "gardening") },
      { label: "Landscaping", href: toServiceHref("lawn-care", "landscaping") },
      { label: "Irrigation", href: toServiceHref("lawn-care", "irrigation") },
      { label: "Insecticide", href: toServiceHref("lawn-care", "insecticide") },
      { label: "Herbicide", href: toServiceHref("lawn-care", "herbicide") },
      { label: "Fertilizing", href: toServiceHref("lawn-care", "fertilizing") },
    ],
  },
  {
    title: "Renovation",
    href: "/services#renovation",
    items: [
      { label: "Flooring", href: toServiceHref("renovation", "flooring") },
      { label: "Cabinets", href: toServiceHref("renovation", "cabinets") },
      { label: "Painting", href: toServiceHref("renovation", "painting") },
      { label: "Bathrooms", href: toServiceHref("renovation", "bathrooms") },
      { label: "Kitchens", href: toServiceHref("renovation", "kitchens") },
      { label: "Carpentry", href: toServiceHref("renovation", "carpentry") },
    ],
  },
  {
    title: "Construction",
    href: "/services#construction",
    items: [
      { label: "Dry Wall", href: toServiceHref("construction", "dry-wall") },
      { label: "Insulation", href: toServiceHref("construction", "insulation") },
      { label: "Soffit & Fascia", href: toServiceHref("construction", "soffit-fascia") },
      { label: "Stucco", href: toServiceHref("construction", "stucco") },
      { label: "Concrete", href: toServiceHref("construction", "concrete") },
      { label: "Screen Enclosures", href: toServiceHref("construction", "screen-enclosures") },
    ],
  },
  {
    title: "Landscaping",
    href: "/services#landscaping",
    items: [
      { label: "Custom Design", href: toServiceHref("landscaping", "custom-design") },
      { label: "Rocks, Mulch & Sod", href: toServiceHref("landscaping", "rocks-mulch-sod") },
      { label: "Tree Cutting", href: toServiceHref("landscaping", "tree-cutting") },
      { label: "Plants", href: toServiceHref("landscaping", "plants") },
      { label: "Pruning", href: toServiceHref("landscaping", "pruning") },
      { label: "Pavers", href: toServiceHref("landscaping", "pavers") },
      { label: "Wells", href: toServiceHref("landscaping", "wells") },
      { label: "Lighting", href: toServiceHref("landscaping", "lighting") },
      { label: "Fences", href: toServiceHref("landscaping", "fences") },
      { label: "Pressure Washing", href: toServiceHref("landscaping", "pressure-washing") },
    ],
  },
  {
    title: "Site Services",
    href: "/services#site-services",
    items: [
      { label: "Skid Steers", href: toServiceHref("site-services", "skid-steers") },
      { label: "Dump Trucks", href: toServiceHref("site-services", "dump-trucks") },
      { label: "Dump Trailers", href: toServiceHref("site-services", "dump-trailers") },
      { label: "Logistics", href: toServiceHref("site-services", "logistics") },
      { label: "John Deere Tractor", href: toServiceHref("site-services", "john-deere-tractor") },
      { label: "Lot Clearing", href: toServiceHref("site-services", "lot-clearing") },
      { label: "Demolition", href: toServiceHref("site-services", "demolition") },
      { label: "Land Grading", href: toServiceHref("site-services", "land-grading") },
      { label: "Land Mulching", href: toServiceHref("site-services", "land-mulching") },
    ],
  },
  {
    title: "Cleaning",
    href: "/services#cleaning",
    items: [
      { label: "Residential Homes", href: toServiceHref("cleaning", "residential-homes") },
      { label: "Commercial Properties", href: toServiceHref("cleaning", "commercial-properties") },
      { label: "Offices & HOA Common Areas", href: toServiceHref("cleaning", "offices-hoa-common-areas") },
    ],
  },
];

const homeServicePreviewImages: ImageToken[] = [
  { src: "/project/erecare-project-01.jpeg", alt: "ERE CARE service preview image for pool care", label: "Pool Care" },
  { src: "/project/erecare-project-02.jpeg", alt: "ERE CARE service preview image for lawn care", label: "Lawn Care" },
  { src: "/project/erecare-project-03.jpeg", alt: "ERE CARE service preview image for renovation", label: "Renovation" },
  { src: "/project/erecare-project-04.jpeg", alt: "ERE CARE service preview image for construction", label: "Construction" },
  { src: "/project/erecare-project-05.jpeg", alt: "ERE CARE service preview image for landscaping", label: "Landscaping" },
];

export const homeServicePreviewCategories: HomeServiceCategoryPreview[] = serviceMenuGroups.slice(0, 5).map((group, index) => ({
  title: group.title,
  href: group.href,
  image: homeServicePreviewImages[index],
  serviceCount: group.items.length,
  previewItems: group.items.slice(0, 2).map((item) => item.label),
}));

export const homeProjectPreviewProjects: HomeProjectPreview[] = [
  {
    title: "Property Work 01",
    category: "Construction",
    image: { src: "/project/erecare-project-01.jpeg", alt: "ERE CARE construction project image one", label: "Field Work" },
  },
  {
    title: "Property Work 02",
    category: "Construction",
    image: { src: "/project/erecare-project-02.jpeg", alt: "ERE CARE construction project image two", label: "Site Progress" },
  },
  {
    title: "Property Work 03",
    category: "Construction",
    image: { src: "/project/erecare-project-03.jpeg", alt: "ERE CARE construction project image three", label: "Structural Work" },
  },
  {
    title: "Property Work 04",
    category: "Construction",
    image: { src: "/project/erecare-project-04.jpeg", alt: "ERE CARE construction project image four", label: "Field Detail" },
  },
  {
    title: "Property Work 05",
    category: "Construction",
    image: { src: "/project/erecare-project-05.jpeg", alt: "ERE CARE construction project image five", label: "Active Site" },
  },
  {
    title: "Property Work 06",
    category: "Construction",
    image: { src: "/project/erecare-project-06.jpeg", alt: "ERE CARE construction project image six", label: "Coastal Work" },
  },
];

export const heroSlides: ImageToken[] = [
  {
    src: "/hero/hero-1.jpeg",
    alt: "Construction hero image one",
    label: "Structural Works",
  },
  {
    src: "/hero/hero-2.jpeg",
    alt: "Construction hero image two",
    label: "Craft Detail",
  },
  {
    src: "/hero/hero-3.jpeg",
    alt: "Construction hero image three",
    label: "Engineering Precision",
  },
];

export const services: Service[] = [
  {
    title: "Pool Care & Equipment",
    slug: "pool-care-equipment",
    eyebrow: "Pool Care",
    description: "Maintenance, resurfacing, design support, pump installation, and motor repair delivered with clean scheduling and trade-level follow-through.",
    image: { src: "/placeholders/site.svg", alt: "Pool care service placeholder", label: "Pool Care" },
    icon: Building2,
    details: ["Maintenance routes", "Resurfacing", "Pumps & motors"],
  },
  {
    title: "Lawn Care & Grounds",
    slug: "lawn-care-grounds",
    eyebrow: "Lawn Care",
    description: "Reliable mowing, gardening, irrigation, fertilizing, herbicide, insecticide, and landscape upkeep for properties that need steady curb appeal.",
    image: { src: "/placeholders/equipment.svg", alt: "Lawn care service placeholder", label: "Grounds Care" },
    icon: Home,
    details: ["Lawn maintenance", "Irrigation", "Fertilizing"],
  },
  {
    title: "Renovation & Interior Trades",
    slug: "renovation-interior-trades",
    eyebrow: "Renovation",
    description: "Flooring, cabinets, painting, bathrooms, kitchens, and carpentry managed with the fit, sequencing, and finish control expected on lived-in properties.",
    image: { src: "/placeholders/interior.svg", alt: "Renovation service placeholder", label: "Interior Trades" },
    icon: Landmark,
    details: ["Kitchens & baths", "Cabinets", "Finish carpentry"],
  },
  {
    title: "Construction & Exterior Systems",
    slug: "construction-exterior-systems",
    eyebrow: "Construction",
    description: "Drywall, insulation, soffit, fascia, stucco, concrete, and screen enclosures handled by coordinated crews who understand structure and weather exposure.",
    image: { src: "/placeholders/project.svg", alt: "Construction service placeholder", label: "Exterior Systems" },
    icon: Compass,
    details: ["Concrete", "Stucco", "Screen enclosures"],
  },
  {
    title: "Landscape Design & Hardscape",
    slug: "landscape-design-hardscape",
    eyebrow: "Landscaping",
    description: "Custom planting, rocks, mulch, sod, pruning, pavers, wells, lighting, fences, tree cutting, and pressure washing shaped around the full exterior.",
    image: { src: "/placeholders/office.svg", alt: "Landscaping service placeholder", label: "Landscape Works" },
    icon: Hammer,
    details: ["Pavers & lighting", "Tree work", "Pressure washing"],
  },
  {
    title: "Site Services & Heavy Support",
    slug: "site-services-heavy-support",
    eyebrow: "Site Services",
    description: "Skid steers, dump trucks, dump trailers, logistics, tractor work, lot clearing, demolition, grading, and mulching for serious property preparation.",
    image: { src: "/placeholders/hero-engineering.svg", alt: "Site service equipment placeholder", label: "Site Services" },
    icon: Factory,
    details: ["Lot clearing", "Demolition", "Land grading"],
  },
  {
    title: "Residential & Commercial Cleaning",
    slug: "residential-commercial-cleaning",
    eyebrow: "Cleaning",
    description: "Interior cleaning for homes, commercial properties, offices, and HOA common areas, with the same discipline applied to construction punch lists.",
    image: { src: "/placeholders/office.svg", alt: "Cleaning service placeholder", label: "Cleaning" },
    icon: ShieldCheck,
    details: ["Homes", "Commercial spaces", "HOA common areas"],
  },
];

export const projects: Project[] = [
  {
    title: "Complete Exterior Renewal",
    category: "Exterior",
    location: "Residential Estate",
    year: "2026",
    description: "Landscape refresh, pressure washing, paver repair, lighting updates, and final cleaning brought under one property plan.",
    image: { src: "/placeholders/project.svg", alt: "Exterior renewal placeholder", label: "Exterior Renewal" },
  },
  {
    title: "Kitchen & Bath Finish Package",
    category: "Renovation",
    location: "Private Home",
    year: "2025",
    description: "Cabinets, flooring, carpentry, painting, and bathroom detailing delivered as a coordinated interior scope.",
    image: { src: "/placeholders/interior.svg", alt: "Interior renovation placeholder", label: "Interior Renewal" },
  },
  {
    title: "Pool Deck & Equipment Reset",
    category: "Pool Care",
    location: "HOA Community",
    year: "2025",
    description: "Pump installation, equipment service, resurfacing coordination, screen enclosure repairs, and cleaning.",
    image: { src: "/placeholders/site.svg", alt: "Pool deck placeholder", label: "Pool Upgrade" },
  },
  {
    title: "Lot Clearing & Grade Prep",
    category: "Site Services",
    location: "Future Build Site",
    year: "2024",
    description: "Skid steer work, dump trailer support, vegetation clearing, mulching, and grading prepared the property for construction.",
    image: { src: "/placeholders/equipment.svg", alt: "Lot clearing placeholder", label: "Site Prep" },
  },
  {
    title: "Stucco, Soffit & Fascia Repair",
    category: "Construction",
    location: "Coastal Property",
    year: "2024",
    description: "Weather-facing exterior systems were repaired, sealed, painted, and cleaned for a sharper, longer-lasting envelope.",
    image: { src: "/placeholders/hero-craft.svg", alt: "Exterior construction placeholder", label: "Exterior Systems" },
  },
  {
    title: "Lawn, Irrigation & Planting Program",
    category: "Grounds Care",
    location: "Commercial Property",
    year: "2023",
    description: "Recurring maintenance, fertilizing, irrigation checks, pruning, and seasonal planting kept the exterior consistent.",
    image: { src: "/placeholders/hero-engineering.svg", alt: "Grounds care placeholder", label: "Grounds Program" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The crew treated the property like a coordinated construction site, even though the scope included cleaning, repairs, and landscape work.",
    name: "Client Name",
    company: "Property Holdings",
    role: "Owner Representative",
    rating: 5,
  },
  {
    quote: "They separated the urgent work from the upgrades, scheduled the right crews, and kept communication clear the entire time.",
    name: "Client Name",
    company: "Estate Group",
    role: "Property Manager",
    rating: 5,
  },
  {
    quote: "The finish quality was strong, but what stood out was how cleanly they moved from exterior repairs to final site cleanup.",
    name: "Client Name",
    company: "Coastal Capital",
    role: "Asset Manager",
    rating: 5,
  },
  {
    quote: "Pool equipment, pavers, lawn care, and pressure washing were handled as one organized property plan.",
    name: "Client Name",
    company: "Harbor Studio",
    role: "Facilities Lead",
    rating: 5,
  },
  {
    quote: "The project cadence stayed transparent from walkthrough to closeout, with no guessing about who was coming next.",
    name: "Client Name",
    company: "Porta Partners",
    role: "Operations Director",
    rating: 5,
  },
  {
    quote: "Their craftsmanship reads in the visible details, and their maintenance mindset shows in the way the property was left.",
    name: "Client Name",
    company: "Magna Estates",
    role: "Owner Representative",
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  { value: "00+", label: "Years In The Field", description: "Property service experience across exterior, interior, and site work." },
  { value: "000", label: "Scopes Coordinated", description: "Small repairs, recurring care, and multi-trade upgrades." },
  { value: "00", label: "Service Categories", description: "Construction, renovation, landscaping, pool, lawn, site, and cleaning." },
  { value: "00%", label: "Repeat Service Focus", description: "Built for owners who need reliable long-term property support." },
];

export const values = [
  { title: "Field Precision", icon: Compass, description: "Clear scopes, clean scheduling, and crews that arrive ready to solve the actual site condition." },
  { title: "Property Stewardship", icon: ShieldCheck, description: "Every repair, route, and renovation is treated as part of the long-term property value." },
  { title: "Trade Craft", icon: Award, description: "Finish details matter, whether the work is drywall, pavers, pool equipment, or pressure washing." },
  { title: "Owner Partnership", icon: Users, description: "We keep communication direct so owners, managers, and HOAs know what is happening next." },
];

export const processSteps = [
  { title: "Walkthrough", description: "We confirm the condition, priorities, access, and service category before pricing the work." },
  { title: "Scope", description: "The plan separates urgent repairs, recurring care, and upgrade work so decisions stay clean." },
  { title: "Scheduling", description: "Crews, materials, equipment, and site access are coordinated before work begins." },
  { title: "Field Work", description: "Construction, grounds, pool, cleaning, or site tasks are executed with documented progress." },
  { title: "Closeout", description: "We review finish quality, clean the work area, and confirm any next maintenance steps." },
];

export const careerRoles: CareerRole[] = [
  {
    title: "Property Services Manager",
    location: "Local Service Area",
    type: "Full Time",
    description: "Coordinate crews across renovation, exterior work, cleaning, pool care, landscaping, and recurring property routes.",
  },
  {
    title: "Field Crew Lead",
    location: "Local Service Area",
    type: "Full Time",
    description: "Lead day-to-day service work, protect jobsite standards, and keep owners informed as scopes move forward.",
  },
  {
    title: "Estimator & Scope Coordinator",
    location: "Hybrid",
    type: "Full Time",
    description: "Translate walkthrough notes into clear scopes for repairs, upgrades, maintenance programs, and multi-trade projects.",
  },
];

export const serviceAreas: ServiceArea[] = [
  { city: "North Route", region: "North", description: "Recurring lawn, pool, cleaning, and exterior maintenance for residential communities." },
  { city: "North Estates", region: "North", description: "Coordinated renovation and landscape support for private properties and HOAs." },
  { city: "East Corridor", region: "East", description: "Site services, grading, demolition, and equipment access for active property work." },
  { city: "East Waterfront", region: "East", description: "Exterior systems, pool care, cleaning, and weather-facing repair scopes." },
  { city: "South Residential", region: "South", description: "Kitchen, bath, flooring, carpentry, painting, and routine property care." },
  { city: "South Commercial", region: "South", description: "Office, common-area, exterior, landscaping, and cleaning support for managed assets." },
  { city: "West Route", region: "West", description: "Pressure washing, pavers, pruning, lighting, fences, and maintenance programs." },
  { city: "West Properties", region: "West", description: "Long-term service support for owners who need one accountable property team." },
];

export const contactItems = [
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Address", value: siteConfig.address, href: "/contact", icon: MapPin },
];

export const footerLinks: FooterGroup[] = [
  { title: "Pages", links: navigation },
  {
    title: "Services",
    links: services.slice(0, 6).map((service) => ({ label: service.title, href: `/services#${service.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Process", href: "/about#process" },
      { label: "Careers", href: "/careers" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: siteConfig.socials,
  },
];

export const pageCopy = {
  home: {
    eyebrow: "Construction-Led Property Services",
    title: "One-call property care, managed with construction discipline.",
    description: "ERE CARE coordinates maintenance, renovation, pool care, lawn service, landscaping, site work, cleaning, and exterior repairs through one trusted property team.",
  },
  services: {
    title: "Every property scope, organized under one field standard.",
    description: "From drywall and concrete to pool equipment, pavers, grading, mowing, and cleaning, each service is planned with construction-level discipline.",
  },
  about: {
    title: "A property services partner, grounded in construction control.",
    description: "We bring contractor thinking to the everyday demands of property care: clear scope, reliable crews, practical sequencing, and sharp finish standards.",
  },
  projects: {
    title: "Completed property work, from site prep to final polish.",
    description: "A cross-section of renovation, exterior repair, pool care, grounds programs, hardscape, cleaning, and heavy site support.",
  },
  reviews: {
    title: "Client confidence, earned through steady field delivery.",
    description: "Owners, managers, and property teams depend on clear communication, careful work areas, and crews that close the loop.",
  },
  careers: {
    title: "Build a trade career, where property work is done properly.",
    description: "Join a field-minded team that values ownership, practical skill, and pride in the details across construction and property services.",
  },
  serviceAreas: {
    title: "Local coverage, coordinated for real property demands.",
    description: "Responsive service coverage for recurring care, one-time repairs, exterior upgrades, renovations, cleaning, and site preparation.",
  },
  contact: {
    title: "Start with the property, then build the right scope.",
    description: "Tell us what needs attention, from urgent repairs to recurring maintenance or a multi-trade upgrade, and we will help define the next step.",
  },
};

export const homePagePreviews: HomePagePreview[] = [
  {
    label: "Services",
    href: "/services",
    kicker: "Full-Service Property Care",
    title: "One property team, structured across the trades that matter.",
    description: "Pool care, lawn maintenance, renovation, construction, landscaping, site support, and cleaning are organized so owners can find the right scope quickly.",
    layout: "services-bento",
    images: [
      {
        src: "/project/erecare-project-01.jpeg",
        alt: "ERE CARE services preview image",
        label: "Coordinated Services",
      },
      {
        src: "/project/erecare-project-02.jpeg",
        alt: "ERE CARE services detail image",
        label: "Field Support",
      },
    ],
    details: ["Construction", "Grounds", "Cleaning"],
  },
  {
    label: "About ERE CARE",
    href: "/about",
    kicker: "Management & Maintenance",
    title: "Refined Property Care with Unwavering Dedication",
    description: "Nestled in the heart of Flagler County, our esteemed establishment has been a beacon of excellence for over 19 illustrious years. As guardians of your property's integrity, we stand ready to serve with grace and precision.\n\nIndulge in the seamless convenience of our renowned motto: \"One call does it all.\" Within moments, your concerns are met with swift resolution, leaving you to revel in the tranquility of knowing that your property is in the most capable hands.",
    layout: "about-editorial",
    images: [
      {
        src: "/hero/hero-2.jpeg",
        alt: "ERE CARE about preview image",
        label: "Company Standard",
      },
      {
        src: "/hero/hero-3.jpeg",
        alt: "ERE CARE about detail image",
        label: "Property Care",
      },
    ],
    details: ["0 Years Serving", "0 Days In Business", "0 Completed Projects", "0 Team Members"],
  },
  {
    label: "Project Work",
    href: "/projects",
    kicker: "Field Work Examples",
    title: "Real property improvements, shown by scope and condition.",
    description: "The portfolio can support quick repairs, recurring programs, and larger upgrades without forcing every job into the same project format.",
    layout: "projects-editorial",
    images: [
      {
        src: "/project/erecare-project-03.jpeg",
        alt: "ERE CARE projects preview image",
        label: "Project Overview",
      },
      {
        src: "/project/erecare-project-04.jpeg",
        alt: "ERE CARE projects detail image",
        label: "Work Detail",
      },
    ],
    details: ["Repairs", "Upgrades", "Maintenance"],
  },
  {
    label: "Client Reviews",
    href: "/reviews",
    kicker: "Trusted By Property Owners",
    title: "A homeowner’s words after ERE CARE fence work.",
    description: "Pablo and his team did a great job installing a vinyl fence around my home. They removed shrubs and old fencing from inside the property line making my yard appear larger. Pablo went above and beyond to make sure the installation was perfect. Pablo is communicative and prompt to respond. He kept me updated and is always professional and so is his crew.",
    layout: "review-feature",
    images: [
      {
        src: "/placeholders/office.svg",
        alt: "ERE CARE reviews preview image",
        label: "Client Confidence",
      },
      {
        src: "/placeholders/team.svg",
        alt: "ERE CARE reviews portrait image",
        label: "Service Experience",
      },
    ],
    details: ["Service", "Trust", "Results"],
  },
  {
    label: "Careers With ERE CARE",
    href: "/careers",
    kicker: "Trade Careers",
    title: "A place for people who take property work seriously.",
    description: "The careers page is ready for trade roles, crew leadership, estimating, maintenance operations, and project coordination.",
    layout: "split",
    images: [
      {
        src: "/placeholders/team.svg",
        alt: "ERE CARE careers preview image",
        label: "Field Team",
      },
      {
        src: "/placeholders/office.svg",
        alt: "ERE CARE careers workplace image",
        label: "Work Standard",
      },
    ],
    details: ["Trades", "Leadership", "Open Roles"],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    kicker: "Local Service Coverage",
    title: "Local routes, equipment access, and accountable response.",
    description: "Coverage language is built for real service areas, not vague regional promises, with room for recurring routes and special project calls.",
    layout: "stacked",
    images: [
      {
        src: "/placeholders/map.svg",
        alt: "ERE CARE service areas preview image",
        label: "Coverage Map",
      },
      {
        src: "/placeholders/site.svg",
        alt: "ERE CARE service areas detail image",
        label: "Local Response",
      },
    ],
    details: ["Routes", "Regions", "Availability"],
  },
  {
    label: "Contact",
    href: "/contact",
    kicker: "Start Your Scope",
    title: "Start with the site condition, then define the work.",
    description: "The contact path is direct: share the property need, timing, and scope so the next conversation can move quickly.",
    layout: "offset",
    images: [
      {
        src: "/placeholders/office.svg",
        alt: "ERE CARE contact preview image",
        label: "Inquiry Desk",
      },
      {
        src: "/placeholders/map.svg",
        alt: "ERE CARE contact map image",
        label: "Service Location",
      },
    ],
    details: ["Inquiry", "Walkthrough", "Scope"],
  },
];

export const pageMetadata = {
  home: {
    title: "Construction-Led Property Services",
    description: "Premium full-property services website for construction, renovation, lawn care, pool care, landscaping, site services, and cleaning.",
    path: "/",
  },
  services: {
    title: "Property Services",
    description: "Construction-led service categories for renovation, exterior systems, pool care, lawn care, landscaping, site work, and cleaning.",
    path: "/services",
  },
  about: {
    title: "About The Company",
    description: "Company story, values, process, and field standards for a full-service construction and property care brand.",
    path: "/about",
  },
  projects: {
    title: "Featured Property Work",
    description: "Project showcase for renovation, exterior repair, pool work, site preparation, landscaping, and recurring property services.",
    path: "/projects",
  },
  reviews: {
    title: "Client Reviews",
    description: "Client confidence sections for a construction-led property services company.",
    path: "/reviews",
  },
  careers: {
    title: "Construction & Property Careers",
    description: "Careers page for field crews, trade roles, maintenance operations, and project coordination.",
    path: "/careers",
  },
  serviceAreas: {
    title: "Service Areas",
    description: "Local service coverage page for construction, maintenance, cleaning, landscaping, pool care, and site support.",
    path: "/service-areas",
  },
  contact: {
    title: "Contact The Company",
    description: "Contact page for property inspections, service requests, recurring maintenance, and construction-led scopes.",
    path: "/contact",
  },
};
