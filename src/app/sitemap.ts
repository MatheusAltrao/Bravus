import { navigationLinks } from "@/const/navigation";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const currentDate = new Date();

  const rootEntry = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  const sectionEntries = navigationLinks.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: link.href === "#hero" ? 0.9 : 0.8,
  }));

  return [rootEntry, ...sectionEntries];
}
