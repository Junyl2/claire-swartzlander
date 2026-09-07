import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  dataAttribute?: string;
};

export function SiteLogo({ className, dataAttribute }: SiteLogoProps) {
  return (
    <span {...(dataAttribute ? { [dataAttribute]: "true" } : {})} className={cn("brand-title block leading-none", className)}>
      {siteConfig.name}
    </span>
  );
}
