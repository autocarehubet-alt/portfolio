// Single source of truth for company info. Edit here — never hardcode
// these facts in components.
export const site = {
  name: "Aminra Business Group PLC",
  greeting: "Hello, we're Aminra \u{1F44B}",
  tagline: "Ethiopian-first software for healthcare, creators, and cities",
  description:
    "Aminra Business Group builds Ethiopian-first software: clinic-growth platforms (DentalCare, OptiCare, DermaCare), the Bloom Co creator marketplace, the Tayoo transit companion, and the AutoLink spare-parts trust machine.",
  // TODO: production domain — sitemap, robots.txt, and metadata derive from it.
  url: "https://example.com",
  logo: "/images/aminracare-icon.png",
  email: "", // TODO (optional)
  phone: "+251 725 145 079",
  whatsapp: "https://wa.me/251725145079",
  location: {
    countryCode: "ET",
    label: "Based in Addis Ababa, Ethiopia",
    note: "Home of the best coffee on earth — come say hello.",
  },
  /** Gate for the portfolio card. Client-side and cosmetic — NOT security;
      anyone reading the page source can find it. TODO: owner sets the real
      passcode and shares it with prospective clients. */
  portfolioPasscode: "aminra2026",
  /** Optional company-profile PDF under public/ (e.g. "/aminra-portfolio.pdf").
      The file tile is hidden while empty. */
  profilePdf: "",
  /** Footer links (desktop text row, mobile chip grid). */
  links: [
    { label: "WhatsApp", href: "https://wa.me/251725145079" },
    { label: "DentalCare", href: "https://dental.aminracare.com" },
    { label: "OptiCare", href: "https://eye.aminracare.com" },
    { label: "DermaCare", href: "https://derm.aminracare.com" },
  ],
};
