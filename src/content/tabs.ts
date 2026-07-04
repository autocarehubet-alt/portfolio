import type { TabCategory } from "@/lib/types";

// The tabbed timeline card. Categories become pill tabs; rows render as
// dense entries (title + optional subtitle, right-aligned date/value).
export const tabs: TabCategory[] = [
  {
    label: "Products",
    rows: [
      {
        title: "DentalCare",
        sub: "Recovers the patients dental clinics quietly lose — and proves it in birr",
        right: "2026 — Live",
      },
      {
        title: "TrueCare Dental & Implant Center",
        sub: "Client work — the Addis implant clinic we put on Google's first page",
        right: "2025 — Live",
      },
      {
        title: "OptiCare",
        sub: "Brings eye patients back before their prescriptions expire elsewhere",
        right: "2026 — Live",
      },
      {
        title: "DermaCare",
        sub: "Keeps skin-treatment cycles — and their revenue — from quietly breaking",
        right: "2026 — Live",
      },
      {
        title: "Bloom Co",
        sub: "Escrow-protected pay for creators, verified reach for brands",
        right: "Dec 2025 — Now",
      },
      {
        title: "Tayoo",
        sub: "Fair fares and live road answers for Addis commuters",
        right: "2026 — Beta",
      },
      {
        title: "Aminra AutoLink",
        sub: "One voice note in, confirmed truck parts out — from verified suppliers",
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
        title: "Three clinic platforms launched together",
        sub: "Each with its own brand, ready for the next vertical",
        right: "2026",
      },
      {
        title: "660/660 translation keys at parity",
        sub: "English ↔ Amharic, meaning-audited",
        right: "2026",
      },
      {
        title: "Bloom Co core build — 42 screens",
        sub: "Both app experiences designed and shipped",
        right: "2025 — 2026",
      },
      {
        title: "Payments layer hardened before launch",
        sub: "Independently audited before any real money moves",
        right: "2026",
      },
      {
        title: "Flagship loads with zero layout shift",
        sub: "Performance held to strict budgets",
        right: "0.000",
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
        title: "AutoLink validated in the field",
        sub: "Demand proven with real fleets and dealers before the build began",
        right: "2026",
      },
    ],
  },
  {
    label: "By the numbers",
    rows: [
      { title: "Websites live in production", right: "3" },
      { title: "Languages per site, full parity", right: "2" },
      { title: "Automated tests guarding every release", right: "~660" },
      { title: "Screens designed & shipped (Bloom Co)", right: "42" },
      { title: "Addis terminals mapped (Tayoo)", right: "101" },
      { title: "Icons drawn in-house, zero stock", right: "46" },
      { title: "Layout shift on the flagship (CLS)", right: "0.000" },
      { title: "Search impressions (TrueCare, 6 mo)", right: "24K" },
      { title: "Unserved part-needs yearly (AutoLink)", right: "~1.8M" },
    ],
  },
  {
    label: "In the works",
    rows: [
      {
        title: "Connect + Complete for OptiCare & DermaCare",
        sub: "The keep-your-system option comes to eye and skin clinics",
        right: "Next",
      },
      {
        title: "Bloom Co escrow goes live",
        sub: "Chapa + M-Pesa payouts — creators paid in their own mobile money",
        right: "Next",
      },
      {
        title: "Tayoo goes city-wide",
        sub: "Live fares and road reports for every rider",
        right: "Next",
      },
      {
        title: "AutoLink Addis pilot",
        sub: "Fleets, garages, and dealers in the truck beachhead get first access",
        right: "Next",
      },
      {
        title: "aminracare.com umbrella site",
        sub: "One front door for every clinic product",
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
