"use client";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
          About Rolling Slow Media
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Our passion for automotive excellence
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-700 rounded-lg h-96 flex items-center justify-center border border-slate-600">
            <div className="text-center">
              <p className="text-gray-400 text-lg">Channel Logo/Image</p>
              <p className="text-gray-500 text-sm mt-2">
                Replace with actual brand image
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Rolling Slow Media is dedicated to bringing you the most authentic
              and engaging automotive content on YouTube. From exclusive car
              reviews to live event coverage, we showcase the culture, passion,
              and stories behind some of the most incredible vehicles.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to connect car enthusiasts worldwide, celebrate
              automotive artistry, and provide in-depth insights into the world
              of high-performance and rare vehicles. We believe every car has a
              story to tell.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-4 rounded-lg border border-red-500/30">
                <p className="text-3xl font-bold text-red-400">500K+</p>
                <p className="text-gray-400">YouTube Subscribers</p>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-4 rounded-lg border border-red-500/30">
                <p className="text-3xl font-bold text-red-400">50M+</p>
                <p className="text-gray-400">Total Views</p>
              </div>
            </div>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
            >
              Watch Our Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
