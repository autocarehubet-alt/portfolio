import type { Sticker } from "@/lib/types";

// Capability stickers scattered in a loose pile — preset positions/rotations
// (deterministic so server and client markup match). Labels stay 1–3 plain
// words a non-technical buyer understands.
export const stickers: Sticker[] = [
  { label: "AI Assistants", x: 52, y: 20, rot: 14, hue: 0 },
  { label: "Found on Google", x: 79, y: 34, rot: 96, hue: 1 },
  { label: "Amharic + English", x: 61, y: 43, rot: -12, hue: 2 },
  { label: "Safe Payments", x: 33, y: 36, rot: -22, hue: 3 },
  { label: "Profit Tracking", x: 12, y: 30, rot: 76, hue: 4 },
  { label: "Websites", x: 42, y: 57, rot: -6, hue: 5 },
  { label: "Clean Design", x: 73, y: 60, rot: 168, hue: 6 },
  { label: "Mobile Apps", x: 20, y: 60, rot: -32, hue: 7 },
  { label: "Deep Testing", x: 51, y: 73, rot: 8, hue: 8 },
  { label: "Works Offline", x: 85, y: 70, rot: -78, hue: 9 },
  { label: "Smart Routing", x: 27, y: 82, rot: 16, hue: 10 },
];
