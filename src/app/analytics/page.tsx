import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Rolling Slow Media',
  description: 'Internal analytics dashboard for Rolling Slow Media',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
          Analytics Dashboard
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Quick Setup Guide</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white">1. Create Google Analytics Account</h3>
                <p>Go to <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">analytics.google.com</a> and create a GA4 property</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">2. Get Your Measurement ID</h3>
                <p>Find your Measurement ID (starts with G-) in your GA4 property settings</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">3. Add Environment Variable</h3>
                <p>Add to your .env.local file:</p>
                <code className="block bg-slate-700 p-2 rounded mt-2">
                  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
                </code>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">4. Deploy and Test</h3>
                <p>Deploy your site and check Google Analytics for real-time data</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What We Track</h2>
            <div className="space-y-3 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white">Sponsor Clicks</h3>
                <p>Track which sponsors get the most engagement</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">Social Media Clicks</h3>
                <p>Monitor clicks to YouTube, Instagram, TikTok, etc.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">CTA Performance</h3>
                <p>Track Subscribe, Next Event, and Contact button clicks</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white">Page Views</h3>
                <p>Standard website analytics and user behavior</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Analytics Events</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-2">sponsor_click</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• sponsor_name</li>
                <li>• sponsor_url</li>
                <li>• event_category</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">social_media_click</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• platform</li>
                <li>• url</li>
                <li>• event_category</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">cta_click</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• button_name</li>
                <li>• url</li>
                <li>• event_category</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors inline-block"
          >
            Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}