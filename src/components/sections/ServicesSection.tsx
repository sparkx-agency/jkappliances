"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

const services = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    imageSrc: '/images/services/refrigerator.webp',
    href: '/refrigerator-repair',
    description: 'Expert repair for all refrigerator brands and models',
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    imageSrc: '/images/services/washer.webp',
    href: '/washer-repair',
    description: 'Effective solutions for washing machine problems',
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    imageSrc: '/images/services/dryer.webp',
    href: '/dryer-repair',
    description: 'Professional dryer repair and maintenance services',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    imageSrc: '/images/services/dishwasher.webp',
    href: '/dishwasher-repair',
    description: 'Complete dishwasher diagnostics and repairs',
  },
  {
    id: 'oven',
    name: 'Oven Repair',
    imageSrc: '/images/services/oven.webp',
    href: '/oven-repair',
    description: 'Specialized repair for all oven types',
  },
  {
    id: 'stove',
    name: 'Stove Repair',
    imageSrc: '/images/services/stove.webp',
    href: '/stove-repair',
    description: 'Expert stove and cooktop repair services',
  },
];

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Handle scrolling buttons on mobile carousel
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-3 mb-4 md:mb-6 tracking-tight">
            Appliances We Repair
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Professional repair services for all major household appliances
          </p>
        </motion.div>

        {/* Mobile View - Horizontal Scrollable Cards (Apple App Store style) */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-end space-x-2 mb-4 px-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 focus:outline-none"
              aria-label="Scroll left"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 focus:outline-none"
              aria-label="Scroll right"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-[280px] snap-center mr-4"
              >
                <Link href={service.href} className="block">
                  <div className="bg-white rounded-3xl p-5 shadow-sm h-full flex flex-col transition-all active:scale-95 duration-300">
                    <div className="relative h-40 w-full mb-4 overflow-hidden rounded-2xl bg-gray-50">
                      <Image
                        src={service.imageSrc}
                        alt={service.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="transition-transform group-hover:scale-105 duration-500 p-2"
                        sizes="280px"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 font-light line-clamp-2">{service.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-blue-500 font-medium text-sm">
                        See more
                      </span>
                      <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={service.href} className="block group">
                <div className="bg-white rounded-3xl p-8 transition-all hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-64 w-full mb-8 overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform group-hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-500 mb-4 font-light">{service.description}</p>
                  <div className="mt-auto">
                    <span className="text-black font-medium inline-flex items-center group-hover:underline">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10 md:mt-16">
          <Link 
            href="/services" 
            className="px-8 py-4 md:px-10 md:py-5 rounded-full bg-gray-900 text-white font-medium transition-all hover:bg-gray-800 shadow-sm inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
      
      {/* CSS for hiding scrollbar but allowing scroll */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection; 