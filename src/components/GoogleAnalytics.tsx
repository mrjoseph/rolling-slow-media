"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics tracking function
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Specific function for tracking sponsor clicks
export const trackSponsorClick = (sponsorName: string, linkUrl: string) => {
  trackEvent('sponsor_click', {
    sponsor_name: sponsorName,
    sponsor_url: linkUrl,
    event_category: 'engagement',
    event_label: sponsorName,
  });
};

// Google Analytics component
export default function GoogleAnalytics() {
  useEffect(() => {
    // Only load in production or when GA_MEASUREMENT_ID is available
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    
    if (!measurementId) {
      console.log('Google Analytics ID not found - make sure NEXT_PUBLIC_GA_MEASUREMENT_ID is set in environment variables');
      return;
    }

    console.log('Loading Google Analytics with ID:', measurementId);

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: 'Rolling Slow Media',
      page_location: window.location.href,
    });

    console.log('Google Analytics initialized successfully');

  }, []);

  return null;
}