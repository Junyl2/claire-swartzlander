import Link from "next/link";
import Image from "next/image";

import { footerLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/site/SiteLogo";

const utilityGroupTitles = ["Pages", "Sell", "Social"];

export function Footer() {
  const utilityGroups = footerLinks.filter((group) => utilityGroupTitles.includes(group.title));
  const directoryGroups = footerLinks.filter((group) => !utilityGroupTitles.includes(group.title));

  return (
    <footer className="bg-paper pb-8 pt-20 text-ink">
      <Container>
        <div className="grid gap-10 border-b border-primary/15 pb-12 lg:grid-cols-[0.65fr_1.05fr] lg:items-center">
          <div className="hidden justify-self-start lg:block">
            <Image
              src="/footer-profile.png"
              alt="Claire Swartzlander"
              width={500}
              height={500}
              className="h-64 w-auto object-contain xl:h-80"
            />
          </div>
          <div>
            <Image src="/remax-logo-black.png" alt="RE/MAX" width={300} height={80} className="h-14 w-auto sm:h-16" />
            <Link href="/" aria-label={`${siteConfig.tagline} ${siteConfig.name}`} className="mt-6 inline-flex">
              <SiteLogo className="text-2xl sm:text-3xl lg:text-4xl" />
            </Link>
            <p className="supporting-copy mt-6 max-w-xl text-base text-slate">
              {siteConfig.tagline}, {siteConfig.brokerage}. Guiding buyers and sellers through Palm Coast&apos;s waterfront and golf communities from first showing to closing day.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm leading-7 text-slate">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {utilityGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link href={link.href} className="premium-link inline-flex transition duration-300 hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-primary/10 pt-10 sm:grid-cols-2">
            {directoryGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">{group.title}</h3>
                <ul className="mt-4 columns-2 gap-x-6 text-sm text-slate lg:columns-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`} className="mb-3 break-inside-avoid">
                      <Link href={link.href} className="premium-link inline-flex transition duration-300 hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-primary/15 pt-6 text-xs font-medium uppercase tracking-[0.12em] text-slate sm:flex-row sm:justify-between">
          <p>Copyright 2026 {siteConfig.name}</p>
          <p>{siteConfig.tagline}, {siteConfig.brokerage}</p>
        </div>
      </Container>
    </footer>
  );
}
