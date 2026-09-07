"use client";

import { useState } from "react";

import { MotionItem, StaggerGroup } from "@/components/interactive/MotionSequence";
import { siteConfig } from "@/data/site";

type ContactFormProps = {
  defaultInterest?: string;
  defaultMessage?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const interestOptions = [
  "Buying A Home",
  "Selling My Home",
  "A Cash Offer",
  "Home Valuation",
  "Booking An Appointment",
  "Listing Inquiry",
  "General Question",
];

export function ContactForm({ defaultInterest, defaultMessage }: ContactFormProps) {
  const [status, setStatus] = useState<SubmitState>("idle");

  const interestValue =
    defaultInterest && interestOptions.includes(defaultInterest) ? defaultInterest : interestOptions[0];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!siteConfig.web3FormsAccessKey) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", siteConfig.web3FormsAccessKey);
    formData.append("subject", `New inquiry from ${siteConfig.name} website`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8" stagger={0.07}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Message Sent</p>
        <p className="mt-3 text-lg leading-8 text-ink">
          Thanks — your inquiry is on its way to Claire. She typically replies within one business day.
        </p>
      </StaggerGroup>
    );
  }

  return (
    <StaggerGroup className="rounded-[var(--radius-panel)] border border-primary/15 bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8" stagger={0.07}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <MotionItem>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Full Name
              <input
                required
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
                required
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
              <select
                name="type"
                defaultValue={interestValue}
                className="supporting-copy min-h-12 rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
              >
                {interestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
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
              defaultValue={defaultMessage}
              placeholder="Tell us what you're working toward, which community you're interested in, and your ideal timing."
              className="supporting-copy rounded-[var(--radius-sharp)] border border-primary/15 bg-transparent px-4 py-3 text-sm transition duration-300 focus:border-primary focus:bg-primary/4"
            />
          </label>
        </MotionItem>
        {status === "error" ? (
          <MotionItem>
            <p className="mt-4 text-sm font-semibold text-red-600">
              Something went wrong sending your message. Please try again, or reach out directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </MotionItem>
        ) : null}
        <MotionItem>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="ui-title mt-6 inline-flex min-h-12 items-center justify-center rounded-[var(--radius-sharp)] bg-primary px-6 py-3 text-sm text-white transition hover:bg-secondary hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Submit Inquiry"}
          </button>
        </MotionItem>
      </form>
    </StaggerGroup>
  );
}
