# Design reference: mitchellhou.com

Interactive analysis of https://www.mitchellhou.com, performed 2026-07-03 with **Playwright browser automation** (loaded at multiple viewports, every element clicked, all states screenshotted). An earlier static-HTML analysis got the interaction model wrong — do not repeat that: if fidelity questions arise, drive the live site in a browser again.

The company portfolio replicates this site's **look, feel, and interaction model literally** — with Aminra's own content, assets, and free fonts. Never copy the reference's text, photos, artwork, or font files ("union" is licensed; Inter is its declared fallback and our substitute).

## The interaction model (the part static analysis missed)

**The desktop page does not scroll.** At 1440×900 the document height equals the viewport exactly. It is a **bento-grid dashboard** locked to one screen; all depth is click-revealed:

- Tabs swap list content in place (with a fade-slide `animate-tab-in`, internal `overflow-y-auto` scroll, thin scrollbar)
- File/folder tiles open **modal dialogs** over a blurred backdrop
- The map pin toggles a **popover card**
- The passcode form gates a portfolio reveal (wrong input → red error state)
- Two internal scrollable containers only: the code card and the active tab list

Mobile (<md) stacks all cards into one scrollable column. At shorter desktop viewports the page grows slightly (content-height) — no forced viewport fit, it simply happens to fit.

## Layout geometry (1440×900)

- **Header** (~56px): full-width card, `rounded-b-[28px]`, bordered, `bg-bg-primary`. Left: circular avatar + bold greeting. Right: live clock pill (sun/moon icon · h:mm AM/PM · divider · Mon D, YYYY) + labeled theme switch ("Light"/"Dark"). Sticky on mobile only.
- **Bento grid**: `grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-8 xl:grid-cols-3`, max width ~1440. Two rows of ~250px-tall cards at xl. Cards: `rounded-xl border border-border-secondary bg-bg-primary`. **Deviation (owner request):** our grid is vertically centered between header and footer (`flex-1 content-center`); the reference top-aligns it.
- **Footer**: full-width card pinned to bottom (`mt-auto`), `rounded-t-[28px]`. Desktop: centered text links. Mobile: 2-col chip grid + copyright line.
- Canvas between grid and footer stays empty `bg-bg-secondary`.

## The seven cards (ours ← theirs)

1. **Code card** (top-left): profile as code, **typed character-by-character** (~24ms/char, runs once, blinking caret remains), line-number gutter with `bg-bg-secondary` strip, syntax colors (keyword pink / identifier blue / comment green / strings plain), auto-scrolls while typing, `scrollbar-thin`. Honors reduced motion (renders instantly).
2. **Stickers card** (top-middle): capability names as pastel pill stickers scattered at random-looking rotations (including upside down), staggered drop-in animation. Ours are preset positions (deterministic SSG). `sr-only` list for accessibility.
3. **Tabs card** (top-right): pill tabs in a horizontally scrollable row (active = brand tint), dense rows below — bold title, right-aligned date/value, secondary subtitle, hairline dividers, vertical scroll. Ours: Products / Milestones / By the numbers / In the works / Proof points (theirs: Work Experiences / Exhibitions / Awards / Leadership & Volunteering / Press / Memberships).
4. **Map card** (bottom-left): dotted world map (ours generated from public-domain Natural Earth data — `src/content/map-dots.ts`, regenerate with the scratchpad script), purple pulsing pin (ours: Addis Ababa), click → popover: country code (small caps) / bold "Based in …" / friendly note. Pin position is computed against the `slice`-cropped SVG via ResizeObserver.
5. **Portfolio card** (bottom-middle): split layout — side strip with centered lock badge; "passcode" input with key icon; explainer text; submit button. Wrong passcode → `border-error` input, red message, strip tints `bg-error-primary`. Correct passcode (ours, client-side: `site.portfolioPasscode`) opens the full portfolio modal.
6. **Files card** (bottom-right): desktop-style file/folder tiles in a scrollable 2/3-col grid. "More about …" doc opens an **interview-style Q&A modal** (questions in quotes left, answers + captioned image right). Folder tiles open content modals (ours: one per product). PDF tile (red badge) links to a real file when provided.
7. **Glass tile card**: decorative 3D glossy square with a word on the face (ours: "Follow-through"), **hidden at xl**, shown when the grid stacks (theirs: "Clarity").

## Modals

Centered, `max-w-[808px]`, `max-h-[88vh]`, rounded-2xl, bordered, over `bg-overlay/40 + backdrop-blur`. Header row: title left, X right, hairline divider. Body scrolls (`scrollbar-thin`). Escape and backdrop-click close. Body scroll locks while open.

## Tokens, type, theming

Unchanged from the original analysis (Untitled-UI-style semantic tokens, purple brand, `.dark` class + localStorage + pre-paint script, Inter + Roboto Mono). Full values live in `src/app/globals.css`. Type is small and dense: 13px mono in the code card, `text-sm` everywhere else, `text-xs` labels.

## Content mapping (Aminra)

All copy lives in `src/content/`: `site.ts` (identity, contact, links, passcode), `profile.ts` (typed code), `stickers.ts` (capabilities), `tabs.ts` (5 categories), `about.ts` (Q&A), `products.ts` (per-product file modals), `map-dots.ts` (generated). The long-form portfolio documents the owner supplied are rephrased and restructured into these click-revealed surfaces — never dumped onto the page.

## Verification protocol

After UI changes: `npm run build`, serve `out/` (scratchpad `serve.js`), then Playwright: assert `scrollHeight === innerHeight` at 1440×900, click every tab, open every modal, trigger the passcode error, toggle the theme, screenshot light/dark/mobile and **look at the screenshots**.
