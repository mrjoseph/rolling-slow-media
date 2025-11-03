"use client";

import YouTubeVideos from "@/components/YouTubeVideos";
import useYouTubeStats from "@/hooks/useYouTubeStats";

export default function About() {
    const { stats } = useYouTubeStats();
    return (
        <section id="about" className="py-20 px-4 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                    About Rolling Slow Media
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Our passion for automotive excellence
                </p>

                <div className="grid md:grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Rolling Slow Media is dedicated to bringing you the most authentic
                            and engaging automotive content on YouTube. From exclusive Porsche reviews 
                            to cars and coffee event coverage, we showcase supercars, modern classics, 
                            and the culture behind these incredible vehicles.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Our mission is to connect car enthusiasts worldwide through premium 
                            cars and coffee meets, celebrate automotive artistry, and provide 
                            in-depth insights into Porsches, supercars, and classic cars. 
                            We believe every car has a story to tell.
                        </p>

                        <div className="grid grid-cols-2 gap-4 my-8 max-w-md mx-auto">
                            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-4 rounded-lg border border-red-500/30 text-center">
                                <p className="text-3xl font-bold text-red-400">
                                    {stats.loading ? "..." : stats.subscribers}
                                </p>
                                <p className="text-gray-400">YouTube Subscribers</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-4 rounded-lg border border-red-500/30 text-center">
                                <p className="text-3xl font-bold text-red-400">
                                    {stats.loading ? "..." : stats.views}
                                </p>
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

            {/* Latest Videos Section */}
            <div className="mt-20">
                <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
                    Latest Videos
                </h3>
                <YouTubeVideos />
            </div>
        </section>
    );
}
