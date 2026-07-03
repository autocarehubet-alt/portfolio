import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Single-page site — the homepage is the only route.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${site.url}/` }];
}
