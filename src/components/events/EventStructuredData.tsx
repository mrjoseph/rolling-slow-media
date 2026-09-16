import { isEventPast, type EventRecord } from "@/lib/events";

type EventStructuredDataProps = {
  event: EventRecord;
};

export default function EventStructuredData({ event }: EventStructuredDataProps) {
  if (!event.startIso || !event.endIso) {
    return null;
  }

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
    },
    organizer: {
      "@type": "Organization",
      name: "Rolling Slow Media",
      url: "https://www.rollingslowmedia.com",
    },
    image: [`https://www.rollingslowmedia.com${event.posterImage}`],
    description: event.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
