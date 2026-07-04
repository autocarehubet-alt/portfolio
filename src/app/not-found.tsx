import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-text-quaternary">{"// 404"}</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-text-secondary">
        This page doesn&apos;t exist — but the money you&apos;re losing does.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary"
      >
        Back to home
      </Link>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-sm font-medium text-brand-primary hover:text-brand-secondary"
      >
        or WhatsApp us for a free demo
      </a>
    </section>
  );
}
