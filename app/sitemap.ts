import { MetadataRoute } from "next";
import { translators } from "@/data/translators/_index";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lingojam.co";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/translators`, priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const translatorPages = translators.map((t) => ({
    url: `${base}/${t.slug}`,
    priority: t.popular ? 0.9 : 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(),
  }));

  return [...staticPages, ...translatorPages];
}