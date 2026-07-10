"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { contactItems, serviceMenuGroups, siteConfig, type NavItem } from "@/data/site";
import { SiteLogo } from "@/components/site/SiteLogo";

type MobileMenuProps = {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setAboutOpen(false);
      setServicesOpen(false);
    }
  }, [open]);

  useEffect(() => {
    setAboutOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 overflow-hidden bg-ink/72 text-paper backdrop-blur-md lg:hidden"
        >
          <motion.div
            data-mobile-menu-panel="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-[min(92vw,28rem)] max-w-[28rem] flex-col border-l border-white/10 bg-ink/96 px-5 py-5 shadow-[-20px_0_60px_hsl(215_19%_10%_/_0.34)]"
          >
            <div className="flex items-center justify-between">
              <Link href="/" aria-label={`${siteConfig.tagline} ${siteConfig.name}`} onClick={onClose} className="inline-flex">
                <SiteLogo className="w-18" priority />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center rounded-[var(--radius-sharp)] border border-white/12"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div data-mobile-menu-scroll="true" className="mt-8 min-h-0 flex-1 overflow-y-auto pr-1">
              <nav aria-label="Mobile navigation">
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="border-b border-white/10 pb-4">
                        {item.href === "/services" ? (
                          <button
                            type="button"
                            onClick={() => setServicesOpen((current) => !current)}
                            aria-expanded={servicesOpen}
                            className="display-title flex w-full items-center justify-between text-left text-[1.65rem] leading-none sm:text-[1.85rem]"
                          >
                            <span>{item.label}</span>
                            <span className="flex items-center gap-3">
                              <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">0{index + 1}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                              />
                            </span>
                          </button>
                        ) : item.children ? (
                          <button
                            type="button"
                            onClick={() => setAboutOpen((current) => !current)}
                            aria-expanded={aboutOpen}
                            className="display-title flex w-full items-center justify-between text-left text-[1.65rem] leading-none sm:text-[1.85rem]"
                          >
                            <span>{item.label}</span>
                            <span className="flex items-center gap-3">
                              <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">0{index + 1}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                              />
                            </span>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="display-title flex items-center justify-between text-[1.65rem] leading-none sm:text-[1.85rem]"
                          >
                            <span>{item.label}</span>
                            <span className="text-[11px] uppercase tracking-[0.18em] text-paper/45">0{index + 1}</span>
                          </Link>
                        )}
                        {item.href === "/services" ? (
                          servicesOpen ? (
                            <div className="mt-5 grid gap-5 pl-1">
                              <Link
                                href="/services"
                                onClick={onClose}
                                className="ui-title flex items-center justify-between text-sm text-primary"
                              >
                                <span>All Services</span>
                                <span className="h-px w-8 bg-primary/60" />
                              </Link>
                              {serviceMenuGroups.map((group) => (
                                <div key={group.title} className="grid gap-3">
                                  <Link
                                    href={group.href}
                                    onClick={onClose}
                                    className="ui-title flex items-center justify-between text-sm text-paper/88"
                                  >
                                    <span>{group.title}</span>
                                    <span className="text-[11px] uppercase tracking-[0.16em] text-paper/38">
                                      {String(group.items.length).padStart(2, "0")}
                                    </span>
                                  </Link>
                                  <ul className="grid gap-3 pl-3">
                                    {group.items.map((service) => (
                                      <li key={service.href}>
                                        <Link
                                          href={service.href}
                                          onClick={onClose}
                                          className="flex items-center justify-between text-[13px] font-semibold tracking-[0.02em] text-paper/66 transition duration-300 hover:text-paper"
                                        >
                                          <span>{service.label}</span>
                                          <span className="h-px w-7 bg-white/18" />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : null
                        ) : item.children ? (
                          aboutOpen ? (
                          <ul className="mt-4 grid gap-3 pl-1">
                            {item.children
                              .filter((child) => child.href !== item.href)
                              .map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    aria-current={pathname === child.href ? "page" : undefined}
                                    className="ui-title flex items-center justify-between text-sm text-paper/68 transition duration-300 hover:text-paper"
                                  >
                                    <span>{child.label}</span>
                                    <span className="h-px w-8 bg-white/20" />
                                  </Link>
                                </li>
                              ))}
                          </ul>
                          ) : null
                        ) : null}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
            <div
              data-mobile-menu-details="true"
              className="mt-4 border-t border-white/10 pt-4"
            >
              <div className="grid gap-3 text-sm text-paper/68">
                <a href={contactItems[0].href} className="flex items-center gap-3 transition duration-300 hover:text-paper">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition duration-300 hover:text-paper">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <div className="grid gap-1">
                    <span>{siteConfig.hours}</span>
                    <span className="text-paper/44">{siteConfig.address}</span>
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
