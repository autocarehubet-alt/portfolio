import type { QA } from "@/lib/types";

// "More about Aminra" modal — interview-style Q&A.
// Written for a non-technical buyer at a sixth-grade reading level:
// short sentences, everyday words. Structure: hook → belief → origin
// story → what we do → why us → the offer.
export const about: QA[] = [
  {
    q: "“So, what is Aminra?”",
    a: [
      "Aminra is a software company in Addis Ababa. We build for many kinds of businesses: health clinics, creators, city commuters, and the truck parts trade. And we believe one thing: your business does not lack customers. It lacks follow-through. Someone asks about a price at night. No one answers. By morning, they buy somewhere else.",
      "Our software catches those moments, wins them back, and shows you the money it brought back, in birr. And we test everything, hard, before it ever touches your business.",
    ],
  },
  {
    q: "“What do you believe?”",
    a: [
      "Most businesses don't lose customers. They lose track of them. The person who messaged at 9pm bought somewhere else by morning. The missed appointment was never rebooked. The reminder never went out. We saw it first in clinics, but it is true in every trade we touch.",
      "That is not a demand problem, and ads can't fix it. Records systems remember. Marketing attracts. Aminra recovers, and proves it.",
    ],
  },
  {
    q: "“How did it start?”",
    a: [
      "With a real business, not a business plan. We built the website for TrueCare, a dental clinic in Bole, Addis Ababa, and we still run it. We watched how customers really arrive: Google searches, families abroad looking for help back home, WhatsApp messages late at night.",
      "We also got our first idea wrong. We thought clinics wanted new software. They didn't. They told us: “the automation is amazing, but we keep our own system.” So we listened, and built it that way. Then we took the same idea far beyond health care: to creators with Bloom Co, to commuters with Tayoo, and to truck parts with AutoLink.",
    ],
  },
  {
    q: "“What are you building right now?”",
    a: [
      "Four things, in four different industries. Clinic tools that win back patients: DentalCare, OptiCare, and DermaCare, all live. Bloom Co, an app where creators get paid safely and brands get real followers. Tayoo, which tells Addis commuters the fair fare and the fastest route. And AutoLink: send one voice note, get confirmed truck parts. Health care is where we started, not where we stop.",
    ],
  },
  {
    q: "“Why Ethiopian-first?”",
    a: [
      "Because translated software fails here. Ours speaks Amharic the way people actually text, with English words mixed in. It shows the Ethiopian calendar next to the European one. It takes Telebirr and CBE Birr. It keeps working when the network doesn't. That isn't a translation. That's how we build, and it's why foreign software keeps losing here.",
    ],
  },
  {
    q: "“What happens if we message you?”",
    a: [
      "You get a free demo on WhatsApp. Thirty minutes, in English or Amharic, using your own day-to-day work. You keep your current system. No contracts. No pressure. Worst case, you walk away knowing exactly where your money leaks. Best case, you stop losing it.",
    ],
  },
];

export const aboutImageCaption = "The Aminra mark: an A carried by a wave";
