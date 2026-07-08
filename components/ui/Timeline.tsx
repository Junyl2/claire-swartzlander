import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <StaggerGroup className="grid gap-5 md:grid-cols-5" stagger={0.08}>
      {items.map((item, index) => (
        <MotionItem key={item.title}>
          <li className="relative border-l border-primary/35 pl-6 md:border-l-0 md:border-t md:pt-8">
            <span className="absolute -left-2 top-0 grid h-4 w-4 place-items-center rounded-full bg-primary text-[0] transition-transform duration-500 hover:scale-110 md:-top-2 md:left-0" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">0{index + 1}</p>
            <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
          </li>
        </MotionItem>
      ))}
    </StaggerGroup>
  );
}
