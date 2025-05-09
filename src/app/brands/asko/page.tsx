"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const askoInfo: BrandInfo = {
  id: 'asko',
  name: 'Asko',
  logo: '/images/brands/asko.webp',
  description: "Asko is a Scandinavian brand renowned for its high-quality, environmentally-friendly appliances.",
  history:"With a history rooted in Swedish craftsmanship, Asko appliances are designed for durability and functionality.",
  expertise: "Our technicians are highly trained in Asko's unique design and engineering, ensuring your appliance is handled with expertise. We use the best quality parts for all our repairs."
};

// Asko Services with Common Issues
const askoServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Asko Refrigerator Repair',
    description: 'Expert repair services for Asko refrigerators.',
    commonIssues: [
      'cooling problems',
      'ice maker issues',
      'temperature fluctuations',
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Asko Washer Repair',
    description: 'Professional repair services for Asko washing machines.',
    commonIssues: [
      'not spinning',
      'leaking water',
      'error codes',
      'excessive vibration'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Asko Dryer Repair',
    description: 'Complete repair solutions for Asko dryers.',
    commonIssues: [
      'not heating',
      'noisy operation',
      'taking too long to dry',
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Asko Dishwasher Repair',
    description: 'Specialized repair services for Asko dishwashers.',
    commonIssues: [
      'not cleaning',
      'not draining',
      'unusual noises',
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Asko Oven Repair',
    description: 'Expert repair for Asko ovens.',
    commonIssues: [
      'not heating',
      'uneven cooking',
      'control panel issues',
      'error codes',
    ],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'Asko Stove Repair',
    description: 'Professional repair services for Asko stoves.',
    commonIssues: [
      'burners not igniting',
      'temperature control issues',
      'surface element not working',
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Asko-Certified Technicians',
    description: 'Our technicians are certified and trained to handle Asko appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Sustainable Repairs',
    description: 'We are committed to environmentally-friendly repair practices.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use only genuine Asko replacement parts.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Asko warranty coverage and come with our own service guarantee.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician was very knowledgeable about our Asko dishwasher. He fixed it and gave us tips to prevent future issues.",
    author: "Emily S.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Asko washer had a complex problem, but the repair team was able to solve it. We were very impressed.",
    author: "David L.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We trust our Asko appliances to this service team. They are always reliable and skilled.",
    author: "Jessica R.",
    location: "North York",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does an Asko appliance repair take?",
    answer: "Most Asko appliance repairs can be completed within a few hours. We strive for efficiency and quality in every repair."
  },
  {
    question: "Do you repair all Asko appliance models?",
    answer: "Yes, our technicians are trained to repair all models of Asko appliances, both old and new."
  },
  {
    question: "What kind of warranty do you offer on Asko appliance repairs?",
    answer: "We provide a comprehensive warranty on both parts and labor for all Asko appliance repairs."
  },
  {
    question: "Do you use genuine Asko replacement parts?",
    answer: "Absolutely. We only use genuine Asko replacement parts to ensure the integrity and performance of your appliance."
  },
  {
    question: "How can I improve the energy efficiency of my Asko appliances?",
    answer: "We can provide advice on energy-saving practices, and our technicians can also check if any settings need adjustment to optimize efficiency."
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

export default function AskoBrandPage() {
  return (
    <BrandLayout 
      brandInfo={askoInfo}
      services={askoServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#0079c1"
      secondaryColor="#f0f0f0"
    />
  );
}