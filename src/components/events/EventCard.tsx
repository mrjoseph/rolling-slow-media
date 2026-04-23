import Link from "next/link";
import type { EventRecord } from "@/lib/events";

type EventCardProps = {
  event: EventRecord;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 shadow-2xl shadow-black/20">
      <div className="aspect-[4/5] overflow-hidden bg-slate-800">
        <img
          src={event.posterImage}
          alt={event.posterAlt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
            {event.status === "coming-soon" ? "Coming Soon" : "Scheduled"}
          </p>
          <h2 className="mt-3 text-3xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
            {event.title}
          </h2>
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          <p>{event.dateLabel}</p>
          <p>{event.time}</p>
          <p>
            {event.locationName}, {event.city}
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-400">{event.summary}</p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
          >
            View Details
          </Link>
          {event.ticketUrl ? (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-white/40"
            >
              Get Tickets
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
