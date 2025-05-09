"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const boschInfo: BrandInfo = {
  id: 'bosch',
  name: 'Bosch',
  logo: '/images/brands/bosch.webp',
  description: "Bosch is a German engineering giant, offering appliances renowned for their quality, reliability, and innovative features.",
  history: "Founded in 1886, Bosch has a long history of developing advanced technologies and high-quality appliances.",
  expertise: "Our technicians are experts in Bosch's complex engineering and innovative technologies. We offer comprehensive repairs using only genuine Bosch parts."
};

// Bosch Services with Common Issues
const boschServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Bosch Refrigerator Repair',
    description: 'Expert repair services for all Bosch refrigerator models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker malfunction',
      'Temperature fluctuations'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Bosch Washer Repair',
    description: 'Professional repair services for all Bosch washing machine models.',
    commonIssues: [
      'Not spinning',
      'Leaking water',
      'Error codes'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Bosch Dryer Repair',
    description: 'Complete repair solutions for all Bosch dryer models.',
    commonIssues: [
      'Not heating',
      'Noisy operation',
      'Taking too long to dry'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Bosch Dishwasher Repair',
    description: 'Specialized repair services for all Bosch dishwasher models.',
    commonIssues: [
      'Not cleaning',
      'Not draining',
      'Unusual noises'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Bosch Oven Repair',
    description: 'Expert repair for all Bosch oven types.',
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
    name: 'Bosch Stove Repair',
    description: 'Professional repair services for all Bosch cooktops and ranges.',
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
    title: 'Bosch Certified Service',
    description: 'Our technicians are certified and trained to work on all Bosch appliance models.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expert Diagnostics',
    description: 'We use advanced tools to quickly and accurately diagnose issues with your Bosch appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3zM17 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H10z" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use only original Bosch replacement parts to ensure optimal performance and longevity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Bosch warranty coverage and come with our own service guarantee.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The technician was incredibly knowledgeable about our Bosch refrigerator and fixed it promptly.",
    author: "Emily L.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Bosch dishwasher wasn't working well, and the team fixed it perfectly. We appreciate the high level of expertise.",
    author: "David S.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We've been using Bosch appliances for years, and this service team helped us maintain their peak performance.",
    author: "Jessica K.",
    location: "Etobicoke",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a Bosch appliance repair take?",
    answer: "Most Bosch appliance repairs can be completed in a single visit, typically lasting 1-2 hours depending on the issue. For more complex problems or if parts need to be ordered, we'll provide a clear timeline for the complete repair."
  },
  {
    question: "Do you repair all Bosch appliance models?",
    answer: "Yes, our technicians are trained to work with all Bosch appliance models, including the latest smart home appliances."
  },
  {
    question: "What kind of warranty do you offer on Bosch appliance repairs?",
    answer: "All our Bosch appliance repairs come with a 90-day warranty on parts and labor. If you experience the same issue within this period, we'll return and fix it at no additional cost."
  },
  {
    question: "Do you use genuine Bosch replacement parts?",
    answer: "Yes, we exclusively use genuine Bosch replacement parts to ensure optimal performance, reliability, and to maintain your appliance's warranty status."
  },
  {
    question: "How do I ensure my Bosch appliances receive the best care?",
    answer: "Regular maintenance is key. Our technicians can provide tips on how to keep your Bosch appliances in top condition and schedule preventive maintenance visits."
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

export default function BoschBrandPage() {
  return (
    <BrandLayout
      brandInfo={boschInfo}
      services={boschServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#0077cc"
      secondaryColor="#f5f5f5"
    />
  );
}