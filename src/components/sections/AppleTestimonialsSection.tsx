"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { reviews as allReviews } from '@/data/reviews';

interface AppleTestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  maxReviews?: number;
  filterPlatform?: string;
  filterService?: string;
  filterLocation?: string;
}

const AppleTestimonialsSection = ({
  title = "What Our Customers Are Saying",
  subtitle = "Real feedback from real customers",
  maxReviews = 6,
  filterPlatform = "",
  filterService = "",
  filterLocation = ""
}: AppleTestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right to left, -1 for left to right
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Filter reviews based on props
  const filteredReviews = allReviews
    .filter(review => filterPlatform ? review.platform === filterPlatform : true)
    .filter(review => filterService ? review.serviceType === filterService : true)
    .filter(review => filterLocation ? review.location === filterLocation : true)
    .sort((a, b) => b.rating - a.rating || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxReviews);

  // Function to handle circular index for infinite scroll
  const getCircularIndex = (index: number) => {
    if (filteredReviews.length === 0) return 0;
    return ((index % filteredReviews.length) + filteredReviews.length) % filteredReviews.length;
  };

  // Auto-advance the carousel
  useEffect(() => {
    if (isPaused || filteredReviews.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => getCircularIndex(prevIndex + 1));
      setDirection(1); // Always slide from right to left for auto-advance
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, filteredReviews.length]);

  // Format date to relative time (e.g., "2 months ago")
  const formatRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
      return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  // Handle next/prev actions
  const goToNext = () => {
    setCurrentIndex(prevIndex => getCircularIndex(prevIndex + 1));
    setDirection(1);
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => getCircularIndex(prevIndex - 1));
    setDirection(-1);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Minimum swipe distance threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        goToNext();
      } else {
        // Swipe right
        goToPrev();
      }
      setTouchStart(0);
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="py-24 md:py-32 bg-[#f5f5f7] overflow-hidden relative">
      {/* Subtle gradient blobs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40"
          style={{ filter: 'blur(100px)', opacity: 0.6 }}
        />
        <div 
          className="absolute top-[60%] left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-pink-100/30 to-blue-100/30"
          style={{ filter: 'blur(80px)', opacity: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Section header with Apple-style typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-[#1d1d1f] mb-4 tracking-tight">{title}</h2>
            <p className="text-xl text-[#424245] font-light max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>

          {/* Testimonial carousel */}
          <div className="max-w-5xl mx-auto relative">
            {/* Left navigation button - visible on desktop only */}
            {filteredReviews.length > 1 && (
              <div className="hidden md:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10">
                <button
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Previous review"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
            )}
            
            <div 
              className="relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              ref={carouselRef}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.7 }
                  }}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-lg bg-white/90">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Profile & Rating Section */}
                      <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/4">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md">
                          <Image 
                            src={filteredReviews[currentIndex].profileImage}
                            alt={filteredReviews[currentIndex].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="text-center md:text-left">
                          <h4 className="font-medium text-[#1d1d1f]">{filteredReviews[currentIndex].name}</h4>
                          <div className="text-sm text-[#6e6e73]">{filteredReviews[currentIndex].location}</div>
                        </div>
                        
                        <div className="flex flex-col items-center md:items-start">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-5 h-5 ${i < filteredReviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-200'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          
                          <div className="flex items-center mt-2 text-sm">
                            <div className="h-4 w-4 mr-1.5 flex-shrink-0">
                              {filteredReviews[currentIndex].platform === 'google' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                              ) : filteredReviews[currentIndex].platform === 'yelp' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                                  <path fill="#d32323" d="M18.8 14.35l-4.2 1.3c-.82.25-1.07-.4-.9-1.3l.7-3.1c.22-.8.9-.9 1.5-.7l3.5 1.35c.8.27.9 1.4-.6 2.45zm-8.3-8.97l1.05 4.3c.2.83-.34 1.1-1.23.95l-3.05-.96c-.8-.23-.95-.9-.55-1.55L9.4 5.3c.66-.9 1.5-.7 1.1.08zM10.4 17.4l-2.9-1.7c-.72-.4-.65-1.1-.2-1.68l2.92-2.1c.6-.4 1.2-.24 1.44.36l1.1 3.1c.2.63-.44 1.5-2.36 2.02zm9.96-.8l-3.67-.85c-.8-.21-.88-.8-.5-1.3l2.74-2.36c.6-.5 1.25-.14 1.46.5l.8 2.85c.26.72-.03 1.38-.83 1.17zm-13.7.27l1.37-3.8c.25-.78.8-.87 1.35-.5l2.95 2c.6.44.51 1.1-.2 1.6l-3.08 1.62c-.9.43-1.77.24-2.39-.92z" />
                                </svg>
                              ) : filteredReviews[currentIndex].platform === 'facebook' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                                  <path fill="#FFB800" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              )}
                            </div>
                            <span className="text-[#6e6e73] capitalize">{filteredReviews[currentIndex].platform}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-[#6e6e73]">{formatRelativeDate(filteredReviews[currentIndex].date)}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Review Text Section */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="mb-3">
                            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
                              <path d="M14.4 24H8.4C8.4 17.364 13.764 12 20.4 12V16.8C16.416 16.8 13.2 20.016 13.2 24V24ZM32.4 24H26.4C26.4 17.364 31.764 12 38.4 12V16.8C34.416 16.8 31.2 20.016 31.2 24V24ZM20.4 24H14.4V31.2C14.4 34.944 17.436 38.4 21.6 38.4C25.764 38.4 28.8 34.944 28.8 31.2H24C24 32.736 22.944 33.6 21.6 33.6C20.256 33.6 19.2 32.736 19.2 31.2V24ZM38.4 24H32.4V31.2C32.4 34.944 35.436 38.4 39.6 38.4C43.764 38.4 46.8 34.944 46.8 31.2H42C42 32.736 40.944 33.6 39.6 33.6C38.256 33.6 37.2 32.736 37.2 31.2V24Z" fill="currentColor" />
                            </svg>
                          </div>
                          
                          <p className="text-[#1d1d1f] text-lg md:text-xl font-light leading-relaxed mb-6">
                            {filteredReviews[currentIndex].reviewText}
                          </p>
                        </div>
                        
                        <div className="text-sm text-[#6e6e73]">
                          Service: <span className="font-medium">{filteredReviews[currentIndex].serviceType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Mobile swipe indicator */}
              <div className="md:hidden mt-6 flex justify-center">
                <div className="text-[#6e6e73] text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Swipe to navigate</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right navigation button - visible on desktop only */}
            {filteredReviews.length > 1 && (
              <div className="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10">
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Next review"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/reviews" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm"
            >
              <span>View All Reviews</span>
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppleTestimonialsSection; 