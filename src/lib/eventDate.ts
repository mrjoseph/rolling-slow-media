const LONDON_TIME_ZONE = "Europe/London";

type DateParts = {
  year: number;
  monthIndex: number;
  day: number;
};

export type EventDateInfo = {
  year: number;
  monthIndex: number;
  day: number;
  displayHero: string;
  displayLong: string;
  startIso: string;
  endIso: string;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekdayShortToIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getLondonDateParts(date: Date): DateParts {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return { year, monthIndex: month - 1, day };
}

function getWeekdayIndexLondon(year: number, monthIndex: number, day: number): number {
  const sample = new Date(Date.UTC(year, monthIndex, day, 12, 0, 0));
  const weekday = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TIME_ZONE,
    weekday: "short",
  }).format(sample);

  return weekdayShortToIndex[weekday] ?? 0;
}

function compareDateParts(a: DateParts, b: DateParts): number {
  if (a.year !== b.year) return a.year < b.year ? -1 : 1;
  if (a.monthIndex !== b.monthIndex) return a.monthIndex < b.monthIndex ? -1 : 1;
  if (a.day !== b.day) return a.day < b.day ? -1 : 1;
  return 0;
}

function getSecondSunday(year: number, monthIndex: number): DateParts {
  const firstWeekday = getWeekdayIndexLondon(year, monthIndex, 1);
  const daysUntilFirstSunday = firstWeekday === 0 ? 0 : 7 - firstWeekday;
  const day = 1 + daysUntilFirstSunday + 7;

  return { year, monthIndex, day };
}

function getOrdinalSuffix(day: number, upperCase: boolean): string {
  if (day > 3 && day < 21) return upperCase ? "TH" : "th";
  switch (day % 10) {
    case 1:
      return upperCase ? "ST" : "st";
    case 2:
      return upperCase ? "ND" : "nd";
    case 3:
      return upperCase ? "RD" : "rd";
    default:
      return upperCase ? "TH" : "th";
  }
}

function formatHeroDate(parts: DateParts): string {
  const month = monthNames[parts.monthIndex].toUpperCase();
  const ordinal = getOrdinalSuffix(parts.day, true);

  return `${month} ${parts.day}${ordinal}`;
}

function formatLongDate(parts: DateParts): string {
  const weekdayIndex = getWeekdayIndexLondon(parts.year, parts.monthIndex, parts.day);
  const weekday = weekdayNames[weekdayIndex];
  const month = monthNames[parts.monthIndex];
  const ordinal = getOrdinalSuffix(parts.day, false);

  return `${weekday} ${parts.day}${ordinal} ${month} ${parts.year}`;
}

function getLondonOffsetString(parts: DateParts): string {
  const sample = new Date(Date.UTC(parts.year, parts.monthIndex, parts.day, 12, 0, 0));
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TIME_ZONE,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
  });

  const tzName = formatter.formatToParts(sample).find((part) => part.type === "timeZoneName")?.value;
  if (!tzName) return "+00:00";

  if (tzName === "GMT" || tzName === "UTC") return "+00:00";

  const match = tzName.match(/GMT([+-]\d{1,2})(?::(\d{2}))?/);
  if (!match) return "+00:00";

  const hours = String(Math.abs(Number(match[1]))).padStart(2, "0");
  const minutes = match[2] ?? "00";
  const sign = match[1].startsWith("-") ? "-" : "+";

  return `${sign}${hours}:${minutes}`;
}

function formatIsoDate(parts: DateParts, time: string): string {
  const year = String(parts.year).padStart(4, "0");
  const month = String(parts.monthIndex + 1).padStart(2, "0");
  const day = String(parts.day).padStart(2, "0");
  const offset = getLondonOffsetString(parts);

  return `${year}-${month}-${day}T${time}${offset}`;
}

export function getNextEventDateInfo(now: Date = new Date()): EventDateInfo {
  const today = getLondonDateParts(now);
  let eventDate = getSecondSunday(today.year, today.monthIndex);

  if (compareDateParts(eventDate, today) < 0) {
    const nextMonthIndex = today.monthIndex === 11 ? 0 : today.monthIndex + 1;
    const nextYear = today.monthIndex === 11 ? today.year + 1 : today.year;
    eventDate = getSecondSunday(nextYear, nextMonthIndex);
  }

  return {
    year: eventDate.year,
    monthIndex: eventDate.monthIndex,
    day: eventDate.day,
    displayHero: formatHeroDate(eventDate),
    displayLong: formatLongDate(eventDate),
    startIso: formatIsoDate(eventDate, "08:00:00"),
    endIso: formatIsoDate(eventDate, "12:00:00"),
  };
}
