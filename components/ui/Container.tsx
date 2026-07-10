import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
} & ComponentPropsWithoutRef<"div">;

export function Container({ children, className, as: Component = "div", ...props }: ContainerProps) {
  return (
    <Component className={cn("container-shell", className)} {...props}>
      {children}
    </Component>
  );
}
