import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-secondary",
  secondary: "border border-primary/35 text-ink hover:border-primary hover:bg-primary hover:text-white",
  ghost: "text-inherit hover:text-primary",
  light: "bg-paper text-ink hover:bg-primary hover:text-white",
};

export function Button({ href, children, variant = "primary", className, ariaLabel }: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-[var(--radius-sharp)] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition duration-300 focus-visible:outline-primary",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
