"use client";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-slate-900">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/kM2OORgnE-Y?autoplay=1&mute=1&loop=1&playlist=kM2OORgnE-Y&controls=0&modestbranding=1&rel=0&fs=0&showinfo=0"
                    title="Rolling Slow Media"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '120%',
                        height: '120%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                    }}
                />
            </div>


            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl mb-6 leading-tight text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif", fontWeight: 900 }}>
                    Rolling Slow <span style={{ color: '#e35e9f' }}>MEDIA</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    Car review, coffee meets, and driving tours
                </p>

                {/* Social / platform icons (links) */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <a href="https://www.youtube.com/@RollingSlowMedia/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/youtube.svg" alt="YouTube" className="w-full h-full" />
                    </a>
                    <a href="https://www.instagram.com/rollingslowmedia/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-full h-full" />
                    </a>
                    <a href="https://www.tiktok.com/@rollinslowmedia" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/tiktok.svg" alt="TikTok" className="w-full h-full" />
                    </a>
                    <a href="#" aria-label="Facebook" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-full h-full" />
                    </a>
                    <a href="https://wa.me/07841465186" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-full h-full" />
                    </a>


                    <a href="#contact" aria-label="Email" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/email.svg" alt="Email" className="w-full h-full" />
                    </a>
                    <a href="https://www.eventbrite.co.uk/e/porsches-supercars-modern-classics-regents-park-cars-coffee-tickets-1833380152389?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" aria-label="Eventbrite" className="w-8 h-8 inline-block hover:opacity-90 transition-opacity">
                        <img src="/icons/eventbrite.svg" alt="Eventbrite" className="w-full h-full" />
                    </a>
                </div>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    Documenting car culture since 2023. Raw stories, epic events, and the passion behind every engine.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href="https://www.youtube.com/@RollingSlowMedia/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
                    >
                        Subscribe on YouTube
                    </a>
                    <a
                        href="#next-event"
                        className="px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#e35e9f' }}
                    >
                        Next Event
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-gray-400 hover:border-white hover:text-white rounded-lg font-semibold transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
