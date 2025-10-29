"use client";

export default function NextEvent() {
    const upcomingEvent = {
        title: "Porsches, Supercars & Modern Classics Cars & Coffee",
        date: "Sunday 14th December 2025",
        time: "8:00 AM – 12:00 PM",
        location: "Regent's Park Bar & Kitchen, Inner Circle, London",
        description:
            "Start your Sunday with the sound of engines, coffee, and conversation. Join us in the beautiful setting of Regent's Park Inner Circle for an end-of-year Cars & Coffee gathering celebrating Porsches, supercars, and modern classics. Enjoy a free coffee and mince pie at the Regent's Park Bar & Kitchen when you show your Eventbrite ticket. Spaces are limited to 100 cars, so reserve your free ticket early.",
        capacity: "100 cars",
        parking: "Free before 9 AM; pay & display from 9 AM–6:30 PM (50p per 15 mins on Sundays). Gates open 7 AM.",
        ticketInfo: "Free entry — ticket required for refreshments",
    };

    return (
        <section id="next-event" className="py-20 px-4 relative overflow-hidden bg-slate-900" style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-900/75"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-5xl font-bold mb-4 text-center text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                    Next Event
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
                                    <p className="text-gray-400 text-sm">Capacity</p>
                                    <p className="text-lg font-semibold">
                                        {upcomingEvent.capacity}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-red-500 font-bold">🎟️</span>
                                <div>
                                    <p className="text-gray-400 text-sm">Entry</p>
                                    <p className="text-lg font-semibold">
                                        {upcomingEvent.ticketInfo}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-red-500 font-bold">🅿️</span>
                                <div>
                                    <p className="text-gray-400 text-sm">Parking Info</p>
                                    <p className="text-sm text-gray-300">
                                        {upcomingEvent.parking}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6">{upcomingEvent.description}</p>

                        <a
                            href="https://www.eventbrite.co.uk/e/porsches-supercars-modern-classics-regents-park-cars-coffee-tickets-1833380152389?aff=oddtdtcreator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors text-center"
                        >
                            Get Your Free Ticket
                        </a>
                    </div>

                    <div className="bg-slate-700 rounded-lg h-96 flex items-center justify-center border border-slate-600">
                        <img 
                            src="/images/PSMC-LOGO-transparanat.png" 
                            alt="PSMC Logo" 
                            className="w-full h-full object-contain p-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
