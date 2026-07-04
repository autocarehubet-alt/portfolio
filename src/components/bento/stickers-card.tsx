import { stickers } from "@/content/stickers";

// Pastel sticker palette — light tint / dark glow per hue.
const hues = [
  "border-pink-200 bg-pink-50 text-pink-600 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-300",
  "border-sky-200 bg-sky-50 text-sky-600 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300",
  "border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300",
  "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
  "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300",
  "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300",
  "border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300",
  "border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300",
  "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300",
  "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-600 dark:border-fuchsia-500/30 dark:bg-fuchsia-500/10 dark:text-fuchsia-300",
];

export default function StickersCard() {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-xl border border-border-secondary bg-bg-primary">
      {/* Accessible list — the visual pile is decorative. */}
      <ul className="sr-only">
        {stickers.map((s) => (
          <li key={s.label}>{s.label}</li>
        ))}
      </ul>
      <div aria-hidden className="absolute inset-0">
        {stickers.map((s, i) => (
          <span
            key={s.label}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              transform: `translate(-50%,-50%) rotate(${s.rot}deg)`,
              ["--rot" as string]: `${s.rot}deg`,
              animationDelay: `${i * 35}ms`,
            }}
            className={`animate-sticker absolute whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium ${hues[s.hue % hues.length]}`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
