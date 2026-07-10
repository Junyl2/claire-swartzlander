"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { contactItems, primaryNavigation, serviceMenuGroups, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/interactive/MobileMenu";
import { SiteLogo } from "@/components/site/SiteLogo";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeServiceGroup, setActiveServiceGroup] = useState(serviceMenuGroups[0]?.title ?? "");

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

  const activeServiceMenu =
    serviceMenuGroups.find((group) => group.title === activeServiceGroup) ?? serviceMenuGroups[0];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          data-header-shell="true"
          className={cn(
            scrolled ? "border-b border-primary/10 bg-white text-ink" : "bg-white text-ink",
          )}
        >
          <div
            data-topbar="true"
            className={cn(
              "hidden md:block",
              scrolled ? "bg-primary text-white" : "bg-white text-slate",
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
              <p>{siteConfig.hours}</p>
            </Container>
          </div>
          <div
            data-navbar="true"
            className={cn(
              scrolled && "bg-white text-ink",
            )}
          >
            <Container
              data-navbar-inner="true"
              className="flex min-h-18 items-center justify-between gap-6 lg:py-2"
            >
              <Link
                href="/"
                aria-label={`${siteConfig.tagline} ${siteConfig.name}`}
                className="flex min-w-0 items-center"
              >
                <SiteLogo
                  className="brand-title w-16 sm:w-18 md:w-20 lg:w-18 xl:w-20"
                  priority
                  dataAttribute="data-nav-logo"
                />
              </Link>
              <nav aria-label="Primary navigation" className="ml-auto hidden lg:block">
                <ul className="flex items-center justify-end gap-8">
                  {primaryNavigation.map((item) => (
                    <li key={item.href} className="relative">
                    {item.href === "/services" ? (
                      <div
                        className="group relative"
                        onMouseEnter={() => {
                          setOpenDropdown(item.href);
                          setActiveServiceGroup(serviceMenuGroups[0]?.title ?? "");
                        }}
                        onMouseLeave={() => setOpenDropdown((current) => (current === item.href ? null : current))}
                        onFocus={() => {
                          setOpenDropdown(item.href);
                          setActiveServiceGroup((current) => current || serviceMenuGroups[0]?.title || "");
                        }}
                        onBlur={(event) => {
                          if (!event.currentTarget.contains(event.relatedTarget)) {
                            setOpenDropdown((current) => (current === item.href ? null : current));
                          }
                        }}
                        data-nav-dropdown="services"
                        data-state={openDropdown === item.href ? "open" : "closed"}
                      >
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className={cn(
                            "ui-title inline-flex items-center gap-2 text-[13px]",
                            "text-ink",
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
                          <div className="w-[min(82vw,68rem)] border border-white/10 bg-ink/96 p-5 shadow-[0_30px_90px_hsl(215_19%_10%_/_0.32)] backdrop-blur-xl">
                            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.3fr]">
                              <div className="border-b border-white/10 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                  How We Can Serve
                                </p>
                                <p className="mt-3 max-w-sm text-sm leading-6 text-paper/62">
                                  Explore categories first, then move through each specific service inside the current group.
                                </p>
                                <div className="mt-5 grid gap-1">
                                  {serviceMenuGroups.map((group) => (
                                    <button
                                      key={group.title}
                                      type="button"
                                      onMouseEnter={() => setActiveServiceGroup(group.title)}
                                      onFocus={() => setActiveServiceGroup(group.title)}
                                      className={cn(
                                        "flex items-center justify-between px-3 py-3 text-left transition duration-300",
                                        activeServiceMenu?.title === group.title
                                          ? "bg-white/7 text-paper"
                                          : "text-paper/74 hover:bg-white/5 hover:text-paper",
                                      )}
                                      aria-pressed={activeServiceMenu?.title === group.title}
                                    >
                                      <span className="text-sm font-semibold uppercase tracking-[0.12em]">
                                        {group.title}
                                      </span>
                                      <span className="text-[11px] uppercase tracking-[0.16em] text-paper/42">
                                        {String(group.items.length).padStart(2, "0")}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="grid content-start gap-4">
                                <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                                  <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper/48">
                                      Category
                                    </p>
                                    <h3 className="mt-2 text-2xl font-semibold text-paper">
                                      {activeServiceMenu?.title}
                                    </h3>
                                  </div>
                                  <Link
                                    href={activeServiceMenu?.href ?? "/services"}
                                    onClick={() => setOpenDropdown(null)}
                                    className="premium-link text-xs font-bold uppercase tracking-[0.16em] text-primary"
                                  >
                                    View Category
                                  </Link>
                                </div>
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {activeServiceMenu?.items.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="flex items-center justify-between border-b border-white/8 px-3 py-3 text-sm font-semibold text-paper/78 transition duration-300 hover:bg-white/5 hover:text-paper"
                                    >
                                      <span>{service.label}</span>
                                      <span className="h-px w-8 bg-primary/60" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.children ? (
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
                            "text-ink",
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
                          <div className="min-w-56 border border-white/10 bg-ink/95 p-3 shadow-[0_24px_70px_hsl(215_19%_10%_/_0.28)] backdrop-blur-xl">
                            <ul className="grid gap-1">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setOpenDropdown(null)}
                                    aria-current={pathname === child.href ? "page" : undefined}
                                    className={cn(
                                      "flex items-center justify-between px-3 py-3 text-sm font-semibold text-paper/82 transition duration-300",
                                      "hover:bg-white/6 hover:text-paper focus-visible:bg-white/6 focus-visible:text-paper",
                                      pathname === child.href && "bg-white/6 text-paper",
                                    )}
                                  >
                                    <span>{child.label}</span>
                                    <span className="text-[11px] uppercase tracking-[0.16em] text-paper/40">
                                      {child.label.slice(0, 2)}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="premium-link ui-title text-[13px] text-ink"
                      >
                        {item.label}
                      </Link>
                    )}
                    </li>
                  ))}
                </ul>
              </nav>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border lg:hidden",
                  "border-primary/15 text-ink",
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </Container>
          </div>
        </div>
      </header>
      <MobileMenu items={primaryNavigation} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
