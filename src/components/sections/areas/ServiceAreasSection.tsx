"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


// Service areas data
const serviceAreas = [
  { id: 'ajax', name: 'Ajax', link: '/appliance-repair-ajax' },
  { id: 'aurora', name: 'Aurora', link: '/appliance-repair-aurora' },
  { id: 'bowmanville', name: 'Bowmanville', link: '/appliance-repair-bowmanville' },
  { id: 'brampton', name: 'Brampton', link: '/appliance-repair-brampton' },
  { id: 'burlington', name: 'Burlington', link: '/appliance-repair-burlington' },
  { id: 'caledon', name: 'Caledon', link: '/appliance-repair-caledon' },
  { id: 'claremont', name: 'Claremont', link: '/appliance-repair-claremont' },
  { id: 'clarington', name: 'Clarington', link: '/appliance-repair-clarington' },
  { id: 'downtown-toronto', name: 'Downtown (Toronto)', link: '/appliance-repair-downtown-toronto' },
  { id: 'east-york', name: 'East York', link: '/appliance-repair-east-york' },
  { id: 'etobicoke', name: 'Etobicoke', link: '/appliance-repair-etobicoke' },
  { id: 'georgetown', name: 'Georgetown', link: '/appliance-repair-georgetown' },
  { id: 'georgina', name: 'Georgina', link: '/appliance-repair-georgina' },
  { id: 'halton-hills', name: 'Halton Hills', link: '/appliance-repair-halton-hills' },
  { id: 'king-city', name: 'King City', link: '/appliance-repair-king-city' },
  { id: 'kleinburg', name: 'Kleinburg', link: '/appliance-repair-kleinburg' },
  { id: 'markham', name: 'Markham', link: '/appliance-repair-markham' },
  { id: 'milton', name: 'Milton', link: '/appliance-repair-milton' },
  { id: 'mississauga', name: 'Mississauga', link: '/appliance-repair-mississauga' },
  { id: 'newmarket', name: 'Newmarket', link: '/appliance-repair-newmarket' },
  { id: 'north-york', name: 'North York', link: '/appliance-repair-north-york' },
  { id: 'oakville', name: 'Oakville', link: '/appliance-repair-oakville' },
  { id: 'orangeville', name: 'Orangeville', link: '/appliance-repair-orangeville' },
  { id: 'oshawa', name: 'Oshawa', link: '/appliance-repair-oshawa' },
  { id: 'pickering', name: 'Pickering', link: '/appliance-repair-pickering' },
  { id: 'richmond-hill', name: 'Richmond Hill', link: '/appliance-repair-richmond-hill' },
  { id: 'scarborough', name: 'Scarborough', link: '/appliance-repair-scarborough' },
  { id: 'stouffville', name: 'Stouffville', link: '/appliance-repair-stouffville' },
  { id: 'thornhill', name: 'Thornhill', link: '/appliance-repair-thornhill' },
  { id: 'toronto', name: 'Toronto', link: '/appliance-repair-toronto' },
  { id: 'vaughan', name: 'Vaughan', link: '/appliance-repair-vaughan' },
  { id: 'whitby', name: 'Whitby', link: '/appliance-repair-whitby' },
  { id: 'woodbridge', name: 'Woodbridge', link: '/appliance-repair-woodbridge' },
  { id: 'york', name: 'York', link: '/appliance-repair-york' }
];

// Group the areas into columns for better visual display
const leftColumn = serviceAreas.slice(0, Math.ceil(serviceAreas.length / 2));
const rightColumn = serviceAreas.slice(Math.ceil(serviceAreas.length / 2));

const ServiceAreasSection = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScroll = 400; // This would be dynamically calculated based on content

  const handleScroll = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollTop;
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-10 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Centered Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            
            </motion.div>
            <h2 className="text-5xl font-semibold text-gray-900 tracking-tight">
              Areas we serve in GTA
            </h2>
          </div>
          
          <p className="text-xl text-gray-500 mb-6 font-light leading-relaxed max-w-2xl mx-auto">
            Our appliance repair technicians provide fast, reliable service throughout the Greater Toronto Area. Find your neighborhood below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Areas List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="sticky top-32">
              <div className="relative h-[600px] flex flex-col">
                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex-1 overflow-y-auto pr-6"
                >
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4 justify-items-center">
                    {/* Left Column of Areas */}
                    <div>
                      {leftColumn.map((area) => (
                        <motion.div 
                          key={area.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveArea(area.id)}
                          onMouseLeave={() => setActiveArea(null)}
                          className="py-3 border-b border-gray-100 group cursor-pointer"
                        >
                          <Link href={area.link}>
                            <div className="flex items-center">
                              <div className={`mr-3 w-2 h-2 rounded-full transition-all duration-300 ${activeArea === area.id ? 'bg-blue-500 scale-150' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                              <div>
                                <p className={`text-lg transition-colors duration-200 ${activeArea === area.id ? 'text-black font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                  {area.name}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Right Column of Areas */}
                    <div>
                      {rightColumn.map((area) => (
                        <motion.div 
                          key={area.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveArea(area.id)}
                          onMouseLeave={() => setActiveArea(null)}
                          className="py-3 border-b border-gray-100 group cursor-pointer"
                        >
                          <Link href={area.link}>
                            <div className="flex items-center">
                              <div className={`mr-3 w-2 h-2 rounded-full transition-all duration-300 ${activeArea === area.id ? 'bg-blue-500 scale-150' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                              <div>
                                <p className={`text-lg transition-colors duration-200 ${activeArea === area.id ? 'text-black font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                  {area.name}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/areas" 
                  className="inline-flex items-center text-blue-500 font-medium hover:underline"
                >
                  View detailed coverage map
                  <svg className="w-4 h-4 ml-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 hidden sm:block"
          >
            <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[600px] relative">
              {/* This would be replaced with an actual Google Maps integration */}
              <Image 
                src="/images/toronto-map.webp" 
                alt="Toronto Service Areas Map"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
              />
              
              {/* Apple-style pin/marker for JK Appliances */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                  className="relative"
                >
                  {/* Pin shadow/reflection effect */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm"></div>
                  
                  {/* Pin body */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-lg mb-1">
                      <div className="bg-blue-500 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                        JK
                      </div>
                    </div>
                    {/* Pin point */}
                    <div className="w-4 h-4 bg-white transform rotate-45 -mt-2"></div>
                  </div>
                  
                  {/* Animated ripple effect */}
                  <motion.div
                    className="absolute -top-6 -left-6 w-28 h-28 rounded-full border-2 border-blue-500/30"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </div>
              
              {/* Map controls styled in Apple's design language */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                  </svg>
                </button>
              </div>
              
              {/* Apple-style info pill */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">JK Appliances - 8 Lorraine Crescent</span>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Same-day service available</p>
                  <p className="text-sm text-gray-500">Fast response times throughout Greater Toronto Area</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-500 mb-8 font-light">
            Not sure if we service your area? Contact us directly for the fastest response.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="tel:647-560-8966" 
              className="px-8 py-4 rounded-full bg-blue-500 text-white font-medium transition-all hover:bg-blue-600 shadow-sm text-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 647-560-8966
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium transition-all hover:bg-gray-200 text-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4" />
              </svg>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;