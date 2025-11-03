"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rolling Slow Media",
    "url": "https://www.rollingslowmedia.com",
    "logo": "https://www.rollingslowmedia.com/images/LOGO-3.png",
    "description": "Car YouTube channel specializing in cars and coffee events, Porsche reviews, supercar meets, and modern classics. Documenting automotive culture through exclusive content.",
    "sameAs": [
      "https://www.youtube.com/@RollingSlowMedia/videos",
      "https://www.instagram.com/rollingslowmedia/",
      "https://www.tiktok.com/@rollinslowmedia",
      "https://www.facebook.com/share/17YWQRa8Dd/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-784-146-5186",
      "contactType": "customer service",
      "email": "rollinslowsocial@gmail.com"
    },
    "founder": {
      "@type": "Person",
      "name": "Trevor Joseph"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rolling Slow Media",
    "url": "https://www.rollingslowmedia.com",
    "description": "Cars and coffee events, Porsche reviews, supercar meets and modern classics coverage since 2023. Premier automotive content channel.",
    "publisher": {
      "@type": "Organization",
      "name": "Rolling Slow Media"
    }
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Porsches, Supercars & Modern Classics - Regent's Park Cars & Coffee",
    "startDate": "2025-12-14T08:00:00+00:00",
    "endDate": "2025-12-14T12:00:00+00:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Regent's Park Bar & Kitchen",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Rolling Slow Media"
    },
    "description": "Premium cars and coffee meet featuring Porsches, supercars and modern classics at Regent's Park Bar & Kitchen, London. Join automotive enthusiasts for an exclusive morning event."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is cars and coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cars and coffee is a casual automotive gathering where car enthusiasts bring their vehicles to display and discuss. Rolling Slow Media hosts premium cars and coffee events featuring Porsches, supercars, and modern classics."
        }
      },
      {
        "@type": "Question",
        "name": "What types of cars attend Rolling Slow Media events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our events feature Porsches, supercars, modern classics, and rare automotive gems. We focus on high-quality vehicles and passionate owners who love sharing their automotive stories."
        }
      },
      {
        "@type": "Question",
        "name": "Where are Rolling Slow Media car meets held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our flagship cars and coffee events are held at Regent's Park Bar & Kitchen in London. We also cover various automotive events across the UK, documenting car culture and community."
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}