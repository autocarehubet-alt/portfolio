import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Applies the persisted (or OS-preferred) theme before first paint so the
// page never flashes the wrong mode. Must stay inline in <head>.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

// Organization structured data — serialized at build time into the static
// HTML for search engines and AI crawlers.
const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  description: site.description,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  sameAs: site.links
    .filter((link) => link.label !== "WhatsApp")
    .map((link) => link.href),
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${robotoMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgJsonLd }}
        />
      </head>
      <body className="flex min-h-svh flex-col bg-bg-secondary font-sans text-text-primary antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
