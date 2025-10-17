import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://github-finder-olive-iota.vercel.app/",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
