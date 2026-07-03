"use client";

import { useEffect, useRef } from "react";

export default function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Return focus to whatever opened the modal (captured once on mount).
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    return () => opener?.focus();
  }, []);

  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Minimal focus trap: keep Tab cycling inside the dialog.
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === dialogRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-bg-overlay/40 backdrop-blur-[2px]"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="animate-modal relative flex max-h-[88vh] w-full max-w-[808px] flex-col overflow-hidden rounded-2xl border border-border-secondary bg-bg-primary shadow-2xl outline-none"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border-secondary px-6 py-4">
          <p className="font-medium">{title}</p>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="cursor-pointer rounded-md p-1 text-text-tertiary outline-none transition-colors hover:bg-bg-tertiary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            <svg aria-hidden className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
