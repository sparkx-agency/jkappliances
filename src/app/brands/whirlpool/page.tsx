"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const whirlpoolInfo: BrandInfo = {
  id: 'whirlpool',
  name: 'Whirlpool',
  logo: '/images/brands/Whirlpool.webp',
  description: 'Whirlpool is a well-known appliance brand recognized for its reliable and innovative home appliances. Offering a wide range of products, including refrigerators, washers, dryers, and ovens, Whirlpool focuses on providing quality and convenience to consumers.',
  history: 'Founded in 1911, Whirlpool has a long history of producing dependable and high-quality appliances. With a commitment to innovation and customer satisfaction, Whirlpool has become a leading brand in the home appliance industry.',
  expertise: 'Our technicians are experienced in servicing Whirlpool appliances and understand their design and functionality. We use quality replacement parts to ensure that your Whirlpool appliance continues to provide reliable performance.'
};

// Whirlpool Services with Common Issues
const whirlpoolServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Whirlpool Refrigerator Repair',
    description: 'Reliable repair services for Whirlpool refrigerators, including top-freezer, bottom-freezer, side-by-side, and French door models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker not working',
      'Water dispenser not working',
      'Temperature fluctuations',
      'Unusual noises',
      'Leaking water',
      'Faulty door seal'
    ],
    image: '/images/services/refrigerator-repair.webp'
  },
  {
    id: 'washer-repair',
    name: 'Whirlpool Washer Repair',
    description: 'Professional repair services for Whirlpool washing machines, including top-load, front-load, and combination models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Not draining',
      'Leaking water',
      'Excessive vibration',
      'Error codes',
      'Strange noises'
    ],
    image: '/images/services/washer-repair.webp'
  },
  {
    id: 'dryer-repair',
    name: 'Whirlpool Dryer Repair',
    description: 'Expert repair services for Whirlpool dryers, including electric and gas models.',
    commonIssues: [
      'Not heating',
      'Not tumbling',
      'Not starting',
      'Excessive noise',
      'Taking too long to dry',
      'Burning smell',
      'Error codes'
    ],
    image: '/images/services/dryer-repair.webp'
  },
  {
    id: 'oven-repair',
    name: 'Whirlpool Oven Repair',
    description: 'Specialized repair services for Whirlpool ovens, including electric, gas, convection, and range models.',
    commonIssues: [
      'Not heating properly',
      'Uneven cooking',
      'Faulty temperature control',
      'Ignition problems (gas ovens)',
      'Self-cleaning issues',
      'Error codes',
      'Door not sealing properly'
    ],
    image: '/images/services/oven-repair.webp'
  },
  {
    id: 'dishwasher-repair',
    name: 'Whirlpool Dishwasher Repair',
    description: 'Complete repair solutions for Whirlpool dishwashers, ensuring efficient cleaning and drying.',
    commonIssues: [
      'Not cleaning dishes properly',
      'Not draining',
      'Leaking water',
      'Unusual noises',
      'Error codes',
      'Dispenser problems',
      'Cloudy glassware'
    ],
    image: '/images/services/dishwasher-repair.webp'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Experienced Technicians',
    description: 'Our technicians have extensive experience repairing Whirlpool appliances and are familiar with their common issues.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use genuine Whirlpool replacement parts to ensure the quality and longevity of our repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Affordable Service',
    description: 'We offer competitive pricing on all Whirlpool appliance repairs, providing excellent value for our customers.',
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
    text: "The technician was very professional and quickly fixed our Whirlpool refrigerator. I appreciate the prompt and efficient service.",
    author: "Laura S.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Whirlpool washing machine stopped working, and the repair team was able to fix it the same day. Great service and affordable price!",
    author: "Michael B.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our appliance repairs, and they always provide excellent service. Highly recommended for Whirlpool appliances.",
    author: "Jennifer K.",
    location: "Oakville",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Whirlpool appliance repair take?",
    answer: "Most Whirlpool appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and resolve."
  },
  {
    question: "Do you offer a warranty on Whirlpool appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Whirlpool appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Whirlpool replacement parts?",
    answer: "Yes, we use genuine Whirlpool replacement parts to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule a Whirlpool appliance repair?",
    answer: "You can easily schedule a Whirlpool appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to accommodate your needs."
  },
  {
    question: "What areas do you serve for Whirlpool appliance repairs?",
    answer: "We provide Whirlpool appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Maytag",
  "KitchenAid",
  "Amana",
  "Roper",
  "Estate"
];

export default function WhirlpoolBrandPage() {
  return (
    <BrandLayout
      brandInfo={whirlpoolInfo}
      services={whirlpoolServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#004395"
      secondaryColor="#f0f0f0"
    />
  );
}
