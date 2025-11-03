# Rolling Slow Media - AI Coding Instructions

## Project Overview
This is a Next.js 15 single-page website for Rolling Slow Media, a car YouTube channel. The site showcases automotive content, events, and provides contact functionality with social media integration.

## Architecture & Tech Stack
- **Framework**: Next.js 15.5.6 with TypeScript and App Router
- **Styling**: Tailwind CSS 3.4+ with custom fonts
- **Email**: Resend API for contact form submissions
- **Deployment**: Designed for Vercel (standard Next.js deployment)

## Key Patterns & Conventions

### Component Structure
- **Single-page layout**: All sections are components imported into `src/app/page.tsx`
- **Section-based organization**: Components in `src/components/sections/` (Hero, NextEvent, About, Sponsors, ContactUs)
- **Client-side components**: Most components use `"use client"` directive for interactivity
- **Responsive design**: Mobile-first approach with Tailwind breakpoints (`md:`, `lg:`, etc.)

### Styling Conventions
- **Custom fonts**: Ostrich Sans family loaded via `@font-face` in `globals.css`
  - Use `style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}` for headings
  - Brand color: `#e35e9f` (pink accent used throughout)
- **Background patterns**: Sections use gradient overlays (`bg-slate-900/75`) over background images
- **Video backgrounds**: Responsive video backgrounds (desktop: `background-video.mp4`, mobile: `background-portrait.mp4`)

### Data Integration
- **YouTube API**: Custom hook `useYouTubeStats.ts` fetches channel statistics
  - Requires `NEXT_PUBLIC_YOUTUBE_API_KEY` and `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID` env vars
- **YouTube RSS**: `YouTubeVideos.tsx` uses CORS proxy (`api.allorigins.win`) to fetch video feeds
- **Contact form**: Posts to `/api/contact/route.ts` which uses Resend API

### Asset Management
- **Static assets**: All in `/public/` directory
  - Icons: `/public/icons/` (SVG social media icons)
  - Images: `/public/images/` (backgrounds, logos, favicons)
  - Fonts: `/public/fonts/` (Ostrich Sans variants)
  - Videos: `/public/video/` (background videos)
- **Brand assets**: Multiple sponsor logos in `/public/logos/`

### Environment Variables
Required for full functionality:
```
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCb_690PpMai--jRRTiNCZWg
```

### Contact Form Pattern
- Form state managed with `useState` (formData, isLoading, error, submitted)
- Posts to API route with proper error handling and loading states
- Success message auto-dismisses after 5 seconds
- Email sent via Resend to `rollinslowsocial@gmail.com`

### Development Workflow
- Standard Next.js commands: `npm run dev`, `npm run build`, `npm start`
- No custom build tools or complex configuration
- ESLint configured with Next.js defaults (`npm run lint`)

## Common Modifications
- **Update events**: Edit `NextEvent.tsx` for new event details and registration links
- **Social links**: Update URLs in `Hero.tsx` social media icon grid
- **Contact info**: Modify email/phone in `ContactUs.tsx`
- **YouTube integration**: Update channel ID in `useYouTubeStats.ts` and `YouTubeVideos.tsx`
- **Sponsor management**: Add/remove logos and links in `Sponsors.tsx`

## Critical Notes
- All external links use `target="_blank" rel="noopener noreferrer"`
- Responsive videos require both landscape and portrait versions
- Font loading is critical for brand consistency - always use Ostrich Sans for headings
- Contact form requires proper Resend API configuration for production use