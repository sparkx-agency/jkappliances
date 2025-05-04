import { generateCanonicalUrl } from "@/utils/canonical";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
    title: 'Professional Dishwasher Repair Services | Same-Day Repair | JK Appliances',
    description: 'Expert dishwasher repair for all brands and models. Our licensed technicians provide same-day service, affordable rates, and guaranteed repairs throughout Toronto and the GTA.',
    alternates: {
      canonical: generateCanonicalUrl('/services/dishwasher-repair'),
    },
    openGraph: {
      title: 'Professional Dishwasher Repair Services | Same-Day Repair | JK Appliances',
      description: 'Expert dishwasher repair for all brands including Bosch, Whirlpool, KitchenAid, and more. Same-day service with licensed technicians and competitive pricing.',
      url: generateCanonicalUrl('/services/dishwasher-repair'),
      siteName: 'JK Appliance Repair',
      images: [
        {
          url: '/images/services/dishwasher-repair.webp',
          width: 1200,
          height: 630,
          alt: 'Professional technician repairing a dishwasher',
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Dishwasher Repair Services | JK Appliances',
      description: 'Expert dishwasher repair with same-day service. We fix leaks, drainage issues, cleaning problems, and more with guaranteed results.',
      images: ['/images/services/dishwasher-repair.webp'],
    },
    keywords: 'dishwasher repair, dishwasher not draining, dishwasher leaking, dishwasher not cleaning, appliance repair, Bosch dishwasher repair, Whirlpool dishwasher repair, KitchenAid repair, same-day repair, Toronto dishwasher repair',
  }; 