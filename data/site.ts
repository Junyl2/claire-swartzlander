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
  image?: { src: string; alt: string };
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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clairesellsthecoast.com",
  phone: "+17249542787",
  email: "clairesellsthecoast@gmail.com",
  web3FormsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  address: "775 W Granada Blvd STE 201, Ormond Beach, FL 32174",
  hours: "By Appointment — 7 Days A Week",
  socials: [
    { label: "LinkedIn", href: "https://example.com" },
    { label: "Instagram", href: "https://example.com" },
    { label: "Facebook", href: "https://www.facebook.com/Clairesellsthecoast" },
  ],
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Communities", href: "/communities" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Sell", href: "/sell" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavigation: NavItem[] = [
  { label: "Communities", href: "/communities" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Reviews", href: "/reviews" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Book an Appointment", href: "/book-an-appointment" },
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
      "Belle Terre — Palm Coast's \"P North\" Section — sits closer to Palm Coast Parkway and its Interstate 95 access ramps than its counterpart, the \"P South\" Section that makes up neighboring Pine Grove. Nearly every street here starts with \"Pa,\" \"Pe,\" or \"Pr,\" and the neighborhood is home to Lewis E. Wadsworth Elementary and Buddy Taylor Middle School, both directly on Belle Terre Parkway. Just behind those two schools sits the Palm Coast Aquatics Center, home to the outdoor, heated Frieda Zamba Pool — named for the Flagler Beach surfer who won four world surfing titles — along with the lighted tennis courts at the adjoining Belle Terre Swim & Racquet Facility. Depending on which end of the neighborhood a home sits, residents reach U.S. Route 1 either by Palm Coast Parkway or by Whiteview Parkway, a 3.4-mile corridor connecting Belle Terre Parkway to U.S. 1. Homes here are mostly well-maintained resales, and the neighborhood's central location keeps the beach, Town Center, and the rest of Palm Coast within easy reach.",
    landmarks: [
      "Lewis E. Wadsworth Elementary School (4550 Belle Terre Pkwy)",
      "Buddy Taylor Middle School (4500 Belle Terre Pkwy)",
      "Palm Coast Aquatics Center — Frieda Zamba Pool (339 Parkview Dr)",
      "Belle Terre Swim & Racquet Facility (73 Patricia Dr)",
      "Island Walk Shopping Center",
    ],
    image: {
      src: "/neighborhood/belle-tere.webp",
      alt: "Aerial view of a home in Belle Terre, Palm Coast, Florida",
    },
  },
  {
    name: "Cypress Knoll",
    slug: "cypress-knoll",
    sections: ["E"],
    overview:
      "Cypress Knoll — the \"E\" Section — sits where Belle Terre Parkway meets State Road 100, built around Cypress Knoll Golf & Country Club, a public course Gary Player designed in 1989 at 53 Easthampton Boulevard, reached by heading west on Easthampton just before Belle Terre Parkway crosses SR 100. The course winds through the wetlands and natural lakes found throughout Palm Coast. Only Quail Hollow and Seminole Woods sit closer to Flagler Executive Airport, and that same stretch of SR 100 gives Cypress Knoll residents a direct route to Flagler Beach as well as Bunnell, the county seat, about eight miles west. Flagler Palm Coast High School and the Flagler Auditorium — Flagler County's main performing arts venue, sharing the high school's campus across from the airport — sit along that route too, along with the Target- and Publix-anchored Palm Coast Town Center on Belle Terre Parkway, which has put everyday shopping only minutes away rather than requiring a drive out to Palm Coast Parkway. U.S. Census data puts Cypress Knoll's population at roughly 5,700, making it, of Palm Coast's neighborhoods, the one closest to Flagler Beach.",
    landmarks: [
      "Cypress Knoll Golf & Country Club (Gary Player design, 1989)",
      "Closest neighborhood to Flagler Beach",
      "Palm Coast Town Center — Target & Publix (Belle Terre Pkwy)",
      "Flagler Palm Coast High School & Flagler Auditorium",
    ],
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
      "Lehigh Woods — the \"R\" Section — forms a square block bordered by U.S. Route 1 to the west, Whiteview Parkway to the north, Belle Terre Parkway to the east, and Royal Palms Parkway to the south, with Rymfire Drive running through it as the main street. Rymfire Elementary School sits at 1425 Rymfire Drive, right alongside Ralph Carter Park, a 13.1-acre neighborhood park named for a former city council member, with a playground, two lighted multi-purpose fields, a mini skate park, and a lighted basketball court. The park also connects to the 6.7-mile Lehigh Trail, a paved path built along the bed of an old railroad spur that once linked the Lehigh Portland Cement Company to the Florida East Coast Railroad; it runs parallel to the Lehigh Canal for much of its length, passing through Graham Swamp Preserve on one end and reaching Palm Coast Town Center on the other. Cypress Knoll and its Gary Player-designed golf course sit directly across Belle Terre Parkway to the east.",
    landmarks: [
      "Rymfire Elementary School (1425 Rymfire Dr)",
      "Ralph Carter Park (13.1 acres)",
      "Lehigh Trail (6.7 miles, to Palm Coast Town Center)",
      "Graham Swamp Preserve",
    ],
  },
  {
    name: "Matanzas Woods",
    slug: "matanzas-woods",
    sections: ["L"],
    overview:
      "Matanzas Woods — the \"L\" Section — sits on the north side of Matanzas Woods Parkway, which runs east from U.S. Route 1 to meet Old Kings Road, a route that continues on toward Palm Harbor and eastern Palm Coast Parkway. Of Palm Coast's neighborhoods, it sits closest to St. Augustine, the country's oldest city, a short drive north on U.S. Route 1. Its own interchange with Interstate 95 opened in 2016 at Exit 293, giving the L Section quicker highway access than many older sections of the city. Families here are zoned for Belle Terre Elementary, Indian Trails Middle, and Matanzas High School, all within a few miles. The neighborhood's golf course, once an Arnold Palmer-designed signature course, closed in 2007 and has changed hands several times since without reopening, so it's a scenic backdrop today rather than a functioning amenity. Inventory is a mix of resale homes and vacant lots, and U.S. Census data counts roughly 4,800 residents.",
    landmarks: [
      "I-95 Exit 293 interchange (opened 2016)",
      "Closest Palm Coast neighborhood to St. Augustine",
      "Zoned for Belle Terre Elementary, Indian Trails Middle & Matanzas High",
      "Former Matanzas Woods Golf Club (Arnold Palmer design, closed 2007)",
    ],
  },
  {
    name: "Palm Harbor",
    slug: "palm-harbor",
    sections: ["C", "F"],
    overview:
      "Palm Harbor was among Palm Coast's first neighborhoods developed and remains one of its most established, covering the C and F Sections along a stretch of the city's saltwater canal system that connects directly to the Intracoastal Waterway — a defining draw for boaters and waterfront buyers. Its amenities reflect that head start: the European Village shopping and dining complex, Waterfront Park, the 18-hole Palm Harbor Golf Club, and the members-only Palm Coast Yacht Club, founded in 1979, all sit within its borders. Getting around is easy, too — Palm Harbor sits just off Interstate 95's Exit 289 by way of Palm Coast Parkway, with Palm Harbor Parkway, Old Kings Road, and Forest Grove Drive forming the neighborhood's own main thoroughfares, while Palm Coast Parkway continues on to the Hammock Dunes Bridge, a 65-foot toll span that opened in 1988 en route to the beach. Because the area has been built out for decades, most homes here are resale, and the Woodlands section sits just across Palm Coast Parkway to the north.",
    landmarks: [
      "Direct Intracoastal Waterway canal access",
      "Palm Harbor Golf Club (18-hole, par 72)",
      "Palm Coast Yacht Club (est. 1979)",
      "European Village",
      "Waterfront Park",
      "Palm Coast Linear Park & St. Joe's Walkway",
    ],
  },
  {
    name: "Pine Grove",
    slug: "pine-grove",
    sections: ["P South"],
    overview:
      "Pine Grove makes up the southern half of Palm Coast's original \"P\" Section, with Belle Terre forming the northern half — Belle Terre's streets start with \"Pa,\" \"Pe,\" and \"Pr,\" while Pine Grove's begin with \"Pi,\" \"Po,\" and \"Ph.\" The neighborhood sits close to the amenities of both Belle Terre and nearby Pine Lakes, and State Road 100 runs straight through it to Flagler Beach, where the highway ends at the Atlantic Ocean along A1A. Pine Grove also sits closer to Palm Coast Town Center than any other neighborhood — home to Epic Theatres and Imagine Charter School among its newer additions — which puts AdventHealth Palm Coast, Flagler Palm Coast High School, and the Flagler Executive Airport within easy reach as well.",
    landmarks: [
      "Closest neighborhood to Palm Coast Town Center",
      "Near AdventHealth Palm Coast & Flagler Palm Coast High School",
      "Palm Coast Town Center — Epic Theatres & Imagine Charter School",
      "State Road 100 — direct route to Flagler Beach & the Atlantic",
    ],
  },
  {
    name: "Pine Lakes",
    slug: "pine-lakes",
    sections: ["W"],
    overview:
      "Pine Lakes — the \"W\" Section — runs along Pine Lakes Parkway from end to end and is bordered by Indian Trails, Lehigh Woods, and Belle Terre. It's built around Pine Lakes Golf Club, a public, par-72 course spanning just over 7,000 yards, originally designed in 1980 by Arnold Palmer, Ed Seay, and Robert Walker and then personally redesigned by Palmer in 2007, who returned to the course for its rededication; the clubhouse spans 18,000 square feet with a full-service restaurant overlooking the fairways. The neighborhood is also home to the Arlington and Hamptons subdivisions — the Hamptons alone has roughly 97 homes gathered around a central lake. One end of Pine Lakes Parkway meets the western end of Palm Coast Parkway, close to U.S. Route 1, while the other meets Belle Terre Parkway for a quick run to Interstate 95.",
    landmarks: [
      "Pine Lakes Golf Club (Arnold Palmer design, 1980; redesigned 2007)",
      "Arlington subdivision",
      "Hamptons subdivision (~97 homes around a lake)",
      "Bordered by Indian Trails, Lehigh Woods & Belle Terre",
    ],
  },
  {
    name: "Quail Hollow",
    slug: "quail-hollow",
    sections: ["K", "Z", "LL"],
    overview:
      "Quail Hollow spans the K, Z, and LL Sections south of State Road 100, a large, quieter pocket of Palm Coast set among still-undeveloped parcels and bordered by U.S. Route 1. The K Section is reached from U.S. Route 1 south of Bunnell, the Z Section from Belle Terre Parkway south of SR 100, and Belle Terre Parkway runs as the main road through the neighborhood as a whole. Despite its more rural feel, Quail Hollow sits only about two miles from Flagler Executive Airport, AdventHealth Palm Coast, a Target-anchored shopping center, and Flagler Palm Coast High School, and its position along U.S. Route 1 makes it one of the quicker starting points in Palm Coast for a run up to Ormond Beach or Daytona Beach. Cypress Knoll, home to Palm Coast's Gary Player-designed public golf course, sits just to the north. It's also one of the more accessible spots in Palm Coast for canal and waterfront lots specifically, with vacant parcels regularly available alongside the resale homes.",
    landmarks: [
      "Belle Terre Parkway (main thoroughfare)",
      "Borders U.S. Route 1, south of Bunnell",
      "~2 miles from Flagler Executive Airport & AdventHealth Palm Coast",
      "Near Cypress Knoll Golf & Country Club (Gary Player design)",
      "Waterfront & canal lots regularly available",
    ],
  },
  {
    name: "Seminole Woods",
    slug: "seminole-woods",
    sections: ["S", "U"],
    overview:
      "Seminole Woods — the \"S\" and \"U\" Sections, named for their street-letter prefixes — sits south of State Road 100 and east of Quail Hollow, with Seminole Woods Boulevard running as its main road from SR 100 near Interstate 95 at its north end down to U.S. Route 1 south of Bunnell. That mix of SR 100, U.S. 1, and I-95 access puts the Target on East Highway 100 and AdventHealth Palm Coast only a few miles away. Much of the community remains open, undeveloped land, making it a draw for buyers who want more room to build. At its center is Seminole Woods Neighborhood Park at 350 Sesame Boulevard, with a half-mile perimeter walking trail, a lighted tennis court, a playground, a basketball court, and a multi-purpose sports field. Its position gives residents a relatively short drive to Flagler Beach as well as to Daytona Beach to the south, and inventory here includes both resale homes and vacant lots for new construction.",
    landmarks: [
      "Seminole Woods Neighborhood Park (350 Sesame Blvd)",
      "Half-mile perimeter walking trail",
      "Seminole Woods Boulevard (SR 100 to U.S. Route 1)",
      "Near Target (E Highway 100) & AdventHealth Palm Coast",
      "South of SR 100, east of Quail Hollow",
    ],
  },
  {
    name: "Woodlands",
    slug: "woodlands",
    sections: ["BL"],
    overview:
      "Woodlands sits between Old Kings Road and Colbert Lane on the eastern end of Palm Coast Parkway, and ranks among the city's earliest developed sections, with much of its housing stock dating to the 1970s and '80s. The neighborhood takes its name from the roughly 3,500-acre Woodlands Conservation Area it borders, and sits just south of Palm Harbor, home to a public golf course and marina. Because the area has been built out for decades, most homes on the market here are resales rather than new construction, and the nearby Hammock Dunes Bridge gives residents a direct route across A1A toward Flagler Beach.",
    landmarks: [
      "Woodlands Conservation Area (~3,500 acres)",
      "Oak Trails Boulevard (neighborhood's main thoroughfare)",
      "One of Palm Coast's original sections (1970s-80s homes)",
      "Near Palm Harbor's golf course and marina",
    ],
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

export const reviewStats = {
  rating: 5.0,
  count: 28,
  source: "Zillow",
  sourceUrl: "https://www.zillow.com/profile/clairesellsthecoast#reviews",
};

export const testimonials: Testimonial[] = [
  {
    name: "robert ratcliff",
    rating: 5,
    quote:
      "One word to describe having Claire as my realtor would be PHENOMENAL! Her knowledge of the market, professionalism and negotiating skills are second to no one. Far exceeded all my expectations. I would give her 100 stars if possible.",
  },
  {
    name: "zuser20151107073639346",
    rating: 5,
    quote:
      "Claire was very helpful and knowledgeable when we bought our home in Palm Coast. We were new to the area she guided us through the process very thoroughly. Would use again and highly recommend. Thank you.",
  },
  {
    name: "zuser20140518192430925",
    rating: 5,
    quote:
      "Clarissa helped sell an estate home for us. We don't live in Florida making it difficult for us to be there. The home sold quickly and she kept us well informed as to what was happening throughout the process. We were happy to have her guidance with this sale.",
  },
  {
    name: "Jillianpagan50",
    rating: 5,
    quote:
      "Claire was most incredible!! I had an extremely difficult situation and she stuck it out w me around every crazy twist and turn pulling miracle rabbits out of her realtor hat. She worked tirelessly and never gave up.",
  },
  {
    name: "rachelspear25",
    rating: 5,
    quote:
      "I can't say enough good about Clarissa! She knows her job, she got us the best house in our budget for the best price! She worked hard to get us in to see every house in our budget within a week! She was always available within a reasonable time.",
  },
  {
    name: "accounting125",
    rating: 5,
    quote:
      "Thank you so much for assisting us with this out of state purchase! The transaction was made easier with your expertise and we appreciate the open line of communication between all parties involved. It was a pleasure working with you!",
  },
  {
    name: "gallagheraw",
    rating: 5,
    quote:
      "Working with Clarissa was a great experience. She is both professional and personable. She took time to get to know me and what I was looking for. She was very responsive throughout the entire process. I always knew that she had my best interests in mind and stood behind me when going through the process of buying my home. Not only was she very knowledgeable about all aspects of the buying process but she was a great help to me getting settled into a new city. I have no doubt that I will have Clarissa as my realtor in the future if the need arises.",
  },
  {
    name: "Kristin Newsome",
    rating: 5,
    quote:
      "Claire was so helpful and responsive from Day One. I had some pretty specific things I was looking for and not a ton of budget to work with, but she was patient with me and provided wise counsel as we narrowed down my search and eventually found the perfect place.",
  },
  {
    name: "yvonnelcollins1957",
    rating: 5,
    quote:
      "I found Clarissa on one of her bill boards for the house next door to the one we wanted to see, I am a Realtor and knew duel agency is frowned upon. From the first phone call I knew she was a professional, she responded quickly.",
  },
  {
    name: "ljohnson224",
    rating: 5,
    quote:
      "I had a wonderful experience working with Claire. She was extremely knowledgeable and dedicated to finding my perfect home! I can't imagine finding another realtor as exceptional as Claire. She is by far, the best in the business!",
  },
  {
    name: "fallenseravee",
    rating: 5,
    quote:
      "When it comes to the life-altering experience of buying a home, the journey can often feel overwhelming and stressful. However, with Clare as my real estate agent, the process was not just simplified; it became a joyous adventure.",
  },
  {
    name: "1pootster",
    rating: 5,
    quote:
      "Clarissa did a fantastic job for us. Our home sold and we needed to find a house immediately. She went way and above any other realtor that we have ever used.",
  },
  {
    name: "houseberg",
    rating: 5,
    quote:
      "Claire was amazing and went above and beyond. I was in California the whole time and she kept me informed and updated daily. Our agent's experience and deep understanding of the market were invaluable. She provided exceptional service, was always punctual, and was incredibly responsive.",
  },
  {
    name: "jaj5402",
    rating: 5,
    quote:
      "Clarissa was very professional and knowledgeable. She was very responsive to my calls and needs. She has a lot of expertise in getting a house ready to sell. Her knowledge and assistance was very good.",
  },
  {
    name: "zuser20190802081516406",
    rating: 5,
    quote:
      "Claire was amazing. She went above and beyond what a Realtor would do. From the start she was right on top of finding us exactly what we needed to move our daughter to Florida for college. Knowing we were over 800 miles away, she made sure she took care of every aspect of finding the perfect place and consistently made sure everything was being done right during the purchase. She is a Winner in every way. I would highly recommend Claire for all your home purchases.",
  },
  {
    name: "Kiarra Strickland",
    rating: 5,
    quote:
      "I gave Clarissa a set of goals when selling my home and she did executed them precisely. She is super proficient in what she does. Her core beliefs are what really drew me into her. She sold my home and I will definitely use her when it is time to buy again.",
  },
  {
    name: "Selina Ahmed",
    rating: 5,
    quote:
      "Clarissa was outstanding throughout the whole process. I highly recommend her for all your real estate needs. She will go above and beyond. I was always in the loop throughout and was able to get hold of her anytime I needed.",
  },
  {
    name: "Denise Pindar",
    rating: 5,
    quote:
      "Clarissa did a fantastic job finding my dream home. She listened and took the time and care to make it her mission to find exactly what I was looking for. Come negotiation time she was a pit bull in making sure that we were not taken advantage of.",
  },
  {
    name: "thedonkrueger8",
    rating: 5,
    quote:
      "Clarissa (Claire) is an outstanding realtor. We sold our property while out of the State. She is a consummate professional. She helped us establish a competitive price. She then developed a comprehensive marketing plan. We immediately found a buyer.",
  },
  {
    name: "Julie Christiansen",
    rating: 5,
    quote:
      "Clarissa exceeded my expectations! This is my 3rd home purchase and she was by far the best I've ever worked with! She was there for me beginning to end and in constant contact. I really can't believe I was so lucky to have her as she worked nonstop for me and was so committed.",
  },
  {
    name: "Samantha Weite",
    rating: 5,
    quote:
      "As a couple flying in from out of state with no knowledge of the area, we were concerned we would miss out on the perfect house simply because we were unaware. Not to mention the unrealistically short deadline we had to find a home in the area (1 day).",
  },
  {
    name: "alexandersera11",
    rating: 5,
    quote:
      "Clarissa was great in helping us buy a new property. Very detail-oriented, efficient, and professional. A wonderful asset to her company. I highly recommend her for your next real estate needs! Overall, a completely seamless and outstanding experience.",
  },
  {
    name: "Brian Bowman",
    rating: 5,
    quote:
      "Claire was awesome. I was relocating from Hawaii to Florida not sure the distance nationally could have been any greater. The home we offered on was in probate and required a tremendous amount of back and forth over four months with not just the sellers but also probate attorneys.",
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
    title: "Neighborhoods",
    links: neighborhoods.map((neighborhood) => ({ label: neighborhood.name, href: `/neighborhoods/${neighborhood.slug}` })),
  },
  {
    title: "Communities",
    links: communityDirectory.map((community) => ({ label: community.name, href: community.href })),
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
    details: [testimonials[0].name, "Verified Zillow Review"],
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
