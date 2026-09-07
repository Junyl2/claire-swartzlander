import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ImageToken = {
  src: string;
  alt: string;
  label: string;
};

export type Community = {
  slug: string;
  name: string;
  href: string;
  region: string;
  tagline: string;
  description: string;
  image: ImageToken;
  highlights: string[];
};

export type Tip = {
  title: string;
  description: string;
};

export type Neighborhood = {
  name: string;
  slug: string;
  sections: string[];
  overview: string;
  landmarks: string[];
};

export type CommunityDirectoryItem = {
  name: string;
  slug: string;
  href: string;
  parent?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
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
  layout: "split" | "stacked" | "offset" | "communities-bento" | "listings-editorial" | "about-editorial" | "review-feature";
  images: [ImageToken, ImageToken];
  details: string[];
};

export type HomeCommunityPreview = {
  title: string;
  href: string;
  image: ImageToken;
  region: string;
  highlights: string[];
};

export type HomeListingPreview = {
  title: string;
  category: string;
  image: ImageToken;
};

export type Listing = {
  slug: string;
  title: string;
  community: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "Active" | "Pending" | "New";
  image: ImageToken;
};

export const siteConfig = {
  name: "Claire Swartzlander",
  tagline: "Coastal Property Specialist",
  brokerage: "RE/MAX Signature",
  url: "https://example.com",
  phone: "+17249542787",
  email: "clairesellsthecoast@gmail.com",
  web3FormsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  address: "000 Ocean Palm Way, Palm Coast, FL 32137",
  hours: "By Appointment — 7 Days A Week",
  socials: [
    { label: "LinkedIn", href: "https://example.com" },
    { label: "Instagram", href: "https://example.com" },
    { label: "Facebook", href: "https://example.com" },
  ],
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Communities", href: "/communities" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "About", href: "/about" },
  { label: "Sell", href: "/sell" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Communities", href: "/communities" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Book an Appointment", href: "/book-an-appointment" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Featured Listings", href: "/buy/listings" },
      { label: "Top Buyer Tips", href: "/buy/top-buyer-tips" },
      { label: "Marina Del Palma", href: "/buy/marina-del-palma" },
      { label: "Palm Harbor", href: "/buy/palm-harbor" },
      { label: "Grand Haven", href: "/buy/grand-haven" },
      { label: "The Conservatory at Hammock Beach", href: "/buy/the-conservatory-at-hammock-beach" },
      { label: "Hammock Dunes", href: "/buy/hammock-dunes" },
      { label: "Tidelands", href: "/buy/tidelands" },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "Sell My Home", href: "/sell/sell-my-home" },
      { label: "Home Valuation", href: "/sell/whats-my-home-worth" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const communities: Community[] = [
  {
    slug: "marina-del-palma",
    name: "Marina Del Palma",
    href: "/buy/marina-del-palma",
    region: "Palm Coast, FL",
    tagline: "Waterfront living with private marina access.",
    description:
      "Marina Del Palma is built around deep-water canal and marina access, drawing buyers who want their boat close to home and quick reach to the Intracoastal Waterway. Homesites here favor open water views and a quieter, residential coastal pace.",
    image: { src: "/placeholders/community.svg", alt: "Marina Del Palma community placeholder", label: "Marina Del Palma" },
    highlights: ["Deep-water access", "Boater-friendly", "Coastal residential"],
  },
  {
    slug: "palm-harbor",
    name: "Palm Harbor",
    href: "/buy/palm-harbor",
    region: "Palm Coast, FL",
    tagline: "Established coastal neighborhoods close to everyday conveniences.",
    description:
      "Palm Harbor offers a mix of established and newer construction close to shopping, schools, and the coast. It's a strong fit for buyers who want easy access to daily conveniences without giving up a coastal address.",
    image: { src: "/placeholders/community.svg", alt: "Palm Harbor community placeholder", label: "Palm Harbor" },
    highlights: ["Convenient location", "Mixed inventory", "Family-friendly"],
  },
  {
    slug: "grand-haven",
    name: "Grand Haven",
    href: "/buy/grand-haven",
    region: "Palm Coast, FL",
    tagline: "A master-planned riverfront and golf community.",
    description:
      "Grand Haven is a master-planned community centered on a signature golf course and the Intracoastal Waterway, with a clubhouse-driven lifestyle and a range of home styles across its neighborhoods.",
    image: { src: "/placeholders/community.svg", alt: "Grand Haven community placeholder", label: "Grand Haven" },
    highlights: ["Golf course living", "Riverfront setting", "Amenity clubhouse"],
  },
  {
    slug: "the-conservatory-at-hammock-beach",
    name: "The Conservatory at Hammock Beach",
    href: "/buy/the-conservatory-at-hammock-beach",
    region: "Palm Coast, FL",
    tagline: "Gated golf living beside the Hammock Beach resort.",
    description:
      "The Conservatory at Hammock Beach sits alongside the Hammock Beach Resort, offering gated golf-course living with proximity to resort-style amenities and the beach.",
    image: {
      src: "/placeholders/community.svg",
      alt: "The Conservatory at Hammock Beach community placeholder",
      label: "The Conservatory At Hammock Beach",
    },
    highlights: ["Gated community", "Golf course access", "Resort-adjacent"],
  },
  {
    slug: "hammock-dunes",
    name: "Hammock Dunes",
    href: "/buy/hammock-dunes",
    region: "Palm Coast, FL",
    tagline: "Oceanfront and Intracoastal living behind private gates.",
    description:
      "Hammock Dunes is one of the area's premier gated communities, spanning oceanfront and Intracoastal-facing homesites with private club amenities for owners who want a fully coastal, guard-gated address.",
    image: { src: "/placeholders/community.svg", alt: "Hammock Dunes community placeholder", label: "Hammock Dunes" },
    highlights: ["Oceanfront access", "Guard-gated", "Private club lifestyle"],
  },
  {
    slug: "tidelands",
    name: "Tidelands",
    href: "/buy/tidelands",
    region: "Palm Coast, FL",
    tagline: "A quieter marsh-front pocket of the coast.",
    description:
      "Tidelands offers a quieter, marsh- and water-adjacent setting for buyers who want a coastal lifestyle away from the busier corridors, with easy access back to Palm Coast's main routes.",
    image: { src: "/placeholders/community.svg", alt: "Tidelands community placeholder", label: "Tidelands" },
    highlights: ["Marsh & water views", "Quieter setting", "Easy access"],
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    name: "Belle Terre",
    slug: "belle-terre",
    sections: ["P North"],
    overview:
      "Belle Terre is centered on Belle Terre Parkway, one of Palm Coast's main north-south corridors, which keeps the neighborhood well connected to schools, healthcare, and recreation across the city. It draws a mix of long-time residents and young families, and it's home to some of the city's better-maintained recreational facilities.",
    landmarks: ["Belle Terre Park", "Palm Coast Aquatic Center", "Belle Terre Swim & Racquet Facility", "Island Walk Shopping Center", "European Village"],
  },
  {
    name: "Cypress Knoll",
    slug: "cypress-knoll",
    sections: ["E"],
    overview:
      "Cypress Knoll is a non-gated neighborhood built around Cypress Knoll Golf & Country Club, a public course originally designed by Gary Player that opened in 1989. Of Palm Coast's neighborhoods, it sits closest to Flagler Beach, and U.S. Census data puts the population at roughly 5,700 residents.",
    landmarks: ["Cypress Knoll Golf & Country Club (Gary Player design, 1989)", "Closest neighborhood to Flagler Beach"],
  },
  {
    name: "Indian Trails",
    slug: "indian-trails",
    sections: ["B"],
    overview:
      "Indian Trails runs along the western end of Palm Coast Parkway, bordered by Belle Terre Parkway on one side and Matanzas Woods Parkway on the other, with Matanzas Woods just to the north and Pine Lakes to the southeast. Its location close to the Interstate 95 interchange, and the shopping and dining clustered around it, keeps it consistently one of the city's most in-demand neighborhoods.",
    landmarks: ["Indian Trails Sports Complex (14 athletic fields)", "Bird of Paradise Lake passive park", "Flagler County Public Library", "Palm Coast Landing Shopping Center"],
  },
  {
    name: "Lehigh Woods",
    slug: "lehigh-woods",
    sections: ["R"],
    overview:
      "Lehigh Woods sits on the south side of Palm Coast, backing up to the Graham Swamp Conservation Area and connecting to the Lehigh Trail, a paved path built along the bed of an old railroad spur that once served the Lehigh Portland Cement Company.",
    landmarks: ["Ralph Carter Park", "Lehigh Trailhead & dog park", "Lehigh Trail (6.7 miles)", "Graham Swamp Conservation Area"],
  },
  {
    name: "Matanzas Woods",
    slug: "matanzas-woods",
    sections: ["L"],
    overview:
      "Matanzas Woods is anchored by Matanzas Woods Parkway, which connects residents to schools, shopping, and neighboring areas like Palm Harbor and Indian Trails. The neighborhood is home to Matanzas Woods Golf Club, an Arnold Palmer signature course that opened in the late 1980s, and U.S. Census data counts roughly 4,800 residents here.",
    landmarks: ["Matanzas Woods Golf Club (Arnold Palmer design)", "Matanzas Woods Park"],
  },
  {
    name: "Palm Harbor",
    slug: "palm-harbor",
    sections: ["C", "F"],
    overview:
      "Palm Harbor is one of Palm Coast's earliest and most established neighborhoods, built along a network of saltwater canals that connect directly to the Intracoastal Waterway — a draw for boaters and waterfront buyers. It's also home to some of the city's longest-standing shopping and dining, including the European Village complex.",
    landmarks: ["Direct Intracoastal Waterway canal access", "European Village", "Waterfront Park", "Palm Coast Linear Park & St. Joe's Walkway"],
  },
  {
    name: "Pine Grove",
    slug: "pine-grove",
    sections: ["P South"],
    overview:
      "Pine Grove makes up the southern half of Palm Coast's original \"P\" Section, with Belle Terre forming the northern half. It sits closer to Town Center than any other Palm Coast neighborhood, putting Flagler Hospital, Flagler Palm Coast High School, and the Flagler County Municipal Airport within easy reach.",
    landmarks: ["Closest neighborhood to Town Center", "Near Flagler Hospital & Flagler Palm Coast High School"],
  },
  {
    name: "Pine Lakes",
    slug: "pine-lakes",
    sections: ["W"],
    overview:
      "Pine Lakes is built around Pine Lakes Golf Club, a public, par-72 course designed in 1980 by Arnold Palmer, Ed Seay, and Robert Walker, with an 18,000-square-foot clubhouse and a full-service restaurant overlooking the fairways.",
    landmarks: ["Pine Lakes Golf Club (Arnold Palmer design, 1980)"],
  },
  {
    name: "Quail Hollow",
    slug: "quail-hollow",
    sections: ["K", "Z", "LL"],
    overview:
      "Quail Hollow spans three sections — K, Z, and LL — south of State Road 100 near U.S. Route 1, and is known for its spring-fed lakes and a quieter, old-Florida feel despite being close to shopping and schools.",
    landmarks: ["Heroes Memorial Park (built 2006)", "Birds of Paradise Nature Preserve"],
  },
  {
    name: "Seminole Woods",
    slug: "seminole-woods",
    sections: ["S", "U"],
    overview:
      "Seminole Woods is anchored by Seminole Woods Neighborhood Park, one of the newer neighborhood parks built in Palm Coast, with a half-mile perimeter walking trail, a lighted tennis court, and a multi-purpose sports field.",
    landmarks: ["Seminole Woods Neighborhood Park", "Half-mile perimeter walking trail"],
  },
  {
    name: "Woodlands",
    slug: "woodlands",
    sections: ["BL"],
    overview:
      "Woodlands was one of the first sections built in Palm Coast, with many homes dating to the 1970s and '80s, sandwiched between Old Kings Road and Colbert Lane. It borders the roughly 3,500-acre Woodlands Conservation Area and has convenient access to Old Kings Road, Interstate 95, and the Hammock Dunes Bridge to the beach.",
    landmarks: ["Woodlands Conservation Area (~3,500 acres)", "One of Palm Coast's original sections (1970s-80s)"],
  },
];

export const neighborhoodSections = neighborhoods
  .flatMap((neighborhood) => neighborhood.sections.map((section) => ({ section, slug: neighborhood.slug, name: neighborhood.name })))
  .sort((a, b) => a.section.localeCompare(b.section));

export const communityDirectory: CommunityDirectoryItem[] = [
  { name: "American Village", slug: "american-village", href: "/communities/american-village" },
  { name: "Beach Haven", slug: "beach-haven", href: "/communities/beach-haven" },
  { name: "The Conservatory", slug: "the-conservatory", href: "/buy/the-conservatory-at-hammock-beach" },
  { name: "Country Club Harbor", slug: "country-club-harbor", href: "/communities/country-club-harbor" },
  { name: "Eagle Lakes", slug: "eagle-lakes", href: "/communities/eagle-lakes" },
  { name: "Fairchild Oaks", slug: "fairchild-oaks", href: "/communities/fairchild-oaks" },
  {
    name: "Flagler Beach Polo Club (East)",
    slug: "flagler-beach-polo-club-east",
    href: "/communities/flagler-beach-polo-club-east",
  },
  {
    name: "Flagler Beach Polo Club (West)",
    slug: "flagler-beach-polo-club-west",
    href: "/communities/flagler-beach-polo-club-west",
  },
  { name: "Grand Haven", slug: "grand-haven-directory", href: "/buy/grand-haven" },
  { name: "The Crossings", slug: "the-crossings", href: "/communities/the-crossings", parent: "Grand Haven" },
  { name: "Wild Oaks", slug: "wild-oaks", href: "/communities/wild-oaks", parent: "Grand Haven" },
  { name: "Grand Landings", slug: "grand-landings", href: "/communities/grand-landings" },
  { name: "Grand Reserve", slug: "grand-reserve", href: "/communities/grand-reserve" },
  { name: "Halifax Plantation", slug: "halifax-plantation", href: "/communities/halifax-plantation" },
  { name: "Hammock Beach", slug: "hammock-beach", href: "/communities/hammock-beach" },
  { name: "Hammock Dunes", slug: "hammock-dunes-directory", href: "/buy/hammock-dunes" },
  { name: "Island Estates", slug: "island-estates", href: "/communities/island-estates", parent: "Hammock Dunes" },
  { name: "Hidden Lakes", slug: "hidden-lakes", href: "/communities/hidden-lakes" },
  { name: "Marina Del Palma", slug: "marina-del-palma-directory", href: "/buy/marina-del-palma" },
  { name: "Matanzas Lakes", slug: "matanzas-lakes", href: "/communities/matanzas-lakes" },
  { name: "Ocean Hammock", slug: "ocean-hammock", href: "/communities/ocean-hammock" },
  { name: "Palm Coast Plantation", slug: "palm-coast-plantation", href: "/communities/palm-coast-plantation" },
  { name: "Park Place", slug: "park-place", href: "/communities/park-place" },
  { name: "RiverGate", slug: "rivergate", href: "/communities/rivergate" },
  { name: "The Sanctuary", slug: "the-sanctuary", href: "/communities/the-sanctuary" },
  { name: "Sea Colony", slug: "sea-colony", href: "/communities/sea-colony" },
  { name: "Sawmill Creek", slug: "sawmill-creek", href: "/communities/sawmill-creek" },
  { name: "Sugar Mill Plantation", slug: "sugar-mill-plantation", href: "/communities/sugar-mill-plantation" },
  { name: "Tidelands", slug: "tidelands-directory", href: "/buy/tidelands" },
  { name: "Toscana", slug: "toscana", href: "/communities/toscana" },
];

export const topBuyerTips: Tip[] = [
  { title: "Get Pre-Approved Before You Shop", description: "A lender pre-approval tells you your real budget and makes every offer you write stronger." },
  { title: "Understand The True Cost Of Ownership", description: "Taxes, insurance, HOA dues, and flood zone requirements vary a lot by community — factor them in early." },
  { title: "Prioritize Location Over Finishes", description: "Finishes are easy to change later. Waterfront access, lot orientation, and community fit are not." },
  { title: "Work With A Local Agent Who Knows The Coast", description: "Community-level knowledge helps you avoid wasted showings and spot the right home faster." },
  { title: "Order A Full Inspection, Every Time", description: "Especially in coastal markets, a thorough inspection protects you from costly surprises after closing." },
  { title: "Move Quickly When The Right Home Appears", description: "Well-priced homes in sought-after communities can move fast — have your team and paperwork ready." },
];

export const topDollarTips: Tip[] = [
  { title: "Price It Right From Day One", description: "Overpricing costs you momentum. A well-researched launch price attracts serious buyers immediately." },
  { title: "Lead With Professional Photography", description: "Most buyers decide whether to book a showing based on photos alone — make the first impression count." },
  { title: "Handle Small Repairs Before You List", description: "Minor issues left unaddressed can undermine buyer confidence and invite lower offers." },
  { title: "Stage For How Buyers Live Today", description: "Clean, neutral, and well-lit spaces help buyers picture themselves in the home." },
  { title: "Time Your Listing To Local Demand", description: "Coastal markets have seasonal rhythms — timing your listing well can mean a faster, stronger sale." },
  { title: "Negotiate With A Full Picture, Not Just The Number", description: "Terms, timelines, and contingencies matter as much as price when comparing offers." },
];

export const heroSlides: ImageToken[] = [
  { src: "/placeholders/hero-1.svg", alt: "Palm Coast waterfront at dusk placeholder", label: "Coastal Living" },
  { src: "/placeholders/hero-2.svg", alt: "Palm Coast Intracoastal waterway placeholder", label: "The Intracoastal" },
  { src: "/placeholders/hero-3.svg", alt: "Palm Coast coastal dunes placeholder", label: "The Dunes" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Claire made the whole process feel manageable. She was clear about timing, realistic about pricing, and available whenever we had questions.",
    name: "Client Name",
    company: "Buyer",
    role: "Home Buyer",
    rating: 5,
  },
  {
    quote: "She knew the communities we were considering inside and out, which saved us from wasting weekends on the wrong showings.",
    name: "Client Name",
    company: "Buyer",
    role: "Home Buyer",
    rating: 5,
  },
  {
    quote: "From listing to closing, communication never slowed down. We always knew where things stood.",
    name: "Client Name",
    company: "Seller",
    role: "Home Seller",
    rating: 5,
  },
  {
    quote: "Her pricing strategy was on point. We had strong interest in the first week and closed above what we expected.",
    name: "Client Name",
    company: "Seller",
    role: "Home Seller",
    rating: 5,
  },
  {
    quote: "As out-of-state buyers, we needed someone we could trust completely. Claire walked us through every detail remotely and in person.",
    name: "Client Name",
    company: "Buyer",
    role: "Relocation Buyer",
    rating: 5,
  },
  {
    quote: "She handled a complicated negotiation with a level head and got us a result we were happy with.",
    name: "Client Name",
    company: "Seller",
    role: "Home Seller",
    rating: 5,
  },
];

export const aboutHighlights: string[] = [
  "Multimillion-Dollar Sales Volume",
  "Northeast Florida Coastal Region",
  "RE/MAX Signature",
  "Lives & Works Locally",
];

export const processSteps = [
  { title: "Consultation", description: "We start with your goals, timeline, and budget, whether you're buying, selling, or both." },
  { title: "Strategy", description: "A tailored plan for pricing, search criteria, or marketing is built around your specific situation." },
  { title: "Showings & Marketing", description: "Buyers tour the right homes; sellers get professional marketing and coordinated showings." },
  { title: "Negotiation", description: "Offers, counteroffers, and contract terms are handled with a clear view of your priorities." },
  { title: "Closing", description: "We track every deadline and document through closing, so nothing catches you off guard." },
];

export const contactItems = [
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`, icon: Phone as LucideIcon },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail as LucideIcon },
  { label: "Address", value: siteConfig.address, href: "/contact", icon: MapPin as LucideIcon },
];

export const footerLinks: FooterGroup[] = [
  { title: "Pages", links: navigation },
  {
    title: "Communities",
    links: communities.map((community) => ({ label: community.name, href: community.href })),
  },
  {
    title: "Sell",
    links: [
      { label: "Sell My Home", href: "/sell/sell-my-home" },
      { label: "Home Valuation", href: "/sell/whats-my-home-worth" },
    ],
  },
  { title: "Social", links: siteConfig.socials },
];

export const pageCopy = {
  home: {
    eyebrow: "Coastal Property Specialist · RE/MAX Signature",
    title: "Claire Sells The Coast",
    description:
      "Claire Swartzlander guides buyers and sellers through Palm Coast's premier waterfront and golf communities, from first showing to closing day.",
  },
  buy: {
    title: "Find your place on the coast.",
    description:
      "Explore Palm Coast's most sought-after communities, from marina and Intracoastal addresses to gated golf and oceanfront living, with guidance built around how you actually want to live.",
  },
  about: {
    title: "Coastal Property Specialist",
    description:
      "With a multimillion-dollar sales volume, Claire Swartzlander has positioned herself as a highly regarded and well-known real estate expert in the Northeast Florida coastal region.",
  },
  sell: {
    title: "Sell with a clear plan and a firm number.",
    description:
      "From a same-week cash offer to a fully marketed listing, Claire builds a selling strategy around your timeline, your home, and the price you actually want to walk away with.",
  },
  reviews: {
    title: "What buyers and sellers say after closing.",
    description: "Real feedback from the people Claire has guided through buying, selling, and everything in between.",
  },
  contact: {
    title: "Start the conversation about your next move.",
    description: "Whether you're buying, selling, or just exploring the coast, tell Claire what you're working toward and she'll help map the next step.",
  },
  bookAppointment: {
    title: "Book time with Claire.",
    description: "Pick a time that works for a call, a video walkthrough, or an in-person meeting to talk through your buying or selling goals.",
  },
};

export const homeCommunityPreviews: HomeCommunityPreview[] = communities.slice(0, 5).map((community) => ({
  title: community.name,
  href: community.href,
  image: community.image,
  region: community.region,
  highlights: community.highlights.slice(0, 2),
}));

export const listings: Listing[] = [
  {
    slug: "waterfront-estate-marina-del-palma",
    title: "Waterfront Estate",
    community: "Marina Del Palma",
    price: 1595000,
    beds: 4,
    baths: 4,
    sqft: 3800,
    status: "Active",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder waterfront estate listing", label: "Waterfront Estate" },
  },
  {
    slug: "golf-course-retreat-grand-haven",
    title: "Golf Course Retreat",
    community: "Grand Haven",
    price: 725000,
    beds: 3,
    baths: 3,
    sqft: 2600,
    status: "Active",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder golf course retreat listing", label: "Golf Course Retreat" },
  },
  {
    slug: "oceanfront-residence-hammock-dunes",
    title: "Oceanfront Residence",
    community: "Hammock Dunes",
    price: 2450000,
    beds: 5,
    baths: 5,
    sqft: 4900,
    status: "New",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder oceanfront residence listing", label: "Oceanfront Residence" },
  },
  {
    slug: "coastal-family-home-palm-harbor",
    title: "Coastal Family Home",
    community: "Palm Harbor",
    price: 459000,
    beds: 4,
    baths: 2,
    sqft: 2100,
    status: "Active",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder coastal family home listing", label: "Coastal Family Home" },
  },
  {
    slug: "gated-golf-villa-the-conservatory-at-hammock-beach",
    title: "Gated Golf Villa",
    community: "The Conservatory at Hammock Beach",
    price: 615000,
    beds: 3,
    baths: 3,
    sqft: 2300,
    status: "Pending",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder gated golf villa listing", label: "Gated Golf Villa" },
  },
  {
    slug: "marsh-view-cottage-tidelands",
    title: "Marsh-View Cottage",
    community: "Tidelands",
    price: 389000,
    beds: 3,
    baths: 2,
    sqft: 1750,
    status: "Active",
    image: { src: "/placeholders/listing.svg", alt: "Placeholder marsh-view cottage listing", label: "Marsh-View Cottage" },
  },
];

export const homeListingPreviews: HomeListingPreview[] = listings.map((listing) => ({
  title: listing.title,
  category: listing.community,
  image: listing.image,
}));

export const homePagePreviews: HomePagePreview[] = [
  {
    label: "Buy",
    href: "/buy",
    kicker: "Explore The Coast",
    title: "One place to explore every coastal community Claire covers.",
    description:
      "Marina and Intracoastal addresses, gated golf communities, and quieter marsh-front pockets are organized so buyers can find the right fit fast.",
    layout: "communities-bento",
    images: [
      { src: "/placeholders/community.svg", alt: "Palm Coast communities preview image", label: "Coastal Communities" },
      { src: "/placeholders/community.svg", alt: "Palm Coast communities detail image", label: "Local Coverage" },
    ],
    details: ["Waterfront", "Golf Communities", "Gated"],
  },
  {
    label: "About Claire",
    href: "/about",
    kicker: "RE/MAX Signature",
    title: "Coastal Property Specialist, RE/MAX Signature",
    description:
      "With a multimillion-dollar sales volume, Claire Swartzlander is a highly regarded, well-known real estate expert in the Northeast Florida coastal region.\n\nHer mission is simple: every client feels uniquely valued, knowing they are her sole focus.",
    layout: "about-editorial",
    images: [
      { src: "/about/claire-about.png", alt: "Claire Swartzlander, Coastal Property Specialist with RE/MAX Signature", label: "Claire Swartzlander" },
      { src: "/placeholders/hero-2.svg", alt: "Palm Coast waterfront placeholder", label: "The Coast" },
    ],
    details: aboutHighlights,
  },
  {
    label: "Featured Listings",
    href: "/buy/listings",
    kicker: "Placeholder Listings",
    title: "A first look at the kind of homes Claire places buyers in.",
    description:
      "These are placeholder listings standing in for real inventory. Once live listings are connected, this band can pull directly from active MLS data.",
    layout: "listings-editorial",
    images: [
      { src: "/placeholders/listing.svg", alt: "Featured listings preview image", label: "Featured Listings" },
      { src: "/placeholders/listing.svg", alt: "Featured listings detail image", label: "Listing Detail" },
    ],
    details: ["Waterfront", "Golf", "Family"],
  },
  {
    label: "Sell",
    href: "/sell",
    kicker: "Ready To List",
    title: "A clear path from listing day to closing table.",
    description:
      "Whether you want a fast, no-showings cash offer or a fully marketed listing built for top dollar, the plan starts with an honest read on your home and your timeline.",
    layout: "offset",
    images: [
      { src: "/placeholders/interior.svg", alt: "Home selling preview image", label: "Ready To List" },
      { src: "/placeholders/listing.svg", alt: "Home selling detail image", label: "Sold" },
    ],
    details: ["Cash Offer", "Full Listing", "Home Valuation"],
  },
  {
    label: "Client Reviews",
    href: "/reviews",
    kicker: "Buyer & Seller Feedback",
    title: "Client trust, built one closing at a time.",
    description: testimonials[0].quote,
    layout: "review-feature",
    images: [
      { src: "/placeholders/office.svg", alt: "Client reviews preview image", label: "Client Trust" },
      { src: "/placeholders/agent.svg", alt: "Client reviews portrait image", label: "Client Experience" },
    ],
    details: [testimonials[0].name, testimonials[0].role],
  },
];

export const pageMetadata = {
  home: {
    title: "Coastal Property Specialist | RE/MAX Signature",
    description: "Claire Swartzlander helps buyers and sellers navigate Palm Coast's waterfront and golf communities.",
    path: "/",
  },
  buy: {
    title: "Buy A Home On The Coast",
    description:
      "Explore Palm Coast communities including Marina Del Palma, Palm Harbor, Grand Haven, The Conservatory at Hammock Beach, Hammock Dunes, and Tidelands.",
    path: "/buy",
  },
  listings: {
    title: "Featured Listings",
    description: "A look at the kind of Palm Coast homes Claire places buyers in, across waterfront, golf, and family communities.",
    path: "/buy/listings",
  },
  about: {
    title: "About Claire Swartzlander",
    description: "Coastal property specialist with RE/MAX Signature, serving buyers and sellers across Palm Coast, FL.",
    path: "/about",
  },
  sell: {
    title: "Sell Your Home",
    description: "Sell your Palm Coast home with a clear pricing strategy, professional marketing, and an optional cash offer path.",
    path: "/sell",
  },
  reviews: {
    title: "Client Reviews",
    description: "Feedback from buyers and sellers who worked with Claire Swartzlander.",
    path: "/reviews",
  },
  contact: {
    title: "Contact Claire",
    description: "Get in touch about buying, selling, or exploring Palm Coast real estate.",
    path: "/contact",
  },
  bookAppointment: {
    title: "Book An Appointment",
    description: "Schedule time with Claire Swartzlander to talk through your real estate goals.",
    path: "/book-an-appointment",
  },
};
