import Link from "next/link";
import type { EventRecord } from "@/lib/events";

type EventDetailProps = {
  event: EventRecord;
};

export default function EventDetail({ event }: EventDetailProps) {
  const locationLine = [event.locationName, event.addressLine, event.city, event.postcode]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="relative overflow-hidden bg-slate-900 px-4 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/background.png)" }}
      />
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative mx-auto max-w-6xl">
        <Link href="/events" className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300 hover:text-red-200">
          Back to events
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px]">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
                {event.series}
              </p>
              <h1 className="mt-4 text-5xl text-white md:text-6xl" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                {event.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                {event.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Date</p>
                <p className="mt-2 text-xl font-semibold text-white">{event.dateLabel}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Time</p>
                <p className="mt-2 text-xl font-semibold text-white">{event.time}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Location</p>
                <p className="mt-2 text-xl font-semibold text-white">{locationLine}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Entry</p>
                <p className="mt-2 text-xl font-semibold text-white">{event.ticketInfo}</p>
              </div>
            </div>

            {event.specialOffer ? (
              <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-6">
                <h2 className="text-3xl text-green-300" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                  {event.specialOffer.title}
                </h2>
                <p className="mt-3 text-gray-300">{event.specialOffer.intro}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                  {event.specialOffer.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-gray-400">{event.specialOffer.footnote}</p>
              </div>
            ) : null}

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-3xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                About This Event
              </h2>
              <div className="mt-4 space-y-4 text-gray-300">
                {event.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <h2 className="text-3xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                  {event.logisticsTitle}
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                  {event.logistics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-900/25 to-orange-900/20 p-6">
                <h2 className="text-3xl text-yellow-300" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                  Important Information
                </h2>
                <p className="mt-4 text-sm text-gray-300">{event.disclaimer}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-300">
                  {event.conductRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-3xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                Hosted By
              </h2>
              <p className="mt-4 text-lg text-gray-300">{event.hosts.join(" | ")}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
              <div className="aspect-[4/5]">
                <img src={event.posterImage} alt={event.posterAlt} className="h-full w-full object-cover" />
              </div>
            </div>

            {event.mediaVideo ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
                <div className="aspect-video">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={event.mediaVideo.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={event.mediaVideo.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Capacity</p>
              <p className="mt-2 text-xl font-semibold text-white">{event.capacity}</p>
              {event.ticketUrl ? (
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Reserve Your Spot
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-white/40"
                >
                  Ask About This Event
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
