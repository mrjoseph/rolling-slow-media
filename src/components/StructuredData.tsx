export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rolling Slow Media",
    url: "https://www.rollingslowmedia.com",
    logo: "https://www.rollingslowmedia.com/images/LOGO-3.png",
    description:
      "London's premier cars and coffee events organiser. Monthly Porsche meets, supercar gatherings and modern classics events at Regent's Park. Also a car YouTube channel documenting automotive culture.",
    areaServed: {
      "@type": "City",
      name: "London",
    },
    sameAs: [
      "https://www.youtube.com/@RollingSlowMedia/videos",
      "https://www.instagram.com/rollingslowmedia/",
      "https://www.tiktok.com/@rollinslowmedia",
      "https://www.facebook.com/share/17YWQRa8Dd/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-784-146-5186",
      contactType: "customer service",
      email: "rollinslowsocial@gmail.com",
    },
    founder: {
      "@type": "Person",
      name: "Trevor Joseph",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rolling Slow Media",
    url: "https://www.rollingslowmedia.com",
    description:
      "London cars and coffee events at Regent's Park. Monthly Porsche meets, supercar gatherings and modern classics. Free entry, all welcome.",
    publisher: {
      "@type": "Organization",
      name: "Rolling Slow Media",
    },
  };

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Porsches, Supercars & Modern Classics Cars & Coffee — Regent's Park",
    description:
      "A free monthly cars and coffee gathering at Regent's Park Inner Circle, London. Featuring Porsches, supercars and modern classics. A must-see attraction for car enthusiasts and tourists visiting London.",
    url: "https://www.rollingslowmedia.com/events/regents-park-cars-and-coffee",
    image: "https://www.rollingslowmedia.com/events/Porsches-superecars-regents-park.png",
    touristType: ["Car enthusiasts", "Automotive fans", "London tourists", "Supercar fans", "Porsche fans"],
    location: {
      "@type": "Place",
      name: "Regent's Park Bar & Kitchen",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Inner Circle",
        addressLocality: "London",
        postalCode: "NW1 4NU",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5267,
        longitude: -0.1545,
      },
    },
    isAccessibleForFree: true,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is cars and coffee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cars and coffee is a casual automotive gathering where car enthusiasts bring their vehicles to display and discuss over morning coffee. Rolling Slow Media hosts London's premier cars and coffee events featuring Porsches, supercars, and modern classics at Regent's Park.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the Rolling Slow Media cars and coffee event in London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our flagship cars and coffee event is held at Regent's Park Bar & Kitchen, Inner Circle, London NW1 4NU — inside the beautiful Regent's Park. It's easily accessible by tube (Baker Street or Regent's Park stations) and is a stunning setting for cars and tourists alike.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Regent's Park cars and coffee event free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Entry is completely free. You just need to register for a free ticket on Eventbrite to reserve your spot, as spaces are limited to around 150 cars.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Regent's Park cars and coffee good for tourists visiting London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The event takes place inside Regent's Park — one of London's Royal Parks — making it a unique and free experience for anyone visiting the city. See incredible Porsches, supercars and modern classics in a beautiful London setting on a Sunday morning.",
        },
      },
      {
        "@type": "Question",
        name: "What types of cars attend Rolling Slow Media events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our events feature Porsches, supercars, modern classics, and rare automotive gems. We focus on high-quality vehicles and passionate owners who love sharing their automotive stories.",
        },
      },
      {
        "@type": "Question",
        name: "When is the next cars and coffee event in London?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We host monthly cars and coffee events in London. Check our events page at rollingslowmedia.com/events for upcoming dates and to register for free tickets.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
