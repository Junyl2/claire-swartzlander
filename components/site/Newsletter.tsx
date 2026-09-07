import { Button } from "@/components/ui/Button";
import { MixedTitle } from "@/components/ui/MixedTitle";

export function Newsletter() {
  return (
    <div className="rounded-[var(--radius-panel)] border border-white/10 bg-white/4 p-6">
      <p className="eyebrow mb-3">Market Updates</p>
      <MixedTitle text="Get new listings and coastal market insights before they're public." as="h3" className="editorial-title display-title text-2xl leading-[0.95] text-paper" />
      <p className="mt-4 max-w-md text-sm leading-7 text-paper/68">
        Practical updates for buyers and sellers watching Palm Coast&apos;s waterfront and golf communities.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          aria-label="Email address"
          placeholder="Email Address"
          className="min-h-12 flex-1 rounded-[var(--radius-sharp)] border border-white/12 bg-white/6 px-4 text-sm text-paper placeholder:text-paper/40"
        />
        <Button href="/contact" variant="light">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
