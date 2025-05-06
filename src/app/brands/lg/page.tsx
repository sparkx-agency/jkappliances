"use client";

import BrandLayout from '@/components/layout/BrandLayout';

export default function LGPage() {
const brandData = {
  id: 'lg',
  name: 'LG',
    logo: '/images/brands/lg.webp',
    description: 'LG is a global leader in home appliance technology, known for innovative designs and reliability.',
    tagline: "Life's Good with LG Appliances",
    overview: 'LG appliances combine cutting-edge technology with sleek designs, offering consumers reliable and innovative products for their homes.',
    history: 'Founded in 1958 as GoldStar, LG Electronics has grown into a global technology innovator with a presence in nearly every country. Their home appliance division is known for introducing breakthrough technologies and design-forward products.',
    expertise: 'Our technicians are factory-trained and certified to repair all LG appliances. We maintain up-to-date knowledge on LG\'s latest models and technologies through regular training and certification programs.',
    primaryColor: '#a50034',
    secondaryColor: '#f4f4f4',
  services: [
    {
        id: 'refrigerator',
        name: 'Refrigerator Repair',
        description: 'Expert repair for all LG refrigerator models, including French door, side-by-side, and smart refrigerators.',
        image: '/images/services/refrigerator-repair.webp',
        icon: 'refrigerator',
        commonIssues: [
          'Cooling problems',
          'Ice maker malfunctions',
          'Strange noises',
          'Water leakage',
          'Smart features not working'
        ]
      },
      {
        id: 'washer',
        name: 'Washer Repair',
        description: 'Professional repair services for front-load, top-load, and combination LG washer models.',
        image: '/images/services/washer-repair.webp',
        icon: 'washer',
        commonIssues: [
          'Spinning issues',
          'Loud operation',
          'Leaking water',
          'Error codes',
          'Door problems'
        ]
      },
      {
        id: 'dryer',
        name: 'Dryer Repair',
        description: 'Comprehensive repair solutions for electric, gas, and heat pump LG dryers.',
        image: '/images/services/dryer-repair.webp',
        icon: 'dryer',
        commonIssues: [
          'Not heating properly',
          'Noisy operation',
          'Won\'t start',
          'Takes too long to dry',
          'Overheating'
        ]
      },
      {
        id: 'dishwasher',
        name: 'Dishwasher Repair',
        description: 'Expert repairs for all LG dishwasher models, including smart and built-in units.',
        image: '/images/services/dishwasher-repair.webp',
        icon: 'dishwasher',
        commonIssues: [
          'Not cleaning properly',
          'Leaking',
          'Drainage issues',
          'Strange noises',
          'Door not latching'
        ]
      },
      {
        id: 'oven',
        name: 'Oven Repair',
        description: 'Specialized repair services for LG electric, gas, and combination ovens and ranges.',
        image: '/images/services/oven-repair.webp',
        icon: 'oven',
        commonIssues: [
          'Not heating correctly',
          'Temperature inaccuracy',
          'Self-cleaning issues',
          'Control panel problems',
          'Door not closing properly'
        ]
      },
      {
        id: 'microwave',
        name: 'Microwave Repair',
        description: 'Professional repair for countertop, built-in, and over-the-range LG microwaves.',
        image: '/images/services/microwave-repair.webp',
        icon: 'microwave',
        commonIssues: [
          'Not heating',
          'Turntable not rotating',
          'Loud operation',
          'Keypad not responding',
          'Door issues'
        ]
      }
    ],
  advantages: [
    {
      title: 'Genuine LG Parts',
        description: 'We use only authentic LG replacement parts to ensure optimal performance and longevity of your appliances.',
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
        title: 'Certified Technicians',
        description: 'Our technicians are fully certified and trained specifically for LG appliance repair and maintenance.',
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
        title: 'Warranty Protection',
        description: 'Our repair services maintain your LG warranty while providing quality solutions for all issues.',
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
      {
        title: 'Advanced Diagnostics',
        description: 'We utilize the latest diagnostic tools specifically designed for LG appliances to pinpoint issues accurately.',
        icon: (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
      }
    ],
    relatedBrands: ['Samsung', 'Whirlpool', 'GE', 'Bosch'],
  testimonials: [
    {
      id: 1,
        text: 'The technician was extremely knowledgeable about my LG refrigerator. Fixed the ice maker issue that had been bothering us for months.',
        author: 'Jennifer K.',
        location: 'Boston, MA',
        rating: 5
    },
    {
      id: 2,
        text: 'Same-day service for my LG washing machine. The repair was quick and the price was reasonable. Highly recommend!',
        author: 'Michael T.',
        location: 'Cambridge, MA',
        rating: 5
    },
    {
      id: 3,
        text: 'Had an issue with my LG oven not heating properly. The technician was professional and fixed it right the first time.',
        author: 'Sarah L.',
        location: 'Somerville, MA',
        rating: 4
      }
    ],
    faqs: [
      {
        question: 'How long does a typical LG appliance repair take?',
        answer: 'Most LG repairs can be completed in a single visit, typically lasting 1-2 hours depending on the issue. Our technicians arrive with commonly needed parts to ensure efficient service.'
      },
      {
        question: 'Does repairing my LG appliance void the warranty?',
        answer: 'No, our certified technicians are authorized to work on LG appliances while maintaining your warranty. We use genuine LG parts for all repairs.'
      },
      {
        question: 'How often should I service my LG appliances?',
        answer: 'We recommend annual maintenance checks for most LG appliances to ensure optimal performance and catch potential issues before they become serious problems.'
      },
      {
        question: 'Are your technicians certified to repair LG smart appliances?',
        answer: 'Yes, our technicians receive special training on LG smart appliances and can address both hardware issues and connectivity problems with your smart home setup.'
      }
    ]
  };

  return <BrandLayout 
    brandInfo={brandData}
    services={brandData.services}
    advantages={brandData.advantages}
    testimonials={brandData.testimonials}
    faqs={brandData.faqs}
    relatedBrands={brandData.relatedBrands}
    primaryColor={brandData.primaryColor}
    secondaryColor={brandData.secondaryColor}
  />;
} 