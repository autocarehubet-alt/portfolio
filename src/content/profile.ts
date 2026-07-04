import type { CodeLine, CodeToken } from "@/lib/types";

const kw = (t: string): CodeToken => ({ t, c: "kw" });
const id = (t: string): CodeToken => ({ t, c: "id" });
const cm = (t: string): CodeToken => ({ t, c: "cm" });
const pl = (t: string): CodeToken => ({ t, c: "pl" });

// The company profile typed out character-by-character in the code card.
// Keep lines ≤ ~43 characters so the card never scrolls horizontally at
// the 3-column desktop width.
export const codeLines: CodeLine[] = [
  [kw("import"), pl(" "), id("vision"), pl(", { "), id("grit"), pl(" } "), kw("from"), pl(" 'addis-ababa'")],
  [],
  [cm("// Collection name")],
  [kw("export const"), pl(" "), id("collection"), pl(" =")],
  [pl("  'Ethiopian-first software'")],
  [],
  [cm("// Profile")],
  [kw("const"), pl(" "), id("aminra"), pl(" = "), kw("new"), pl(" Company({")],
  [pl("  "), id("focus"), pl(": {")],
  [pl("    'Clinic growth & patient recovery',")],
  [pl("  },")],
  [pl("  "), id("building"), pl(": ['DentalCare', 'OptiCare',")],
  [pl("    'DermaCare', 'Bloom Co', 'Tayoo',")],
  [pl("    'AutoLink'],")],
  [pl("  "), id("weaving"), pl(": ['Amharic', 'English', 'birr'],")],
  [pl("}, { "), id("followThrough"), pl(": "), kw("true"), pl(" })")],
  [],
  [cm("// Export")],
  [kw("export default"), pl(" "), id("aminra")],
];
