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
    posterImage: "/events/august-06-flyer2.jpg",
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
    slug: "akeman-inn-breakfast-drive-2026",
    series: "Rolling Slow Drivers Club presents",
    title: "Rolling Slow Drivers Club Breakfast Drive",
    status: "scheduled",
    heroDateLabel: "AUGUST 23RD",
    dateLabel: "Sunday 23rd August 2026",
    startIso: "2026-08-23T07:00:00+01:00",
    endIso: "2026-08-23T12:00:00+01:00",
    time: "Meet 7:00 AM | Depart 7:30 AM sharp",
    locationName: "The Akeman Inn",
    addressLine: "Aylesbury",
    city: "Aylesbury",
    postcode: "",
    summary:
      "A Sunday morning scenic drive through Hertfordshire, Bedfordshire and Buckinghamshire, finishing with breakfast at The Akeman Inn.",
    description:
      "After a fantastic first drive, Rolling Slow Drivers Club is heading back out for another relaxed Sunday morning run. Enjoy a carefully planned route across some of the best roads in Hertfordshire, Bedfordshire and Buckinghamshire before breakfast at The Akeman Inn in Aylesbury.",
    capacity: "Strictly limited to 30 cars",
    ticketInfo: "£20 per car (plus Eventbrite booking fee)",
    ticketUrl: EVENTBRITE_URL,
    logisticsTitle: "What To Expect",
    logistics: [
      "A carefully planned scenic driving route",
      "Around two hours of enjoyable A roads and country lanes",
      "A small group of enthusiast cars",
      "Finish at The Akeman Inn, Aylesbury",
      "Breakfast and a hot drink at The Akeman Inn",
      "A Rolling Slow Drivers Club welcome pack",
    ],
    hosts: ["Rolling Slow Drivers Club"],
    about: [
      "This is not a typical car meet. It is about getting out and enjoying your car on great roads with a relaxed group of like-minded enthusiasts.",
      "Whether you come on your own or with friends, you will be joining a welcoming community that enjoys great roads, great cars and good company. Spaces are limited to keep the group enjoyable for everyone.",
    ],
    conductRules: [
      "Enthusiast cars only",
      "Arrive with a full tank of fuel and be ready to leave at 7:30 AM sharp",
      "This is a social drive, not a race — drive responsibly and respect speed limits, local residents and other road users",
      "There is no convoy requirement or obligation to follow the car in front",
      "If you become separated from the group, continue using the route provided",
    ],
    disclaimer:
      "Each driver is responsible for their own vehicle and driving at all times.",
    posterImage: "/events/akeman-inn-breakfast-drive-23rd-august.jpg",
    posterAlt: "Flyer for the Rolling Slow Drivers Club Breakfast Drive at The Akeman Inn on 23rd August 2026",
  };
}

function isEventUpcoming(event: EventRecord, now: Date = new Date()): boolean {
  if (!event.endIso) return true;

  return new Date(event.endIso).getTime() > now.getTime();
}

export function getAllEvents(now: Date = new Date()): EventRecord[] {
  return [buildRegentsParkEvent(), buildSundayDriveEvent()].filter((event) =>
    isEventUpcoming(event, now),
  );
}

export function getFeaturedEvent(): EventRecord {
  const events = getAllEvents();
  return events.find((event) => event.featured) ?? events[0];
}

export function getEventBySlug(slug: string): EventRecord | undefined {
  return getAllEvents().find((event) => event.slug === slug);
}
