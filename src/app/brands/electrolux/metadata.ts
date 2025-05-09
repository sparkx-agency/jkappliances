import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
    description: 'Reliable Electrolux appliance repair services in Toronto and the GTA. Our certified technicians provide expert repair for refrigerators, washers, dryers, ovens, and more.',
    keywords: ['Electrolux repair', 'appliance repair', 'Toronto', 'GTA', 'refrigerator repair', 'washer repair', 'dryer repair', 'oven repair', 'dishwasher repair', 'expert service'],
    openGraph: {
      title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
      description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',
      url: 'https://www.jkappliances.ca/brands/electrolux',
      siteName: 'JK Appliances',
      images: [
        {
          url: '/images/brands/electrolux.webp',
          width: 800,
          height: 600,
          alt: 'Electrolux Appliance Repair',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Electrolux Appliance Repair in Toronto & GTA | Expert Service',
      description: 'Get top-quality Electrolux appliance repair services in Toronto and the Greater Toronto Area. Our experienced technicians are ready to fix your Electrolux appliances.',
      images: ['/images/brands/electrolux.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };