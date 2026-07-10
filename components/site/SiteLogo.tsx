import Image from "next/image";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  dataAttribute?: string;
};

export function SiteLogo({ className, imageClassName, priority = false, dataAttribute }: SiteLogoProps) {
  return (
    <span {...(dataAttribute ? { [dataAttribute]: "true" } : {})} className={cn("block", className)}>
      <Image
        src="/logo/ere-logo.png"
        alt={siteConfig.name}
        width={3301}
        height={3301}
        priority={priority}
        sizes="(min-width: 1280px) 8rem, (min-width: 1024px) 7rem, (min-width: 768px) 6rem, 5rem"
        className={cn("h-auto w-full object-contain", imageClassName)}
      />
    </span>
  );
}
