"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const geInfo: BrandInfo = {
  id: 'ge',
  name: 'GE',
  logo: '/images/brands/ge.webp',
  description: 'GE is a leading American brand, offering a wide range of home appliances known for their reliability and innovative features. GE appliances include refrigerators, washers, dryers, dishwashers, and ovens, designed to meet the needs of modern households.',
  history: 'Founded in 1892, GE has been a key innovator in the home appliance industry. With a long history of technological advancements, GE continues to develop products that improve the efficiency and convenience of everyday living.',
  expertise: 'Our technicians are highly experienced in repairing GE appliances, from their standard models to the latest smart appliances. We use only genuine GE parts to ensure the reliability and longevity of your appliances.'
};

// GE Services with Common Issues
const geServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'GE Refrigerator Repair',
    description: 'Expert repair services for all GE refrigerator models, including French door, side-by-side, and top-freezer models.',
    commonIssues: ['Cooling issues', 'Ice maker problems', 'Water dispenser malfunctions', 'Temperature fluctuations', 'Unusual noises', 'Door seal problems'],
    image: '/images/services/fridge-repair.png'
  },
  {
    id: 'washer-repair',
    name: 'GE Washer Repair',
    description: 'Comprehensive repair services for GE washers, including top-load, front-load, and high-efficiency models.',
    commonIssues: ['Not starting', 'Not spinning', 'Leaking', 'Error codes', 'Drainage problems', 'Excessive vibration'],
    image: '/images/services/washing-machine-repair.png'
  },
  {
    id: 'dryer-repair',
    name: 'GE Dryer Repair',
    description: 'Reliable repair services for GE dryers, including electric, gas, and sensor models.',
    commonIssues: ['Not heating', 'Overheating', 'Drum not turning', 'Timer issues', 'Strange noises', 'Not starting'],
    image: '/images/services/dryer-repair.png'
  },
  {
    id: 'dishwasher-repair',
    name: 'GE Dishwasher Repair',
    description: 'Thorough repair services for all GE dishwashers, including built-in and portable models.',
    commonIssues: ['Not cleaning well', 'Not draining', 'Water leaks', 'Strange noises', 'Door latch problems', 'Error codes'],
    image: '/images/services/dishwasher-repair.png'
  },
  {
    id: 'oven-repair',
    name: 'GE Oven Repair',
    description: 'Expert repair services for GE ovens, including electric, gas, and convection models.',
    commonIssues: ['Uneven cooking', 'Temperature control issues', 'Self-cleaning problems', 'Door not sealing correctly', 'Error codes', 'Not turning on'],
    image: '/images/services/walloven-repair.png'
  },
  {
    id: 'stove-repair',
    name: 'GE Stove Repair',
    description: 'Professional repair services for GE cooktops and ranges, including gas, electric, and induction models.',
    commonIssues: ['Burners not lighting', 'Temperature regulation problems', 'Surface element issues', 'Control panel malfunctions', 'Induction issues', 'Error codes'],
    image: '/images/services/cooktop-repair.png'
  }
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'GE Factory-Trained Technicians',
    description: 'Our team is factory-trained to repair all GE appliances, ensuring expert care and reliable service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine GE Replacement Parts',
    description: 'We use authentic GE parts to maintain the integrity and longevity of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Comprehensive GE Repair Warranty',
    description: 'All our GE appliance repairs are backed by a comprehensive warranty, giving you peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Expertise in GE’s Smart Appliance Technology',
    description: 'We have specialized knowledge of GE’s smart appliance technology and features, ensuring your connected appliances are in expert hands.',
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
    text: 'The technician did an amazing job repairing our GE refrigerator. The service was prompt, and the fridge works perfectly now.',
    author: 'Susan K.',
    location: 'Toronto',
    rating: 5
  },
  {
    id: 2,
    text: 'Our GE washer was having some serious issues, but the repair team fixed it quickly. Excellent service!',
    author: 'Mark D.',
    location: 'Etobicoke',
    rating: 5
  },
  {
    id: 3,
    text: 'I am very happy with the repair service on my GE oven. The technician was knowledgeable and efficient.',
    author: 'Jennifer L.',
    location: 'Vaughan',
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How quickly can you repair my GE appliance?',
    answer: 'Most GE appliance repairs are completed within a single visit, usually in 1-2 hours. We will provide a detailed timeline for more complex repairs or if parts need to be ordered.'
  },
  {
    question: 'Do you repair GE Smart Appliances?',
    answer: 'Yes, our technicians are fully equipped to repair GE Smart Appliances, addressing both mechanical and technological issues.'
  },
  {
    question: 'What type of warranty do you offer on GE repairs?',
    answer: 'We offer a 90-day warranty on both parts and labor for GE appliance repairs. Should you experience the same issue within this period, we will rectify it at no additional cost.'
  },
  {
    question: 'Do you use genuine GE parts for repairs?',
    answer: 'Yes, we exclusively use genuine GE replacement parts to ensure optimal performance and to maintain your appliance’s warranty.'
  },
  {
    question: 'How do I know if my GE appliance is worth repairing or if I should replace it?',
    answer: 'Our technicians will assess your appliance and provide you with an honest evaluation. We consider the appliance’s age, the cost of repair, and the availability of parts before making a recommendation.'
  }
];

// Related Brands
const relatedBrands = [
  'Samsung',
  'LG',
  'Whirlpool',
  'Maytag',
  'Kenmore',
  'Frigidaire'
];

export default function GEBrandPage() {
  return (
    <BrandLayout
      brandInfo={geInfo}
      services={geServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#0061a1" 
      secondaryColor="#f0f0f0"
    />
  );
}