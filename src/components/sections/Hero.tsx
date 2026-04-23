"use client";

import Link from "next/link";
import { trackEvent } from "@/components/GoogleAnalytics";
import { EVENTBRITE_URL, type EventRecord } from "@/lib/events";

type HeroProps = {
  featuredEvent: EventRecord;
};

export default function Hero({ featuredEvent }: HeroProps) {
  const handleSocialClick = (platform: string, url: string) => {
    trackEvent("social_media_click", {
      platform,
      url,
      event_category: "engagement",
      event_label: platform,
    });
  };

  const handleCTAClick = (buttonName: string, url: string) => {
    trackEvent("cta_click", {
      button_name: buttonName,
      url,
      event_category: "engagement",
      event_label: buttonName,
    });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-900 px-4">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden bg-slate-800 md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/background.png"
          className="h-full w-full object-cover"
        >
          <source src="/video/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-slate-800 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/background.png"
          className="h-full w-full object-cover"
        >
          <source src="/video/background-portrait.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1
          className="mb-6 text-6xl leading-tight text-white md:text-7xl"
          style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif", fontWeight: 900 }}
        >
          Rolling Slow <span style={{ color: "#e35e9f" }}>MEDIA</span>
        </h1>

        <p className="mb-4 text-xl text-gray-300 md:text-2xl">
          Cars & Coffee meets featuring Porsches, supercars and modern classics
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Documenting car culture since 2023. Join our cars and coffee events featuring
          Porsches, supercars, and modern classics. Raw stories, epic events, and the
          passion behind every engine.
        </p>

        <div className="mb-10">
          <Link
            href={`/events/${featuredEvent.slug}`}
            onClick={() =>
              handleCTAClick("Featured Event Hero", `/events/${featuredEvent.slug}`)
            }
            className="group inline-block max-w-4xl rounded-2xl border border-white/10 bg-slate-900/55 p-4 transition-all duration-300 hover:bg-slate-700/50"
          >
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-center">
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
                  Featured Event
                </p>
                <h2
                  className="mt-3 text-3xl text-white md:text-4xl"
                  style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
                >
                  {featuredEvent.title}
                </h2>
                <p className="mt-3 text-base font-semibold uppercase tracking-wide text-gray-200">
                  {featuredEvent.heroDateLabel} | {featuredEvent.time}
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  {featuredEvent.locationName}, {featuredEvent.city}
                </p>
                <p className="mt-4 text-sm text-gray-400">{featuredEvent.summary}</p>
              </div>

              <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 shadow-2xl">
                <div className="aspect-[4/5]">
                  <img
                    src={featuredEvent.posterImage}
                    alt={featuredEvent.posterAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/events"
            onClick={() => handleCTAClick("Browse Events", "/events")}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-semibold transition-colors hover:bg-red-700"
          >
            Browse Events
          </Link>
          <a
            href="#contact"
            onClick={() => handleCTAClick("Get in Touch", "#contact")}
            className="flex items-center gap-2 rounded-lg border border-gray-400 px-8 py-3 font-semibold transition-colors hover:border-white hover:text-white"
          >
            Get in Touch
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@RollingSlowMedia/videos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleCTAClick(
                "Subscribe YouTube",
                "https://www.youtube.com/@RollingSlowMedia/videos",
              )
            }
            className="flex items-center gap-2 rounded-lg border border-gray-400 px-8 py-3 font-semibold transition-colors hover:border-white hover:text-white"
          >
            Subscribe on YouTube
            <img src="/icons/youtube.svg" alt="" className="h-5 w-5" />
          </a>
        </div>

        <div className="mb-6 flex items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@RollingSlowMedia/videos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            onClick={() =>
              handleSocialClick("YouTube", "https://www.youtube.com/@RollingSlowMedia/videos")
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 transition-colors hover:bg-red-700"
          >
            <img src="/icons/youtube.svg" alt="YouTube" className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/rollingslowmedia/#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() =>
              handleSocialClick("Instagram", "https://www.instagram.com/rollingslowmedia/#")
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 transition-colors hover:bg-pink-700"
          >
            <img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@rollinslowmedia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            onClick={() => handleSocialClick("TikTok", "https://www.tiktok.com/@rollinslowmedia")}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-colors hover:bg-gray-800"
          >
            <img src="/icons/tiktok.svg" alt="TikTok" className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/share/17YWQRa8Dd/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            onClick={() =>
              handleSocialClick(
                "Facebook",
                "https://www.facebook.com/share/17YWQRa8Dd/?mibextid=wwXIfr",
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 transition-colors hover:bg-blue-700"
          >
            <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/07841465186"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => handleSocialClick("WhatsApp", "https://wa.me/07841465186")}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 transition-colors hover:bg-green-700"
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            onClick={() => handleSocialClick("Email", "#contact")}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600 transition-colors hover:bg-gray-700"
          >
            <img src="/icons/email.svg" alt="Email" className="h-5 w-5" />
          </a>
          <a
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eventbrite"
            onClick={() =>
              handleSocialClick("Eventbrite", EVENTBRITE_URL)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 transition-colors hover:bg-orange-700"
          >
            <img src="/icons/eventbrite.svg" alt="Eventbrite" className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Interested in sponsoring?{" "}
          <a href="#sponsors" className="font-semibold text-white transition-colors hover:text-red-400">
            View our sponsors
          </a>
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
