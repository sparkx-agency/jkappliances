"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export interface AreaServiceItem {
  id: string;
  name: string;
  image: string;
  description: string;
  commonServices: string[];
  icon?: string; // Optional icon path for mobile view
}

interface AreaServicesSectionProps {
  areaName: string;
  services: AreaServiceItem[];
}

const AreaServicesSection: React.FC<AreaServicesSectionProps> = ({ areaName, services }) => {
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id || '');
  const [isMobile, setIsMobile] = useState(false);
  
  // Function to get icon path based on service ID
  const getIconPath = (serviceId: string) => {
    // Map service IDs to icon paths
    const iconMap: {[key: string]: string} = {
      'refrigerator-repair': '/images/icons/fridge.webp',
      'washer-repair': '/images/icons/washer.webp',
      'dryer-repair': '/images/icons/dryer.webp',
      'dishwasher-repair': '/images/icons/dishwasher.webp',
      'oven-repair': '/images/icons/stove.webp',
    };
    
    // Return the mapped icon path or use the provided icon in the service if available
    return services.find(s => s.id === serviceId)?.icon || iconMap[serviceId] || '';
  };
  
  // Check if on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            Appliance Repair Services in {areaName}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Our certified technicians provide expert appliance repair throughout {areaName}.
          </p>
        </motion.div>

        {/* Tabs Navigation - Icon-based for mobile, text-based for desktop */}
        <div className="flex justify-center mb-6">
          <div className="max-w-full overflow-x-auto py-3 no-scrollbar">
            <ul className="flex space-x-2 sm:space-x-3 px-1">
              {services.map((service) => (
                <li key={service.id} className="flex-shrink-0">
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={`relative transition-all whitespace-nowrap ${
                      activeTab === service.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${isMobile ? 'p-3 rounded-lg' : 'py-3 px-6 rounded-full text-sm sm:text-base'}`}
                  >
                    {isMobile ? (
                      <div className="w-8 h-8 relative">
                        <Image 
                          src={getIconPath(service.id)}
                          alt={service.name}
                          width={24}
                          height={24}
                          className={`${activeTab === service.id ? 'filter brightness-0 invert' : ''}`}
                        />
                      </div>
                    ) : (
                      service.name.replace('Repair', '').trim()
                    )}
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
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4"
            >
              {/* Text Content - Takes up 3 columns on large screens */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  {activeService.name} in {areaName}
                </h2>
                
                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {activeService.description}
                  </p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    Our {activeService.name.replace('Repair', '').trim()} Services
                  </h3>
                  <ul className="space-y-4">
                    {activeService.commonServices.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 mt-0.5">
                          <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Need service in {areaName}?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our technicians are available for same-day service throughout {areaName} for all major appliance brands.
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
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-sm hidden md:block">
                  <Image
                    src={activeService.image}
                    alt={`${activeService.name} in ${areaName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Fast Service section - hidden on mobile */}
                <div className="mt-8 bg-gray-50 p-6 rounded-2xl hidden md:block">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Fast Service in {areaName}
                  </h3>
                  <p className="text-gray-600">
                    We provide rapid response times for {activeService.name.toLowerCase()} throughout {areaName}, with same-day service available for most repairs.
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
            className="inline-flex items-center px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-sm text-lg"
          >
            View All Our Services
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AreaServicesSection; 