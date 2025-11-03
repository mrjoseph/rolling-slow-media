"use client";

import { useState } from "react";
import Image from "next/image";
import { trackSponsorClick } from "@/components/GoogleAnalytics";

export default function Sponsors() {
  // Example sponsors - uncomment and modify when you have real sponsors
  // const sponsors = [
  //   {
  //     name: "Vectra",
  //     logo: "/logos/vectra.png",
  //     link: "https://vectra.ai",
  //     description: "AI-powered threat detection and response platform",
  //   },
  //   {
  //     name: "BBS Wheels",
  //     logo: "/logos/bbs.png",
  //     link: "https://bbs.com",
  //     description: "High-performance wheels and accessories",
  //   },
  //   // Add more sponsors here...
  // ];
  
  const sponsors = [];

  const handleSponsorClick = (sponsor: any) => {
    // Track sponsor click for analytics
    trackSponsorClick(sponsor.name, sponsor.link);
  };

  return (
    <section id="sponsors" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-bold mb-4 text-center text-slate-900"
          style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}
        >
          Our Sponsors
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Proud partners supporting our mission
        </p>

        {sponsors.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 mb-6">
              We're currently looking for sponsors for our upcoming events!
            </p>
            <a
              href="/sponsors-pitch"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors text-white"
            >
              Become a Sponsor
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSponsorClick(sponsor)}
              className="relative group bg-white overflow-hidden aspect-square flex items-center justify-center cursor-pointer"
            >
              {/* Logo */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain p-8"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center px-4">
                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <p className="text-sm">{sponsor.description}</p>
                </div>
              </div>
            </a>
          ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Interested in sponsoring?</p>
              <a
                href="/sponsors-pitch"
                className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors text-white"
              >
                Become a Sponsor
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
