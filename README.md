# Rolling Slow Media - Car YouTube Channel Website

A modern, responsive single-page website for Rolling Slow Media, a car YouTube channel showcasing automotive culture, reviews, events, and exclusive content.

## Features

- **Hero Banner** - Eye-catching landing section with call-to-action buttons
- **Next Event** - Showcase upcoming events with details and registration
- **About Section** - Information about the channel and key statistics
- **Sponsors** - Dedicated section for sponsors and partnerships
- **Contact Us** - Comprehensive contact form with multiple communication channels
- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Modern UI** - Built with Tailwind CSS for a sleek, professional appearance

## Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "Rolling Slow Media"
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Production Build

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main page component
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── sections/
│   │       ├── Hero.tsx       # Hero banner section
│   │       ├── NextEvent.tsx  # Upcoming events section
│   │       ├── About.tsx      # About section
│   │       ├── Sponsors.tsx   # Sponsors section
│   │       └── ContactUs.tsx  # Contact form section
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Contact Information
Edit `src/components/sections/ContactUs.tsx` to update:
- Email address
- Phone number
- Physical address
- Social media links

### Update Event Details
Edit `src/components/sections/NextEvent.tsx` to change:
- Event title, date, time, and location
- Event description
- Expected attendance

### Modify Sponsors
Edit `src/components/sections/Sponsors.tsx` to:
- Add or remove sponsors
- Update sponsor names and categories
- Modify sponsor links

### Update Statistics
Edit `src/components/sections/About.tsx` to:
- Change subscriber count
- Update view statistics
- Modify channel description

### Add Images
Replace placeholder image containers with actual image assets:
1. Create an `public/` directory in the root
2. Add your images to the `public/` folder
3. Update image references in component files

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically deploy your site

### Other Hosting Options

- Netlify
- AWS Amplify
- Firebase Hosting
- DigitalOcean App Platform

## ESLint

Run linting:
```bash
npm run lint
```

## License

All rights reserved © 2025 Rolling Slow Media

## Support

For questions or inquiries, please contact: contact@rollingsmedia.com
