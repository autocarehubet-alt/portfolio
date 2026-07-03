import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into out/.
  output: "export",
  // Image optimization needs a server; a static export serves files as-is.
  images: { unoptimized: true },
  // Emit each page as folder/index.html so static hosts resolve clean URLs.
  trailingSlash: true,
};

export default nextConfig;
