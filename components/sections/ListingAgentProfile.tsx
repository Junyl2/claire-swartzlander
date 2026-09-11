import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type ListingAgentProfileProps = {
  note: string;
};

export function ListingAgentProfile({ note }: ListingAgentProfileProps) {
  return (
    <div className="lg:sticky lg:top-44">
      <div className="image-frame relative aspect-[3/4] w-full max-w-[300px]">
        <Image
          src="/about/claire-about.png"
          alt="Clarissa Swartzlander"
          fill
          sizes="(min-width: 1024px) 300px, 60vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      <p className="eyebrow supporting-kicker mt-8">Listing Agent</p>
      <p className="editorial-title display-title mt-3 text-4xl leading-none text-ink">Clarissa Swartzlander</p>

      <div className="mt-8 grid gap-3 border-t border-primary/15 pt-8 text-base text-slate">
        <a
          href={`tel:${siteConfig.phone}`}
          className="premium-link inline-flex w-fit items-center gap-3 transition duration-300 hover:text-primary"
        >
          <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {siteConfig.phone}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="premium-link inline-flex w-fit items-center gap-3 transition duration-300 hover:text-primary"
        >
          <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {siteConfig.email}
        </a>
      </div>

      <p className="supporting-copy mt-8 border-t border-primary/15 pt-8 text-base leading-8 text-slate">{note}</p>

      <div className="mt-8">
        <Button href="/book-an-appointment" variant="secondary">
          Book An Appointment
        </Button>
      </div>
    </div>
  );
}
