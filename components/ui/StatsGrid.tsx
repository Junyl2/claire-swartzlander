import type { Statistic } from "@/data/site";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";

type StatsGridProps = {
  items: Statistic[];
  dark?: boolean;
};

export function StatsGrid({ items, dark = false }: StatsGridProps) {
  return (
    <StaggerGroup className="grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-primary/15 md:grid-cols-4" stagger={0.08}>
      {items.map((item) => (
        <MotionItem key={item.label}>
          <div className={dark ? "bg-charcoal p-7 text-paper transition-transform duration-500 hover:-translate-y-1" : "bg-paper p-7 text-ink transition-transform duration-500 hover:-translate-y-1"}>
            <dt className="editorial-title text-5xl leading-none text-primary">{item.value}</dt>
            <dd className="mt-4">
              <p className="text-sm font-bold uppercase tracking-[0.12em]">{item.label}</p>
              <p className={dark ? "mt-3 text-sm leading-6 text-paper/68" : "mt-3 text-sm leading-6 text-slate"}>{item.description}</p>
            </dd>
          </div>
        </MotionItem>
      ))}
    </StaggerGroup>
  );
}
