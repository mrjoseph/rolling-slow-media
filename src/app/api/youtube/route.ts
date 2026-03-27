import { NextResponse } from "next/server";

type VideoEntry = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  fallbackThumbnail: string;
  published: string;
};

const CHANNEL_ID = "UCb_690PpMai--jRRTiNCZWg";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function extractText(source: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = source.match(regex);
  if (!match) return null;
  return match[1].replace("<![CDATA[", "").replace("]]>", "").trim();
}

function extractLink(source: string): string | null {
  const regex = /<link[^>]*href=\"([^\"]+)\"[^>]*>/i;
  const match = source.match(regex);
  return match ? match[1] : null;
}

function parseFeed(xml: string): VideoEntry[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/gi) || [];
  const videos: VideoEntry[] = [];

  for (const entry of entries.slice(0, 6)) {
    const videoId = extractText(entry, "yt:videoId");
    const title = extractText(entry, "title");
    const link = extractLink(entry);
    const published = extractText(entry, "published");

    if (videoId && title && link && published) {
      videos.push({
        id: videoId,
        title,
        link,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        published,
      });
    }
  }

  return videos;
}

export async function GET() {
  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 1800 } });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch videos" }, { status: 502 });
    }

    const xml = await response.text();
    const videos = parseFeed(xml);

    return NextResponse.json({ videos }, { status: 200 });
  } catch (error) {
    console.error("YouTube feed error:", error);
    return NextResponse.json({ error: "Failed to load videos" }, { status: 500 });
  }
}
