"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const jennAirInfo: BrandInfo = {
  id: 'jennair',
  name: 'JennAir',
  logo: '/images/brands/Jennair.webp',
  description: 'JennAir is a luxury appliance brand known for its high-performance, innovative, and stylish kitchen appliances. Offering a range of premium products including ovens, cooktops, refrigerators, and dishwashers, JennAir appliances are designed for those who demand both excellence and aesthetic appeal in their kitchen.',
  history: 'Since its founding in 1947, JennAir has been a leader in the high-end appliance market. The brand was the first to introduce the downdraft cooktop and has consistently set new standards in culinary appliance innovation and design.',
  expertise: 'Our technicians are experts in the repair of JennAir appliances, equipped with the knowledge and tools to service their advanced technology and sophisticated designs. We use only genuine JennAir parts to ensure your appliances maintain their exceptional performance and elegance.'
};

// JennAir Services with Common Issues
const jennAirServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'JennAir Refrigerator Repair',
    description: 'Specialized repair services for JennAir refrigerators, including French door, built-in, and side-by-side models.',
    commonIssues: [
      'Cooling issues',
      'Ice maker problems',
      'Water dispenser malfunctions',
      'Temperature inconsistencies',
      'Unusual noises',
      'Door seal problems'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'JennAir Dishwasher Repair',
    description: 'Expert repair services for all JennAir dishwashers, including built-in and panel-ready models.',
    commonIssues: [
      'Not cleaning dishes well',
      'Not draining',
      'Water leaks',
      'Strange noises',
      'Door latch problems',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'JennAir Oven Repair',
    description: 'Comprehensive repair services for JennAir ovens, including convection, steam, and wall models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control issues',
      'Self-cleaning not working',
      'Door not sealing correctly',
      'Error codes',
      'Not turning on'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'JennAir Stove Repair',
    description: 'Professional repair services for JennAir cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature regulation problems',
      'Surface element issues',
      'Induction problems',
      'Control panel malfunctions',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified JennAir Appliance Technicians',
    description: 'Our technicians are specially trained and certified to repair JennAir appliances, ensuring top-tier service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Authentic JennAir Replacement Parts',
    description: 'We use only genuine JennAir parts to maintain the integrity and optimal performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty on All JennAir Repairs',
    description: 'All our JennAir appliance repairs are backed by a comprehensive warranty, providing you with peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Advanced Knowledge of JennAir Technology',
    description: 'We have in-depth knowledge of JennAir’s advanced features and design elements, ensuring precise repairs.',
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
    text: 'The technician who repaired our JennAir refrigerator was incredibly knowledgeable. The service was prompt and efficient.',
    author: 'Michelle D.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'Our JennAir dishwasher was not cleaning properly, but the repair team fixed it quickly. We were very impressed with the service.',
    author: 'Robert H.',
    location: 'North York',
    rating: 5
  },
  {
    id: 3,
    text: 'I was thrilled with the repair service on my JennAir oven. The technician was professional and thorough.',
    author: 'Susan T.',
    location: 'Vaughan',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How soon can you repair my JennAir appliance?',
    answer: 'Most JennAir appliance repairs are completed within a single visit, typically in 1-2 hours. We will provide a detailed timeline for more complex repairs or if parts need to be ordered.'
  },
  {
    question: 'Do you repair JennAir’s high-end appliances?',
    answer: 'Yes, our technicians are specially trained to handle JennAir’s high-end appliances, addressing both their sophisticated features and standard mechanical issues.'
  },
  {
    question: 'What warranty do you offer on JennAir appliance repairs?',
    answer: 'We offer a 90-day warranty on parts and labor for all JennAir appliance repairs. If you experience the same problem within this period, we will fix it at no additional cost.'
  },
  {
    question: 'Do you use genuine JennAir parts for repairs?',
    answer: 'Yes, we always use genuine JennAir replacement parts to ensure optimal performance and to maintain the high quality of your appliances.'
  },
  {
    question: 'How do I know whether to repair or replace my JennAir appliance?',
    answer: 'Our technicians will assess your appliance and give you an honest recommendation. We consider factors such as the appliance’s age, the cost of repair, and the availability of parts.'
  }
];

// Related Brands
const relatedBrands = [
  'KitchenAid',
  'Thermador',
  'Miele',
  'Wolf',
  'Sub-Zero',
  'Viking'
];

export default function JennAirBrandPage() {
  return (
    <BrandLayout
      brandInfo={jennAirInfo}
      services={jennAirServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#000000"
      secondaryColor="#f5f5f5"
    />
  );
}