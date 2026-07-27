import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import EventDetail from "@/components/events/EventDetail";
import EventStructuredData from "@/components/events/EventStructuredData";
import ContactUs from "@/components/sections/ContactUs";
import { getAllEvents, getEventBySlug } from "@/lib/events";

export const dynamic = "force-dynamic";

type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllEvents().map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | Rolling Slow Media",
    };
  }

  return {
    title: `${event.title} | Rolling Slow Media`,
    description: event.description,
    alternates: {
      canonical: `https://www.rollingslowmedia.com/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | Rolling Slow Media`,
      description: event.description,
      url: `https://www.rollingslowmedia.com/events/${event.slug}`,
      images: [
        {
          url: event.posterImage,
          alt: event.posterAlt,
        },
      ],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <EventStructuredData event={event} />
      <EventDetail event={event} />
      <ContactUs />
    </main>
  );
}
