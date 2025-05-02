"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface BrandServiceItem {
  id: string;
  name: string;
  image: string;
  description: string;
  commonIssues: string[];
}

interface BrandServicesSectionProps {
  brandName: string;
  services: BrandServiceItem[];
}

const BrandServicesSection: React.FC<BrandServicesSectionProps> = ({ brandName, services }) => {
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id || '');

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-8">
            {brandName} Appliances We Repair
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Our certified technicians are experts in all {brandName} appliance models.
          </p>
        </motion.div>

        {/* Tabs Navigation - Apple-style horizontal scrolling tabs */}
        <div className="flex justify-center mb-12">
          <div className="max-w-full overflow-x-auto py-4 no-scrollbar">
            <ul className="flex space-x-1 sm:space-x-2 px-1">
              {services.map((service) => (
                <li key={service.id} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={`relative py-3 px-6 rounded-full text-sm sm:text-base transition-all whitespace-nowrap ${
                      activeTab === service.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {service.name.replace(`${brandName} `, '').replace('Repair', '')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-12"
            >
              {/* Text Content - Takes up 3 columns on large screens */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  {brandName} {activeService.name.replace(`${brandName} `, '')}
                </h2>
                
                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    Common Issues We Fix
                  </h3>
                  <ul className="space-y-4">
                    {activeService.commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Don't see your issue listed?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We can still help! Our technicians are trained to handle all {brandName} appliance problems, even uncommon ones.
                  </p>
                  <Link 
                    href={`/services/${activeService.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <span>Book a Repair</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Image - Takes up 2 columns on large screens */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-sm">
                  <Image
                    src={activeService.image}
                    alt={activeService.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    All {brandName} Models Supported
                  </h3>
                  <p className="text-gray-600">
                    Our technicians are certified to repair all {brandName} {activeService.name.replace(`${brandName} `, '').replace('Repair', '')} models, from the newest smart appliances to older models.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <Link 
            href="/services"
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            View All Our Services
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandServicesSection; 