"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ModernCTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  colorMode?: 'light' | 'dark';
  style?: 'apple' | 'google' | 'hybrid';
}

/**
 * A modern, design-focused CTA section that combines Apple's minimalist elegance
 * with Google's Material Design principles.
 */
const ModernCTASection: React.FC<ModernCTASectionProps> = ({
  title = "Ready to get started?",
  subtitle = "Book your appliance repair service today and experience expert service from our certified technicians.",
  primaryButtonText = "Book Now",
  primaryButtonLink = "/book",
  secondaryButtonText = "Call Us",
  secondaryButtonLink = "tel:647-560-8966",
  imageUrl = "/images/cta/cta-appliances.jpg",
  colorMode = 'light',
  style = 'hybrid'
}) => {
  const [hovered, setHovered] = useState(false);
  
  // Styling based on color mode
  const bgColor = colorMode === 'light' 
    ? 'bg-white' 
    : 'bg-gray-900';
    
  const textColor = colorMode === 'light'
    ? 'text-gray-900'
    : 'text-white';
    
  const subtitleColor = colorMode === 'light'
    ? 'text-gray-600'
    : 'text-gray-300';
  
  // Style variations based on design language preference
  const getContainerClass = () => {
    switch (style) {
      case 'apple':
        return 'rounded-3xl shadow-sm';
      case 'google':
        return 'rounded-xl shadow-lg';
      case 'hybrid':
      default:
        return 'rounded-2xl shadow-md';
    }
  };
  
  const getPrimaryButtonClass = () => {
    const baseClass = "transition-all duration-300 inline-flex items-center justify-center px-8 py-4 text-base font-medium";
    
    switch (style) {
      case 'apple':
        return `${baseClass} rounded-full bg-black text-white hover:bg-gray-800`;
      case 'google':
        return `${baseClass} rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg`;
      case 'hybrid':
      default:
        return `${baseClass} rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700`;
    }
  };
  
  const getSecondaryButtonClass = () => {
    const baseClass = "transition-all duration-300 inline-flex items-center justify-center px-8 py-4 text-base font-medium";
    
    switch (style) {
      case 'apple':
        return `${baseClass} rounded-full border border-gray-300 bg-transparent ${textColor} hover:bg-gray-100`;
      case 'google':
        return `${baseClass} rounded-lg border border-gray-300 bg-transparent ${textColor} hover:bg-gray-100`;
      case 'hybrid':
      default:
        return `${baseClass} rounded-xl border border-gray-300 bg-transparent ${textColor} hover:bg-gray-100`;
    }
  };

  return (
    <section className={`py-24 ${bgColor} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-7xl ${getContainerClass()} overflow-hidden`}>
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Text Content - 3 columns on large screens */}
            <motion.div 
              className="lg:col-span-3 p-12 md:p-16 flex flex-col justify-center z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-4xl md:text-5xl font-semibold mb-6 ${textColor}`}>
                {title}
              </h2>
              <p className={`text-lg md:text-xl mb-10 ${subtitleColor} max-w-2xl font-light leading-relaxed`}>
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={primaryButtonLink} className={getPrimaryButtonClass()}>
                    {primaryButtonText}
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={secondaryButtonLink} className={getSecondaryButtonClass()}>
                    {secondaryButtonText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Image - 2 columns on large screens */}
            <motion.div 
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* For apple-style subtle gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${
                  colorMode === 'light' 
                    ? 'from-white via-white/80 to-transparent lg:via-white/40 lg:to-transparent'
                    : 'from-gray-900 via-gray-900/80 to-transparent lg:via-gray-900/40 lg:to-transparent'
                } z-10 pointer-events-none lg:block hidden`}
              />
              
              {/* For Google-style subtle elevation shadow */}
              <div className="absolute -inset-4 lg:inset-0 shadow-inner z-0" />
              
              <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="h-80 lg:h-full relative overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt="Call to action"
                  fill
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                    transition: 'transform 0.7s ease-in-out'
                  }}
                  className={hovered ? 'scale-105' : 'scale-100'}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTASection; 