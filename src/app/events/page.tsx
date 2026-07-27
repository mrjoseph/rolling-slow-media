import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import EventCard from "@/components/events/EventCard";
import ContactUs from "@/components/sections/ContactUs";
import { getAllEvents, getFeaturedEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events | Rolling Slow Media",
  description:
    "Browse Rolling Slow Media events including Cars & Coffee gatherings, Porsche meets, supercar events, and upcoming community launches.",
  alternates: {
    canonical: "https://www.rollingslowmedia.com/events",
  },
};

export default function EventsPage() {
  const events = getAllEvents();
  const featuredEvent = getFeaturedEvent();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden px-4 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/background2.png)" }}
        />
        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
            Rolling Slow Media Events
          </p>

          <div className="mt-6 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-900/30 to-orange-900/20 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-red-200">Featured Right Now</p>
            <h2 className="mt-3 text-3xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
              {featuredEvent.title}
            </h2>
            <p className="mt-3 text-gray-300">
              {featuredEvent.dateLabel} | {featuredEvent.locationName}, {featuredEvent.city}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
