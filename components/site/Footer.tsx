import Link from "next/link";

import { footerLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Newsletter } from "@/components/site/Newsletter";

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-20 text-paper">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4">Company</p>
            <h2 className="editorial-title max-w-xl text-4xl leading-none">{siteConfig.name}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-paper/68">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
            </p>
          </div>
          <Newsletter />
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-paper/50">{siteConfig.tagline}</p>
            <div className="mt-6 space-y-2 text-sm leading-7 text-paper/68">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-paper">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-paper/68">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link href={link.href} className="premium-link inline-flex">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-medium uppercase tracking-[0.12em] text-paper/44 sm:flex-row sm:justify-between">
          <p>Copyright 2026 {siteConfig.name}</p>
          <p>Premium construction website template</p>
        </div>
      </Container>
    </footer>
  );
}
