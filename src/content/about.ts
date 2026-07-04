import type { QA } from "@/lib/types";

// "More about Aminra" modal — interview-style Q&A.
// Structured as hook → belief → origin story → proof → differentiation →
// offer, so a reader who opens this modal leaves knowing exactly what we
// believe, why they should believe it, and what to do next.
export const about: QA[] = [
  {
    q: "“So, what is Aminra?”",
    a: [
      "Aminra Business Group is a software company in Addis Ababa, and we exist for one belief: your business doesn't lack demand — it lacks follow-through. We build software for how Ethiopia actually works, and every product we ship has one job: find the money you're already losing, get it back, and prove it — in birr.",
      "We hold that work to production discipline most of this market has never seen: hundreds of automated tests, WCAG accessibility, performance budgets, line-by-line audits before real money moves. Not because a client asked — because that's what engineering means to us.",
    ],
  },
  {
    q: "“What do you believe?”",
    a: [
      "Most clinics don't lose patients — they lose track of them. The patient who messaged you at 9pm booked somewhere else by morning. The no-show was never rebooked. The recall quietly went overdue. None of that is a demand problem, and no amount of marketing fixes it.",
      "We build for the space in between: capture the moment, bring the patient back respectfully, and show the owner exactly what came back, in birr. Records systems remember. Marketing attracts. Aminra recovers — and proves it.",
    ],
  },
  {
    q: "“How did it start?”",
    a: [
      "With a real clinic, not a business plan. We built — and still run — the production website for TrueCare, a dental and implant center in Bole, Addis Ababa. From inside its Search Console we watched how an Ethiopian clinic actually wins patients: page-one rankings, diaspora searches from three continents, WhatsApp messages arriving at 9pm.",
      "And we got our first assumption wrong. We thought clinics wanted new systems — they didn't. Established clinics told us, again and again: “the automation is amazing, but we're not replacing the records system we've used for years.” So we listened, and built Connect to run alongside whatever a clinic already has. Then we carried the same Ethiopian-first thesis to creators with Bloom Co, to five million commuters with Tayoo, and now to the spare-parts market that keeps Ethiopia's trucks moving with AutoLink.",
    ],
  },
  {
    q: "“What are you building right now?”",
    a: [
      "Four product families. Clinic-growth platforms for dental, eye, and skin clinics — DentalCare, OptiCare, and DermaCare, each live with its own brand and clinical vocabulary. Bloom Co, an escrow-protected marketplace where East African creators finally get paid what they agreed, in their own mobile money. Tayoo, which hands Addis commuters fair fares and live road answers. And Aminra AutoLink — one voice note in garage Amharic, confirmed truck parts out.",
    ],
  },
  {
    q: "“Why Ethiopian-first?”",
    a: [
      "Because translated software fails where built software works. Our products speak Amharic in a respectful register — with the Amharic-English code-mixing people actually type — show the Ge'ez calendar beside the Gregorian, verify Telebirr and CBE Birr payments, reach people on the channels they already use, and keep working when connectivity doesn't. None of that is a translation file. It's how we build — and it's why software built elsewhere keeps losing here.",
    ],
  },
  {
    q: "“What happens if we message you?”",
    a: [
      "A free demo, on your own workflow — thirty minutes, on WhatsApp, in English or Amharic. You keep your current system. No long-term contracts, no self-serve checkout, no pressure: in this market, trust is the product. Worst case, you leave with a clear picture of where your revenue is leaking. Best case, you stop losing it.",
    ],
  },
];

export const aboutImageCaption = "The Aminra mark — an A carried by a wave";
