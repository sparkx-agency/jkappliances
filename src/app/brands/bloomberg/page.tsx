"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const blombergInfo: BrandInfo = {
  id: 'blomberg',
  name: 'Blomberg',
  logo: '/images/brands/Blomberg.webp',
  description: "Blomberg is a European brand focused on creating eco-friendly and efficient home appliances.",
  history: "With over a century of experience, Blomberg has a strong commitment to sustainability and efficient design.",
  expertise: "Our technicians are well-versed in Blomberg's energy-efficient technology, providing repairs that respect the brand's environmental focus. We use high-quality, eco-conscious parts."
};

// Blomberg Services with Common Issues
const blombergServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Blomberg Refrigerator Repair',
    description: 'Expert repair services for all Blomberg refrigerator models, focusing on maintaining energy efficiency.',
    commonIssues: [
      'Cooling problems',
      'Ice maker issues',
      'Water dispenser issues'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Blomberg Washer Repair',
    description: 'Professional repair services for Blomberg washing machines, ensuring optimal performance.',
    commonIssues: [
      'Not spinning',
      'Leaking water',
      'Error codes'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Blomberg Dryer Repair',
    description: 'Complete repair solutions for Blomberg dryers, maintaining their efficient operation.',
    commonIssues: [
      'Not heating',
      'Noisy operation',
      'Taking too long to dry'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Blomberg Dishwasher Repair',
    description: 'Specialized repair services for Blomberg dishwashers, ensuring thorough cleaning.',
    commonIssues: [
      'Not cleaning',
      'Not draining',
      'Unusual noises'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Blomberg Oven Repair',
    description: 'Expert repair for all Blomberg ovens, focusing on consistent temperature control.',
    commonIssues: [
      'Not heating',
      'Uneven cooking',
      'Control panel issues',
      'Error codes'
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Blomberg Stove Repair',
    description: 'Professional repair services for Blomberg stoves, ensuring efficient heat distribution.',
    commonIssues: [
      'Burners not igniting',
      'Temperature control issues',
      'Surface element not working'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Eco-Friendly Repairs',
    description: 'We prioritize environmentally responsible repair methods for Blomberg appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Efficient Service',
    description: 'We ensure that our repairs are not only effective but also maintain the appliance\'s energy efficiency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use authentic Blomberg replacement parts to ensure the appliance\'s longevity and performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs are backed by warranty, providing you with peace of mind.',
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
    text: "The technician was very knowledgeable about our Blomberg appliance and fixed it while keeping in mind its energy efficiency.",
    author: "Emily W.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Blomberg dishwasher was not cleaning well, and the repair team addressed it promptly. We appreciate the eco-friendly approach.",
    author: "John D.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We've been happy with the service on our Blomberg washer. The team ensured it remained efficient after the repair.",
    author: "Sarah L.",
    location: "Etobicoke",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a Blomberg appliance repair take?",
    answer: "Most Blomberg appliance repairs are completed within a single visit. More complex issues may require additional time."
  },
  {
    question: "Do you repair all Blomberg appliance models?",
    answer: "Yes, our technicians are trained to handle all Blomberg appliance models, including their latest energy-efficient models."
  },
  {
    question: "What kind of warranty do you offer on Blomberg appliance repairs?",
    answer: "We offer a warranty on parts and labor for all Blomberg appliance repairs to ensure your satisfaction."
  },
  {
    question: "Do you use genuine Blomberg replacement parts?",
    answer: "Yes, we only use genuine Blomberg replacement parts to maintain your appliance's efficiency and performance."
  },
  {
    question: "How can I ensure my Blomberg appliances stay energy-efficient?",
    answer: "Regular maintenance, proper usage, and prompt repairs are key to maintaining the energy efficiency of your Blomberg appliances."
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

export default function BlombergBrandPage() {
  return (
    <BrandLayout
      brandInfo={blombergInfo}
      services={blombergServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#0070ba"
      secondaryColor="#f5f5f5"
    />
  );
}