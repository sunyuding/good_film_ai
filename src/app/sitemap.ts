import type { MetadataRoute } from "next";

const BASE_URL = "https://good-film-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "zh"];
  const pages = ["", "/trae", "/tether", "/river-of-life", "/kah"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
  );
}
