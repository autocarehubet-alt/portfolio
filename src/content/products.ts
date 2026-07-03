import type { ProductFile } from "@/lib/types";

// Product "files" — each opens a modal telling that product's story as a
// mini case study (rephrased/condensed from the owner's portfolio documents).
export const productFiles: ProductFile[] = [
  {
    slug: "dentalcare",
    fileLabel: "DentalCare_2026",
    title: "DentalCare",
    kicker: "Keep your system. Recover the patients you're quietly losing.",
    purpose:
      "Own the space between appointments — capture the leads a clinic misses, bring drifting patients back, and prove the recovered revenue in birr.",
    status: "Flagship · complete and live in English + Amharic",
    paragraphs: [
      "DentalCare is a WhatsApp + Telegram patient-recovery layer for Ethiopian dental clinics. A bilingual AI front desk answers around the clock, the system notices which patients are drifting away, warm owner-approved follow-ups bring them back, and every recovered booking is attributed into one owner ROI view — in birr.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Most clinics don't lose patients — they lose track of them. The revenue leak lives between appointments: a patient messages at 9pm and has booked elsewhere by morning; a no-show chair is never refilled; an implant price inquiry vanishes into chat history; six-month cleaning recalls quietly go overdue.",
          "The economics make the leak expensive — winning a new patient costs five to seven times more than keeping one, and most lost patients never received a single follow-up. The tools clinics already own don't help: records systems remember what happened but never make the next thing happen, and marketing buys attention that drains out of the same holes.",
        ],
      },
      {
        heading: "The Recovery Proof Loop",
        bullets: [
          "Capture — the bilingual AI front desk answers 24/7 and notes what each patient asked about",
          "Notice — the Lost-Revenue Radar tracks every patient's lifecycle and shows the leaks on one screen",
          "Reach out — a small number of warm, owner-approved follow-ups, throttled and business-hours-only",
          "Convert — a “yes, book me” reply becomes a booked slot against real availability in seconds",
          "Prove — recovered bookings, rebooked no-shows, and converted treatments attributed in birr",
        ],
      },
      {
        heading: "Two ways to buy it",
        body: [
          "Established clinics kept telling us the same thing: the automation is amazing, but they won't replace the records system they've used for years. So Connect runs alongside whatever a clinic already has — clinical modules deliberately hidden, zero migration, zero retraining. Complete is the full platform (scheduling, records, charting, treatment plans, billing) for clinics starting fresh, and a single flag upgrades Connect to Complete with nothing lost.",
        ],
      },
      {
        heading: "Restraint by design",
        bullets: [
          "Owner approval gates every campaign; sends are capped, personalized, and business-hours-only",
          "Messages never carry clinical detail or replay a patient's private history — outreach invites, it never surveils",
          "The AI knows its limits: anything sensitive is handed to a human with the reason attached",
          "No self-serve checkout — every plan starts with a free demo, because trust is the product in this market",
        ],
      },
    ],
    highlights: [
      "Bilingual AI front desk (Amharic + English) on WhatsApp + Telegram — voice notes understood",
      "Automated appointment, recall, follow-up, and installment reminders",
      "Intent-based campaigns built from what patients actually asked — Telegram-first (free outbound)",
      "Telebirr / CBE Birr / Amole screenshot verification, AI-OCR at the top tier",
      "Ge'ez calendar alongside Gregorian · ETB native · +251 handling",
      "Transparent owner-set ETB pricing, three additive plans per edition, demo-first",
    ],
    link: { label: "dental.aminracare.com", href: "https://dental.aminracare.com" },
  },
  {
    slug: "opticare",
    fileLabel: "OptiCare_2026",
    title: "OptiCare",
    kicker: "Stop losing eye patients after the first exam.",
    purpose:
      "Bring the patient-recovery system to eye care, where the calendar is the treatment plan.",
    status: "Live · dual-product rollout from the flagship is next",
    paragraphs: [
      "OptiCare adapts the recovery platform to ophthalmology and optometry, with its own “Sky Precision” identity and clinical vocabulary — because a recall means something different in every specialty, even when the leak is the same.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Eye care runs on dates: annual exams, contact-lens renewal windows, glaucoma follow-ups, diabetic and hypertensive retinopathy screenings. When those recalls never go out, the prescription expires and the patient buys glasses somewhere else — published research puts churn after a single missed visit near 70%.",
          "OptiCare owns that calendar. Recalls fire when they're due, exam history (refraction, IOP, photos) stays findable instead of buried in paper files, and the owner sees which lapsed patients actually came back.",
        ],
      },
    ],
    highlights: [
      "Prescription-expiry and chronic-condition recall campaigns",
      "Exam-history records: refraction, IOP, photos",
      "Glasses-deposit payment verification via Telebirr",
      "Lane-view owner dashboard · vertical-specific ROI assumptions",
      "Four plans from ETB 13,000/mo · English + Amharic",
    ],
    link: { label: "eye.aminracare.com", href: "https://eye.aminracare.com" },
  },
  {
    slug: "dermacare",
    fileLabel: "DermaCare_2026",
    title: "DermaCare",
    kicker: "Stop losing skin patients after the first visit.",
    purpose:
      "Retention for a specialty built on treatment cycles, where one missed session breaks the series.",
    status: "Live · dual-product rollout from the flagship is next",
    paragraphs: [
      "DermaCare carries the recovery platform into dermatology and aesthetics with its own “Warm Blush” identity — tuned to a specialty where revenue lives in repeating cycles rather than one-off visits.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Skin care is cyclical: Botox and filler results fade around week twelve, laser and peel series need every session to work, acne and psoriasis plans need check-ins between visits, and annual skin-cancer screenings slip silently. Chronic patients churn at roughly twice the rate after a single missed visit — and progress photos too often live on someone's phone instead of in a chart.",
          "DermaCare times outreach to the treatment cycle, keeps photo timelines inside the patient record, and handles package installments — so a paused series becomes a rebooked one instead of a lost patient.",
        ],
      },
    ],
    highlights: [
      "Treatment-cycle recalls tuned to fade windows and series schedules",
      "Photo-timeline patient records · room-view owner dashboard",
      "Aesthetic package installment billing with Telebirr verification",
      "Chronic + aesthetic recall campaigns · English + Amharic",
    ],
    link: { label: "derm.aminracare.com", href: "https://derm.aminracare.com" },
  },
  {
    slug: "bloomco",
    fileLabel: "BloomCo_2026",
    title: "Bloom Co",
    kicker: "The influencer–brand marketplace East Africa has been missing.",
    purpose:
      "Give East Africa's creator economy the structure, trust, and payment rails it has never had — starting with Ethiopia, the largest unserved creator market on the continent.",
    status: "All 42 screens built · backend integration staged",
    paragraphs: [
      "Bloom Co is a two-sided mobile marketplace connecting brands with creators and videographers across Ethiopia, Kenya, Tanzania, and Uganda — structured campaigns, verified profiles, transparent rate cards, and escrow-protected payment in the mobile money creators already use.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Ethiopian creators are locked out of the global creator economy. Platform monetization is unavailable or restricted, Stripe doesn't operate in the country, and PayPal is send-only — an estimated $30–50 million in creator income is forfeited every year for lack of a pipe to deliver it. The one income stream left, brand sponsorship, runs on DMs and hope: no standard pricing, no contracts, no payment protection, and delays of up to 30 days treated as normal.",
          "Trust fails in both directions. Brands fear paying for audiences that don't exist — fake-follower fraud is rampant industry-wide — while creators fear delivering work and never being paid, and no reputation system exists to break the deadlock. Videographers have it worst: no platform anywhere treats them as a professional category. No influencer–brand marketplace operates in Ethiopia today. Bloom Co is first.",
        ],
      },
      {
        heading: "How it answers",
        bullets: [
          "Escrow secures brand money before work begins; milestones release on approval; configurable auto-release protects creators from unresponsive brands",
          "Transparent rate cards and packages, visible before any contact is made",
          "Progressive verification — phone → social accounts → national ID — with business verification for brands",
          "Bidirectional reviews revealed simultaneously, eliminating retaliation bias",
          "Native Chapa (Telebirr, CBE Birr) + M-Pesa rails · five currencies · country-aware tax withholding for Ethiopia's 2025 digital-income rules",
          "Telegram as a first-class deliverable platform and Amharic/Swahili/Oromo localization on the roadmap — differentiators no competitor offers",
        ],
      },
      {
        heading: "Fair by design",
        body: [
          "The 20% service fee is charged to the brand on top of the creator's rate — a creator who quotes 10,000 ETB receives 10,000 ETB. The platform never takes its cut from the creator's pocket, because the whole point is ending the era of creators being underpaid.",
        ],
      },
    ],
    highlights: [
      "Banking-grade payments core: double-entry ledger, idempotency keys, audited escrow (78 issues found and fixed before launch)",
      "Discovery by niche, city, language, audience size, and engagement",
      "Videographers as a native professional role — a first anywhere",
      "61-table PostgreSQL schema · trigger-enforced review fairness",
      "Native iOS + Android (Expo / React Native) · 42 screens · ~38,400 lines of TypeScript",
    ],
  },
  {
    slug: "tayoo",
    fileLabel: "Tayoo_2026",
    title: "Tayoo",
    kicker: "ታዮ — the future of Addis transit.",
    purpose:
      "Turn the private, perishable knowledge of Addis Ababa commuting into public, verified, self-refreshing infrastructure.",
    status: "Feature-complete Beta (v1.0.0) · cloud backbone staged",
    paragraphs: [
      "Tayoo unifies Addis Ababa's fragmented transit — light rail, Anbessa buses, minibus share-taxis — into one bilingual, offline-capable companion that answers the commuter's three daily questions: how do I get there, what's happening on the road right now, and how much should I be paying.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "A capital of five million moves on an undocumented network. The minibus corridors that carry most of the city exist only in commuters' heads; fares are negotiated at the curb and spike with rain and rush hour, so newcomers are routinely overcharged; and there is no live information layer — a breakdown at Megenagna is known instantly by the people standing there and by nobody about to head that way. Transport is also one of a household's largest expenses, paid in cash, in small increments, invisibly.",
        ],
      },
      {
        heading: "How it answers",
        bullets: [
          "The first machine-readable model of the network — 101 terminals named in English and Amharic, routed as one graph, entirely on-device",
          "Three strategies per search: cheapest (live street prices), fastest (steers around reported jams), and a genuinely different alternative",
          "Fare consensus — independent rider reports converge on the live street price, expire after 24 hours, and flag overcharging before boarding",
          "A live feed of nine incident types that feeds straight back into routing, not a bulletin board beside it",
          "Trust from physics: confirming a report requires being within 800 meters, and riders on the affected segment outweigh bystanders 3×",
          "A budget-first wallet that projects month-end spend and makes savings-vs-driving and CO₂ saved visible",
          "A contribution economy — points, ranks, streaks, badges — so the data gets richer with every rider",
        ],
      },
      {
        heading: "Founding values",
        bullets: [
          "Community First (ማህበረሰብ ተኮር) — riders are the sensors, the validators, and the beneficiaries",
          "Offline Intelligence (ከኢንተርኔት ውጪ የሚሰራ) — routing keeps working when mobile data doesn't",
          "Verified Trust (የታመኑ መረጃዎች) — crowdsourced never means unverified",
        ],
      },
    ],
    highlights: [
      "On-device Dijkstra routing — no server round-trip to plan a journey",
      "Stations modeled as places: photos, amenities, safety ratings, operating hours",
      "Guided navigation with mid-journey trip recovery",
      "Amharic first-class throughout, with proper Ge'ez rendering",
      "Android + iOS + Web from one codebase · ~21,500 lines of TypeScript",
    ],
  },
];
