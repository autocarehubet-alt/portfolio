# Aminra Business Group PLC — static portfolio site

Static single-viewport portfolio for **Aminra Business Group PLC**, built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** and exported to plain HTML/CSS/JS via `output: "export"`. No backend, no database, no server runtime — `out/` deploys to any static host.

**Design contract**: the site replicates the look, feel, and interaction model of https://www.mitchellhou.com **literally** — a no-scroll desktop bento-grid dashboard where all depth is click-revealed (tabs, modals, popover, passcode gate). The verified spec is [docs/design-reference.md](docs/design-reference.md) — read it before any UI work, and follow its verification protocol (Playwright against the built site) after UI changes. Never copy the reference's text, images, artwork, or font files; Aminra's content fills every slot, with Inter substituting the licensed "union" font.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — static site emitted to `out/`
- `npm run lint` — ESLint (flat config, `next/core-web-vitals` + `next/typescript`)

Verification = clean build **plus** the Playwright protocol in the design reference (no-scroll assertion, click-through, light/dark/mobile screenshots).

## Hard constraints (static export)

- No API routes, Route Handlers, Server Actions, or middleware.
- No dynamic rendering (`cookies()`, `headers()`, request-time `searchParams`).
- `next/image` runs unoptimized; give explicit dimensions or a sized `fill` container.
- No `redirects`/`rewrites`/`headers` in `next.config.ts` — host-level only.
- Forms cannot POST anywhere; the passcode gate is client-side and cosmetic.
- `trailingSlash: true` is intentional.

## Architecture — single-viewport bento

The page ([src/app/page.tsx](src/app/page.tsx)) is a header card, a bento grid of seven cards, and a footer card. Desktop shows six cards in a 3×2 grid that fits one viewport (no page scroll at typical sizes); mobile stacks everything (including the seventh, decorative glass card) into a scrollable column. **The grid is vertically centered** between header and footer (`flex-1 content-center` on `main`) — a deliberate owner-requested deviation from the reference, which top-aligns it.

Cards live in `src/components/bento/`:

- `code-card.tsx` — company profile typed out as syntax-highlighted code (client: typing state, auto-scroll)
- `stickers-card.tsx` — capability pills scattered with preset rotations (server; CSS drop-in animation)
- `tabs-card.tsx` — pill tabs swapping dense rows in place (client: active tab)
- `map-card.tsx` — dotted world map + Addis Ababa pin + click popover (client: ResizeObserver anchors the pin to the `slice`-cropped SVG)
- `portfolio-card.tsx` — passcode-gated portfolio modal with error state (client)
- `files-card.tsx` — file/folder tiles opening the About Q&A modal and per-product modals (client)
- `glass-card.tsx` — decorative 3D tile, `xl:hidden`

Chrome: `layout/header.tsx` (greeting + live `clock.tsx` + `theme-toggle.tsx`; sticky mobile), `layout/footer.tsx` (desktop link row / mobile chip grid, incl. phone `tel:` link), `ui/modal.tsx` (shared dialog: focus-on-open, Escape/backdrop close, scroll lock, `animate-modal`).

SSG/SEO invariants: all tab categories render into the static HTML (inactive ones use the `hidden` class); the code card ships its full text in an `sr-only` `<pre>` (the typed animation is client-only); Organization JSON-LD is serialized at build time in [layout.tsx](src/app/layout.tsx). Keep these when refactoring.

**All copy and data live in `src/content/` — never hardcode company facts in components:**

- [site.ts](src/content/site.ts) — identity, logo, contact, footer links, `portfolioPasscode`, production URL, optional PDF
- [profile.ts](src/content/profile.ts) — the typed code block (tokenized lines)
- [stickers.ts](src/content/stickers.ts) — capability stickers (label, position, rotation, hue)
- [tabs.ts](src/content/tabs.ts) — five tab categories with dense rows
- [about.ts](src/content/about.ts) — interview-style Q&A for the About modal
- [products.ts](src/content/products.ts) — per-product modal content (kicker, paragraphs, highlights, link)
- [map-dots.ts](src/content/map-dots.ts) — **generated** dotted-map data (Natural Earth, public domain); regenerate via the scratchpad `gen-map.js` script rather than editing

Shared types: [src/lib/types.ts](src/lib/types.ts). Path alias `@/*` → `src/*`.

## Theming, tokens, motion

- Semantic tokens in [globals.css](src/app/globals.css): light on `:root`, dark on `.dark`, mapped via `@theme inline`. **Use semantic classes only** (`bg-bg-primary`, `text-text-tertiary`, `border-border-error`, `text-code-keyword`…) — the sticker palette's Tailwind pastels are the one sanctioned exception.
- Dark mode: `.dark` class + localStorage + the inline pre-paint script in [layout.tsx](src/app/layout.tsx). Do not convert to media-query-only theming.
- Motion utilities live in globals.css (`animate-tab-in`, `animate-caret`, `animate-sticker`, `animate-pin`, `animate-modal`) and are disabled under `prefers-reduced-motion`. Scrollbars: `scrollbar-thin` / `scrollbar-none`.
- Type is small and dense: `text-sm` body, `text-xs` labels, 13px mono in the code card. No shadows for structure — hairline borders.

## Conventions

- Server Components by default; `"use client"` only for real state (typing, tabs, modals, clock, toggle, map).
- Every interactive element: `cursor-pointer`, `focus-visible:ring-2`, aria labels where text is absent. Decorative layers get `aria-hidden` with `sr-only` equivalents.
- Files kebab-case, one component per file, default exports.
- Content edits happen in `src/content/` only; component edits are for behavior/layout.

## Content status

Real content throughout (three clinic platforms, Bloom Co, Tayoo — rephrased from the owner's portfolio documents into click-revealed surfaces). Remaining owner TODOs in `src/content/site.ts`: production domain (`url`), real `portfolioPasscode`, optional email, optional profile PDF. Some product dates were inferred from the July 2026 document.

## Deployment

Publish `out/` to any static host. Set `site.url` first — sitemap, robots, and metadata derive from it.
