import type { CodeLine, CodeToken } from "@/lib/types";

const kw = (t: string): CodeToken => ({ t, c: "kw" });
const id = (t: string): CodeToken => ({ t, c: "id" });
const cm = (t: string): CodeToken => ({ t, c: "cm" });
const pl = (t: string): CodeToken => ({ t, c: "pl" });

// The company profile typed out character-by-character in the code card.
// Hook (the belief) → story (what we build) → offer (free demo).
// Keep lines ≤ ~43 characters so the card never scrolls horizontally at
// the 3-column desktop width.
export const codeLines: CodeLine[] = [
  [kw("import"), pl(" "), id("vision"), pl(", { "), id("grit"), pl(" } "), kw("from"), pl(" 'addis-ababa'")],
  [],
  [cm("// The belief everything rests on")],
  [kw("const"), pl(" "), id("belief"), pl(" = \"demand isn't")],
  [pl("  the problem — follow-through is\"")],
  [],
  [cm("// Our answer")],
  [kw("const"), pl(" "), id("aminra"), pl(" = "), kw("new"), pl(" Company({")],
  [pl("  "), id("promise"), pl(": 'find the leak, fix it,")],
  [pl("    prove it in birr',")],
  [pl("  "), id("building"), pl(": ['DentalCare', 'OptiCare',")],
  [pl("    'DermaCare', 'Bloom Co', 'Tayoo',")],
  [pl("    'AutoLink'],")],
  [pl("  "), id("weaving"), pl(": ['Amharic', 'English', 'birr'],")],
  [pl("}, { "), id("followThrough"), pl(": "), kw("true"), pl(" })")],
  [],
  [cm("// Every engagement starts free")],
  [kw("export default"), pl(" "), id("aminra"), pl(".demo()")],
];
