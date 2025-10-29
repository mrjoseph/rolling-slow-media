"use client";

import { useEffect, useState } from "react";

interface ChannelStats {
  subscribers: string;
  views: string;
  videos: string;
  loading: boolean;
  error: string | null;
}

export default function YouTubeStats() {
  const [stats, setStats] = useState<ChannelStats>({
    subscribers: "0",
    views: "0",
    videos: "0",
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchChannelStats = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

        if (!apiKey || !channelId) {
          setStats((prev) => ({
            ...prev,
            error: "API key or channel ID not configured",
            loading: false,
          }));
          return;
        }

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch YouTube data");
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const statistics = data.items[0].statistics;
          setStats({
            subscribers: parseInt(
              statistics.subscriberCount
            ).toLocaleString(),
            views: parseInt(statistics.viewCount).toLocaleString(),
            videos: parseInt(statistics.videoCount).toLocaleString(),
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        console.error("Error fetching YouTube stats:", err);
        setStats((prev) => ({
          ...prev,
          error: "Unable to load YouTube stats",
          loading: false,
        }));
      }
    };

    fetchChannelStats();
  }, []);

  return { stats };
}
