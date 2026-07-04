import type { TabCategory } from "@/lib/types";

// The tabbed timeline card. Categories become pill tabs; rows render as
// dense entries (title + optional subtitle, right-aligned date/value).
export const tabs: TabCategory[] = [
  {
    label: "Products",
    rows: [
      {
        title: "DentalCare",
        sub: "Patient-recovery layer + full clinic system for dental clinics",
        right: "2026 — Live",
      },
      {
        title: "TrueCare Dental & Implant Center",
        sub: "Client work — production website for an Addis Ababa implant clinic",
        right: "2025 — Live",
      },
      {
        title: "OptiCare",
        sub: "Patient retention & practice system for eye clinics",
        right: "2026 — Live",
      },
      {
        title: "DermaCare",
        sub: "Patient retention & practice system for skin clinics",
        right: "2026 — Live",
      },
      {
        title: "Bloom Co",
        sub: "Influencer–brand marketplace for East Africa",
        right: "Dec 2025 — Now",
      },
      {
        title: "Tayoo",
        sub: "Public-transport companion for Addis Ababa",
        right: "2026 — Beta",
      },
      {
        title: "Aminra AutoLink",
        sub: "Telegram-native spare-parts trust machine for Ethiopia's trucks",
        right: "2026 — In build",
      },
    ],
  },
  {
    label: "Milestones",
    rows: [
      {
        title: "DentalCare flagship live in EN + AM",
        sub: "39 static pages · ~660 automated tests",
        right: "2026",
      },
      {
        title: "Three vertical sites, one monorepo",
        sub: "A new vertical is brand tokens + copy away",
        right: "2026",
      },
      {
        title: "660/660 translation keys at parity",
        sub: "English ↔ Amharic, meaning-audited",
        right: "2026",
      },
      {
        title: "Bloom Co core build — 42 screens",
        sub: "~38,400 lines of TypeScript",
        right: "2025 — 2026",
      },
      {
        title: "78-issue financial audit closed",
        sub: "Escrow & double-entry ledger hardened",
        right: "2026",
      },
      {
        title: "Home-page CLS 0.413 → 0.000",
        sub: "Web-Vitals budgets enforced in CI",
        right: "2026",
      },
      {
        title: "Tayoo maps Addis Ababa's transit",
        sub: "101 terminals · 100 bus routes · 2 LRT lines",
        right: "2026",
      },
      {
        title: "TrueCare reaches Google's first page",
        sub: "24K impressions · 550 clicks · avg. position 7.2 in six months",
        right: "2026",
      },
      {
        title: "AutoLink clears two engineering gates",
        sub: "Requirements + foundation signed off · eval harness and safety infra green in CI",
        right: "2026",
      },
    ],
  },
  {
    label: "By the numbers",
    rows: [
      { title: "Live production websites", right: "3" },
      { title: "Languages per site", right: "2" },
      { title: "Automated tests", right: "~660" },
      { title: "App screens (Bloom Co)", right: "42" },
      { title: "Database tables (Bloom Co)", right: "61" },
      { title: "Terminals mapped (Tayoo)", right: "101" },
      { title: "Custom SVG icons", right: "46" },
      { title: "Home-page CLS (flagship)", right: "0.000" },
      { title: "Search impressions (TrueCare, 6 mo)", right: "24K" },
      { title: "Unserved part-needs yearly (AutoLink)", right: "~1.8M" },
    ],
  },
  {
    label: "In the works",
    rows: [
      {
        title: "Connect + Complete for OptiCare & DermaCare",
        sub: "Dual-product positioning from the flagship",
        right: "Next",
      },
      {
        title: "Bloom Co backend activation",
        sub: "Escrow functions · Chapa + M-Pesa",
        right: "Next",
      },
      {
        title: "Tayoo cloud cutover",
        sub: "Transit-graph sync · PostGIS queries",
        right: "Next",
      },
      {
        title: "AutoLink concierge launch → controlled pilot",
        sub: "One liquidity cell served by hand, then live in the Addis truck beachhead",
        right: "Next",
      },
      {
        title: "aminracare.com umbrella site",
        sub: "Apex domain reserved",
        right: "Planned",
      },
      {
        title: "Amharic, Swahili & Oromo for Bloom Co",
        sub: "No competitor offers any of the three",
        right: "Planned",
      },
    ],
  },
  {
    label: "Proof points",
    rows: [
      {
        title: "No-shows with automated reminders",
        sub: "Industry average",
        right: "−60%",
      },
      {
        title: "Rebooking with systematic follow-up",
        sub: "Industry average",
        right: "+45%",
      },
      {
        title: "Acquiring vs. keeping a patient",
        sub: "Bain & Company",
        right: "5–7×",
      },
      {
        title: "Lost patients never followed up",
        sub: "Harvard Business Review",
        right: "68%",
      },
      {
        title: "Revenue growth from +5% retention",
        sub: "Bain / Dental Economics",
        right: "+25%",
      },
      {
        title: "Ethiopian creator income forfeited yearly",
        sub: "No payout rails reach Ethiopia",
        right: "$30–50M",
      },
      {
        title: "Eye patients lost after one missed visit",
        sub: "Peer-reviewed finding",
        right: "~70%",
      },
    ],
  },
];
