import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { contactItems, pageCopy, pageMetadata } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.bookAppointment);

export default function BookAppointmentPage() {
  return (
    <main>
      <PageHero
        kicker="Let's Connect"
        title={pageCopy.bookAppointment.title}
        description={pageCopy.bookAppointment.description}
        image={{ src: "/placeholders/agent.svg", alt: "Book an appointment placeholder", label: "Meet With Claire" }}
        primaryCta={{ href: "#appointment-form", label: "Request A Time" }}
      />

      <section className="section-y bg-paper" id="appointment-form">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              kicker="Meet With Claire"
              title="Request a call, video walkthrough, or in-person meeting."
              description="Share your preferred day and time along with what you'd like to talk through, and Claire will confirm a slot that works."
            />
            <div className="mt-10 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-[var(--radius-panel)] border border-primary/12 bg-white p-5 shadow-[var(--shadow-soft)]">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-white p-6 shadow-[var(--shadow-soft)] md:p-8" stagger={0.07}>
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
                    Preferred Date
                    <input
                      type="date"
                      name="preferredDate"
                      className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
                    />
                  </label>
                </MotionItem>
                <MotionItem>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Preferred Time
                    <input
                      type="time"
                      name="preferredTime"
                      className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
                    />
                  </label>
                </MotionItem>
              </div>
              <MotionItem>
                <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
                  Meeting Type
                  <select
                    name="meetingType"
                    className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
                  >
                    <option>Phone Call</option>
                    <option>Video Walkthrough</option>
                    <option>In-Person Meeting</option>
                  </select>
                </label>
              </MotionItem>
              <MotionItem>
                <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
                  What Would You Like To Talk Through?
                  <textarea
                    name="notes"
                    rows={5}
                    placeholder="Buying, selling, a specific community, or a general question."
                    className="supporting-copy rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 py-3 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
                  />
                </label>
              </MotionItem>
              <MotionItem>
                <button
                  type="submit"
                  className="ui-title mt-6 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary px-6 py-3 text-sm text-white transition hover:bg-secondary hover:-translate-y-0.5"
                >
                  Request Appointment
                </button>
              </MotionItem>
            </form>
          </StaggerGroup>
        </Container>
      </section>
    </main>
  );
}
