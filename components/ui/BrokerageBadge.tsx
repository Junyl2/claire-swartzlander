import { Award } from "lucide-react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type BrokerageBadgeProps = {
  className?: string;
};

export function BrokerageBadge({ className }: BrokerageBadgeProps) {
  return (
    <div
      className={cn(
        "group inline-flex w-fit items-center gap-3 rounded-[var(--radius-panel)] border border-white/24 px-4 py-3 text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/46",
        className,
      )}
    >
      <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sharp)] bg-white/95">
        <Award className="h-5 w-5 text-ink" />
      </span>
      <span className="grid gap-0.5">
        <span className="ui-title text-sm leading-none text-white">{siteConfig.brokerage}</span>
        <span className="supporting-copy text-xs leading-none text-white/72">{siteConfig.tagline}</span>
      </span>
    </div>
  );
}
