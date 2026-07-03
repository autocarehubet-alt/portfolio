"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // The pre-paint script in layout.tsx owns the initial class; read it after
  // mount so server and client markup match.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme still toggles for the session.
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={dark}
        aria-label="Toggle dark mode"
        onClick={toggle}
        className={`flex h-5 w-9 cursor-pointer items-center rounded-full border p-0.5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary ${
          dark
            ? "border-transparent bg-brand-primary"
            : "border-border-secondary bg-bg-tertiary"
        }`}
      >
        <span
          className={`block size-3.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            dark ? "translate-x-3.5" : "translate-x-0"
          }`}
        />
      </button>
      <span className="w-8 text-sm font-medium text-text-secondary">
        {dark ? "Dark" : "Light"}
      </span>
    </div>
  );
}
