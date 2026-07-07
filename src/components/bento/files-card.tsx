"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/modal";
import { about, aboutImageCaption } from "@/content/about";
import { productFiles } from "@/content/products";
import { site } from "@/content/site";

function DocIcon() {
  return (
    <svg aria-hidden className="size-9 text-code-ident" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg aria-hidden className="size-9 text-code-ident" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7a2 2 0 0 1 2-2h3.6a2 2 0 0 1 1.4.6L12.4 7H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <span className="relative inline-flex">
      <svg aria-hidden className="size-9 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
      </svg>
      <span className="absolute -bottom-0.5 -left-1 rounded-sm bg-[#d92d20] px-1 text-[8px] font-bold text-white">
        PDF
      </span>
    </span>
  );
}

const tileClass =
  "flex cursor-pointer flex-col items-center justify-start gap-2 rounded-lg border border-transparent p-2 text-center outline-none transition-colors hover:border-border-secondary hover:bg-bg-secondary focus-visible:ring-2 focus-visible:ring-brand-primary";

function ModalCta({ cta }: { cta: { label: string; href: string; note?: string } }) {
  return (
    <div className="mt-8 border-t border-border-secondary pt-5">
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-brand-secondary focus-visible:ring-2 focus-visible:ring-brand-200"
      >
        {cta.label}
      </a>
      {cta.note && (
        <p className="mt-2 text-xs text-text-tertiary">{cta.note}</p>
      )}
    </div>
  );
}

export default function FilesCard() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProduct = productFiles.find((p) => p.slug === openSlug);
  // Wide shots read fine at full modal width; portrait phone shots would be
  // taller than the viewport, so they tile in a grid instead.
  const landscapeImages =
    openProduct?.images?.filter((img) => img.width >= img.height) ?? [];
  const portraitImages =
    openProduct?.images?.filter((img) => img.height > img.width) ?? [];

  return (
    <div className="h-[340px] overflow-hidden rounded-xl border border-border-secondary bg-bg-primary p-3 md:h-[250px]">
      <div className="scrollbar-thin grid h-full grid-cols-2 content-start gap-2 overflow-y-auto sm:grid-cols-3">
        <button type="button" onClick={() => setOpenSlug("about")} className={tileClass}>
          <DocIcon />
          <span className="text-xs text-text-secondary">More about Aminra</span>
        </button>
        {productFiles.map((p) => (
          <button key={p.slug} type="button" onClick={() => setOpenSlug(p.slug)} className={tileClass}>
            <FolderIcon />
            <span className="text-xs break-words text-text-secondary">
              {p.fileLabel}
            </span>
          </button>
        ))}
        {site.profilePdf && (
          <a href={site.profilePdf} className={tileClass}>
            <PdfIcon />
            <span className="text-xs text-text-secondary">Company profile</span>
          </a>
        )}
      </div>

      {openSlug === "about" && (
        <Modal title="More about Aminra" onClose={() => setOpenSlug(null)}>
          <div className="space-y-10">
            {about.map((qa, i) => (
              <div key={qa.q} className="grid gap-3 sm:grid-cols-2 sm:gap-8">
                <p className="text-text-secondary">{qa.q}</p>
                <div className="space-y-4">
                  {qa.a.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-relaxed text-text-primary">
                      {paragraph}
                    </p>
                  ))}
                  {i === 0 && (
                    <figure>
                      <div className="flex items-center justify-center rounded-lg bg-bg-secondary p-8">
                        <Image src={site.logo} alt="The Aminra logo" width={96} height={96} />
                      </div>
                      <figcaption className="mt-2 text-xs text-text-tertiary">
                        {aboutImageCaption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
          <ModalCta
            cta={{
              label: "Book a free demo on WhatsApp",
              href: site.whatsapp,
              note: "30 minutes, in English or Amharic. Worst case, you leave knowing where your money leaks.",
            }}
          />
        </Modal>
      )}

      {openProduct && (
        <Modal title={openProduct.fileLabel} onClose={() => setOpenSlug(null)}>
          <p className="font-medium text-text-primary">{openProduct.kicker}</p>
          <div className="mt-4 space-y-4">
            {openProduct.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
          {openProduct.sections?.map((section) => (
            <div key={section.heading} className="mt-6">
              <p className="text-sm font-semibold text-text-primary">
                {section.heading}
              </p>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-text-secondary">
                      <span className="mt-[7px] size-1 shrink-0 rounded-full bg-brand-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {openProduct.images && (
            <div className="mt-6 space-y-5">
              {landscapeImages.map((img) => (
                <figure key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full rounded-lg border border-border-secondary"
                  />
                  {img.caption && (
                    <figcaption className="mt-1.5 text-xs text-text-tertiary">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
              {portraitImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {portraitImages.map((img) => (
                    <figure key={img.src}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="w-full rounded-lg border border-border-secondary"
                      />
                      {img.caption && (
                        <figcaption className="mt-1.5 text-xs text-text-tertiary">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </div>
          )}
          <p className="mt-6 text-sm font-semibold text-text-primary">What you get</p>
          <ul className="mt-2 space-y-1.5">
            {openProduct.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-text-secondary">
                <span className="mt-[7px] size-1 shrink-0 rounded-full bg-brand-primary" />
                {h}
              </li>
            ))}
          </ul>
          {openProduct.link && (
            <a
              href={openProduct.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-brand-primary hover:text-brand-secondary"
            >
              Visit {openProduct.link.label} ↗
            </a>
          )}
          {openProduct.cta && <ModalCta cta={openProduct.cta} />}
        </Modal>
      )}
    </div>
  );
}
