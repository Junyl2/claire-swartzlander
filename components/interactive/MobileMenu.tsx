"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { communityDirectory, contactItems, neighborhoodSections, neighborhoods, siteConfig, type NavItem } from "@/data/site";
import { SiteLogo } from "@/components/site/SiteLogo";

type MobileMenuProps = {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (href: string) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!open) {
      setOpenSections(new Set());
    }
  }, [open]);

  useEffect(() => {
    setOpenSections(new Set());
  }, [pathname]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 overflow-hidden bg-ink/60 backdrop-blur-md lg:hidden"
        >
          <motion.div
            data-mobile-menu-panel="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-[min(92vw,28rem)] max-w-[28rem] flex-col border-l border-primary/15 bg-white px-5 py-5 text-ink shadow-[-20px_0_60px_hsl(215_19%_10%_/_0.2)]"
          >
            <div className="flex items-center justify-between">
              <Link href="/" aria-label={`${siteConfig.tagline} ${siteConfig.name}`} onClick={onClose} className="inline-flex">
                <SiteLogo className="text-xl" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border border-primary/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div data-mobile-menu-scroll="true" className="mt-8 min-h-0 flex-1 overflow-y-auto pr-1">
              <nav aria-label="Mobile navigation">
                <ul className="space-y-4">
                  {items.map((item, index) => {
                    const isSectionOpen = openSections.has(item.href);
                    const isNeighborhoods = item.href === "/neighborhoods";
                    const isCommunities = item.href === "/communities";
                    const isExpandable = Boolean(item.children) || isNeighborhoods || isCommunities;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="border-b border-primary/15 pb-4">
                          {isExpandable ? (
                            <button
                              type="button"
                              onClick={() => toggleSection(item.href)}
                              aria-expanded={isSectionOpen}
                              className="display-title flex w-full items-center justify-between text-left text-[1.65rem] leading-none text-ink sm:text-[1.85rem]"
                            >
                              <span>{item.label}</span>
                              <span className="flex items-center gap-3">
                                <span className="text-[11px] uppercase tracking-[0.18em] text-slate">0{index + 1}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-300 ${isSectionOpen ? "rotate-180" : ""}`}
                                />
                              </span>
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={onClose}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className="display-title flex items-center justify-between text-[1.65rem] leading-none text-ink sm:text-[1.85rem]"
                            >
                              <span>{item.label}</span>
                              <span className="text-[11px] uppercase tracking-[0.18em] text-slate">0{index + 1}</span>
                            </Link>
                          )}
                          {isSectionOpen && isNeighborhoods ? (
                            <div className="mt-5 grid gap-6 pl-1">
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">By Name</p>
                                <p className="mt-1 text-[11px] font-medium normal-case tracking-normal text-slate">
                                  The name on each community&apos;s entrance monument sign.
                                </p>
                                <ul className="mt-3 grid gap-3">
                                  {neighborhoods.map((neighborhood) => (
                                    <li key={neighborhood.slug}>
                                      <Link
                                        href={`/neighborhoods/${neighborhood.slug}`}
                                        onClick={onClose}
                                        className="ui-title flex items-center justify-between gap-4 text-sm text-ink transition duration-300 hover:text-primary"
                                      >
                                        <span>{neighborhood.name}</span>
                                        <span className="text-[11px] normal-case tracking-normal text-slate">{neighborhood.sections.join(", ")}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">By Section</p>
                                <p className="mt-1 text-[11px] font-medium normal-case tracking-normal text-slate">
                                  Section letters come from the street names within each area.
                                </p>
                                <ul className="mt-3 grid grid-cols-2 gap-3">
                                  {neighborhoodSections.map((entry) => (
                                    <li key={entry.section}>
                                      <Link
                                        href={`/neighborhoods/${entry.slug}`}
                                        onClick={onClose}
                                        className="flex flex-col text-sm font-semibold text-ink transition duration-300 hover:text-primary"
                                      >
                                        <span>{entry.section} Section</span>
                                        <span className="text-[11px] font-medium text-slate">{entry.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ) : null}
                          {isSectionOpen && isCommunities ? (
                            <ul className="mt-5 grid gap-3 pl-1">
                              {communityDirectory.map((community) => (
                                <li key={community.slug}>
                                  <Link
                                    href={community.href}
                                    onClick={onClose}
                                    className="ui-title flex items-center justify-between gap-4 text-sm text-ink transition duration-300 hover:text-primary"
                                  >
                                    <span>{community.name}</span>
                                    {community.parent ? (
                                      <span className="text-[11px] normal-case tracking-normal text-slate">Part of {community.parent}</span>
                                    ) : null}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {item.children && isSectionOpen ? (
                            <ul className="mt-5 grid gap-4 pl-1">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    aria-current={pathname === child.href ? "page" : undefined}
                                    className="ui-title flex items-center justify-between gap-4 text-sm text-ink transition duration-300 hover:text-primary"
                                  >
                                    <span>{child.label}</span>
                                    <span className="h-px w-8 shrink-0 bg-primary/30" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div
              data-mobile-menu-details="true"
              className="mt-4 border-t border-primary/15 pt-4"
            >
              <div className="grid gap-3 text-sm text-slate">
                <a href={contactItems[0].href} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <div className="grid gap-1">
                    <span className="text-ink">{siteConfig.brokerage}</span>
                    <span className="text-slate">{siteConfig.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
