"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const inglisInfo: BrandInfo = {
  id: 'inglis',
  name: 'Inglis',
  logo: '/images/brands/Inglis.webp',
  description: 'Inglis is a trusted Canadian brand that offers reliable and practical home appliances. Known for their durability and straightforward designs, Inglis appliances provide essential features for everyday household needs, including washers, dryers, refrigerators, and stoves.',
  history: 'Established in Canada in 1859, Inglis began as a manufacturer of farm equipment and transitioned to producing home appliances in the 20th century. Inglis has a longstanding reputation for providing dependable appliances that meet the needs of Canadian families.',
  expertise: 'Our technicians are experienced in servicing Inglis appliances, focusing on both older models and newer designs. We use genuine Inglis parts to ensure the continued reliability and performance of your appliances.'
};

// Inglis Services with Common Issues
const inglisServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Inglis Refrigerator Repair',
    description: 'Reliable repair services for Inglis refrigerators, including top-freezer and side-by-side models.',
    commonIssues: [
      'Cooling issues',
      'Ice maker not working',
      'Water dispenser malfunctions',
      'Temperature control problems',
      'Unusual noises',
      'Door seal problems'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Inglis Washer Repair',
    description: 'Comprehensive repair services for Inglis washers, covering top-load and front-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Leaking',
      'Error codes',
      'Drainage issues',
      'Excessive vibration'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Inglis Dryer Repair',
    description: 'Dependable repair solutions for Inglis dryers, including gas and electric models.',
    commonIssues: [
      'Not heating',
      'Overheating',
      'Drum not tumbling',
      'Timer issues',
      'Strange noises',
      'Not starting'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Inglis Stove Repair',
    description: 'Professional repair services for Inglis stoves, including electric and gas models.',
    commonIssues: [
      'Burners not lighting',
      'Temperature control issues',
      'Surface element malfunctions',
      'Control panel problems',
      'Oven not heating',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Inglis Appliance Repair Experts',
    description: 'Our team is highly skilled in the repair of Inglis appliances, ensuring reliable and professional service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Inglis Replacement Parts',
    description: 'We use only authentic Inglis parts to maintain the integrity and performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty on All Inglis Repairs',
    description: 'All our Inglis repairs come with a warranty, providing you with peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Extensive Experience with Inglis Models',
    description: 'We have extensive experience repairing both new and older Inglis models, understanding their unique designs and features.',
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
    text: 'The technician did an excellent job repairing our Inglis refrigerator. The service was efficient and professional.',
    author: 'Carolyn M.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'Our Inglis washer was not spinning, but the repair team fixed it quickly. Great service!',
    author: 'John P.',
    location: 'Mississauga',
    rating: 5
  },
  {
    id: 3,
    text: 'I was very happy with the repair service on my Inglis stove. The technician was knowledgeable and prompt.',
    author: 'Susan L.',
    location: 'North York',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How quickly can you repair my Inglis appliance?',
    answer: 'Most Inglis appliance repairs are completed within a single visit, usually in 1-2 hours. We will provide a detailed timeline if your repair requires more time or special parts.'
  },
  {
    question: 'Do you repair older Inglis appliance models?',
    answer: 'Yes, our technicians have experience repairing both older and newer Inglis models, addressing a wide range of issues.'
  },
  {
    question: 'What kind of warranty do you offer on Inglis appliance repairs?',
    answer: 'We offer a 90-day warranty on parts and labor for Inglis appliance repairs. If the same problem occurs within this period, we’ll fix it at no additional charge.'
  },
  {
    question: 'Do you use genuine Inglis replacement parts?',
    answer: 'Yes, we exclusively use genuine Inglis parts to maintain the optimal performance and reliability of your appliances.'
  },
  {
    question: 'How do I decide whether to repair or replace my Inglis appliance?',
    answer: 'Our technicians will provide an honest assessment of your appliance’s condition. We consider the appliance’s age, repair costs, and parts availability before making a recommendation.'
  }
];

// Related Brands
const relatedBrands = [
  'Whirlpool',
  'Maytag',
  'Kenmore',
  'GE',
  'Frigidaire',
  'Samsung'
];

export default function InglisBrandPage() {
  return (
    <BrandLayout
      brandInfo={inglisInfo}
      services={inglisServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#003366" // Example color, adjust as needed
      secondaryColor="#f0f0f0" // Example color, adjust as needed
    />
  );
}