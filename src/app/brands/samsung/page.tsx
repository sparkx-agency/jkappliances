"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const samsungInfo: BrandInfo = {
  id: 'samsung',
  name: 'Samsung',
  logo: '/images/brands/samsung.webp',
  description: 'Samsung is a global leader in home appliances, renowned for their innovative features and reliable performance. From state-of-the-art refrigerators to high-efficiency washing machines, Samsung appliances combine cutting-edge technology with elegant design.',
  history: 'Founded in 1938, Samsung has grown from a small trading company to one of the world\'s largest electronics manufacturers. Their appliance division has been at the forefront of smart home technology, continuously pushing the boundaries of what home appliances can do.',
  expertise: 'Our technicians are certified and regularly trained on the latest Samsung appliance models and technologies. We have extensive experience with all Samsung product lines, including their smart home appliances, and we use only genuine Samsung replacement parts to ensure optimal performance and longevity.'
};

// Samsung Services with Common Issues
const samsungServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Samsung Refrigerator Repair',
        description: 'Expert repair services for all Samsung refrigerator models, including French door, side-by-side, bottom freezer, and smart refrigerators.',
    commonIssues: [
      'Cooling problems',
      'Ice maker malfunction',
      'Water dispenser issues',
      'Smart features not working',
      'Display panel errors',
      'Unusual noises',
      'Temperature fluctuations'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Samsung Washer Repair',
        description: 'Professional repair services for all Samsung washing machine models, including front-load, top-load, and combination washer/dryers.',
    commonIssues: [
      'Won\'t start or power issues',
      'Not spinning or draining',
      'Excessive vibration',
      'Error codes',
      'Leaking water',
      'Door lock problems',
      'Smart features not connecting'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Samsung Dryer Repair',
        description: 'Complete repair solutions for all Samsung dryer models, including electric, gas, and heat pump dryers.',
    commonIssues: [
      'Not heating properly',
      'Won\'t start',
      'Noisy operation',
      'Not tumbling',
      'Taking too long to dry',
      'Auto sensor not working',
      'Overheating'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Samsung Dishwasher Repair',
        description: 'Specialized repair services for all Samsung dishwasher models.',
    commonIssues: [
      'Not cleaning properly',
      'Not draining water',
      'Unusual noises during operation',
      'Door not latching correctly',
      'Leaking water',
      'Control panel unresponsive',
      'Error codes displaying'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Samsung Oven Repair',
        description: 'Expert repair for all Samsung oven types including single, double, wall ovens, and ranges.',
    commonIssues: [
      'Not heating to correct temperature',
      'Uneven cooking',
      'Self-cleaning function not working',
      'Door not closing properly',
      'Control panel issues',
      'Error codes',
      'Timer or clock malfunction'
    ],
    image: '/images/services/walloven-repair.png  '
  },
  {
    id: 'stove-repair',
    name: 'Samsung Stove Repair',
        description: 'Professional repair services for all Samsung cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: [
      'Burners not igniting',
      'Temperature control issues',
      'Surface element not working',
      'Induction elements malfunctioning',
      'Control knob problems',
      'Error codes',
      'Smart features not responding'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Certified Samsung Specialists',
    description: 'Our technicians are factory-trained and certified to work on all Samsung appliance models.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Samsung Parts',
    description: 'We use only original Samsung replacement parts to ensure optimal performance and longevity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Warranty Protection',
    description: 'Our repairs maintain your Samsung warranty coverage and come with our own service guarantee.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Smart Appliance Expertise',
    description: 'Specialized knowledge in Samsung\'s smart home technology and connected appliances.',
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
    text: "The technician fixed our Samsung refrigerator quickly and explained what went wrong. They were professional and knowledgeable about Samsung appliances.",
    author: "Jennifer R.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "My Samsung washing machine stopped working during a large load. The team came the same day and had it running within an hour. Great service!",
    author: "Michael T.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We've had our Samsung smart appliances serviced by this company multiple times. They always know exactly how to fix the high-tech issues that other companies struggle with.",
    author: "Sarah K.",
    location: "Etobicoke",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Samsung appliance repair take?",
    answer: "Most Samsung appliance repairs can be completed in a single visit, typically lasting 1-2 hours depending on the issue. For more complex problems or if parts need to be ordered, we'll provide a clear timeline for the complete repair."
  },
  {
    question: "Do you repair Samsung Smart Home appliances?",
    answer: "Yes, our technicians are specially trained to work with Samsung's Smart Home appliances and can address both mechanical issues and connectivity problems with your smart devices."
  },
  {
    question: "What warranty do you offer on Samsung appliance repairs?",
    answer: "All our Samsung appliance repairs come with a 90-day warranty on parts and labor. If you experience the same issue within this period, we'll return and fix it at no additional cost."
  },
  {
    question: "Do you use genuine Samsung replacement parts?",
    answer: "Yes, we exclusively use genuine Samsung replacement parts to ensure optimal performance, reliability, and to maintain your appliance's warranty status."
  },
  {
    question: "How do I know if my Samsung appliance needs repair or replacement?",
    answer: "Our technicians will provide an honest assessment of your appliance's condition. We consider factors like the age of the appliance, the cost of repairs versus replacement, and the availability of parts before making a recommendation."
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

export default function SamsungBrandPage() {
  return (
    <BrandLayout 
      brandInfo={samsungInfo}
      services={samsungServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#1428a0"  // Samsung blue
      secondaryColor="#f5f5f7"
    />
  );
}
