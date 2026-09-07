import { Bath, BedDouble, Ruler } from "lucide-react";

import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import type { Listing } from "@/data/site";

type ListingCardProps = {
  listing: Listing;
};

const statusStyles: Record<Listing["status"], string> = {
  Active: "bg-primary text-white",
  New: "bg-secondary text-white",
  Pending: "bg-ink text-white",
};

const formatPrice = (price: number) =>
  price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function ListingCard({ listing }: ListingCardProps) {
  const inquiryHref = `/contact?interest=${encodeURIComponent("Listing Inquiry")}&message=${encodeURIComponent(
    `I'd like more information about the ${listing.title} listing in ${listing.community}.`,
  )}`;

  return (
    <div className="group flex h-full flex-col">
      <div className="relative">
        <ImagePlaceholder src={listing.image.src} alt={listing.image.alt} label={listing.image.label} ratio="wide" />
        <span
          className={`ui-title absolute left-4 top-4 z-10 inline-flex items-center rounded-[var(--radius-sharp)] px-3 py-1.5 text-[11px] ${statusStyles[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{listing.community}, Palm Coast FL</p>
        <h3 className="editorial-title mt-2 text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-primary">
          {listing.title}
        </h3>
        <p className="display-title mt-2 text-3xl leading-none text-ink">{formatPrice(listing.price)}</p>

        <div className="mt-4 flex items-center gap-5 text-sm font-semibold text-slate">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-primary" />
            {listing.beds} Beds
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-primary" />
            {listing.baths} Baths
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-primary" />
            {listing.sqft.toLocaleString("en-US")} SqFt
          </span>
        </div>

        <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-slate/70">
          Sample listing — contact Claire for current inventory
        </p>

        <Button href={inquiryHref} variant="secondary" className="mt-6 self-start">
          Request Info
        </Button>
      </div>
    </div>
  );
}
