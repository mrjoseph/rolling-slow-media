import Link from "next/link";
import type { EventRecord } from "@/lib/events";

type NextEventProps = {
  featuredEvent: EventRecord;
  events: EventRecord[];
};

export default function NextEvent({ featuredEvent, events }: NextEventProps) {
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
          Events
        </h2>
        <p className="mb-12 text-center text-gray-400">
          Explore current and upcoming Rolling Slow Media events
        </p>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-red-500/30 bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8">
            <p className="mb-2 text-sm font-semibold text-red-400">{featuredEvent.series}</p>
            <h3 className="mb-6 text-3xl font-bold text-red-400">{featuredEvent.title}</h3>

            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-bold text-red-500">Date</span>
                <div>
                  <p className="text-lg font-semibold">{featuredEvent.dateLabel}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-bold text-red-500">Time</span>
                <div>
                  <p className="text-lg font-semibold">{featuredEvent.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-bold text-red-500">Place</span>
                <div>
                  <p className="text-lg font-semibold">
                    {featuredEvent.locationName}, {featuredEvent.addressLine}, {featuredEvent.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-bold text-red-500">Capacity</span>
                <div>
                  <p className="text-lg font-semibold">{featuredEvent.capacity}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="font-bold text-red-500">Entry</span>
                <div>
                  <p className="text-lg font-semibold">{featuredEvent.ticketInfo}</p>
                </div>
              </div>
            </div>

            <p className="mb-6 text-gray-300">{featuredEvent.description}</p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/events/${featuredEvent.slug}`}
                className="inline-block w-full rounded-lg bg-red-600 px-6 py-3 text-center font-semibold transition-colors hover:bg-red-700"
              >
                View Event Details
              </Link>
              {featuredEvent.ticketUrl ? (
                <a
                  href={featuredEvent.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-lg border border-red-500/60 px-6 py-3 text-center font-semibold transition-colors hover:border-red-400"
                >
                  Get Tickets
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div className="rounded-lg border border-slate-600 bg-slate-800/70 p-6">
                <h3
                  className="mb-3 text-2xl font-bold text-white"
                  style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
                >
                  Event Line-up
                </h3>
                <div className="space-y-4">
                  {events.map((event) => (
                    <Link
                      key={event.slug}
                      href={`/events/${event.slug}`}
                      className="block rounded-lg border border-white/10 bg-slate-900/60 p-4 transition-colors hover:border-red-400/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-red-300">
                            {event.status === "coming-soon" ? "Coming Soon" : "Scheduled"}
                          </p>
                          <h4 className="mt-2 text-xl font-semibold text-white">{event.title}</h4>
                          <p className="mt-2 text-sm text-gray-300">{event.dateLabel}</p>
                          <p className="mt-2 text-sm text-gray-400">{event.summary}</p>
                        </div>
                        <span className="text-sm font-semibold text-white">View</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/events"
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-red-300 hover:text-red-200"
                >
                  Browse all events
                </Link>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-600 bg-slate-700">
                <div className="aspect-[4/5]">
                  <img
                    src={featuredEvent.posterImage}
                    alt={featuredEvent.posterAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6">
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
              >
                About the Event
              </h3>
              {featuredEvent.about.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-gray-300 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6">
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
              >
                {featuredEvent.logisticsTitle}
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                {featuredEvent.logistics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6">
              <h3
                className="mb-4 text-2xl font-bold text-yellow-400"
                style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
              >
                Important Information
              </h3>

              <div className="mb-4">
                <h4 className="mb-2 text-xl font-semibold text-yellow-300">Vehicle Disclaimer</h4>
                <p className="text-sm text-gray-300">{featuredEvent.disclaimer}</p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-yellow-300">Code of Conduct</h4>
                <p className="mb-2 text-gray-300">
                  To keep this meet safe, enjoyable, and respectful for everyone:
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
                  {featuredEvent.conductRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm font-semibold text-gray-300">
                  Anyone ignoring these rules may be asked to leave.
                </p>
              </div>
            </div>

            {featuredEvent.specialOffer ? (
              <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6">
                <h3
                  className="mb-3 text-2xl font-bold text-green-400"
                  style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
                >
                  {featuredEvent.specialOffer.title}
                </h3>
                <p className="mb-3 text-gray-300">{featuredEvent.specialOffer.intro}</p>
                <ul className="mb-3 list-inside list-disc space-y-2 text-gray-300">
                  {featuredEvent.specialOffer.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm italic text-gray-400">
                  {featuredEvent.specialOffer.footnote}
                </p>
              </div>
            ) : null}

            <div className="rounded-lg border border-slate-600 bg-slate-800/50 p-6 text-center">
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
              >
                Hosted By
              </h3>
              <p className="text-lg text-gray-300">{featuredEvent.hosts.join(" | ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
