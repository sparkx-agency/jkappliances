"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "The technician arrived promptly and fixed our refrigerator the same day. Excellent service and very professional. I'll definitely use their services again.",
    author: "Sarah Thompson",
    location: "Toronto",
    rating: 5,
    image: "/images/testimonials/avatar-1.png",
  },
  {
    id: 2,
    text: "I was impressed with how quickly they diagnosed the issue with my washing machine. The repair was completed efficiently and it's working perfectly now.",
    author: "Michael Rodriguez",
    location: "Mississauga",
    rating: 5,
    image: "/images/testimonials/avatar-2.png",
  },
  {
    id: 3,
    text: "Professional, knowledgeable, and courteous service. The technician thoroughly explained what was wrong with our dryer and fixed it at a reasonable price.",
    author: "Jennifer Lee",
    location: "Markham",
    rating: 5,
    image: "/images/testimonials/avatar-3.png",
  },
  {
    id: 4,
    text: "I've used their services for both my refrigerator and dishwasher, and each time they've exceeded my expectations. Highly recommended!",
    author: "David Wilson",
    location: "Scarborough",
    rating: 5,
    image: "/images/testimonials/avatar-4.png",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover/focus
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    // Resume autoplay after user interaction
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="py-32 bg-white" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mt-3 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Read genuine feedback from customers who have experienced our appliance repair services
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-10 md:p-16 shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                    <path d="M14.4 24H8.4C8.4 17.364 13.764 12 20.4 12V16.8C16.416 16.8 13.2 20.016 13.2 24V24ZM32.4 24H26.4C26.4 17.364 31.764 12 38.4 12V16.8C34.416 16.8 31.2 20.016 31.2 24V24ZM20.4 24H14.4V31.2C14.4 34.944 17.436 38.4 21.6 38.4C25.764 38.4 28.8 34.944 28.8 31.2H24C24 32.736 22.944 33.6 21.6 33.6C20.256 33.6 19.2 32.736 19.2 31.2V24ZM38.4 24H32.4V31.2C32.4 34.944 35.436 38.4 39.6 38.4C43.764 38.4 46.8 34.944 46.8 31.2H42C42 32.736 40.944 33.6 39.6 33.6C38.256 33.6 37.2 32.736 37.2 31.2V24Z" fill="currentColor" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-6 italic font-light leading-relaxed">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-medium text-gray-900">{testimonials[activeIndex].author}</p>
                    <p className="text-gray-500">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 mb-8 font-light">
            Join thousands of satisfied customers who trust us with their appliance repairs
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-50 rounded-xl px-6 py-4 shadow-sm">
              <p className="text-4xl font-semibold text-gray-900 mb-2">4.9</p>
              <p className="text-sm text-gray-500">Google Reviews</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-6 py-4 shadow-sm">
              <p className="text-4xl font-semibold text-gray-900 mb-2">10k+</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="bg-gray-50 rounded-xl px-6 py-4 shadow-sm">
              <p className="text-4xl font-semibold text-gray-900 mb-2">15+</p>
              <p className="text-sm text-gray-500">Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 