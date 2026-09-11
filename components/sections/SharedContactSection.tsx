import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { MixedTitle } from "@/components/ui/MixedTitle";
import { contactItems, pageCopy, siteConfig } from "@/data/site";

export function SharedContactSection() {
  return (
    <section className="section-y bg-paper">
      <Container className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <ImagePlaceholder
          src="/new-contact.jpg"
          alt="Aerial view of an oceanfront condo community along the Flagler County coastline"
          label="Reach Claire"
          ratio="cinema"
          className="min-h-[18rem] md:min-h-[24rem] lg:min-h-[36rem]"
        />
        <div className="flex min-w-0 flex-col justify-between border-t border-primary/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <p className="eyebrow supporting-kicker">Start The Conversation</p>
          <MixedTitle
            text={pageCopy.contact.title}
            as="h2"
            className="editorial-title display-title mt-4 text-balance text-3xl leading-[0.92] text-ink md:text-5xl"
          />
          <p className="supporting-copy mt-5 max-w-2xl text-base text-slate md:text-lg">
            {pageCopy.contact.description}
          </p>

          <div className="mt-8 grid gap-0 border-y border-primary/15">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a key={item.label} href={item.href} className="flex items-center justify-between gap-4 border-b border-primary/15 py-5 transition duration-300 last:border-b-0 hover:text-primary">
                  <div className="flex min-w-0 items-center gap-4">
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="ui-title text-[11px] text-primary">{item.label}</p>
                      <p className="supporting-copy mt-2 break-words text-sm leading-6 text-slate">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="ui-title text-[11px] text-primary">Availability</p>
              <p className="supporting-copy mt-2 text-sm text-slate">{siteConfig.hours}</p>
            </div>
            <Button href="/contact" variant="secondary">
              Send An Inquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
