import { getNextEventDateInfo } from "@/lib/eventDate";

export const EVENTBRITE_URL =
  "https://www.eventbrite.co.uk/o/111469193331?_gl=1*l4u7ih*_up*MQ..*_ga*OTI4NzQxNzc1LjE3NzY5MjI3NDk.*_ga_TQVES5V6SH*czE3NzY5MjI3NDgkbzEkZzAkdDE3NzY5MjI3NDgkajYwJGwwJGgw";

export type EventStatus = "scheduled" | "coming-soon";

export type EventRecord = {
  slug: string;
  series: string;
  title: string;
  status: EventStatus;
  heroDateLabel: string;
  dateLabel: string;
  startIso?: string;
  endIso?: string;
  time: string;
  locationName: string;
  addressLine: string;
  city: string;
  postcode: string;
  summary: string;
  description: string;
  capacity: string;
  ticketInfo: string;
  ticketUrl?: string;
  logisticsTitle: string;
  logistics: string[];
  hosts: string[];
  about: string[];
  conductRules: string[];
  disclaimer: string;
  specialOffer?: {
    title: string;
    intro: string;
    bullets: string[];
    footnote: string;
  };
  posterImage: string;
  posterAlt: string;
  mediaVideo?: {
    src: string;
    poster?: string;
  };
  featured?: boolean;
};

function buildRegentsParkEvent(): EventRecord {
  const eventInfo = getNextEventDateInfo();

  return {
    slug: "regents-park-cars-and-coffee",
    series: "Porsche Drive Group and Rolling Slow Media presents",
    title: "Porsches, Supercars & Modern Classics Cars & Coffee",
    status: "scheduled",
    heroDateLabel: eventInfo.displayHero,
    dateLabel: eventInfo.displayLong,
    startIso: eventInfo.startIso,
    endIso: eventInfo.endIso,
    time: "8:00 AM - 12:00 PM",
    locationName: "Regent's Park Bar & Kitchen",
    addressLine: "Inner Circle",
    city: "London",
    postcode: "NW1 4NU",
    summary:
      "Start your Sunday with the sound of engines, coffee, and conversation in Regent's Park.",
    description:
      "Join us in the beautiful setting of Regent's Park Inner Circle for our Cars & Coffee gathering, celebrating Porsches, supercars, and modern classics. Spaces are limited to around 150 cars, so reserve your free ticket early.",
    capacity: "150 cars",
    ticketInfo: "Free entry - ticket required",
    ticketUrl: EVENTBRITE_URL,
    logisticsTitle: "Parking Information",
    logistics: [
      "Free before 9 AM",
      "Pay & Display from 9 AM-6:30 PM (50p per 15 minutes on Sundays)",
      "Gates open at 7 AM",
      "Please follow parking guidance from event volunteers to keep everything flowing smoothly",
    ],
    hosts: ["Porsche Drive Group", "Rolling Slow Media"],
    about: [
      "This meet brings together like-minded enthusiasts in one of London's most iconic parks. Expect an eclectic mix of machinery, relaxed conversation, great photo opportunities, and a welcoming community of drivers.",
      "Whether you bring a Porsche, a supercar, a modern classic, or simply want to enjoy the atmosphere, this is the perfect way to start your Sunday.",
    ],
    conductRules: [
      "No revving, loud acceleration, or reckless driving",
      "No drifting, burnouts, or antisocial behaviour",
      "Respect pedestrians, cyclists, and other park users",
      "Follow instructions from park staff or event volunteers",
      "Keep noise to a minimum when arriving and leaving",
      "Park considerately and give others space",
      "Take all rubbish with you",
    ],
    disclaimer:
      "All vehicles are parked at the owner's own risk. The organisers, venue, and host partners accept no responsibility for damage, loss, theft, or incidents involving any vehicle or personal property during the event.",
    specialOffer: {
      title: "Special Offer from Regent's Park Bar & Kitchen",
      intro: "To make the morning even better, the cafe is offering all attendees:",
      bullets: [
        "GBP1 coffee with any cake",
        "GBP1 coffee with any breakfast item",
      ],
      footnote:
        "This offer is exclusive to our Cars & Coffee event and available throughout the morning. Please show your ticket to staff.",
    },
    posterImage: "/events/Porsches-supercars-modean-classics-12-july.jpg",
    posterAlt: "Portrait poster artwork for the Regent's Park Cars & Coffee event",
    mediaVideo: {
      src: "/video/PSMC-landscape(1).mp4",
      poster: "/video/PSMC-landscape(1)-Cover.jpg",
    },
    featured: true,
  };
}

function buildSundayDriveEvent(): EventRecord {
  return {
    slug: "sunday-drive-aylesbury",
    series: "Rolling Slow Media presents",
    title: "Sunday Drive - Aylesbury | Breakfast Included | Limited Cars",
    status: "scheduled",
    heroDateLabel: "MAY 17TH",
    dateLabel: "Sunday 17th May 2026",
    startIso: "2026-05-17T09:00:00+01:00",
    endIso: "2026-05-17T12:00:00+01:00",
    time: "7:30 AM",
    locationName: "The Akeman Inn",
    addressLine: "Aylesbury",
    city: "Aylesbury",
    postcode: "",
    summary:
      "A curated Sunday morning drive for enthusiasts. Limited to 20-25 cars. Breakfast included on arrival.",
    description:
      "Join Rolling Slow Media for a small, curated Sunday drive through some of the best local roads, finishing at The Akeman Inn in Aylesbury. This is not a typical car meet. Numbers are limited to keep the group tight, the driving enjoyable, and the experience relaxed.",
    capacity: "20-25 cars",
    ticketInfo: "£15 per car (plus Eventbrite fee)",
    ticketUrl: EVENTBRITE_URL,
    logisticsTitle: "What To Expect",
    logistics: [
      "A pre-planned driving route",
      "Small group of enthusiast cars (20-25 max)",
      "Scenic roads and a relaxed pace",
      "Finish at The Akeman Inn, Aylesbury",
      "Breakfast roll and hot drink included",
    ],
    hosts: ["Rolling Slow Media"],
    about: [
      "This is the first Rolling Slow Media Sunday Drive. Spaces are limited and will not be expanded.",
      "Start location details are revealed after booking. The route is designed as a social drive for enthusiasts, with a relaxed pace and a proper breakfast finish rather than a crowded static meet.",
      "Breakfast on arrival includes a bacon or sausage roll plus tea or coffee.",
    ],
    conductRules: [
      "Enthusiast cars only",
      "Please arrive on time",
      "Respect the route, other drivers, and the public",
      "This is a social drive, not a race",
    ],
    disclaimer:
      "The route is for a relaxed social drive. Drivers are responsible for their own vehicle, conduct, and compliance with road laws throughout the event.",
    posterImage: "/events/coffee-run.jpg",
    posterAlt: "Portrait poster artwork for the Sunday Drive to Aylesbury event",
  };
}

export function getAllEvents(): EventRecord[] {
  return [buildRegentsParkEvent(), buildSundayDriveEvent()];
}

export function getFeaturedEvent(): EventRecord {
  const events = getAllEvents();
  return events.find((event) => event.featured) ?? events[0];
}

export function getEventBySlug(slug: string): EventRecord | undefined {
  return getAllEvents().find((event) => event.slug === slug);
}
