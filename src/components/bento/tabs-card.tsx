"use client";

import { useState } from "react";
import { tabs } from "@/content/tabs";

export default function TabsCard() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[330px] flex-col overflow-hidden rounded-xl border border-border-secondary bg-bg-primary p-4 md:h-[250px]">
      <div
        role="tablist"
        aria-label="Company timeline"
        className="scrollbar-none -mx-1 flex shrink-0 gap-2 overflow-x-auto px-1 pb-3"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            id={`tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`tabpanel-${i}`}
            onClick={() => setActive(i)}
            className={`shrink-0 cursor-pointer whitespace-nowrap rounded-lg border px-2.5 py-1 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-primary ${
              i === active
                ? "border-brand-200 bg-brand-50 text-brand-700"
                : "border-border-secondary text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Every category renders into the static HTML (SEO/no-JS); only the
          active one is displayed. Re-applying animate-tab-in on activation
          replays the entrance animation. */}
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          id={`tabpanel-${i}`}
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
          className={
            i === active
              ? "animate-tab-in scrollbar-thin -mr-2 flex min-h-0 flex-1 flex-col divide-y divide-border-secondary overflow-y-auto pr-2"
              : "hidden"
          }
        >
          {tab.rows.map((row) => (
            <div key={row.title} className="flex flex-col gap-0.5 py-3 first:pt-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-semibold text-text-primary">
                  {row.title}
                </p>
                {row.right && (
                  <p className="shrink-0 text-sm text-text-tertiary">
                    {row.right}
                  </p>
                )}
              </div>
              {row.sub && (
                <p className="text-sm text-text-secondary">{row.sub}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
