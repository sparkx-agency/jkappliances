import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Oven Repair Services | Same-Day Service | JK Appliances',
    description: 'Expert oven repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/oven-repair'),
    },
    openGraph: {
      title: 'Professional Oven Repair Services | Same-Day Service | JK Appliances',
      description: 'Expert oven repair for all brands including Samsung, GE, Whirlpool, and more. Same-day service with certified technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/oven-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/oven-repair.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing an oven',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Oven Repair Services | JK Appliances',
      description: 'Expert oven repair with same-day service. We fix heating elements, temperature issues, door problems, and more with guaranteed results.',
      images: ['/images/services/oven-repair.jpg'],
    },
    keywords: 'oven repair, wall oven repair, built-in oven repair, electric oven repair, gas oven repair, oven heating element replacement, oven thermostat repair, oven door repair, oven sensor repair, Toronto oven repair',
  };
  