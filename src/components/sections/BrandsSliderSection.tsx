"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface BrandItem {
  id: string;
  name: string;
  logo: string;
  link: string;
}

interface BrandsSliderSectionProps {
  title?: string;
  subtitle?: string;
  brands: BrandItem[];
  locationName?: string;
}

const BrandsSliderSection: React.FC<BrandsSliderSectionProps> = ({
  title = "Top Appliance Brands We Fix",
  subtitle = "Our certified technicians are experienced in repairing all major appliance brands",
  brands,
  locationName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Create an extended array for infinite scrolling
  const extendedBrands = [...brands, ...brands, ...brands]; // Triple the array for smooth infinite scrolling
  
  // Determine if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Items to show in the slider based on screen size
  const itemsToShow = isMobile ? 1 : 3;
  
  // Handle navigation
  const navigateNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (extendedBrands.length - itemsToShow));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };
  
  const navigatePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? extendedBrands.length - itemsToShow - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };
  
  // Auto scroll the slider
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (extendedBrands.length - itemsToShow));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [extendedBrands.length, isAutoScrolling, itemsToShow]);
  
  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoScrolling(false);
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    if (diff > 50) {
      navigateNext();
    } else if (diff < -50) {
      navigatePrev();
    }
    
    // Resume auto-scrolling after a delay
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };
  
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };
  
  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            {locationName ? `${title} in ${locationName}` : title}
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Buttons - Desktop Only */}
          <div className="hidden md:block">
            <button 
              onClick={navigatePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous brands"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={navigateNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next brands"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden py-6 px-6 md:px-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {extendedBrands.map((brand, index) => (
                <div 
                  key={`${brand.id}-${index}`} 
                  className="flex-shrink-0"
                  style={{ width: `${100/itemsToShow}%` }}
                >
                  <div className="px-4 md:px-8">
                    <Link 
                      href={brand.link}
                      className="group flex items-center justify-center h-24 sm:h-28 md:h-32 bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105" style={{ transform: 'scale(0.9)' }}>
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          
        </div>
      </div>
    </section>
  );
};

export default BrandsSliderSection; 