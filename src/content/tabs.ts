import type { TabCategory } from "@/lib/types";

// The tabbed timeline card. Categories become pill tabs; rows render as
// dense entries (title + optional subtitle, right-aligned date/value).
// Written for non-technical buyers: plain words, benefits first, proof
// attached. Facts (numbers, dates, names) are frozen — never change them.
export const tabs: TabCategory[] = [
  {
    label: "Products",
    rows: [
      {
        title: "DentalCare",
        sub: "Wins back the patients dental clinics quietly lose, and proves it in birr",
        right: "2026 · Live",
      },
      {
        title: "TrueCare Dental & Implant Center",
        sub: "Client work: the Addis clinic we put on Google's first page",
        right: "2025 · Live",
      },
      {
        title: "OptiCare",
        sub: "Brings eye patients back before they buy glasses somewhere else",
        right: "2026 · Live",
      },
      {
        title: "DermaCare",
        sub: "Keeps skin patients coming back for every step of their treatment",
        right: "2026 · Live",
      },
      {
        title: "Bloom Co",
        sub: "Creators get paid safely. Brands get real followers.",
        right: "Dec 2025 · Now",
      },
      {
        title: "Tayoo",
        sub: "Fair fares and live road answers for Addis commuters",
        right: "2026 · Beta",
      },
      {
        title: "Aminra AutoLink",
        sub: "Send one voice note. Get confirmed truck parts from trusted sellers.",
        right: "2026 · In build",
      },
    ],
  },
  {
    label: "Wins",
    rows: [
      {
        title: "DentalCare goes live in two languages",
        sub: "39 pages · ~660 automatic checks before every update",
        right: "2026",
      },
      {
        title: "Three clinic platforms launched together",
        sub: "Each with its own brand, ready for the next one",
        right: "2026",
      },
      {
        title: "Every word in both languages",
        sub: "English and Amharic, checked for meaning, not just translated",
        right: "660/660",
      },
      {
        title: "Bloom Co core build: 42 screens",
        sub: "Both app experiences designed and built",
        right: "2025-2026",
      },
      {
        title: "Money system checked before launch",
        sub: "Audited end to end before any real money moves",
        right: "2026",
      },
      {
        title: "The site never jumps while loading",
        sub: "Held to strict speed rules",
        right: "0.000",
      },
      {
        title: "Tayoo maps Addis Ababa's transit",
        sub: "101 terminals · 100 bus routes · 2 train lines",
        right: "2026",
      },
      {
        title: "TrueCare reaches Google's first page",
        sub: "Shown 24,000 times · 550 visits · average spot 7.2, all in six months",
        right: "2026",
      },
      {
        title: "AutoLink proven in the field",
        sub: "Real fleets and dealers said yes before we built it",
        right: "2026",
      },
    ],
  },
  {
    label: "By the numbers",
    rows: [
      { title: "Websites live right now", right: "3" },
      { title: "Languages on every site", right: "2" },
      { title: "Automatic checks before every update", right: "~660" },
      { title: "App screens designed & built (Bloom Co)", right: "42" },
      { title: "Addis terminals mapped (Tayoo)", right: "101" },
      { title: "Icons we drew ourselves", right: "46" },
      { title: "Page jump while loading (flagship)", right: "0.000" },
      { title: "Times Google showed TrueCare (6 months)", right: "24K" },
      { title: "Truck parts needed but hard to find, yearly", right: "~1.8M" },
    ],
  },
  {
    label: "In the works",
    rows: [
      {
        title: "Keep-your-system option for eye and skin clinics",
        sub: "What dental clinics love comes to OptiCare and DermaCare",
        right: "Next",
      },
      {
        title: "Bloom Co payouts go live",
        sub: "Creators get paid straight to their mobile money",
        right: "Next",
      },
      {
        title: "Tayoo goes city-wide",
        sub: "Live fares and road reports for every rider",
        right: "Next",
      },
      {
        title: "AutoLink Addis pilot",
        sub: "Fleets, garages, and parts dealers get first access",
        right: "Next",
      },
      {
        title: "One front door for every clinic product",
        sub: "aminracare.com",
        right: "Planned",
      },
      {
        title: "Bloom Co in Amharic, Swahili & Oromo",
        sub: "No competitor offers even one of the three",
        right: "Planned",
      },
    ],
  },
  {
    label: "Proof",
    rows: [
      {
        title: "Missed appointments, with automatic reminders",
        sub: "Industry average",
        right: "−60%",
      },
      {
        title: "Repeat visits, with steady follow-up",
        sub: "Industry average",
        right: "+45%",
      },
      {
        title: "Cost of a new patient vs. keeping one",
        sub: "Bain & Company",
        right: "5-7×",
      },
      {
        title: "Lost patients who never got a follow-up",
        sub: "Harvard Business Review",
        right: "68%",
      },
      {
        title: "Extra revenue from keeping 5% more patients",
        sub: "Bain / Dental Economics",
        right: "+25%",
      },
      {
        title: "Creator income Ethiopia loses every year",
        sub: "No way to get paid from abroad",
        right: "$30-50M",
      },
      {
        title: "Eye patients lost after one missed visit",
        sub: "Published research",
        right: "~70%",
      },
    ],
  },
];
