import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Store Coming Soon | JK Appliances Repair',
  description: 'Our online store for appliance parts, maintenance products, and repair tools is coming soon. Join our waitlist to be notified when we launch.',
  keywords: 'appliance parts, appliance maintenance, repair tools, appliance accessories, online store, coming soon, JK Appliances',
  openGraph: {
    title: 'Online Store Coming Soon | JK Appliances Repair',
    description: 'Our online store for appliance parts, maintenance products, and repair tools is coming soon. Join our waitlist to be notified when we launch.',
    url: 'https://jkappliances.ca/store',
    siteName: 'JK Appliances Repair',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jkappliances.ca/images/og-jk-appliances.jpg', // Make sure this image exists
        width: 1200,
        height: 630,
        alt: 'JK Appliances Online Store Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Store Coming Soon | JK Appliances Repair',
    description: 'Our online store for appliance parts, maintenance products, and repair tools is coming soon.',
    images: ['https://jkappliances.ca/images/og-jk-appliances.jpg'], // Make sure this image exists
  },
  robots: {
    index: true,
    follow: true,
  },
}; 