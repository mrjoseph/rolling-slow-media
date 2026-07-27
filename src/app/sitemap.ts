import { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const events = getAllEvents();

  return [
    {
      url: "https://www.rollingslowmedia.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.rollingslowmedia.com/events",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.rollingslowmedia.com/sponsors-pitch",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...events.map((event) => ({
      url: `https://www.rollingslowmedia.com/events/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: event.featured ? 0.95 : 0.8,
    })),
  ];
}
