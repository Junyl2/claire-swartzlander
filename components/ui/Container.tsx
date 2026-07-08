import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
};

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return <Component className={cn("container-shell", className)}>{children}</Component>;
}
