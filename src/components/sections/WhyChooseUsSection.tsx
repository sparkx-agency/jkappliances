"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    id: 'certified',
    name: 'Certified Technicians',
    description: 'Our team consists of factory-trained technicians with expertise across all major appliance brands.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'same-day',
    name: 'Same-Day Service',
    description: 'We provide prompt, reliable service, often on the same day you call to minimize disruption to your home.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'warranty',
    name: 'Extended Warranty',
    description: 'All our repairs come with a comprehensive warranty on both parts and labor for your peace of mind.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 'genuine-parts',
    name: 'Genuine Parts',
    description: 'We use only authentic manufacturer parts to ensure optimal performance and longevity of your appliance.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const WhyChooseUsSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
              Why Choose Our Expert Repair Services
          </h2>
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
              We provide exceptional appliance repair services with a focus on quality, reliability, and customer satisfaction. Our team of professionals is committed to delivering the best possible service experience.
            </p>
            
            <div className="space-y-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
                  className="flex items-start"
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
            >
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 transition-colors duration-300 ${hoveredFeature === feature.id ? 'bg-black text-white' : ''}`}>
                    {feature.icon}
                </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-gray-500 font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
        >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
              <Image 
                src="/images/technician-repairing.webp"
                alt="Technician repairing appliance"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-700"
              />
            </div>
            </motion.div>
        </div>
        
        <div className="mt-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 mb-8"
          >
            Ready to experience our exceptional service?
          </motion.p>
          <Link 
            href="/book" 
            className="px-10 py-5 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm inline-block"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 