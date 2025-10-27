"use client";

export default function NextEvent() {
  const upcomingEvent = {
    title: "Car Meet & Showcase 2025",
    date: "April 15, 2025",
    time: "10:00 AM",
    location: "Downtown Auto Park",
    description:
      "Join us for an exclusive car meet featuring rare and modified vehicles. Network with enthusiasts and watch live demonstrations.",
    attendees: "500+",
  };

  return (
    <section id="next-event" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Next Event
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Mark your calendar for our upcoming events
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-lg border border-red-500/30">
            <h3 className="text-3xl font-bold mb-6 text-red-400">
              {upcomingEvent.title}
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-red-500 font-bold">📅</span>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-lg font-semibold">{upcomingEvent.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-500 font-bold">🕐</span>
                <div>
                  <p className="text-gray-400 text-sm">Time</p>
                  <p className="text-lg font-semibold">{upcomingEvent.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-500 font-bold">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-lg font-semibold">
                    {upcomingEvent.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-500 font-bold">👥</span>
                <div>
                  <p className="text-gray-400 text-sm">Expected Attendees</p>
                  <p className="text-lg font-semibold">
                    {upcomingEvent.attendees}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{upcomingEvent.description}</p>

            <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
              Register for Event
            </button>
          </div>

          <div className="bg-slate-700 rounded-lg h-96 flex items-center justify-center border border-slate-600">
            <div className="text-center">
              <p className="text-gray-400 text-lg">Event Image Placeholder</p>
              <p className="text-gray-500 text-sm mt-2">
                Replace with actual event image
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
