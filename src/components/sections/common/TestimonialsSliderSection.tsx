"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { reviews, getAverageRating, getReviewsByPlatform } from '@/data/reviews';

interface TestimonialsSliderSectionProps {
  count?: number;             // Number of reviews to show
  filter?: 'recent' | 'rating' | 'random'; // How to filter/sort reviews
  platform?: 'all' | 'google' | 'yelp' | 'facebook' | 'homestars'; // Which platform to show reviews from
  title?: string;
  subtitle?: string;
  showRatingSummary?: boolean;
  darkMode?: boolean;
  style?: 'apple' | 'google' | 'mixed';
  compact?: boolean;          // For a more compact view
}

/**
 * A reusable testimonials slider section that combines Apple and Google design elements.
 * Pulls data directly from the reviews data source to ensure consistency across the app.
 */
const TestimonialsSliderSection: React.FC<TestimonialsSliderSectionProps> = ({
  count = 12,
  filter = 'recent',
  platform = 'all',
  title = "What Our Customers Say",
  subtitle = "Read reviews from customers who have experienced our appliance repair services",
  showRatingSummary = true,
  darkMode = false,
  style = 'mixed',
  compact = false
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, count));
  const [autoplay, setAutoplay] = useState(true);
  const [hovering, setHovering] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  // Apple-inspired accent color gradient
  const accentGradient = 'linear-gradient(135deg, #42a1ec, #0070c9)';
  
  // Google-inspired colors
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
  
  // Background styling based on style prop
  const bgStyle = () => {
    if (darkMode) {
      return style === 'apple' 
        ? 'bg-[#0f0f0f] text-white' 
        : style === 'google' 
          ? 'bg-[#202124] text-white' 
          : 'bg-[#1a1a1a] text-white';
    }
    
    return style === 'apple' 
      ? 'bg-[#f5f5f7] text-black' 
      : style === 'google' 
        ? 'bg-white text-black shadow-sm' 
        : 'bg-[#fafafa] text-black';
  };
  
  // Card styling based on style prop
  const cardStyle = () => {
    if (darkMode) {
      return style === 'apple' 
        ? 'bg-[#1c1c1e] border border-[#333336]' 
        : style === 'google' 
          ? 'bg-[#303134] shadow-lg' 
          : 'bg-[#242424] border border-[#444444] shadow-md';
    }
    
    return style === 'apple' 
      ? 'bg-white border border-[#e5e5e5]' 
      : style === 'google' 
        ? 'bg-white shadow-lg' 
        : 'bg-white border border-[#e6e6e6] shadow-sm';
  };
  
  // Process and filter reviews
  useEffect(() => {
    // Get reviews from selected platform
    let selectedReviews = getReviewsByPlatform(platform);
    
    // Apply the sorting/filtering
    if (filter === 'recent') {
      selectedReviews = [...selectedReviews].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (filter === 'rating') {
      selectedReviews = [...selectedReviews].sort((a, b) => 
        b.rating - a.rating
      );
    } else if (filter === 'random') {
      selectedReviews = [...selectedReviews].sort(() => Math.random() - 0.5);
    }
    
    // Limit to requested count
    setDisplayedReviews(selectedReviews.slice(0, count));
  }, [count, filter, platform]);
  
  // Autoplay management
  useEffect(() => {
    if (!autoplay || hovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayedReviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, displayedReviews.length, hovering]);
  
  // Touch events for mobile swiping
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current) return;
      
      touchEndX.current = e.changedTouches[0].clientX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      if (!touchStartX.current || !touchEndX.current) return;
      
      const difference = touchStartX.current - touchEndX.current;
      
      // If swipe is significant (more than 50px)
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          // Swipe left
          setActiveIndex((current) => (current + 1) % displayedReviews.length);
        } else {
          // Swipe right
          setActiveIndex((current) => 
            current === 0 ? displayedReviews.length - 1 : current - 1
          );
        }
      }
      
      // Reset values
      touchStartX.current = null;
      touchEndX.current = null;
    };
    
    const element = sliderRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [displayedReviews.length]);
  
  // Function to render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < Math.floor(rating) ? (
              <StarIcon className="w-4 h-4 text-yellow-400" />
            ) : i < Math.ceil(rating) && rating % 1 !== 0 ? (
              <div className="relative w-4 h-4">
                <StarOutlineIcon className="w-4 h-4 text-yellow-400 absolute" />
                <div className="overflow-hidden absolute" style={{ width: `${(rating % 1) * 100}%` }}>
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            ) : (
              <StarOutlineIcon className="w-4 h-4 text-yellow-400" />
            )}
          </span>
        ))}
      </div>
    );
  };
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Platform icon component
  const PlatformIcon = ({ platform }: { platform: string }) => {
    let bgColor = '';
    
    switch (platform) {
      case 'google':
        bgColor = '#4285F4';
        break;
      case 'yelp':
        bgColor = '#FF1A1A';
        break;
      case 'facebook':
        bgColor = '#1877F2';
        break;
      case 'homestars':
        bgColor = '#F8B333';
        break;
      default:
        bgColor = '#666666';
    }
    
    return (
      <div 
        className="flex items-center justify-center h-5 w-5 rounded-full" 
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-white text-xs font-bold">
          {platform.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  };
  
  return (
    <section 
      className={`py-20 ${bgStyle()} overflow-hidden transition-colors duration-300`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {title}
            </h2>
            <p className={`text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} max-w-3xl mx-auto font-light`}>
              {subtitle}
            </p>
          </motion.div>
          
          {/* Rating Summary */}
          {showRatingSummary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 mb-12 flex flex-col items-center"
            >
              <div className="flex items-center">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                    />
                  ))}
                </div>
                <span className={`text-3xl font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {getAverageRating().toFixed(1)}
                </span>
              </div>
              <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Based on {reviews.length} verified reviews
              </p>
            </motion.div>
          )}
        </div>
        
        {/* Testimonials Slider */}
        <div 
          ref={sliderRef}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className={`rounded-2xl p-8 ${cardStyle()} transition-all`}
            >
              {/* Content */}
              <div className="flex flex-col">
                {/* Header with platform icon and rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {displayedReviews[activeIndex].name}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {displayedReviews[activeIndex].location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div 
                      className="w-10 h-10 relative p-1.5 rounded-full bg-white flex-shrink-0 mb-3"
                      style={{ 
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0, 0, 0, 0.03)' 
                      }}
                    >
                      <Image
                        src={`/images/logos/${displayedReviews[activeIndex].platform}.webp`}
                        alt={`${displayedReviews[activeIndex].platform} Review`}
                        fill
                        style={{ objectFit: 'contain', padding: '2px' }}
                        sizes="40px"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex">
                      {renderStars(displayedReviews[activeIndex].rating)}
                    </div>
                  </div>
                </div>
                
                {/* Quote icon */}
                <div className={`mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                    <path d="M14.4 24H8.4C8.4 17.364 13.764 12 20.4 12V16.8C16.416 16.8 13.2 20.016 13.2 24V24ZM32.4 24H26.4C26.4 17.364 31.764 12 38.4 12V16.8C34.416 16.8 31.2 20.016 31.2 24V24ZM20.4 24H14.4V31.2C14.4 34.944 17.436 38.4 21.6 38.4C25.764 38.4 28.8 34.944 28.8 31.2H24C24 32.736 22.944 33.6 21.6 33.6C20.256 33.6 19.2 32.736 19.2 31.2V24ZM38.4 24H32.4V31.2C32.4 34.944 35.436 38.4 39.6 38.4C43.764 38.4 46.8 34.944 46.8 31.2H42C42 32.736 40.944 33.6 39.6 33.6C38.256 33.6 37.2 32.736 37.2 31.2V24Z" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Review text */}
                <p className={`text-lg ${darkMode ? 'text-gray-100' : 'text-gray-700'} font-light leading-relaxed mb-6 italic`}>
                  &quot;{compact 
                    ? (displayedReviews[activeIndex].reviewText.length > 180
                      ? displayedReviews[activeIndex].reviewText.substring(0, 180) + '...'
                      : displayedReviews[activeIndex].reviewText)
                    : displayedReviews[activeIndex].reviewText
                  }&quot;
                </p>
                
                {/* Date and service type */}
                <div className="flex justify-between items-center mt-auto text-sm">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formatDate(displayedReviews[activeIndex].date)}
                  </span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {displayedReviews[activeIndex].serviceType}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots - Apple style */}
          <div className="flex justify-center mt-8 space-x-1.5">
            {displayedReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                  // Resume autoplay after user interaction
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                className={`transition-all duration-300 ${
                  style === 'apple' 
                    ? `w-2 h-2 rounded-full ${
                        activeIndex === index 
                          ? 'bg-gray-900 scale-125' 
                          : 'bg-gray-400 hover:bg-gray-600'
                      } ${darkMode ? 'bg-opacity-80' : ''}`
                    : style === 'google'
                      ? `w-3 h-3 rounded-full ${
                          activeIndex === index 
                            ? 'bg-blue-500' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`
                      : `h-1.5 rounded-full ${
                          activeIndex === index 
                            ? 'w-6 bg-gray-800' 
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        } ${darkMode ? 'bg-opacity-80' : ''}`
                }`}
                style={activeIndex === index && style === 'google' ? { backgroundColor: googleColors[index % googleColors.length] } : {}}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows - only visible on non-compact displays */}
          {!compact && (
            <>
              <button
                onClick={() => {
                  setActiveIndex(activeIndex === 0 ? displayedReviews.length - 1 : activeIndex - 1);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  darkMode 
                    ? 'bg-[#333] hover:bg-[#444] text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
                }`}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setActiveIndex((activeIndex + 1) % displayedReviews.length);
                  setAutoplay(false);
                  setTimeout(() => setAutoplay(true), 10000);
                }}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  darkMode 
                    ? 'bg-[#333] hover:bg-[#444] text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-700 shadow-md'
                }`}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
        
        {/* View all reviews link */}
        <div className="text-center">
          <Link
            href="/reviews"
            className={`inline-block ${
              style === 'apple' 
                ? `px-6 py-3 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-full font-medium transition-all hover:opacity-90`
                : style === 'google'
                  ? `px-6 py-3 bg-blue-500 text-white rounded-lg font-medium transition-all hover:bg-blue-600 shadow-sm`
                  : `px-6 py-3 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-full font-medium transition-all hover:bg-gray-800`
            }`}
            style={style === 'apple' ? { background: darkMode ? 'white' : accentGradient, color: darkMode ? 'black' : 'white' } : {}}
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSliderSection; 