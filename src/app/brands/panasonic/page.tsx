"use client";

import BrandLayout from '@/components/layout/BrandLayout';
import { BrandInfo, Advantage, Testimonial, FAQItem } from '@/components/layout/BrandLayout';
import { BrandServiceItem } from '@/components/sections/brands/BrandServicesSection';

// Brand Information
const panasonicInfo: BrandInfo = {
  id: 'panasonic',
  name: 'Panasonic',
  logo: '/images/brands/panasonic.webp',
  description: 'Panasonic is a trusted brand known for its innovative and reliable appliances. Offering a wide range of products, including refrigerators, microwaves, and washing machines, Panasonic focuses on delivering quality and convenience to consumers.',
  history: 'Founded in 1918, Panasonic has a long history of producing high-quality electronics and appliances. With a commitment to innovation and customer satisfaction, Panasonic has become a leading brand in the home appliance industry.',
  expertise: 'Our technicians are experienced in servicing Panasonic appliances and understand their advanced features and technology. We use genuine Panasonic replacement parts to ensure that your appliance continues to perform at its best.'
};

// Panasonic Services with Common Issues
const panasonicServices: BrandServiceItem[] = [

  {
    id: 'microwave-repair',
    name: 'Panasonic Microwave Repair',
    description: 'Expert repair services for Panasonic microwaves, including countertop, over-the-range, and built-in models.',
    commonIssues: [
      'Not heating',
      'Turntable not rotating',
      'Sparking inside',
      'Control panel not working',
      'Door not closing properly',
      'Burning smell',
      'Display issues'
    ],
    image: '/images/services/oven-repair.webp'
  },
];

// Service Advantages
const advantages: Advantage[] = [
  {
    title: 'Trained Technicians',
    description: 'Our technicians are trained to work on Panasonic appliances and have the knowledge to diagnose and repair any issue.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Genuine Parts',
    description: 'We use only genuine Panasonic replacement parts to ensure the quality and longevity of our repairs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Reliable Service',
    description: 'We provide reliable and efficient service to get your Panasonic appliance back up and running quickly.',
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
    text: "The technician was very knowledgeable and quickly fixed our Panasonic refrigerator. We are very happy with the service.",
    author: "John D.",
    location: "Toronto",
    rating: 5
  },
  {
    id: 2,
    text: "Our Panasonic microwave stopped working, and the repair team was able to fix it the same day. Great service!",
    author: "Sarah M.",
    location: "Mississauga",
    rating: 5
  },
  {
    id: 3,
    text: "We have been using this company for all our appliance repairs, and they always provide excellent service. Highly recommended.",
    author: "David K.",
    location: "Brampton",
    rating: 5
  }
];

// FAQ Items
const faqs: FAQItem[] = [
  {
    question: "How long does a typical Panasonic appliance repair take?",
    answer: "Most Panasonic appliance repairs can be completed in a single visit, usually within 1-2 hours. Complex repairs may require additional time to diagnose and repair."
  },
  {
    question: "Do you offer a warranty on Panasonic appliance repairs?",
    answer: "Yes, we offer a warranty on parts and labor for all Panasonic appliance repairs. If the same issue occurs within the warranty period, we will fix it at no additional cost."
  },
  {
    question: "Do you use genuine Panasonic replacement parts?",
    answer: "Yes, we use genuine Panasonic replacement parts whenever possible to ensure the quality and reliability of our repairs."
  },
  {
    question: "How do I schedule a Panasonic appliance repair?",
    answer: "You can schedule a Panasonic appliance repair by calling our service hotline or filling out the contact form on our website. We offer flexible scheduling options to meet your needs."
  },
  {
    question: "What areas do you serve for Panasonic appliance repairs?",
    answer: "We provide Panasonic appliance repair services throughout the Greater Toronto Area (GTA) and surrounding regions. Contact us to confirm service availability in your area."
  }
];

// Related Brands
const relatedBrands = [
  "Samsung",
  "LG",
  "Sharp",
  "Sony",
  "Toshiba"
];

export default function PanasonicBrandPage() {
  return (
    <BrandLayout
      brandInfo={panasonicInfo}
      services={panasonicServices}
      advantages={advantages}
      testimonials={testimonials}
      faqs={faqs}
      relatedBrands={relatedBrands}
      primaryColor="#0070c0"
      secondaryColor="#f0f0f0"
    />
  );
}
