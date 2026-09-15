"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/data/site";

type AddressLeadFormProps = {
  idPrefix: string;
  eyebrow: string;
  heading: string;
  addressLabel: string;
  addressPlaceholder: string;
  helperText: string;
  interestType: string;
  successMessage: string;
  submitLabel?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "supporting-copy w-full border-0 border-b border-primary/20 bg-transparent px-0 py-4 text-base text-ink placeholder:text-slate/45 transition-colors duration-300 focus:border-primary focus:outline-none";

const labelClasses = "ui-title text-[11px] text-ink/55";

export function AddressLeadForm({
  idPrefix,
  eyebrow,
  heading,
  addressLabel,
  addressPlaceholder,
  helperText,
  interestType,
  successMessage,
  submitLabel = "Submit Request",
}: AddressLeadFormProps) {
  const [status, setStatus] = useState<SubmitState>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!siteConfig.web3FormsAccessKey) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", siteConfig.web3FormsAccessKey);
    formData.append("subject", `New ${interestType} inquiry from ${siteConfig.name} website`);

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
      <div>
        <p className="eyebrow supporting-kicker">Message Sent</p>
        <p className="editorial-title display-title mt-4 text-3xl leading-tight text-ink md:text-4xl">
          Thank you.
        </p>
        <p className="supporting-copy mt-4 max-w-md text-base leading-8 text-slate">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="eyebrow supporting-kicker">{eyebrow}</p>
      <h2 className="editorial-title display-title mt-4 text-3xl leading-tight text-ink md:text-4xl">{heading}</h2>

      <div className="mt-10 border-t border-primary/15" />

      <input type="hidden" name="type" value={interestType} />

      <label htmlFor={`${idPrefix}-address`} className={`mt-9 grid gap-2 ${labelClasses}`}>
        {addressLabel} <span className="text-primary">*</span>
        <input
          id={`${idPrefix}-address`}
          type="text"
          name="address"
          required
          aria-required="true"
          autoComplete="street-address"
          placeholder={addressPlaceholder}
          className={fieldClasses}
        />
      </label>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <label htmlFor={`${idPrefix}-name`} className={`grid gap-2 ${labelClasses}`}>
          Full Name <span className="text-primary">*</span>
          <input
            id={`${idPrefix}-name`}
            type="text"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
            placeholder="Full Name"
            className={fieldClasses}
          />
        </label>

        <label htmlFor={`${idPrefix}-phone`} className={`grid gap-2 ${labelClasses}`}>
          Phone Number
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(386) 555-0142"
            className={fieldClasses}
          />
        </label>
      </div>

      <label htmlFor={`${idPrefix}-email`} className={`mt-8 grid gap-2 ${labelClasses}`}>
        Email Address <span className="text-primary">*</span>
        <input
          id={`${idPrefix}-email`}
          type="email"
          name="email"
          required
          aria-required="true"
          autoComplete="email"
          placeholder="name@example.com"
          className={fieldClasses}
        />
      </label>

      <label htmlFor={`${idPrefix}-message`} className={`mt-8 grid gap-2 ${labelClasses}`}>
        Message
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          placeholder="Tell us anything that will help us prepare for your home-selling plan."
          className={`${fieldClasses} resize-none`}
        />
      </label>

      <p className="supporting-copy mt-5 max-w-md text-xs text-slate">{helperText}</p>

      <label htmlFor={`${idPrefix}-consent`} className="mt-8 flex cursor-pointer items-start gap-3">
        <input
          id={`${idPrefix}-consent`}
          type="checkbox"
          name="consent"
          value="yes"
          required
          aria-required="true"
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className="relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-primary/35 bg-transparent text-white transition-colors duration-300 after:text-[12px] after:leading-none after:opacity-0 after:transition-opacity after:duration-200 after:content-['✓'] peer-checked:border-primary peer-checked:bg-primary peer-checked:after:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary"
        />
        <span className="supporting-copy text-sm leading-6 text-slate">
          I agree to be contacted by {siteConfig.name} via phone, text, or email regarding my inquiry.{" "}
          <span className="text-primary">*</span>
        </span>
      </label>

      {status === "error" ? (
        <p className="mt-5 text-sm font-semibold text-red-600">
          Something went wrong sending your message. Please try again, or reach out directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="ui-title group mt-10 inline-flex min-h-14 items-center gap-3 rounded-[var(--radius-sharp)] bg-primary px-10 text-sm text-white transition duration-300 hover:bg-secondary hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{status === "submitting" ? "Sending…" : submitLabel}</span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </form>
  );
}
