"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const amanaInfo: BrandInfo = {
  id: 'amana',
  name: 'Amana',
  logo: '/images/brands/Amana.webp',
  description: "Amana is a trusted American brand known for its reliable and durable home appliances.",
  history:"With a history spanning over 80 years, Amana has been a staple in American homes, offering simple yet effective appliance solutions.",
  expertise: "Our technicians have extensive experience with Amana appliances, understanding their straightforward designs and functionality. We prioritize efficient and reliable repairs, keeping your appliances running smoothly."
};

// Amana Services with Common Issues
const amanaServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Amana Refrigerator Repair',
    description: 'Expert repair services for all Amana refrigerator models.',
    commonIssues: [
      "cooling problems",
      "ice maker malfunction",
      "unusual noises",
      "door issues"
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Amana Washer Repair',
    description: 'Professional repair services for all Amana washing machine models.',
    commonIssues: [
      "not spinning",
      "leaking water",
      "excessive vibration",
      "error codes"
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Amana Dryer Repair',
    description: 'Complete repair solutions for all Amana dryer models.',
    commonIssues: [
      "not heating",
      "noisy operation",
      "taking too long to dry"
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Amana Dishwasher Repair',
    description: 'Specialized repair services for all Amana dishwasher models.',
    commonIssues: [
      "not cleaning",
      "not draining",
      "unusual noises"
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Amana Oven Repair',
    description: 'Expert repair for all Amana oven types.',
    commonIssues: [
      "not heating",
      "uneven cooking",
      "control panel issues",
      "error codes"
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Amana Stove Repair',
    description: 'Professional repair services for all Amana cooktops and ranges.',
    commonIssues: [
      "burners not igniting",
      "temperature control issues",
      "surface element not working"
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Trusted Amana Service',
    description: 'Our technicians are experienced in handling all types of Amana appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Reliable Repairs',
    description: 'We prioritize efficient and reliable repairs to keep your Amana appliances running smoothly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Durable Parts',
    description: 'We use durable, high-quality parts for all Amana appliance repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Amana warranty coverage and come with our own service guarantee.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician was prompt and fixed our Amana dryer quickly. We appreciate the efficient service.",
    author: "John D.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Amana refrigerator was making strange noises. The repair team identified and fixed the issue right away.",
    author: "Emily S.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We've relied on our Amana appliances for years. This service team helped us keep them running well.",
    author: "David L.",
    location: "Etobicoke",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does an Amana appliance repair take?",
    answer: "Most Amana appliance repairs are completed in a single visit, typically taking 1-2 hours. More complex issues may require additional time."
  },
  {
    question: "Do you repair all Amana appliance models?",
    answer: "Yes, our technicians are experienced in repairing all Amana appliance models, including refrigerators, washers, dryers, dishwashers, ovens, and stoves."
  },
  {
    question: "What kind of warranty do you offer on Amana appliance repairs?",
    answer: "We offer a 90-day warranty on parts and labor for all Amana appliance repairs."
  },
  {
    question: "Do you use genuine Amana replacement parts?",
    answer: "We use high-quality replacement parts that are compatible with Amana appliances to ensure lasting repairs."
  },
  {
    question: "What should I do to maintain my Amana appliances?",
    answer: "Regular cleaning and occasional professional maintenance checks can extend the life of your Amana appliances. We can provide maintenance tips during our service visits."
  }
];

// Related Brands
const relatedBrands = [
  "LG",
  "Whirlpool",
  "GE",
  "Maytag",
  "Bosch",
  "KitchenAid"
];

export default function AmanaBrandPage() {
  return (
    <BrandLayout 
      brandInfo={amanaInfo}
      services={amanaServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#4169E1"
      secondaryColor="#f5f5f7"
    />
  );
}