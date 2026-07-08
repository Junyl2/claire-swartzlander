import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <div className="rounded-[var(--radius-panel)] border border-white/10 bg-white/4 p-6">
      <p className="eyebrow mb-3">Newsletter</p>
      <h3 className="editorial-title text-2xl text-paper">Receive project notes, insights, and studio updates.</h3>
      <p className="mt-4 max-w-md text-sm leading-7 text-paper/68">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.
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
