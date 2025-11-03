"use client";

import { trackEvent } from "@/components/GoogleAnalytics";

export default function Hero() {
    const handleSocialClick = (platform: string, url: string) => {
        trackEvent('social_media_click', {
            platform: platform,
            url: url,
            event_category: 'engagement',
            event_label: platform,
        });
    };

    const handleCTAClick = (buttonName: string, url: string) => {
        trackEvent('cta_click', {
            button_name: buttonName,
            url: url,
            event_category: 'engagement',
            event_label: buttonName,
        });
    };
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-slate-900">
            {/* Background Video - Desktop */}
            <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden bg-slate-800">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/background-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Background Video - Mobile */}
            <div className="md:hidden absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-slate-800">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/background-portrait.mp4" type="video/mp4" />
                </video>
            </div>


            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl mb-6 leading-tight text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif", fontWeight: 900 }}>
                    Rolling Slow <span style={{ color: '#e35e9f' }}>MEDIA</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    Cars & Coffee meets featuring Porsches, supercars and modern classics
                </p>

                {/* Social / platform icons (links) */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <a 
                        href="https://www.youtube.com/@RollingSlowMedia/videos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="YouTube" 
                        onClick={() => handleSocialClick('YouTube', 'https://www.youtube.com/@RollingSlowMedia/videos')}
                        className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                        <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://www.instagram.com/rollingslowmedia/#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Instagram" 
                        onClick={() => handleSocialClick('Instagram', 'https://www.instagram.com/rollingslowmedia/#')}
                        className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a href="https://www.tiktok.com/@rollinslowmedia" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors">
                        <img src="/icons/tiktok.svg" alt="TikTok" className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/share/17YWQRa8Dd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/07841465186" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors">
                        <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                    </a>
                    <a href="#contact" aria-label="Email" className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                        <img src="/icons/email.svg" alt="Email" className="w-5 h-5" />
                    </a>
                    <a href="https://www.eventbrite.co.uk/e/porsches-supercars-modern-classics-regents-park-cars-coffee-tickets-1833380152389?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" aria-label="Eventbrite" className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center transition-colors">
                        <img src="/icons/eventbrite.svg" alt="Eventbrite" className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    Documenting car culture since 2023. Join our cars and coffee events featuring Porsches, supercars, and modern classics. Raw stories, epic events, and the passion behind every engine.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href="https://www.youtube.com/@RollingSlowMedia/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCTAClick('Subscribe YouTube', 'https://www.youtube.com/@RollingSlowMedia/videos')}
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                        Subscribe on YouTube
                        <img src="/icons/youtube.svg" alt="" className="w-5 h-5" />
                    </a>
                    <a
                        href="#next-event"
                        onClick={() => handleCTAClick('Next Event', '#next-event')}
                        className="px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 flex items-center gap-2"
                        style={{ backgroundColor: '#e35e9f' }}
                    >
                        Next Event
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handleCTAClick('Get in Touch', '#contact')}
                        className="px-8 py-3 border border-gray-400 hover:border-white hover:text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                        Get in Touch
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>

                <p className="text-sm text-gray-400 mt-6">
                    Interested in sponsoring? <a href="#sponsors" className="text-white hover:text-red-400 transition-colors font-semibold">View our sponsors</a>
                </p>
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
