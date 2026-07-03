# Aminra Business Group PLC — Portfolio

Static single-viewport portfolio website built with [Next.js](https://nextjs.org) (App Router, static export), TypeScript, and Tailwind CSS v4. A bento-grid dashboard — code-typing profile, capability stickers, tabbed timeline, world map, passcode-gated portfolio, and product file modals — per the design spec in `docs/design-reference.md`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site emitted to out/
```

## Editing content

All copy and data live in `src/content/` — components never hardcode company facts:

| File | Controls |
| --- | --- |
| `site.ts` | Identity, logo, contact, footer links, portfolio passcode, production URL |
| `profile.ts` | The typed-out "profile as code" block |
| `stickers.ts` | Capability stickers (labels, scatter positions) |
| `tabs.ts` | The five tab categories and their rows |
| `about.ts` | "More about Aminra" interview Q&A |
| `products.ts` | Per-product modal content (DentalCare, OptiCare, DermaCare, Bloom Co, Tayoo) |
| `map-dots.ts` | Generated dotted world map (don't edit by hand) |

## Structure

```
src/
├── app/                  # single route + layout, sitemap, robots, 404
├── components/
│   ├── bento/            # the seven dashboard cards
│   ├── layout/           # header, footer
│   ├── ui/               # modal
│   ├── clock.tsx         # live time pill
│   └── theme-toggle.tsx  # light/dark switch
├── content/              # ← all editable copy/data
└── lib/                  # shared types
```

## Deployment

`npm run build` produces a fully static site in `out/` — deploy to any static host. Set `site.url` in `src/content/site.ts` to the production domain first.
