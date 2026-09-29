import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { footerLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/site/SiteLogo";
import { FooterWave } from "@/components/ui/FooterWave";

const utilityGroupTitles = ["Pages", "Sell", "Social"];

export function Footer() {
  const utilityGroups = footerLinks.filter((group) => utilityGroupTitles.includes(group.title));
  const directoryGroups = footerLinks.filter((group) => !utilityGroupTitles.includes(group.title));

  return (
    <footer className="bg-paper text-ink">
      <div className="relative overflow-hidden py-16 text-ink">
        <Image src="/footer-bg.jpg" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.8)_52%,rgba(255,255,255,0.97)_100%)]"
        />
        <FooterWave className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-56 w-full opacity-90 [mask-image:linear-gradient(to_right,black_0%,black_22%,transparent_40%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_22%,transparent_40%)] lg:block" />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.05fr] lg:items-end">
            <div className="-mb-16 hidden justify-self-start lg:block">
              <Image
                src="/footer-profile.png"
                alt="Clarissa Swartzlander"
                width={600}
                height={700}
                className="h-80 w-auto object-contain object-bottom lg:h-96 xl:h-[28rem]"
              />
            </div>
            <div className="lg:self-center">
              <Image src="/remax-logo-black.png" alt="RE/MAX" width={300} height={80} className="h-14 w-auto sm:h-16" />
              <Link href="/" aria-label={`${siteConfig.tagline} ${siteConfig.name}`} className="mt-6 inline-flex flex-col items-start">
                <SiteLogo className="text-2xl sm:text-3xl lg:text-4xl" />
                <span className="mt-2 h-[3px] w-16 bg-[#c8102e]" />
              </Link>
              <p className="supporting-copy mt-6 max-w-xl text-base text-slate">
                {siteConfig.tagline}, {siteConfig.brokerage}. Guiding buyers and sellers through Palm Coast&apos;s waterfront and golf communities from first showing to closing day.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 text-sm text-slate">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#c8102e] text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition duration-300 hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#2a5bb0] text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0a2559] text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
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
      </Container>

      <div className="bg-[#0043ff] py-5 text-white">
        <Container>
          <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.12em] sm:flex-row sm:justify-between">
            <p>Copyright 2026 {siteConfig.name}</p>
            <p>{siteConfig.tagline}, {siteConfig.brokerage}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
