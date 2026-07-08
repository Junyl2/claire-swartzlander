import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ kicker, title, description, align = "left", tone = "dark", className }: SectionHeadingProps) {
  return (
    <StaggerGroup className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)} stagger={0.08}>
      <MotionItem>
        <p className="eyebrow mb-4">{kicker}</p>
      </MotionItem>
      <MotionItem>
        <h2 className={cn("editorial-title text-balance text-4xl leading-[0.98] md:text-6xl", tone === "light" ? "text-paper" : "text-ink")}>
          {title}
        </h2>
      </MotionItem>
      {description ? (
        <MotionItem>
          <p className={cn("mt-6 max-w-2xl text-base leading-8 md:text-lg", tone === "light" ? "text-paper/70" : "text-slate")}>
            {description}
          </p>
        </MotionItem>
      ) : null}
    </StaggerGroup>
  );
}
