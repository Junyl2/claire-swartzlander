# Premium Construction Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete premium multi-page construction company website template with reusable design, content, and component systems.

**Architecture:** Create a Next.js 15 App Router application with server-rendered pages, centralized placeholder data, reusable editorial components, and narrowly scoped client components for navigation, slideshow, carousel, and reveal interactions. The site uses Tailwind CSS v4 tokens and CSS variables as the design-system foundation.

**Tech Stack:** Next.js 15, React 19, TypeScript strict, Tailwind CSS v4, next/font, next/image, Lucide React, Framer Motion, Vitest, Testing Library.

## Global Constraints

- Implement Home, Services, About, Projects, Reviews, Careers, Service Areas, and Contact from the start.
- Design must feel editorial, architectural, premium, industrial, reliable, refined, and never playful or SaaS-like.
- Use centralized data for navigation, services, projects, testimonials, statistics, careers, service areas, company information, and footer links.
- Use reusable components including PageHero, SectionHeading, Container, Button, CTASection, StatsGrid, Timeline, TestimonialCard, ServiceCard, ProjectCard, ProjectGallery, ImagePlaceholder, ContactForm, Newsletter, Footer, and Navigation.
- Use premium construction-themed placeholders with correct aspect ratios, gradients, labels, overlays, and loading states; no gray boxes.
- Hero must be 100vh with three crossfading construction placeholders, dark overlay, editorial heading, CTAs, scroll indicator, and overlaid top bar/navigation.
- Server Components by default; Client Components only for required interactivity.
- Each page must include metadata, Open Graph, Twitter metadata, canonical support, and proper heading hierarchy.
- Strict TypeScript, no duplicated code, no dead code, no TODO comments, modular architecture, consistent naming, clean folder structure.

---

### Task 1: Project Scaffold And Test Harness

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `tests/site-data.test.ts`
- Create: `tests/render-smoke.test.tsx`

**Interfaces:**
- Produces scripts: `npm run lint`, `npm test`, `npm run build`, `npm run dev`
- Produces aliases: `@/*`

- [ ] Create project configuration with strict TypeScript, Next.js App Router, Tailwind v4, ESLint, and Vitest.
- [ ] Write failing tests that assert the required routes, centralized data, and page-renderable component exports exist.
- [ ] Run tests and confirm failure because implementation files are missing.

### Task 2: Design Tokens And Core Data

**Files:**
- Create: `app/globals.css`
- Create: `data/site.ts`
- Create: `lib/metadata.ts`
- Create: `lib/utils.ts`

**Interfaces:**
- Exports `siteConfig`, `navigation`, `services`, `projects`, `testimonials`, `statistics`, `careerRoles`, `serviceAreas`, `footerLinks`.
- Exports `createPageMetadata(page: PageMetadataInput): Metadata`.
- Exports `cn(...classes: ClassValue[]): string`.

- [ ] Implement design-system variables for color, type, spacing, radius, shadows, motion, and focus states.
- [ ] Implement centralized placeholder content and route metadata inputs.
- [ ] Run data integrity tests and confirm centralized data satisfies route/content requirements.

### Task 3: Core UI Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Container.tsx`
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/ui/ImagePlaceholder.tsx`
- Create: `components/ui/StatsGrid.tsx`
- Create: `components/ui/Timeline.tsx`
- Create: `components/ui/CTASection.tsx`

**Interfaces:**
- Reusable server-safe components with typed props.
- `ImagePlaceholder` uses `next/image` with local placeholder SVG assets.

- [ ] Implement composable UI primitives.
- [ ] Preserve sharp/minimal radius and premium industrial tone.
- [ ] Run render smoke tests for core components.

### Task 4: Site Shell And Interactive Components

**Files:**
- Create: `app/layout.tsx`
- Create: `components/site/Navigation.tsx`
- Create: `components/site/Footer.tsx`
- Create: `components/site/Newsletter.tsx`
- Create: `components/interactive/HeroSlideshow.tsx`
- Create: `components/interactive/MobileMenu.tsx`
- Create: `components/interactive/Reveal.tsx`
- Create: `components/interactive/TestimonialCarousel.tsx`

**Interfaces:**
- Layout wraps all pages with navigation, footer, fonts, metadata defaults.
- Client components handle scroll state, menu state, crossfade, carousel, and reveal animation only.

- [ ] Implement sticky transparent-to-glass navigation and fullscreen mobile menu.
- [ ] Implement footer and newsletter with centralized links.
- [ ] Implement subtle interactive components with accessible controls.

### Task 5: Cards, Forms, And Editorial Sections

**Files:**
- Create: `components/sections/PageHero.tsx`
- Create: `components/sections/HomeHero.tsx`
- Create: `components/sections/ServiceCard.tsx`
- Create: `components/sections/ProjectCard.tsx`
- Create: `components/sections/ProjectGallery.tsx`
- Create: `components/sections/TestimonialCard.tsx`
- Create: `components/sections/ContactForm.tsx`
- Create: `components/sections/PreviewBand.tsx`

**Interfaces:**
- Components consume centralized data and expose typed props for page composition.

- [ ] Implement page hero patterns, home slideshow hero, cards, galleries, forms, and page preview bands.
- [ ] Ensure forms use semantic labels and accessible fields.
- [ ] Ensure all CTAs point to valid internal routes or anchors.

### Task 6: Complete Pages

**Files:**
- Create: `app/page.tsx`
- Create: `app/services/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/projects/page.tsx`
- Create: `app/reviews/page.tsx`
- Create: `app/careers/page.tsx`
- Create: `app/service-areas/page.tsx`
- Create: `app/contact/page.tsx`

**Interfaces:**
- Every page exports `metadata`.
- Every page composes reusable components and centralized data.

- [ ] Implement distinct editorial layouts for all eight pages.
- [ ] Homepage previews every dedicated page and encourages navigation.
- [ ] Maintain responsive image-first composition and accessible heading hierarchy.

### Task 7: Assets And Verification

**Files:**
- Create: `public/placeholders/hero-structure.svg`
- Create: `public/placeholders/hero-craft.svg`
- Create: `public/placeholders/hero-engineering.svg`
- Create: `public/placeholders/site.svg`
- Create: `public/placeholders/interior.svg`
- Create: `public/placeholders/equipment.svg`
- Create: `public/placeholders/office.svg`
- Create: `public/placeholders/team.svg`
- Create: `public/placeholders/map.svg`
- Create: `public/placeholders/project.svg`

**Interfaces:**
- Assets are local and usable by `next/image`.

- [ ] Create premium local placeholder assets.
- [ ] Install dependencies.
- [ ] Run `npm test`, `npm run lint`, and `npm run build`.
- [ ] Start the dev server and report the local URL.

