import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Expert Dryer Repair Services | Same-Day Repairs | JK Appliances',
    description: 'Professional dryer repair for all brands and models. Our certified technicians provide same-day service, affordable pricing, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/dryer-repair'),
    },
    openGraph: {
      title: 'Expert Dryer Repair Services | Same-Day Repairs | JK Appliances',
      description: 'Professional dryer repair for all brands including Samsung, LG, Whirlpool, and more. Same-day service with certified technicians and affordable pricing.',
      url: generateCanonicalUrl('/services/dryer-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/dryer-repair.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a dryer',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Dryer Repair Services | JK Appliances',
      description: 'Professional dryer repair with same-day service. We fix cooling issues, water leaks, ice makers, and more with guaranteed results.',
      images: ['/images/services/dryer-repair.webp'],
    },
    keywords: 'dryer repair, dryer repair near me, dryer repair services, dryer repair cost, dryer repair parts, dryer repair troubleshooting, dryer repair warranty, dryer repair technician, dryer repair near me, dryer repair services, dryer repair cost, dryer repair parts, dryer repair troubleshooting, dryer repair warranty, dryer repair technician, dryer repair near me',
  };
  