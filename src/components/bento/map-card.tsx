"use client";

import { useEffect, useRef, useState } from "react";
import { ADDIS, MAP_COLS, MAP_DOTS, MAP_ROWS } from "@/content/map-dots";
import { site } from "@/content/site";

const CELL = 10;
const W = MAP_COLS * CELL;
const H = MAP_ROWS * CELL;

export default function MapCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number; cw: number } | null>(
    null
  );

  // Close the popover on Escape or on a click outside the card.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  // The SVG covers the card (slice) — compute where Addis lands in card
  // pixels so the pin and popover stay glued to the map at any size.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      const scale = Math.max(cw / W, ch / H);
      const ox = (cw - W * scale) / 2;
      const oy = (ch - H * scale) / 2;
      setPos({
        x: ox + (ADDIS.x + 0.5) * CELL * scale,
        y: oy + (ADDIS.y + 0.5) * CELL * scale,
        cw,
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Prefer opening right of the pin; flip left if it would overflow, then
  // clamp fully inside the card.
  const popLeft = pos
    ? Math.min(
        Math.max(pos.x + 24 + 264 > pos.cw - 8 ? pos.x - 24 - 264 : pos.x + 24, 8),
        pos.cw - 272
      )
    : 0;

  return (
    <div
      ref={ref}
      className="relative h-[300px] overflow-hidden rounded-xl border border-border-secondary bg-bg-primary md:h-[250px]"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        style={{ color: "var(--border-primary)" }}
        aria-hidden
      >
        {MAP_DOTS.map(([c, r]) => (
          <circle
            key={`${c}-${r}`}
            cx={c * CELL + CELL / 2}
            cy={r * CELL + CELL / 2}
            r={2.6}
            fill="currentColor"
            opacity={0.75}
          />
        ))}
      </svg>
      {pos && (
        <button
          type="button"
          aria-label={site.location.label}
          aria-expanded={open}
          aria-controls="map-popover"
          onClick={() => setOpen((v) => !v)}
          style={{ left: pos.x, top: pos.y }}
          className="group absolute size-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          <span className="absolute inset-0 m-auto size-6 rounded-full bg-brand-primary/15" />
          <span className="animate-pin absolute inset-0 m-auto size-6 rounded-full bg-brand-primary/25" />
          <span className="absolute inset-0 m-auto size-2.5 rounded-full bg-brand-primary transition-transform group-hover:scale-125" />
        </button>
      )}
      {pos && open && (
        <div
          id="map-popover"
          role="status"
          style={{ left: popLeft ?? 0, top: pos.y }}
          className="absolute z-10 w-64 -translate-y-1/2 rounded-xl border border-border-secondary bg-bg-primary p-4 text-center shadow-lg"
        >
          <p className="text-xs tracking-[0.2em] text-text-quaternary uppercase">
            {site.location.countryCode}
          </p>
          <p className="mt-1 text-sm font-semibold text-text-primary">
            {site.location.label}
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            {site.location.note}
          </p>
        </div>
      )}
    </div>
  );
}
