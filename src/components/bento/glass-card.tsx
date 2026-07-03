// Decorative 3D "glass tile" card — visible on mobile/tablet where the bento
// stacks; hidden at the 3-column desktop layout (matches the reference).
export default function GlassCard() {
  return (
    <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-xl border border-border-secondary bg-bg-primary xl:hidden">
      <div
        aria-hidden
        className="relative h-44 w-44"
        style={{ transform: "rotate(45deg) scaleY(0.58)" }}
      >
        {/* depth layers */}
        <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-zinc-900/80 blur-[1px] dark:bg-black/70" />
        <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[2rem] bg-brand-700/70" />
        {/* glossy top face */}
        <div className="absolute inset-0 rounded-[2rem] border border-white/40 bg-linear-to-br from-brand-secondary via-brand-primary to-brand-700">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.45),transparent_55%)]" />
          <span className="absolute top-8 left-7 text-xs font-medium tracking-wide text-white/95 [text-shadow:0_1px_5px_rgba(10,13,18,0.4)]">
            Follow-through
          </span>
        </div>
      </div>
    </div>
  );
}
