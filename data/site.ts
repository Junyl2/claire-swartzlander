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
  layout: "split" | "stacked" | "offset" | "services-bento" | "projects-editorial" | "about-editorial";
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

export const siteConfig = {
  name: "Company Name",
  tagline: "Premium Construction Company",
  url: "https://example.com",
  phone: "+1 (000) 000-0000",
  email: "hello@companyname.com",
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
  { src: "/placeholders/site.svg", alt: "Pool care preview placeholder", label: "Pool Care" },
  { src: "/placeholders/equipment.svg", alt: "Lawn care preview placeholder", label: "Lawn Care" },
  { src: "/placeholders/interior.svg", alt: "Renovation preview placeholder", label: "Renovation" },
  { src: "/placeholders/project.svg", alt: "Construction preview placeholder", label: "Construction" },
  { src: "/placeholders/office.svg", alt: "Landscaping preview placeholder", label: "Landscaping" },
];

export const homeServicePreviewCategories: HomeServiceCategoryPreview[] = serviceMenuGroups.slice(0, 5).map((group, index) => ({
  title: group.title,
  href: group.href,
  image: homeServicePreviewImages[index],
  serviceCount: group.items.length,
  previewItems: group.items.slice(0, 2).map((item) => item.label),
}));

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
    title: "Commercial Construction",
    slug: "commercial-construction",
    eyebrow: "Commercial",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.",
    image: { src: "/placeholders/site.svg", alt: "Commercial construction placeholder", label: "Commercial Site" },
    icon: Building2,
    details: ["Lorem ipsum planning", "Aenean lacinia bibendum", "Vestibulum id ligula porta"],
  },
  {
    title: "Luxury Residential",
    slug: "luxury-residential",
    eyebrow: "Residential",
    description: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
    image: { src: "/placeholders/interior.svg", alt: "Luxury residential placeholder", label: "Residential Craft" },
    icon: Home,
    details: ["Praesent commodo cursus", "Maecenas sed diam", "Nullam quis risus"],
  },
  {
    title: "Civil Engineering",
    slug: "civil-engineering",
    eyebrow: "Infrastructure",
    description: "Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
    image: { src: "/placeholders/equipment.svg", alt: "Civil engineering equipment placeholder", label: "Civil Engineering" },
    icon: Landmark,
    details: ["Morbi leo risus", "Porta ac consectetur", "Egestas eget quam"],
  },
  {
    title: "Design-Build Delivery",
    slug: "design-build-delivery",
    eyebrow: "Integrated",
    description: "Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    image: { src: "/placeholders/office.svg", alt: "Design build office placeholder", label: "Design Studio" },
    icon: Compass,
    details: ["Concept coordination", "Procurement sequencing", "Site execution"],
  },
  {
    title: "Restoration & Renovation",
    slug: "restoration-renovation",
    eyebrow: "Adaptive",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    image: { src: "/placeholders/project.svg", alt: "Restoration project placeholder", label: "Restoration Works" },
    icon: Hammer,
    details: ["Material review", "Phased delivery", "Heritage sensitivity"],
  },
  {
    title: "Industrial Facilities",
    slug: "industrial-facilities",
    eyebrow: "Industrial",
    description: "Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.",
    image: { src: "/placeholders/hero-engineering.svg", alt: "Industrial facility placeholder", label: "Industrial Facility" },
    icon: Factory,
    details: ["Operational continuity", "Technical coordination", "Long-span systems"],
  },
];

