import EventCard from "@/components/events/EventCard";
import type { EventRecord } from "@/lib/events";

type NextEventProps = {
  events: EventRecord[];
};

export default function NextEvent({ events }: NextEventProps) {
  return (
    <section
      id="next-event"
      className="relative overflow-hidden bg-slate-900 bg-scroll px-4 py-20 md:bg-fixed"
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className="mb-4 text-center text-5xl font-bold text-white"
          style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
        >
          Upcoming Events
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Explore current and upcoming Rolling Slow Media events
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
