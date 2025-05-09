"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const frigidaireInfo: BrandInfo = {
  id: 'frigidaire',
  name: 'Frigidaire',
  logo: '/images/brands/Frigidaire.webp',
  description: 'Frigidaire is a well-established American brand, offering a wide range of dependable and efficient home appliances. Known for their practical design and affordability, Frigidaire appliances include refrigerators, washers, dryers, dishwashers, and ovens. They provide great value for everyday home needs.',
  history: 'Established in 1918, Frigidaire has played a pivotal role in shaping the home appliance industry. As one of the first manufacturers to produce self-contained refrigerators, Frigidaire has a legacy of developing innovative solutions for the modern home.',
  expertise: 'Our team is skilled in the repair of Frigidaire appliances, with a focus on both new and older models. We use authentic Frigidaire parts to maintain the reliability and efficiency of your appliances.'
};

// Frigidaire Services with Common Issues
const frigidaireServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Frigidaire Refrigerator Repair',
    description: 'Reliable repair services for all Frigidaire refrigerators, including top-freezer, bottom-freezer, and side-by-side models.',
    commonIssues: [
      'Cooling problems',
      'Ice maker issues',
      'Water dispenser not working',
      'Temperature inconsistencies',
      'Noise',
      'Door seal problems'
    ],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'Frigidaire Washer Repair',
    description: 'Comprehensive repair services for Frigidaire washers, including top-load and front-load models.',
    commonIssues: [
      'Not starting',
      'Not spinning properly',
      'Leaking',
      'Error codes',
      'Drainage problems',
      'Excessive shaking'
    ],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'Frigidaire Dryer Repair',
    description: 'Dependable repair solutions for Frigidaire dryers, covering gas and electric models.',
    commonIssues: [
      'Not heating up',
      'Overheating',
      'Drum not spinning',
      'Timer malfunctions',
      'Unusual noises',
      'Not starting'
    ],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'Frigidaire Dishwasher Repair',
    description: 'Thorough repair services for all Frigidaire dishwashers, including built-in and portable types.',
    commonIssues: [
      'Not cleaning dishes well',
      'Not draining water',
      'Water leaks',
      'Unusual sounds',
      'Door not latching',
      'Error codes'
    ],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'Frigidaire Oven Repair',
    description: 'Skilled repair services for Frigidaire ovens, including electric, gas, and convection models.',
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
    name: 'Frigidaire Stove Repair',
    description: 'Competent repair services for Frigidaire cooktops and ranges, handling gas, electric, and induction models.',
    commonIssues: [
      'Burners not lighting',
      'Inconsistent heating',
      'Surface element not working',
      'Control panel malfunctions',
      'Induction issues',
      'Error codes'
    ],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Frigidaire Trained Experts',
    description: 'Our team is specifically trained in Frigidaire appliance repair, ensuring top-tier service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Authentic Frigidaire Replacement Parts',
    description: 'We use only genuine Frigidaire parts, ensuring optimal appliance function and reliability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Comprehensive Warranty on Frigidaire Repairs',
    description: 'All our Frigidaire repairs are backed by a comprehensive warranty, offering you added assurance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expertise in Frigidaire Technology',
    description: 'We possess detailed knowledge in Frigidaire’s diverse range of appliance technology and features.',
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
    text: "The technician was fantastic! He quickly fixed our Frigidaire refrigerator, and it's working great now.",
    author: "Linda P.",
    location: "Etobicoke",
    rating: 5
  },
  {
    id: 2,
    text: "Our Frigidaire washer was giving us trouble, but the repair team resolved the issue efficiently. Very professional service.",
    author: "Robert S.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "I had a great experience with the Frigidaire oven repair. The technician was knowledgeable and got the job done right.",
    author: "Karen T.",
    location: "Toronto",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does it typically take to repair a Frigidaire appliance?",
    answer: "Most Frigidaire appliance repairs are completed in a single visit, usually taking 1-2 hours. We’ll provide a clear timeline if your repair needs more time or special parts."
  },
  {
    question: "Do you repair Frigidaire Smart Appliances?",
    answer: "Yes, our technicians are trained to repair all Frigidaire appliances, including their Smart Appliance lineup. We handle both mechanical and digital problems."
  },
  {
    question: "What kind of warranty do you offer on Frigidaire appliance repairs?",
    answer: "We provide a 90-day warranty on both parts and labor for all Frigidaire appliance repairs. If the same problem arises during this period, we’ll fix it without any additional charges."
  },
  {
    question: "Do you use genuine Frigidaire parts for repairs?",
    answer: "Yes, we always use genuine Frigidaire replacement parts to guarantee the best performance and maintain your appliance’s warranty."
  },
  {
    question: "How do I decide between repairing and replacing my Frigidaire appliance?",
    answer: "Our technicians will assess your appliance and give you an honest recommendation. We consider the appliance’s age, the cost of repair, and the availability of parts."
  }
];

// Related Brands
const relatedBrands = [
  "Electrolux",
  "GE",
  "Whirlpool",
  "Maytag",
  "Samsung",
  "LG"
];

export default function FrigidaireBrandPage() {
  return (
    <BrandLayout
      brandInfo={frigidaireInfo}
      services={frigidaireServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#003f87" 
      secondaryColor="#f5f5f7"
    />
  );
}