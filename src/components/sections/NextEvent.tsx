"use client";

// Function to get the 2nd Sunday of a given month/year
function getSecondSunday(year: number, month: number): Date {
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    
    // Calculate days until first Sunday (0 = Sunday)
    const daysUntilFirstSunday = firstDayOfWeek === 0 ? 0 : 7 - firstDayOfWeek;
    
    // Second Sunday is 7 days after the first Sunday
    const secondSundayDate = 1 + daysUntilFirstSunday + 7;
    
    return new Date(year, month, secondSundayDate);
}

// Function to get ordinal suffix (1st, 2nd, 3rd, etc.)
function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Function to format the date as "Sunday 11th January 2026"
function formatEventDate(date: Date): string {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const ordinal = getOrdinalSuffix(day);
    
    return `Sunday ${day}${ordinal} ${month} ${year}`;
}

// Function to get the next event date (2nd Sunday of current or next month)
function getNextEventDate(): string {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Get 2nd Sunday of current month
    let eventDate = getSecondSunday(currentYear, currentMonth);
    
    // If the event has already passed, get next month's 2nd Sunday
    if (eventDate < now) {
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        eventDate = getSecondSunday(nextYear, nextMonth);
    }
    
    return formatEventDate(eventDate);
}

export default function NextEvent() {
    const upcomingEvent = {
        title: "Porsches, Supercars & Modern Classics Cars & Coffee",
        date: getNextEventDate(),
        time: "8:00 AM – 12:00 PM",
        location: "Regent's Park Bar & Kitchen, Inner Circle, London",
        description:
            "Start your Sunday with the sound of engines, coffee, and conversation. Join us in the beautiful setting of Regent's Park Inner Circle for our New Year Cars & Coffee gathering, celebrating Porsches, supercars, and modern classics. Spaces are limited to around 150 cars, so reserve your free ticket early.",
        capacity: "150 cars",
        parking: "Free before 9 AM; pay & display from 9 AM–6:30 PM (50p per 15 mins on Sundays). Gates open 7 AM.",
        ticketInfo: "Free entry — ticket required",
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

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-lg border border-red-500/30">
                        <p className="text-red-400 text-sm font-semibold mb-2">
                            Porsche Drive Group and Rolling Slow Media presents:
                        </p>
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
                            href="https://www.eventbrite.co.uk/e/porsches-supercars-modern-classics-regents-park-cars-coffee-tickets-1978414816975?aff=ebdsoporgprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors text-center"
                        >
                            Get Your Free Ticket
                        </a>
                    </div>

                    {/* Right Column with Video and Additional Info */}
                    <div className="space-y-6">
                        <div className="bg-slate-700 rounded-lg aspect-video flex items-center justify-center border border-slate-600 overflow-hidden">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/video/PSMC-landscape(1).mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Special Offer */}
                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-2xl font-bold mb-3 text-green-400" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                                Special Offer from Regent's Park Bar & Kitchen
                            </h3>
                            <p className="text-gray-300 mb-3">
                                To make the morning even better, the café is offering all attendees:
                            </p>
                            <ul className="text-gray-300 space-y-2 mb-3 list-disc list-inside">
                                <li>£1 coffee with any cake</li>
                                <li>£1 coffee with any breakfast item</li>
                            </ul>
                            <p className="text-sm text-gray-400 italic">
                                This offer is exclusive to our Cars & Coffee event and available throughout the morning. Please show your ticket to staff.
                            </p>
                        </div>

                        {/* About the Event */}
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                            <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                                About the Event
                            </h3>
                            <p className="text-gray-300">
                                This meet brings together like-minded enthusiasts in one of London's most iconic parks. Expect an eclectic mix of machinery, relaxed conversation, great photo opportunities, and a welcoming community of drivers.
                            </p>
                            <p className="text-gray-300 mt-3">
                                Whether you bring a Porsche, a supercar, a modern classic, or you simply want to enjoy the atmosphere, this is the perfect way to start your Sunday.
                            </p>
                        </div>

                        {/* Parking Information */}
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
                            <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                                Parking Information
                            </h3>
                            <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                <li>Free before 9 AM</li>
                                <li>Pay & Display from 9 AM–6:30 PM (50p per 15 minutes on Sundays)</li>
                                <li>Gates open at 7 AM</li>
                                <li>Please follow parking guidance from event volunteers to help keep everything flowing smoothly</li>
                            </ul>
                        </div>

                        {/* Important Information */}
                        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-400" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                                Important Information
                            </h3>
                            
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold mb-2 text-yellow-300">Vehicle Disclaimer</h4>
                                <p className="text-gray-300 text-sm">
                                    All vehicles are parked at the owner's own risk. The organisers, venue, and host partners accept no responsibility for damage, loss, theft, or incidents involving any vehicle or personal property during the event.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-2 text-yellow-300">Code of Conduct</h4>
                                <p className="text-gray-300 mb-2">
                                    To keep this meet safe, enjoyable, and respectful for everyone in the park:
                                </p>
                                <ul className="text-gray-300 space-y-1 list-disc list-inside text-sm">
                                    <li>No revving, loud acceleration, or reckless driving</li>
                                    <li>No drifting, burnouts, or antisocial behaviour</li>
                                    <li>Respect pedestrians, cyclists, and other park users</li>
                                    <li>Follow instructions from park staff or event volunteers</li>
                                    <li>Keep noise to a minimum when arriving and leaving</li>
                                    <li>Park considerately and give others space</li>
                                    <li>Take all rubbish with you</li>
                                </ul>
                                <p className="text-gray-300 mt-2 text-sm font-semibold">
                                    Anyone ignoring these rules may be asked to leave.
                                </p>
                            </div>
                        </div>

                        {/* Hosted By */}
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 text-center">
                            <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                                Hosted By
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Porsche Drive Group<br />
                                Rolling Slow Media
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
