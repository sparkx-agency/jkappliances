import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Freezer Repair Services | Same-Day Service | JK Appliances',
    description: 'Expert freezer repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/freezer-repair'),
    },
    openGraph: {
      title: 'Professional Freezer Repair Services | Same-Day Service | JK Appliances',
      description: 'Expert freezer repair for all brands including Samsung, GE, Whirlpool, and more. Same-day service with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/freezer-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/freezer-repair.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a freezer',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Freezer Repair Services | JK Appliances',
      description: 'Expert freezer repair with same-day service. We fix cooling issues, ice buildup, temperature problems, and more with guaranteed results.',
      images: ['/images/services/freezer-repair.webp'],
    },
    keywords: 'freezer repair, chest freezer repair, upright freezer repair, freezer not freezing, freezer temperature problem, freezer ice buildup, freezer defrost problem, freezer compressor repair, Toronto freezer repair, GTA freezer repair',
  }; 