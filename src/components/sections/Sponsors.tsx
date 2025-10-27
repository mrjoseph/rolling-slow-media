"use client";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Premium Auto Parts",
      category: "Official Partner",
      link: "https://example.com",
    },
    {
      name: "Performance Garage",
      category: "Exclusive Sponsor",
      link: "https://example.com",
    },
    {
      name: "Elite Detailing",
      category: "Official Partner",
      link: "https://example.com",
    },
    {
      name: "Carbon Customs",
      category: "Premium Sponsor",
      link: "https://example.com",
    },
    {
      name: "Turbo Tech",
      category: "Technology Partner",
      link: "https://example.com",
    },
    {
      name: "Velocity Insurance",
      category: "Official Partner",
      link: "https://example.com",
    },
  ];

  return (
    <section id="sponsors" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Our Sponsors
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Proud partners supporting our mission
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 rounded-lg border border-slate-600 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-4xl mb-2">🏢</div>
                  <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                  <p className="text-red-400 text-sm">{sponsor.category}</p>
                </div>
                <p className="text-gray-500 text-sm mt-4">Visit Sponsor</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Interested in sponsoring?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