export const projects: Project[] = [
  {
    title: "Lorem Tower Redevelopment",
    category: "Commercial",
    location: "City Center",
    year: "2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet.",
    image: { src: "/placeholders/project.svg", alt: "Commercial tower placeholder", label: "Tower Redevelopment" },
  },
  {
    title: "Amet Private Residence",
    category: "Residential",
    location: "North District",
    year: "2025",
    description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta.",
    image: { src: "/placeholders/interior.svg", alt: "Private residence placeholder", label: "Private Residence" },
  },
  {
    title: "Consectetur Civic Hall",
    category: "Institutional",
    location: "Harbor Quarter",
    year: "2025",
    description: "Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.",
    image: { src: "/placeholders/site.svg", alt: "Civic hall placeholder", label: "Civic Hall" },
  },
  {
    title: "Vestibulum Logistics Campus",
    category: "Industrial",
    location: "West Corridor",
    year: "2024",
    description: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    image: { src: "/placeholders/equipment.svg", alt: "Logistics campus placeholder", label: "Logistics Campus" },
  },
  {
    title: "Porta Mixed-Use Quarter",
    category: "Mixed Use",
    location: "Financial District",
    year: "2024",
    description: "Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.",
    image: { src: "/placeholders/hero-craft.svg", alt: "Mixed-use quarter placeholder", label: "Mixed-Use Quarter" },
  },
  {
    title: "Magna Engineering Annex",
    category: "Engineering",
    location: "Innovation Park",
    year: "2023",
    description: "Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus.",
    image: { src: "/placeholders/hero-engineering.svg", alt: "Engineering annex placeholder", label: "Engineering Annex" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The delivery felt composed, exacting, and deeply professional.",
    name: "Client Name",
    company: "Placeholder Holdings",
    role: "Managing Director",
    rating: 5,
  },
  {
    quote: "Praesent commodo cursus magna, vel scelerisque nisl consectetur. Every meeting carried clarity and control.",
    name: "Client Name",
    company: "Amet Group",
    role: "Development Lead",
    rating: 5,
  },
  {
    quote: "Cras mattis consectetur purus sit amet fermentum. Their site discipline and finish quality were exceptional.",
    name: "Client Name",
    company: "Lorem Capital",
    role: "Asset Manager",
    rating: 5,
  },
  {
    quote: "Integer posuere erat a ante venenatis dapibus. Complex decisions were handled with calm precision.",
    name: "Client Name",
    company: "Consectetur Studio",
    role: "Principal Architect",
    rating: 5,
  },
  {
    quote: "Etiam porta sem malesuada magna mollis euismod. The project cadence was transparent from start to closeout.",
    name: "Client Name",
    company: "Porta Partners",
    role: "Operations Director",
    rating: 5,
  },
  {
    quote: "Donec ullamcorper nulla non metus auctor fringilla. Their craftsmanship reads in every detail.",
    name: "Client Name",
    company: "Magna Estates",
    role: "Owner Representative",
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  { value: "00+", label: "Years Placeholder", description: "Lorem ipsum dolor sit amet consectetur." },
  { value: "000", label: "Projects Placeholder", description: "Cras mattis consectetur purus sit amet." },
  { value: "00", label: "Regions Placeholder", description: "Aenean lacinia bibendum nulla sed." },
  { value: "00%", label: "Repeat Placeholder", description: "Integer posuere erat a ante venenatis." },
];

export const values = [
  { title: "Precision", icon: Compass, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Stewardship", icon: ShieldCheck, description: "Cras mattis consectetur purus sit amet fermentum." },
  { title: "Craft", icon: Award, description: "Aenean lacinia bibendum nulla sed consectetur." },
  { title: "Partnership", icon: Users, description: "Donec ullamcorper nulla non metus auctor fringilla." },
];

export const processSteps = [
  { title: "Discovery", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Preconstruction", description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus." },
  { title: "Procurement", description: "Integer posuere erat a ante venenatis dapibus posuere velit." },
  { title: "Construction", description: "Maecenas sed diam eget risus varius blandit sit amet." },
  { title: "Closeout", description: "Etiam porta sem malesuada magna mollis euismod." },
];

export const careerRoles: CareerRole[] = [
  {
    title: "Project Manager",
    location: "City, Region",
    type: "Full Time",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero.",
  },
  {
    title: "Site Superintendent",
    location: "City, Region",
    type: "Full Time",
    description: "Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.",
  },
  {
    title: "Preconstruction Estimator",
    location: "Hybrid",
    type: "Full Time",
    description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export const serviceAreas: ServiceArea[] = [
  { city: "Lorem City", region: "North", description: "Premium construction coverage for urban and residential work." },
  { city: "Amet District", region: "North", description: "Coordinated delivery for private and commercial clients." },
  { city: "Porta Harbor", region: "East", description: "Industrial, civic, and waterfront construction support." },
  { city: "Magna Valley", region: "East", description: "Regional construction management and site operations." },
  { city: "Cursus Heights", region: "South", description: "Luxury residential and renovation delivery." },
  { city: "Venenatis Park", region: "South", description: "Commercial fit-out and design-build delivery." },
  { city: "Bibendum Quarter", region: "West", description: "Engineering-led project coordination and planning." },
  { city: "Fringilla Coast", region: "West", description: "Long-term project support and construction advisory." },
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
    eyebrow: "Premium Construction Company",
    title: "Lorem ipsum construction shaped with architectural discipline.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  services: {
    title: "Services shaped for complex sites and lasting architecture.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque.",
  },
  about: {
    title: "A construction partner with editorial restraint and engineering control.",
    description: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  projects: {
    title: "Selected work across commercial, residential, civic, and industrial sites.",
    description: "Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.",
  },
  reviews: {
    title: "Client confidence expressed through disciplined delivery.",
    description: "Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.",
  },
  careers: {
    title: "Build a career inside a culture of precision and craft.",
    description: "Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.",
  },
  serviceAreas: {
    title: "Regional construction coverage with consistent project control.",
    description: "Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.",
  },
  contact: {
    title: "Start a conversation about your next construction project.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis est non commodo luctus.",
  },
};

export const homePagePreviews: HomePagePreview[] = [
  {
    label: "Services",
    href: "/services",
    kicker: "Services Preview",
    title: "Service-led editorial layouts preview the specialist pages without collapsing into generic cards.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    layout: "services-bento",
    images: [
      {
        src: "/placeholders/site.svg",
        alt: "Services preview placeholder",
        label: "Commercial Scope",
      },
      {
        src: "/placeholders/equipment.svg",
        alt: "Services detail placeholder",
        label: "Civil Detail",
      },
    ],
    details: ["Commercial", "Residential", "Engineering"],
  },
  {
    label: "About",
    href: "/about",
    kicker: "About Preview",
    title: "The company story reads like a premium journal spread with leadership, values, and timeline placeholders.",
    description: "Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.",
    layout: "about-editorial",
    images: [
      {
        src: "/hero/hero-2.jpeg",
        alt: "About preview placeholder",
        label: "Leadership Story",
      },
      {
        src: "/hero/hero-3.jpeg",
        alt: "About detail placeholder",
        label: "Studio Context",
      },
    ],
    details: ["Mission", "Values", "Timeline"],
  },
  {
    label: "Projects",
    href: "/projects",
    kicker: "Projects Preview",
    title: "Project storytelling gets its own image-first preview language before visitors move into the full portfolio.",
    description: "Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.",
    layout: "projects-editorial",
    images: [
      {
        src: "/placeholders/project.svg",
        alt: "Projects preview placeholder",
        label: "Portfolio Feature",
      },
      {
        src: "/placeholders/interior.svg",
        alt: "Projects detail placeholder",
        label: "Interior Finish",
      },
    ],
    details: ["Portfolio", "Categories", "Locations"],
  },
  {
    label: "Reviews",
    href: "/reviews",
    kicker: "Reviews Preview",
    title: "Client confidence appears as a distinct review destination, not a leftover testimonial strip.",
    description: "Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus.",
    layout: "offset",
    images: [
      {
        src: "/placeholders/office.svg",
        alt: "Reviews preview placeholder",
        label: "Client Setting",
      },
      {
        src: "/placeholders/team.svg",
        alt: "Reviews portrait placeholder",
        label: "Leadership Testimonial",
      },
    ],
    details: ["Testimonials", "Quotes", "Ratings"],
  },
  {
    label: "Careers",
    href: "/careers",
    kicker: "Careers Preview",
    title: "The hiring experience is previewed with workplace atmosphere and role-oriented editorial structure.",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    layout: "split",
    images: [
      {
        src: "/placeholders/team.svg",
        alt: "Careers preview placeholder",
        label: "Team Culture",
      },
      {
        src: "/placeholders/office.svg",
        alt: "Careers workplace placeholder",
        label: "Workplace Rhythm",
      },
    ],
    details: ["Culture", "Benefits", "Open Roles"],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    kicker: "Service Areas Preview",
    title: "Regional coverage becomes a dedicated destination with a premium map placeholder and location framing.",
    description: "Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.",
    layout: "stacked",
    images: [
      {
        src: "/placeholders/map.svg",
        alt: "Service areas preview placeholder",
        label: "Regional Coverage",
      },
      {
        src: "/placeholders/site.svg",
        alt: "Service areas detail placeholder",
        label: "Local Delivery",
      },
    ],
    details: ["North", "East", "West"],
  },
  {
    label: "Contact",
    href: "/contact",
    kicker: "Contact Preview",
    title: "Inquiry and conversion are previewed as a full contact destination with its own composed visual identity.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.",
    layout: "offset",
    images: [
      {
        src: "/placeholders/office.svg",
        alt: "Contact preview placeholder",
        label: "Inquiry Desk",
      },
      {
        src: "/placeholders/map.svg",
        alt: "Contact map placeholder",
        label: "Visit Location",
      },
    ],
    details: ["Inquiry", "Visit", "Map"],
  },
];

export const pageMetadata = {
  home: {
    title: "Premium Construction Company",
    description: "Lorem ipsum construction company template with editorial layouts, premium placeholders, and production-ready structure.",
    path: "/",
  },
  services: {
    title: "Construction Services",
    description: "Editorial construction service layouts for commercial, residential, industrial, and design-build work.",
    path: "/services",
  },
  about: {
    title: "About The Company",
    description: "Company story, values, leadership placeholders, and timeline presented with an architectural editorial tone.",
    path: "/about",
  },
  projects: {
    title: "Featured Projects",
    description: "Construction project showcase with masonry storytelling, premium placeholders, and category-driven layouts.",
    path: "/projects",
  },
  reviews: {
    title: "Client Reviews",
    description: "Luxury testimonial layouts, carousel storytelling, and client confidence sections for a construction brand.",
    path: "/reviews",
  },
  careers: {
    title: "Construction Careers",
    description: "Premium careers page with company culture, benefits, process, and open role placeholders.",
    path: "/careers",
  },
  serviceAreas: {
    title: "Service Areas",
    description: "Regional coverage page with interactive-style map placeholder and local service area cards.",
    path: "/service-areas",
  },
  contact: {
    title: "Contact The Company",
    description: "Editorial construction contact page with premium inquiry form, business information, and map placeholder.",
    path: "/contact",
  },
};
