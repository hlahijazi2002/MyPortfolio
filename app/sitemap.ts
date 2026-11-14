import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hlahijazi.vercel.app";
  const now = new Date();
  const home = { en: base, ar: `${base}/ar` };
  const projects = { en: `${base}/projects`, ar: `${base}/ar/projects` };

  return [
    {
      url: base,
      lastModified: now,
      priority: 1,
      alternates: { languages: home },
    },
    {
      url: `${base}/ar`,
      lastModified: now,
      priority: 0.9,
      alternates: { languages: home },
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      priority: 0.8,
      alternates: { languages: projects },
    },
    {
      url: `${base}/ar/projects`,
      lastModified: now,
      priority: 0.7,
      alternates: { languages: projects },
    },
  ];
}
