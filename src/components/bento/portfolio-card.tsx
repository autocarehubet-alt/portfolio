"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import { productFiles } from "@/content/products";
import { site } from "@/content/site";

export default function PortfolioCard() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim().toLowerCase() === site.portfolioPasscode.toLowerCase()) {
      setOpen(true);
      setError(false);
      setValue("");
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex h-[300px] overflow-hidden rounded-xl border border-border-secondary bg-bg-primary md:h-[250px]">
      {/* side strip with lock badge — tints red on a wrong passcode */}
      <div
        className={`relative w-16 shrink-0 border-r border-border-secondary transition-colors duration-300 sm:w-24 ${
          error ? "bg-bg-error-primary" : "bg-bg-secondary"
        }`}
      >
        <span className="absolute top-1/2 right-0 flex size-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-lg border border-border-secondary bg-bg-primary shadow-sm">
          <svg aria-hidden className="size-4 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </span>
      </div>
      <form onSubmit={submit} className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-semibold">Client portfolio</p>
        <div
          className={`mt-3 flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors focus-within:ring-2 ${
            error
              ? "border-border-error focus-within:ring-error/40"
              : "border-border-primary focus-within:ring-brand-primary/40"
          }`}
        >
          <svg aria-hidden className="size-4 shrink-0 text-text-quaternary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="15" r="4" />
            <path d="m10.8 12.2 8.2-8.2m-3 3 2.5 2.5M13.5 9.5 16 12" />
          </svg>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Enter passcode"
            aria-label="Portfolio passcode"
            aria-invalid={error}
            aria-describedby={error ? "passcode-error" : undefined}
            className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-placeholder"
          />
        </div>
        {error && (
          <p id="passcode-error" role="alert" className="mt-1.5 text-xs text-error">
            Incorrect passcode
          </p>
        )}
        <p className="mt-2 text-sm leading-snug text-text-secondary">
          The numbers we only share privately — client results, dashboards,
          case studies. WhatsApp us for the passcode.
        </p>
        <button
          type="submit"
          className="mt-auto cursor-pointer self-start rounded-lg border border-border-primary px-4 py-2 text-sm font-semibold text-text-primary outline-none transition-colors hover:bg-bg-tertiary focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          Unlock the portfolio
        </button>
      </form>
      {open && (
        <Modal title="Client portfolio" onClose={() => setOpen(false)}>
          <div className="space-y-8">
            {productFiles.map((p) => (
              <section key={p.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-text-primary">{p.title}</h3>
                  <p className="font-mono text-xs text-text-quaternary">
                    {p.status}
                  </p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {p.purpose}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-text-secondary">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-brand-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-brand-primary hover:text-brand-secondary"
                  >
                    {p.link.label} ↗
                  </a>
                )}
              </section>
            ))}
          </div>
          <div className="mt-8 border-t border-border-secondary pt-5">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-200"
            >
              Book a free demo on WhatsApp
            </a>
            <p className="mt-2 text-xs text-text-tertiary">
              Every engagement starts free — keep your system, no contracts.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}
