"use client";

import { useEffect, useState } from "react";

interface Video {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  fallbackThumbnail: string;
  published: string;
}

export default function YouTubeVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube");

        if (!response.ok) throw new Error("Failed to fetch videos");

        const data = await response.json();
        setVideos(
          (data.videos || []).map((video: Video) => ({
            ...video,
            published: new Date(video.published || "").toLocaleDateString(),
          }))
        );
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading latest videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
        >
          <div className="relative bg-slate-700 aspect-video overflow-hidden rounded-lg">
            <img
              src={video.thumbnail}
              alt={video.title}
              onError={(event) => {
                const target = event.currentTarget;
                if (target.src !== video.fallbackThumbnail) {
                  target.src = video.fallbackThumbnail;
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white ml-1">▶</span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">
              {video.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{video.published}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
