"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const maytagInfo: BrandInfo = {
  id: 'maytag',
  name: 'Maytag',
  logo: '/images/brands/maytag.webp',
  description: 'Maytag is a well-known American brand that offers durable and reliable home appliances. Known for their robust design and longevity, Maytag products include washers, dryers, refrigerators, dishwashers, and ovens, catering to the needs of busy households.',
  history: 'Founded in 1893, Maytag has a long history of manufacturing dependable appliances. The brand became famous for its washing machines and has maintained a reputation for producing appliances that stand the test of time.',
  expertise: 'Our technicians are highly skilled in the repair of Maytag appliances, from their classic models to the latest designs. We use genuine Maytag parts to ensure your appliances continue to deliver reliable performance.'
};

// Maytag Services with Common Issues
const maytagServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Maytag Refrigerator Repair',
    description: 'Reliable repair services for all Maytag refrigerator models, including French door, side-by-side, and top-freezer.',
    commonIssues: [
      'Cooling issues',
      'Ice maker malfunctions',
      'Water dispenser problems',
      'Temperature fluctuations',
      'Unusual noises',
      'Door seal issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Maytag Washer Repair',
    description: 'Comprehensive repair services for Maytag washers, including top-load and front-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Leaking',
      'Error codes',
      'Drainage problems',
      'Excessive vibration'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Maytag Dryer Repair',
    description: 'Dependable repair services for Maytag dryers, covering both gas and electric models.',
    commonIssues: [
      'Not heating',
      'Overheating',
      'Drum not turning',
      'Timer issues',
      'Strange noises',
      'Not starting'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Maytag Dishwasher Repair',
    description: 'Effective repair solutions for all Maytag dishwashers, including built-in and portable models.',
    commonIssues: [
      'Not cleaning dishes well',
      'Not draining',
      'Water leaks',
      'Unusual sounds',
      'Door latch problems',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Maytag Oven Repair',
    description: 'Expert repair services for Maytag ovens, including electric, gas, and convection models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control problems',
      'Self-cleaning issues',
      'Door not sealing',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Maytag Stove Repair',
    description: 'Professional repair services for Maytag cooktops and ranges, including gas and electric models.',
    commonIssues: [
      'Burners not igniting',
      'Inconsistent heating',
      'Surface element malfunctions',
      'Control panel issues',
      'Oven not heating',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Maytag Appliance Repair Experts',
    description: 'Our technicians are specifically trained in Maytag appliance repair, ensuring reliable and expert service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Maytag Replacement Parts',
    description: 'We use only authentic Maytag parts to ensure the best performance and longevity for your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Comprehensive Warranty on Maytag Repairs',
    description: 'All our Maytag repairs are backed by a comprehensive warranty, offering you peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Extensive Knowledge of Maytag’s Dependable Designs',
    description: 'We possess extensive knowledge of Maytag’s robust designs and features, ensuring accurate repairs.',
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
    text: 'The technician was excellent. He quickly fixed our Maytag refrigerator, and it\'s working perfectly.',
    author: 'Linda R.',
    location: 'Etobicoke',
    rating: 5
  },
  {
    id: 2,
    text: 'Our Maytag washer was having issues, but the repair team efficiently resolved them. Very professional.',
    author: 'Robert P.',
    location: 'Mississauga',
    rating: 5
  },
  {
    id: 3,
    text: 'I had a great experience with the Maytag oven repair. The technician was very knowledgeable and did a great job.',
    author: 'Karen S.',
    location: 'Toronto',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How long does a typical Maytag appliance repair take?',
    answer: 'Most Maytag appliance repairs are completed within a single visit, typically taking 1-2 hours. We will provide a clear timeline if your repair needs more time or special parts.'
  },
  {
    question: 'Do you repair both older and newer Maytag appliance models?',
    answer: 'Yes, our technicians are experienced in repairing a wide range of Maytag appliances, from older, classic models to the latest designs.'
  },
  {
    question: 'What warranty do you offer on Maytag appliance repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for all Maytag appliance repairs. If the same problem recurs during this time, we will fix it at no additional cost.'
  },
  {
    question: 'Do you use genuine Maytag parts for repairs?',
    answer: 'Yes, we always use genuine Maytag replacement parts to ensure the best performance and to maintain the integrity of your appliances.'
  },
  {
    question: 'How can I decide between repairing and replacing my Maytag appliance?',
    answer: 'Our technicians will thoroughly assess your appliance and provide an honest recommendation. We consider the appliance’s age, the repair costs, and the availability of parts.'
  }
];

// Related Brands
const relatedBrands = [
  'Whirlpool',
  'GE',
  'Kenmore',
  'Samsung',
  'KitchenAid',
  'Inglis'
];

export default function MaytagBrandPage() {
  return (
    <BrandLayout
      brandInfo={maytagInfo}
      services={maytagServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#990000"
      secondaryColor="#f5f5f5"
    />
  );
}