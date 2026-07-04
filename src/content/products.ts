import type { ProductFile } from "@/lib/types";

// Product "files" — each opens a modal telling that product's story.
// Written for non-technical buyers at a sixth-grade reading level.
// Shape per modal: hook (kicker) → story (problem) → how it helps →
// what you get → one clear next step (cta). Facts are frozen.
export const productFiles: ProductFile[] = [
  {
    slug: "dentalcare",
    fileLabel: "DentalCare_2026",
    title: "DentalCare",
    kicker: "Keep your system. Recover the patients you're quietly losing.",
    purpose:
      "Catch the patients your clinic is losing between visits. Win them back. See the money come back — in birr.",
    status: "Live now · English + Amharic",
    paragraphs: [
      "DentalCare answers your patients on WhatsApp and Telegram, day and night, in Amharic and English. It notices who is drifting away, invites them back politely, and books them in. Then it shows you exactly how much money came back.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Most clinics don't lose patients — they lose track of them. Someone asks the price of an implant at 9pm. No one replies. By morning, they book somewhere else. A missed visit is never rebooked. A six-month cleaning reminder never goes out.",
          "Winning a brand-new patient costs five to seven times more than keeping one you already have. And most lost patients never got a single follow-up. The tools clinics already own don't fix this. Records systems remember the past. Ads bring clicks. Neither one follows through.",
        ],
      },
      {
        heading: "How it wins patients back",
        bullets: [
          "Answers every message, day and night, in Amharic and English — even voice notes",
          "Spots the leaks: missed visits, overdue check-ups, questions nobody answered",
          "Sends a few warm, polite follow-ups — you approve them first",
          "Books the visit the moment a patient says yes",
          "Shows you every recovered visit and every birr it brought back",
        ],
      },
      {
        heading: "Two ways to buy it",
        body: [
          "Keep your current system? Choose Connect. It runs alongside what you already use — nothing to move, nothing to relearn. Starting fresh? Complete is the full clinic system: booking, records, billing, everything. And you can upgrade from Connect later without losing a thing.",
        ],
      },
      {
        heading: "Our promises",
        bullets: [
          "You approve every campaign before it goes out",
          "Messages never mention private health details",
          "Anything sensitive goes to a real person, not the AI",
          "No checkout button — every plan starts with a demo, because trust comes first here",
        ],
      },
    ],
    highlights: [
      "A friendly AI that answers patients on WhatsApp + Telegram, day and night",
      "Automatic reminders for visits, check-ups, and payments",
      "Campaigns built from what patients actually asked about",
      "Telebirr, CBE Birr, and Amole payment checking",
      "Ethiopian calendar, birr prices, Ethiopian phone numbers — everywhere",
      "Clear prices in birr · three plans · demo first",
    ],
    link: { label: "dental.aminracare.com", href: "https://dental.aminracare.com" },
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "30 minutes on WhatsApp. Keep your current system. No contracts.",
    },
  },
  {
    slug: "truecare",
    fileLabel: "TrueCare_2026",
    title: "TrueCare Dental & Implant Center",
    kicker: "Client work: a real Addis clinic, on Google's first page.",
    purpose:
      "We built and run the website for TrueCare, an implant clinic in Bole. It turns Google searches into booked visits — and we can prove it.",
    status: "Live · on Google's first page",
    paragraphs: [
      "TrueCare is a dental and implant clinic in Bole, Addis Ababa, led by Dr. Ashenafi Hailay. We built its website and we run it every day — from the first Google search to the booked appointment.",
      "The site covers everything a patient needs: six treatment areas, the doctors, photos, common questions, a blog, and online booking. WhatsApp is one tap away, because that's where Ethiopian patients actually are.",
    ],
    sections: [
      {
        heading: "Real results, not promises",
        body: [
          "In six months, Google showed the site 24,000 times. 550 people clicked through. Its average spot was 7.2 — the first page. Most visitors come from Ethiopia. The rest come from the diaspora in the US, Canada, the UK, and Australia — families who fly home for major dental work.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "TrueCare keeps us honest. We don't guess how an Addis clinic wins patients — we run the website where it happens, every day. Everything we learn goes straight into our clinic products.",
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
        alt: "Google search results graph for truecaredentalclinic.com",
        width: 1280,
        height: 515,
        caption: "Six months on Google: 550 visits, shown 24,000 times, average spot 7.2",
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
      "A complete clinic website: treatments, doctors, gallery, questions, blog, booking",
      "Shown 24,000 times on Google · 550 visits · average spot 7.2 — in six months",
      "Visitors from Ethiopia first, then the US, Canada, UK, and Australia",
      "WhatsApp one tap away · Facebook + TikTok connected",
      "Built to be found — and provably found",
    ],
    link: { label: "truecaredentalclinic.com", href: "https://truecaredentalclinic.com" },
    cta: {
      label: "Want results like these? WhatsApp us",
      href: "https://wa.me/251725145079",
      note: "Every project starts with a free demo. You lose nothing.",
    },
  },
  {
    slug: "opticare",
    fileLabel: "OptiCare_2026",
    title: "OptiCare",
    kicker: "Stop losing eye patients after the first exam.",
    purpose:
      "Eye care runs on dates. OptiCare remembers every one of them — so your patients come back to you, not to the shop next door.",
    status: "Live now",
    paragraphs: [
      "OptiCare is our clinic system rebuilt for eye clinics, with its own look and its own words — because an eye clinic's calendar is nothing like a dentist's.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Eye care lives on dates: yearly exams, contact lens renewals, glaucoma check-ups, diabetes eye screening. When the reminder never goes out, the prescription expires — and the patient buys glasses somewhere else. Research says about 70% of patients never come back after one missed visit.",
          "OptiCare owns that calendar. Reminders go out on time. Exam history stays easy to find. And you can see exactly which patients came back.",
        ],
      },
    ],
    highlights: [
      "Reminders that go out before prescriptions expire",
      "Exam history at your fingertips — no digging through paper",
      "Glasses deposits checked through Telebirr",
      "Four plans from ETB 13,000/month · English + Amharic",
    ],
    link: { label: "eye.aminracare.com", href: "https://eye.aminracare.com" },
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "30 minutes, on your clinic's own calendar. No contracts.",
    },
  },
  {
    slug: "dermacare",
    fileLabel: "DermaCare_2026",
    title: "DermaCare",
    kicker: "Stop losing skin patients after the first visit.",
    purpose:
      "Skin treatments work in rounds. DermaCare keeps patients on schedule — so results stay good and revenue stays steady.",
    status: "Live now",
    paragraphs: [
      "DermaCare is the same proven system, rebuilt for skin clinics — where missing one session can undo a whole treatment plan.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Skin care runs in cycles. Botox fades around week twelve. Laser and peel series need every session. Acne plans need check-ins. Patients on long treatments are twice as likely to drop off after one missed visit — and progress photos too often live on someone's phone.",
          "DermaCare sends reminders timed to each treatment, keeps photos with the patient's record, and handles payment plans — so a paused treatment becomes a booked one.",
        ],
      },
    ],
    highlights: [
      "Reminders timed to each treatment's schedule",
      "Before-and-after photos saved with the record",
      "Payment plans for treatment packages, checked through Telebirr",
      "Same plans as OptiCare · English + Amharic",
    ],
    link: { label: "derm.aminracare.com", href: "https://derm.aminracare.com" },
    cta: {
      label: "Book a free demo on WhatsApp",
      href: "https://wa.me/251725145079",
      note: "30 minutes, on your treatment plans. No contracts.",
    },
  },
  {
    slug: "bloomco",
    fileLabel: "BloomCo_2026",
    title: "Bloom Co",
    kicker: "The influencer–brand marketplace East Africa has been missing.",
    purpose:
      "Creators get paid what they agreed, safely, in their own mobile money. Brands get proof the followers are real. Nobody in East Africa has had that — Bloom Co is first.",
    status: "All 42 screens built · launching soon",
    paragraphs: [
      "Bloom Co is an app that connects businesses with creators and videographers across Ethiopia, Kenya, Tanzania, and Uganda. Clear campaigns. Verified profiles. Public price lists. And payment that waits safely in the middle until the work is approved.",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Ethiopian creators can't earn from the big platforms, and money from abroad has no easy way in. An estimated $30–50 million in creator income is lost every year. The only income left is brand deals — and those run on DMs and hope. No standard prices. No contracts. No protection. Waiting a month to get paid is normal.",
          "Trust is broken on both sides. Brands fear fake followers. Creators fear working and never being paid. And nobody can tell a reliable partner from a faker. There is no marketplace like this in Ethiopia today. Bloom Co is first.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "The brand's money goes in first and waits safely until the work is approved",
          "Creators post clear price lists — no haggling in the dark",
          "Everyone gets verified: phone, social accounts, then ID",
          "Both sides review each other at the same time — so nobody can punish a bad review",
          "Payouts through Telebirr, CBE Birr, and M-Pesa, in five currencies, with taxes handled",
          "Telegram counts as real work here — and Amharic, Swahili & Oromo are on the way",
        ],
      },
      {
        heading: "Fair by design",
        body: [
          "Our 20% fee is charged to the brand, on top of the creator's price. A creator who quotes 10,000 birr receives 10,000 birr. We never take our cut from the creator — the whole point is ending the era of creators being underpaid.",
        ],
      },
    ],
    highlights: [
      "Money held safely until work is approved — audited before launch",
      "Find creators by niche, city, language, audience size, and engagement",
      "Videographers welcome as professionals — a first anywhere",
      "Reviews shown at the same time, so they stay honest",
      "Real apps for iPhone and Android · 42 screens built",
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
      "Tayoo gives every commuter the street smarts that take years to earn: where the minibus really goes, what the ride really costs, and what's happening ahead.",
    status: "Working Beta",
    paragraphs: [
      "Tayoo puts all of Addis Ababa's transport — train, buses, minibuses — into one app that works in Amharic and English, even without internet. It answers the three questions every commuter asks: how do I get there, what will it cost, and what's going on out there?",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Five million people move through Addis with no map. Minibus routes live only in people's heads. Fares change with the rain and the rush hour, and newcomers pay too much. When something breaks down at Megenagna, only the people standing there know. And transport quietly eats one of the biggest parts of a family's budget — in cash, a few birr at a time.",
        ],
      },
      {
        heading: "How it answers",
        bullets: [
          "The first complete map of the network — 101 terminals, named in Amharic and English, working even offline",
          "Three answers per search: the cheapest way, the fastest way, and a smart backup",
          "Real fares from real riders — so you know the fair price before you board",
          "A live feed of what's happening on the road, straight from other commuters",
          "Reports checked by riders who are actually there — fakes don't work",
          "A wallet that tracks your transport spending and shows what you save",
          "Points, ranks, and badges — the app gets smarter with every rider",
        ],
      },
      {
        heading: "Founding values",
        bullets: [
          "Community First (ማህበረሰብ ተኮር) — riders power it, riders benefit",
          "Offline Intelligence (ከኢንተርኔት ውጪ የሚሰራ) — it works when the data doesn't",
          "Verified Trust (የታመኑ መረጃዎች) — crowd-sourced never means unchecked",
        ],
      },
    ],
    highlights: [
      "Plans your route instantly, even with no connection",
      "Stations shown as real places: photos, safety ratings, opening hours",
      "Step-by-step guidance that picks up where you left off",
      "Amharic first, everywhere in the app",
      "Android + iOS + Web",
    ],
    cta: {
      label: "Bring Tayoo to your fleet or city — talk to us",
      href: "https://wa.me/251725145079",
      note: "Working Beta. Partners and pilots welcome.",
    },
  },
  {
    slug: "autolink",
    fileLabel: "AutoLink_2026",
    title: "Aminra AutoLink",
    kicker: "One message. Confirmed parts. Real trust.",
    purpose:
      "Stop guessing who has your truck part. Send one message and get real answers — confirmed by sellers holding the part right now.",
    status: "Being built · Addis pilot soon",
    paragraphs: [
      "AutoLink works on Telegram — no app to install. A garage, fleet, or car owner sends one message: typed, spoken, or a photo of the part. Back come up to three options a real seller has just confirmed: the grade, a price range, a fresh photo, a trust score, and when it was last checked.",
      "AutoLink is a trust machine, not a shop. We never hold the parts, never touch the sale, never publish prices, and never take a commission. We sell one thing Ethiopia's parts market has never had: a true answer to “who actually has this part, right now?”",
    ],
    sections: [
      {
        heading: "The problem it solves",
        body: [
          "Finding a part in Addis means calling ten shops and hearing “come and check.” Online listings go stale, fakes are everywhere, and an honest seller looks exactly like a bad one. It matters more than ever: most of Ethiopia's trade moves by truck, and since the 2024 import ban, old trucks must be repaired, not replaced. Every day a truck waits for a part, money is lost.",
          "Our real competitor isn't another app. It's habit — calling around Merkato.",
        ],
      },
      {
        heading: "How it answers",
        bullets: [
          "One message in — text, a voice note in everyday garage Amharic, or a photo",
          "The AI understands how garages really talk — “kambiyo” means gearbox here — and asks a quick question when unsure, instead of guessing",
          "Every option is confirmed live by a real seller holding the part — never by software",
          "Proof included: the seller sends a fresh photo of the actual part",
          "Phone numbers stay private until you confirm — so every contact is earned",
          "Next-day feedback builds every seller's trust score, deal after deal",
        ],
      },
      {
        heading: "AI that never owns the truth",
        body: [
          "The AI's only job is to understand you. It never decides what's in stock — a real seller does. When it's not sure, it asks or brings in a person. That rule is absolute.",
        ],
      },
      {
        heading: "Private by design",
        body: [
          "Seller phone numbers stay hidden until a request is confirmed. Prices are never published — exact figures travel only as private quotes. And we never store what anyone paid. What is never stored can never leak.",
        ],
      },
    ],
    highlights: [
      "Voice-first Amharic — easier to talk than to type",
      "Confirmed beats listed: stale info is shown honestly, never dressed up as fresh",
      "Starting with heavy trucks in Addis — ~1.8M hard-to-find part-needs a year",
      "Sellers pay for real leads. Buyers ride free. No commission — ever.",
      "Runs on Telegram — no app to install, works on cheap phones and weak data",
      "Demand proven in the field with real fleets and dealers before we built it",
    ],
    cta: {
      label: "Join the Addis pilot — WhatsApp us",
      href: "https://wa.me/251725145079",
      note: "Fleets, garages, and parts dealers in the truck beachhead get first access.",
    },
  },
];
