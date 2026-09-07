"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { communityDirectory, contactItems, neighborhoodSections, neighborhoods, primaryNavigation, siteConfig, type NavItem } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { SiteLogo } from "@/components/site/SiteLogo";

const leftNavItems = primaryNavigation.slice(0, 3);
const rightNavItems = primaryNavigation.slice(3);

const communityColumnSize = Math.ceil(communityDirectory.length / 3);
const communityColumns = [
  communityDirectory.slice(0, communityColumnSize),
  communityDirectory.slice(communityColumnSize, communityColumnSize * 2),
  communityDirectory.slice(communityColumnSize * 2),
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [megaMenuTop, setMegaMenuTop] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const megaTriggerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const openDropdownNow = (href: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    const triggerEl = megaTriggerRefs.current.get(href);
    if (triggerEl && navbarRef.current) {
      const top = triggerEl.getBoundingClientRect().bottom - navbarRef.current.getBoundingClientRect().top;
      setMegaMenuTop(top);
    }
    setOpenDropdown(href);
  };

  const scheduleCloseDropdown = (href: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown((current) => (current === href ? null : current));
    }, 250);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    document.body.style.overflow = menuOpen ? "hidden" : "";
    window.dispatchEvent(
      new CustomEvent("mobile-menu-lock-change", {
        detail: { locked: menuOpen },
      }),
    );
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string, children?: { href: string }[]) =>
    pathname === href || Boolean(children?.some((item) => item.href === pathname));

  const transparentOverlay = !scrolled;

  const renderMegaMenuPanel = (item: NavItem, panelWidthClass: string, content: React.ReactNode) => (
    <div
      ref={(el) => {
        if (el) megaTriggerRefs.current.set(item.href, el);
      }}
      className="group relative"
      onMouseEnter={() => openDropdownNow(item.href)}
      onMouseLeave={() => scheduleCloseDropdown(item.href)}
      onFocus={() => openDropdownNow(item.href)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpenDropdown((current) => (current === item.href ? null : current));
        }
      }}
      data-nav-dropdown={item.label.toLowerCase()}
      data-state={openDropdown === item.href ? "open" : "closed"}
    >
      <Link
        href={item.href}
        aria-current={pathname === item.href ? "page" : undefined}
        className={cn(
          "ui-title inline-flex items-center gap-2 text-[13px]",
          transparentOverlay ? "text-paper" : "text-ink",
          "transition-colors duration-300 hover:text-primary focus-visible:text-primary",
        )}
        onClick={() => setOpenDropdown(null)}
      >
        <span className="premium-link">{item.label}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            openDropdown === item.href && "translate-y-px rotate-180",
          )}
        />
      </Link>
      <div
        style={{ top: megaMenuTop != null ? `${megaMenuTop}px` : undefined }}
        className={cn(
          "fixed left-1/2 top-24 z-20 isolate -translate-x-1/2 pt-2 transition duration-200 transform-gpu",
          openDropdown === item.href ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={openDropdown === item.href ? undefined : true}
      >
        <div className={cn("mx-auto bg-white text-ink border border-primary/12 p-6 shadow-[0_30px_90px_hsl(215_19%_10%_/_0.18)]", panelWidthClass)}>
          {content}
        </div>
      </div>
    </div>
  );

  const renderMegaMenuLink = (label: string, href: string, caption?: string) => (
    <li key={`${label}-${href}`}>
      <Link
        href={href}
        onClick={() => setOpenDropdown(null)}
        aria-current={pathname === href ? "page" : undefined}
        className={cn(
          "flex flex-col gap-0.5 border-b border-primary/10 py-2.5 text-sm font-semibold text-ink transition duration-300",
          "hover:text-primary focus-visible:text-primary",
          pathname === href && "text-primary",
        )}
      >
        <span>{label}</span>
        {caption ? <span className="text-[11px] font-medium normal-case tracking-normal text-slate">{caption}</span> : null}
      </Link>
    </li>
  );

  const renderNeighborhoodsMegaMenu = (item: NavItem) =>
    renderMegaMenuPanel(
      item,
      "w-[min(90vw,56rem)]",
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Neighborhoods by Name</p>
          <p className="mt-1.5 text-[11px] font-medium normal-case tracking-normal text-slate">
            The name you&apos;ll find on each community&apos;s entrance monument sign.
          </p>
          <ul className="mt-4 grid gap-0">
            {neighborhoods.map((neighborhood) =>
              renderMegaMenuLink(neighborhood.name, `/neighborhoods/${neighborhood.slug}`, `${neighborhood.sections.join(", ")} Section${neighborhood.sections.length > 1 ? "s" : ""}`),
            )}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Neighborhoods by Section</p>
          <p className="mt-1.5 text-[11px] font-medium normal-case tracking-normal text-slate">
            Section letters come from the street names within each area — the system locals use most.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6">
            {neighborhoodSections.map((entry) => renderMegaMenuLink(`${entry.section} Section`, `/neighborhoods/${entry.slug}`, entry.name))}
          </ul>
        </div>
      </div>,
    );

  const renderCommunitiesMegaMenu = (item: NavItem) =>
    renderMegaMenuPanel(
      item,
      "w-[min(92vw,72rem)]",
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Palm Coast Gated Communities</p>
        <div className="mt-4 grid gap-x-8 md:grid-cols-3">
          {communityColumns.map((column, columnIndex) => (
            <ul key={`community-column-${columnIndex}`} className="grid gap-0">
              {column.map((community) =>
                renderMegaMenuLink(community.name, community.href, community.parent ? `Part of ${community.parent}` : undefined),
              )}
            </ul>
          ))}
        </div>
      </div>,
    );

  const renderNavItem = (item: NavItem) => {
    if (item.href === "/neighborhoods") return renderNeighborhoodsMegaMenu(item);
    if (item.href === "/communities") return renderCommunitiesMegaMenu(item);

    if (item.children) {
      return (
        <div
          className="group relative"
          onMouseEnter={() => setOpenDropdown(item.href)}
          onMouseLeave={() => setOpenDropdown((current) => (current === item.href ? null : current))}
          onFocus={() => setOpenDropdown(item.href)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setOpenDropdown((current) => (current === item.href ? null : current));
            }
          }}
          data-nav-dropdown={item.label.toLowerCase()}
          data-state={openDropdown === item.href ? "open" : "closed"}
        >
          <Link
            href={item.href}
            aria-current={isActive(item.href, item.children) ? "page" : undefined}
            className={cn(
              "ui-title inline-flex items-center gap-2 text-[13px]",
              transparentOverlay ? "text-paper" : "text-ink",
              "transition-colors duration-300 hover:text-primary focus-visible:text-primary",
            )}
            onClick={() => setOpenDropdown(null)}
          >
            <span className="premium-link">{item.label}</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                openDropdown === item.href && "translate-y-px rotate-180",
              )}
            />
          </Link>
          <div
            className={cn(
              "absolute left-1/2 top-full z-20 isolate -translate-x-1/2 pt-4 transition duration-200 transform-gpu",
              openDropdown === item.href ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={openDropdown === item.href ? undefined : true}
          >
            <div className="min-w-64 bg-white text-ink border border-primary/12 p-3 shadow-[0_24px_70px_hsl(215_19%_10%_/_0.16)]">
              <ul className="grid gap-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-4 px-3 py-3 text-sm font-semibold text-ink transition duration-300",
                        "hover:bg-paper hover:text-primary focus-visible:bg-paper focus-visible:text-primary",
                        pathname === child.href && "bg-paper text-primary",
                      )}
                    >
                      <span>{child.label}</span>
                      <span className="h-px w-8 shrink-0 bg-primary/60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        aria-current={pathname === item.href ? "page" : undefined}
        className={cn(
          "premium-link ui-title text-[13px] transition-colors duration-300",
          transparentOverlay ? "text-paper" : "text-ink",
        )}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          data-header-shell="true"
          className={cn(
            "transition-colors duration-300",
            transparentOverlay
              ? "bg-transparent text-paper"
              : scrolled
                ? "border-b border-primary/10 bg-white text-ink"
                : "bg-white text-ink",
          )}
        >
          <div
            data-topbar="true"
            className={cn(
              "hidden md:block transition-colors duration-300",
              transparentOverlay ? "bg-transparent text-paper" : scrolled ? "bg-primary text-white" : "bg-white text-slate",
            )}
          >
            <Container className="min-h-10 items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] md:flex">
              <div className="flex items-center gap-6">
                <a href={contactItems[0].href} className="inline-flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{siteConfig.phone}</span>
                </a>
                <p>{siteConfig.email}</p>
              </div>
              <p>{siteConfig.brokerage}</p>
            </Container>
          </div>
          <div
            ref={navbarRef}
            data-navbar="true"
            className={cn(
              "transform-gpu",
              !transparentOverlay && scrolled && "bg-white text-ink",
            )}
          >
            <Container data-navbar-inner="true">
              {/* Mobile / tablet row: logo left, hamburger right */}
              <div className="flex min-h-18 items-center justify-between gap-6 lg:hidden">
                <Link
                  href="/"
                  aria-label={`${siteConfig.tagline} ${siteConfig.name}`}
                  className="flex min-w-0 items-center"
                >
                  <SiteLogo className="text-lg sm:text-xl md:text-2xl" dataAttribute="data-nav-logo" />
                </Link>
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(true)}
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border transition-colors duration-300",
                    transparentOverlay ? "border-white/30 text-paper" : "border-primary/15 text-ink",
                  )}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              {/* Desktop row: left links, centered logo, right links */}
              <div className="hidden lg:grid lg:min-h-24 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-16 lg:py-3 xl:gap-24">
                <nav aria-label="Primary navigation left" className="justify-self-start">
                  <ul className="flex items-center gap-6 xl:gap-7">
                    {leftNavItems.map((item) => (
                      <li key={item.href} className="relative">
                        {renderNavItem(item)}
                      </li>
                    ))}
                  </ul>
                </nav>

                <Link
                  href="/"
                  aria-label={`${siteConfig.tagline} ${siteConfig.name}`}
                  className="justify-self-center flex flex-col items-center gap-1.5"
                >
                  <span
                    className={cn(
                      "inline-flex h-5 items-center justify-center border border-dashed px-3 text-[9px] font-bold uppercase tracking-[0.16em] opacity-60",
                      transparentOverlay ? "border-white/50" : "border-ink/30",
                    )}
                  >
                    RE/MAX Logo
                  </span>
                  <span className="brand-title-script text-3xl leading-none xl:text-4xl">{siteConfig.name}</span>
                </Link>

                <nav aria-label="Primary navigation right" className="justify-self-end">
                  <ul className="flex items-center gap-6 xl:gap-7">
                    {rightNavItems.map((item) => (
                      <li key={item.href} className="relative">
                        {renderNavItem(item)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Container>
          </div>
        </div>
      </header>
      <MobileMenu items={primaryNavigation} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
