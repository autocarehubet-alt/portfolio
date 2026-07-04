export type CodeToken = {
  t: string;
  /** kw = keyword (pink), id = identifier (blue), cm = comment (green), pl = plain. */
  c: "kw" | "id" | "cm" | "pl";
};
export type CodeLine = CodeToken[];

export type Sticker = {
  label: string;
  /** Percent position of the sticker center within the card. */
  x: number;
  y: number;
  /** Rotation in degrees (±180 — some stickers land upside down). */
  rot: number;
  /** Index into the sticker color palette. */
  hue: number;
};

export type TabRow = {
  title: string;
  sub?: string;
  /** Right-aligned column: date range, value, or status. */
  right?: string;
};
export type TabCategory = { label: string; rows: TabRow[] };

export type QA = { q: string; a: string[] };

export type ProductSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type ProductImage = {
  /** Path under public/, e.g. "/images/products/dentalcare/truecare-home.jpg". */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProductFile = {
  slug: string;
  /** Desktop-style file name shown under the folder icon, e.g. "DentalCare_2026". */
  fileLabel: string;
  title: string;
  kicker: string;
  /** One-line why-it-exists — shown in the passcode-unlocked portfolio brief. */
  purpose: string;
  /** Current state, e.g. "Live" or "Beta" — shown in the portfolio brief. */
  status: string;
  paragraphs: string[];
  /** Case-study sections rendered in the product modal after the intro. */
  sections?: ProductSection[];
  /** Screenshot gallery rendered between sections and highlights. */
  images?: ProductImage[];
  highlights: string[];
  link?: { label: string; href: string };
};
