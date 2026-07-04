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
          "Established clinics kept telling us the same thing: the automation is amazing, but they won't replace the records system they've used for years. So Connect runs alongside whatever a clinic already has — zero migration, zero retraining. Complete is the full platform (scheduling, records, charting, treatment plans, billing) for clinics starting fresh, and upgrading from Connect later is seamless, with nothing lost.",
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
      "Campaigns built from what patients actually asked — never generic blasts",
      "Telebirr / CBE Birr / Amole payment verification, automatic at the top tier",
      "Ge'ez calendar alongside Gregorian · ETB native · +251 handling",
      "Transparent owner-set ETB pricing, three additive plans per edition, demo-first",
    ],
    link: { label: "dental.aminracare.com", href: "https://dental.aminracare.com" },
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "Thirty minutes, on your own workflow. Keep your system — no migration, no contracts.",
    },
  },
  {
    slug: "truecare",
    fileLabel: "TrueCare_2026",
    title: "TrueCare Dental & Implant Center",
    kicker: "Client work: a real Addis Ababa clinic, on Google's first page.",
    purpose:
      "The production website for TrueCare, an implant clinic in Bole — built to turn searches into booked chairs, and proven with Search Console numbers.",
    status: "Client site · live · avg. Google position 7.2",
    paragraphs: [
      "TrueCare is a dental and implant center in Bole, Addis Ababa, led by prosthodontist and oral implantologist Dr. Ashenafi Hailay. Aminra built and runs its production website — the clinic's entire digital front door, from the first Google search to the booked appointment.",
      "It's a complete clinical site: six treatment lines (restorative, cosmetic, general, orthodontics, preventive, pediatric), dentist profiles, gallery, FAQ, blog, and an online booking flow — with WhatsApp one tap away, because that's where Ethiopian patients actually are.",
    ],
    sections: [
      {
        heading: "Measured results, not promises",
        body: [
          "In six months the site earned 24,000 Google impressions and 550 clicks at an average position of 7.2 — first-page visibility for the searches that matter to an implant clinic. Ethiopia leads the traffic, followed by the diaspora in the United States, Canada, the United Kingdom, and Australia — exactly the audience that flies home for major dental work.",
        ],
      },
      {
        heading: "Why it matters to Aminra",
        body: [
          "TrueCare is the ground truth behind our clinic platform. We don't guess at how an Addis clinic wins patients — we operate the website where it happens, watch the search queries arrive, and build DentalCare against that daily reality.",
        ],
      },
    ],
    images: [
      {
        src: "/images/products/dentalcare/truecare-home.jpg",
        alt: "TrueCare Dental & Implant Center homepage — Ethiopia's trusted dental implant center",
        width: 1280,
        height: 585,
        caption: "truecaredentalclinic.com — the live homepage",
      },
      {
        src: "/images/products/dentalcare/truecare-search-console.jpg",
        alt: "Google Search Console performance graph for truecaredentalclinic.com",
        width: 1280,
        height: 515,
        caption: "Six months in Search Console: 550 clicks, 24K impressions, average position 7.2",
      },
      {
        src: "/images/products/dentalcare/truecare-countries.jpg",
        alt: "Search traffic by country — Ethiopia first, then the diaspora",
        width: 1280,
        height: 520,
        caption: "Ethiopia first, the diaspora next — US, Canada, UK, Australia",
      },
    ],
    highlights: [
      "Complete clinical site: 6 treatment lines, dentist profiles, gallery, FAQ, blog, online booking",
      "24K impressions · 550 clicks · average position 7.2 in the first six months",
      "Ethiopia-first traffic with diaspora reach — US, Canada, UK, Australia",
      "WhatsApp-first patient contact · Facebook + TikTok presence",
      "Built to be found — and provably found, in Search Console",
    ],
    link: { label: "truecaredentalclinic.com", href: "https://truecaredentalclinic.com" },
    cta: {
      label: "Want results like these? WhatsApp us",
      href: "https://wa.me/251725145079",
      note: "Every engagement starts with a free demo — worst case, you leave with a diagnosis.",
    },
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
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "Thirty minutes, on your clinic's own recall calendar. No contracts.",
    },
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
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "Thirty minutes, on your treatment cycles. No contracts.",
    },
  },
  {
    slug: "bloomco",
    fileLabel: "BloomCo_2026",
    title: "Bloom Co",
    kicker: "The influencer–brand marketplace East Africa has been missing.",
    purpose:
      "Creators get paid what they agreed, protected by escrow, in their own mobile money. Brands buy creator marketing with verified reach. Neither has ever had that in East Africa — Bloom Co is first.",
    status: "All 42 screens built · launch integration underway",
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
      "Banking-grade payments core, independently audited before launch",
      "Discovery by niche, city, language, audience size, and engagement",
      "Videographers as a native professional role — a first anywhere",
      "Reviews revealed simultaneously — retaliation-proof by design",
      "Native iOS + Android apps · 42 screens designed and shipped",
    ],
    cta: {
      label: "Partner with Bloom Co — WhatsApp us",
      href: "https://wa.me/251725145079",
      note: "Brands, creators, and early partners: the marketplace launches with those who join first.",
    },
  },
  {
    slug: "tayoo",
    fileLabel: "Tayoo_2026",
    title: "Tayoo",
    kicker: "ታዮ — every route, every fare, every jam. One app, 101 terminals.",
    purpose:
      "Hand every commuter the local knowledge that used to take years to earn: where the minibus actually goes, what the ride actually costs, and what's happening on the road right now.",
    status: "Feature-complete Beta (v1.0.0)",
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
          "The first complete map of the network — 101 terminals named in English and Amharic, with route planning that works even offline",
          "Three strategies per search: cheapest (live street prices), fastest (steers around reported jams), and a genuinely different alternative",
          "Fare truth from riders — independent reports converge on the live street price and flag overcharging before boarding",
          "A live feed of nine incident types that feeds straight back into routing, not a bulletin board beside it",
          "Verified by presence — reports are confirmed by riders who are actually there, so remote spam simply doesn't work",
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
      "Instant route planning, even with no connection",
      "Stations modeled as places: photos, amenities, safety ratings, operating hours",
      "Guided navigation with mid-journey trip recovery",
      "Amharic first-class throughout, with proper Ge'ez rendering",
      "Android + iOS + Web",
    ],
    cta: {
      label: "Bring Tayoo to your fleet or city — talk to us",
      href: "https://wa.me/251725145079",
      note: "Feature-complete Beta. Partners and pilots welcome.",
    },
  },
  {
    slug: "autolink",
    fileLabel: "AutoLink_2026",
    title: "Aminra AutoLink",
    kicker: "One message. Confirmed parts. Real trust.",
    purpose:
      "Remove the most expensive unknown in Ethiopia's vehicle economy — not knowing where a needed spare part actually is, right now.",
    status: "In build · Addis pilot ahead",
    paragraphs: [
      "AutoLink is a Telegram-native, AI-powered spare-parts sourcing platform built for how the Addis market actually works. A garage, fleet operator, or car owner sends one message — typed, spoken, or photographed, in everyday garage Amharic — and gets back up to three options a real supplier has confirmed as available right now, each with a declared grade, a price band, a live photo, a trust score, and the time it was last confirmed.",
      "It is deliberately a trust machine, not a marketplace: it never holds inventory, never processes the sale, never publishes prices, and never takes a commission. Its product is the one thing Ethiopia's parts market has never had — a verified, timestamped answer to “who actually has this part, right now?”",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Finding a part in Addis Ababa today means calling ten or more shops and hearing “come and check,” or scrolling stale Telegram listings where a listed part is not a held part, authenticity is a gamble, and a reliable importer looks identical to a faker. The problem is structural: Ethiopia is landlocked, roughly 95% of its trade moves by road, and the 2024 import ban means the aging truck fleet must be maintained, not replaced — so every day a truck sits waiting for a part is lost national commerce.",
          "The real competitor isn't another platform. It's habit — calling around Merkato.",
        ],
      },
      {
        heading: "How it answers",
        bullets: [
          "One message in — text, voice note in mixed Amharic and garage slang, or a photo of the part or its box",
          "AI that understands how Addis garages actually speak — “kambiyo” means gearbox here — and asks one quick question when unsure, instead of guessing",
          "Every option is confirmed live — availability truth always comes from a real supplier holding the part, never from software",
          "Confirmation with proof: the supplier replies “yes” plus a live photo of the actual part",
          "The protected contact moment — a phone number is revealed only after a confirmed request, so every contact is earned",
          "A next-day feedback loop feeds every supplier's reliability score — reputation compounds transaction by transaction",
        ],
      },
      {
        heading: "AI that never owns the truth",
        body: [
          "The AI's only job is to understand you. It never decides what's in stock — a real supplier does — and whenever it isn't certain, it asks a question or brings in a person rather than guessing. That rule is absolute.",
        ],
      },
      {
        heading: "Private by design",
        body: [
          "Supplier phone numbers stay unreachable until a request is confirmed. Prices are never published — exact figures travel only as private quotes between buyer and supplier — and the platform never stores what anyone paid. What is never stored can never leak.",
        ],
      },
    ],
    highlights: [
      "Voice-first Amharic front door — usable by non-literate mechanics and drivers",
      "Confirmed over listed: staleness is shown honestly, never dressed up as fresh",
      "Beachhead: heavy commercial trucks in Addis — ~1.8M unserved part-needs a year",
      "Suppliers subscribe for confirmed demand; buyers ride free; no commission — ever",
      "Runs on Telegram — no app to install, built for low-cost phones and patchy data",
      "Validated-demand-first: proven in the field with real dealers and fleets before the build began",
    ],
    cta: {
      label: "Join the Addis pilot — WhatsApp us",
      href: "https://wa.me/251725145079",
      note: "Fleets, garages, and parts dealers in the truck beachhead get first access.",
    },
  },
];
