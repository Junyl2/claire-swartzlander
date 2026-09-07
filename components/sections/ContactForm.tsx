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
                placeholder="Full Name"
                className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
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
                className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              />
            </label>
          </MotionItem>
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="(386) 555-0142"
                className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              />
            </label>
          </MotionItem>
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              I&apos;m Interested In
              <select name="type" className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4">
                <option>Buying A Home</option>
                <option>Selling My Home</option>
                <option>A Cash Offer</option>
                <option>What&apos;s My Home Worth?</option>
                <option>Booking An Appointment</option>
                <option>General Question</option>
              </select>
            </label>
          </MotionItem>
        </div>
        <MotionItem>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us what you're working toward, which community you're interested in, and your ideal timing."
              className="supporting-copy rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 py-3 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
            />
          </label>
        </MotionItem>
        <MotionItem>
          <button
            type="submit"
            className="ui-title mt-6 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary px-6 py-3 text-sm text-white transition hover:bg-secondary hover:-translate-y-0.5"
          >
            Submit Inquiry
          </button>
        </MotionItem>
      </form>
    </StaggerGroup>
  );
}
