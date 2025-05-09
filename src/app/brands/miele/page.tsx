"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const mieleInfo: BrandInfo = {
  id: 'miele',
  name: 'Miele',
  logo: '/images/brands/Miele.webp',
  description:
    'Miele is a renowned German brand known for its high-end, premium home appliances. Specializing in durable, energy-efficient, and technologically advanced appliances, Miele offers a wide range of products, including refrigerators, dishwashers, ovens, and laundry systems, that are built to last and designed for exceptional performance.',
  history:
    'Founded in 1899, Miele has established a reputation for producing high-quality, long-lasting appliances. The brand is committed to innovation and has a rich history of developing advanced home appliance technologies.',
  expertise:
    'Our technicians are extensively trained in the intricacies of Miele appliances, understanding their high-end design and advanced features. We use genuine Miele parts to ensure your appliances continue to deliver their exceptional performance and longevity.',
};

// Miele Services with Common Issues
const mieleServices: BrandServiceItem[] = [
  {
    id: 'refrigerator-repair',
    name: 'Miele Refrigerator Repair',
    description:
      'Expert repair services for Miele refrigerators, including built-in, freestanding, and wine storage models.',
    commonIssues: [
      'Cooling issues',
      'Temperature fluctuations',
      'Ice maker problems',
      'Water dispenser malfunctions',
      'Unusual noises',
      'Door seal issues',
    ],
    image: '/images/services/fridge-repair.png',
  },
  {
    id: 'dishwasher-repair',
    name: 'Miele Dishwasher Repair',
    description:
      'Specialized repair services for all Miele dishwashers, including built-in and integrated models.',
    commonIssues: [
      'Not cleaning well',
      'Not draining',
      'Water leaks',
      'Strange noises',
      'Door latch problems',
      'Error codes',
    ],
    image: '/images/services/dishwasher-repair.png',
  },
  {
    id: 'oven-repair',
    name: 'Miele Oven Repair',
    description:
      'Comprehensive repair services for Miele ovens, including convection, steam, and combi-steam models.',
    commonIssues: [
      'Uneven cooking',
      'Temperature control issues',
      'Self-cleaning not working',
      'Door not sealing',
      'Error codes',
      'Not turning on',
    ],
    image: '/images/services/walloven-repair.png',
  },
  {
    id: 'washer-repair',
    name: 'Miele Washer Repair',
    description:
      'Expert repair services for Miele washing machines, including front-load and high-efficiency models.',
    commonIssues: [
      'Not starting',
      'Not spinning',
      'Leaking',
      'Error codes',
      'Drainage problems',
      'Excessive vibration',
    ],
    image: '/images/services/washing-machine-repair.png',
  },
  {
    id: 'dryer-repair',
    name: 'Miele Dryer Repair',
    description:
      'Reliable repair services for Miele dryers, including condenser and heat-pump models.',
    commonIssues: [
      'Not heating',
      'Overheating',
      'Drum not turning',
      'Timer malfunctions',
      'Strange noises',
      'Not starting',
    ],
    image: '/images/services/dryer-repair.png',
  },
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Miele Certified Repair Technicians',
    description:
      'Our technicians are certified to repair Miele appliances, ensuring specialized and expert service.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Genuine Miele Replacement Parts',
    description:
      'We use only authentic Miele replacement parts to guarantee the longevity and high performance of your appliances.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Warranty-Backed Miele Repairs',
    description:
      'All our Miele appliance repairs are backed by a comprehensive warranty, offering you complete peace of mind.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Expertise in Miele’s Advanced Technology',
    description:
      'We have in-depth knowledge of Miele’s innovative technologies and design features, ensuring precise and expert repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Customer Testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    text:
      'The technician who repaired our Miele refrigerator was exceptional. The service was efficient, and the fridge is now working perfectly.',
    author: 'Sophie H.',
    location: 'Toronto',
    rating: 5,
  },
  {
    id: 2,
    text:
      'I was very impressed with the repair service on my Miele dishwasher. The technician was professional, and the service was prompt.',
    author: 'Daniel W.',
    location: 'North York',
    rating: 5,
  },
  {
    id: 3,
    text:
      'Our Miele oven was having issues, but the repair team fixed it quickly and effectively. We’re very satisfied.',
    author: 'Emily C.',
    location: 'Vaughan',
    rating: 5,
  },
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: 'How quickly can you repair my Miele appliance?',
    answer:
      'Most Miele appliance repairs are completed within a single visit, usually taking 1-2 hours. We will provide a detailed timeline for more complex repairs or if parts need to be ordered.',
  },
  {
    question: 'Do you repair Miele’s high-end and smart appliances?',
    answer:
      'Yes, our technicians are trained to handle Miele’s high-end and smart appliances, addressing both their advanced technologies and basic mechanical issues.',
  },
  {
    question: 'What type of warranty do you offer on Miele appliance repairs?',
    answer:
      'We offer a 90-day warranty on both parts and labor for all Miele appliance repairs. Should the same issue arise during this period, we will fix it at no additional cost.',
  },
  {
    question: 'Do you use genuine Miele parts for repairs?',
    answer:
      'Yes, we exclusively use genuine Miele replacement parts to maintain the high standards and longevity of your appliances.',
  },
  {
    question: 'How do I know if my Miele appliance should be repaired or replaced?',
    answer:
      'Our technicians will assess your appliance and provide an honest recommendation. We consider the appliance’s age, the cost of repair, and the availability of parts before advising you.',
  },
];

// Related Brands
const relatedBrands = ['Gaggenau', 'Sub-Zero', 'Wolf', 'Thermador', 'Bosch', 'Liebherr'];

export default function MieleBrandPage() {
  return (
    <BrandLayout
      brandInfo={mieleInfo}
      services={mieleServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#006db7" // Miele blue
      secondaryColor="#f5f5f5"
    />
  );
}