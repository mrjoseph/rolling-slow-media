"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Ostrich Sans', sans-serif" }}>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Rolling Slow Media
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Epic Car Culture | YouTube Channel
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Experience the world of automotive excellence with in-depth reviews,
          events, and raw car culture content.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
          >
            Subscribe on YouTube
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
