"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { contactItems, primaryNavigation, siteConfig, type NavItem } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { SiteLogo } from "@/components/site/SiteLogo";

const leftNavItems = primaryNavigation.slice(0, 3);
const rightNavItems = primaryNavigation.slice(3);

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const renderNavItem = (item: NavItem) => {
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
              "absolute left-1/2 top-full z-20 -translate-x-1/2 pt-4 transition duration-200",
              openDropdown === item.href ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={openDropdown === item.href ? undefined : true}
          >
            <div className="min-w-64 border border-white/10 bg-ink/95 p-3 shadow-[0_24px_70px_hsl(215_19%_10%_/_0.28)] backdrop-blur-xl">
              <ul className="grid gap-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between gap-4 px-3 py-3 text-sm font-semibold text-paper/82 transition duration-300",
                        "hover:bg-white/6 hover:text-paper focus-visible:bg-white/6 focus-visible:text-paper",
                        pathname === child.href && "bg-white/6 text-paper",
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
            data-navbar="true"
            className={cn(
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
              <div className="hidden lg:grid lg:min-h-24 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-40 lg:py-3">
                <nav aria-label="Primary navigation left" className="justify-self-end">
                  <ul className="flex items-center gap-7">
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

                <nav aria-label="Primary navigation right" className="justify-self-start">
                  <ul className="flex items-center gap-7">
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
