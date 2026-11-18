import { isEventPast, type EventRecord } from "@/lib/events";

type EventStructuredDataProps = {
  event: EventRecord;
};

export default function EventStructuredData({ event }: EventStructuredDataProps) {
  if (!event.startIso || !event.endIso) {
    return null;
  }

  const isRegentsPark = event.slug === "regents-park-cars-and-coffee";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.startIso,
    endDate: event.endIso,
    eventStatus: isEventPast(event)
      ? "https://schema.org/EventCompleted"
      : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.addressLine,
        addressLocality: event.city,
        postalCode: event.postcode,
        addressCountry: "GB",
      },
      ...(isRegentsPark && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5267,
          longitude: -0.1545,
        },
      }),
    },
    organizer: {
      "@type": "Organization",
      name: "Rolling Slow Media",
      url: "https://www.rollingslowmedia.com",
    },
    image: [`https://www.rollingslowmedia.com${event.posterImage}`],
    description: event.description,
    isAccessibleForFree: true,
    ...(event.status !== "coming-soon" && { offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: event.ticketUrl ?? "https://www.rollingslowmedia.com/events",
      validFrom: event.startIso,
    } }),
    audience: {
      "@type": "Audience",
      audienceType: "Car enthusiasts, Porsche fans, supercar fans, London tourists, automotive enthusiasts",
    },
    keywords: "cars and coffee London, Porsche meet, supercar event, London car event, Regent's Park, free London events",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
