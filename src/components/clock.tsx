"use client";

import { useEffect, useState } from "react";

// Live local time pill — sun icon by day, moon by night.
export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const t = setInterval(tick, 15000);
    return () => clearInterval(t);
  }, []);

  const hour = now?.getHours() ?? 12;
  const isDay = hour >= 6 && hour < 18;
  const time = now?.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const date = now?.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center rounded-full border border-border-secondary bg-bg-primary text-xs font-medium text-text-secondary">
      <span className="flex items-center gap-1.5 py-1 pl-2.5 pr-2">
        {isDay ? (
          <svg aria-hidden className="size-3.5 text-text-quaternary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg aria-hidden className="size-3.5 text-text-quaternary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        )}
        <span className="whitespace-nowrap tabular-nums">{time ?? "–:––"}</span>
      </span>
      <span className="whitespace-nowrap border-l border-border-secondary py-1 pl-2 pr-2.5 tabular-nums">
        {date ?? "· · ·"}
      </span>
    </div>
  );
}
