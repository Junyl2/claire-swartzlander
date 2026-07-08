import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";

export function ContactForm() {
  return (
    <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8" stagger={0.07}>
      <form>
        <div className="grid gap-5 md:grid-cols-2">
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Lorem Ipsum"
                className="min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              />
            </label>
          </MotionItem>
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Email Address
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              />
            </label>
          </MotionItem>
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="+1 (000) 000-0000"
                className="min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              />
            </label>
          </MotionItem>
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Project Type
              <select name="type" className="min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4">
                <option>Commercial Construction</option>
                <option>Luxury Residential</option>
                <option>Civil Engineering</option>
                <option>Design-Build Delivery</option>
              </select>
            </label>
          </MotionItem>
        </div>
        <MotionItem>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
            Project Details
            <textarea
              name="message"
              rows={6}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className="rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 py-3 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
            />
          </label>
        </MotionItem>
        <MotionItem>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-secondary hover:-translate-y-0.5"
          >
            Submit Inquiry
          </button>
        </MotionItem>
      </form>
    </StaggerGroup>
  );
}
