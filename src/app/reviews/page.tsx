"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { reviews, getAverageRating, getReviewCountByPlatform } from '@/data/reviews';

// Review platforms with their brand colors - using more neutral colors for Apple aesthetic
const platforms = [
  { id: 'google', name: 'Google', color: '#4285F4', logo: '/images/logos/google.webp' },
  { id: 'yelp', name: 'Yelp', color: '#FF1A1A', logo: '/images/logos/yelp.webp' },
  { id: 'facebook', name: 'Facebook', color: '#1877F2', logo: '/images/logos/facebook.webp' },
  { id: 'homestars', name: 'HomeStars', color: '#F8B333', logo: '/images/logos/homestars.webp' },
  { id: 'all', name: 'All Reviews', color: '#000000', logo: null }
];

const ReviewsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSort, setActiveSort] = useState('recent');
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for parallax and blur effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Filter reviews based on selected platform and search term
  useEffect(() => {
    let result = [...reviews];
    
    // Filter by platform
    if (selectedPlatform !== 'all') {
      result = result.filter(review => review.platform === selectedPlatform);
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(review => 
        review.reviewText.toLowerCase().includes(searchLower) ||
        review.name.toLowerCase().includes(searchLower) ||
        review.location.toLowerCase().includes(searchLower) ||
        review.serviceType.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort the reviews
    if (activeSort === 'recent') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredReviews(result);
  }, [selectedPlatform, searchTerm, activeSort]);
  
  // Calculate average rating
  const averageRating = getAverageRating();
  
  // Function to render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          i < Math.floor(rating)
            ? <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            : i < Math.ceil(rating) && rating % 1 !== 0
              ? (
                <div key={i} className="relative w-5 h-5">
                  <StarOutlineIcon className="w-5 h-5 text-yellow-400 absolute" />
                  <div className="overflow-hidden absolute" style={{ width: `${(rating % 1) * 100}%` }}>
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              )
              : <StarOutlineIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
    );
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Calculate blur intensity for frosted glass effect
  const blurIntensity = Math.min(scrollY / 100, 20);
  
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header with subtle parallax effect */}
      <div 
        ref={headerRef}
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ 
          background: 'rgba(255,255,255,0.8)'
        }}
      >
        {/* Background gradient blob - Apple style */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-[30%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40"
            style={{ 
              transform: `translate(0, ${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})`,
              filter: 'blur(70px)',
              opacity: 0.7 - scrollY * 0.001
            }}
          />
          <div 
            className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100/30 to-red-100/30"
            style={{ 
              transform: `translate(${scrollY * 0.15}px, 0)`,
              filter: 'blur(60px)',
              opacity: 0.5 - scrollY * 0.001
            }}
          />
        </div>
        
        {/* Content with frosted glass effect */}
        <div 
          className="relative container mx-auto px-6 text-center z-10"
          style={{ 
            backdropFilter: `blur(${blurIntensity}px)`,
            WebkitBackdropFilter: `blur(${blurIntensity}px)`
          }}
        >
          <motion.h1 
            className="text-5xl font-medium tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            Customer Reviews
          </motion.h1>
          
          <motion.p 
            className="text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            See what our customers are saying about our appliance repair services
          </motion.p>
          
          {/* Rating Summary */}
          <motion.div 
            className="mt-16 mb-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center mb-4">
              {renderStars(averageRating)}
              <span className="ml-4 text-4xl font-light text-gray-900">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-500 font-light">Based on {reviews.length} reviews</p>
            
            {/* Platform counts */}
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm text-gray-500">
              {Object.entries(getReviewCountByPlatform()).map(([platform, count]) => (
                platform !== 'total' && count > 0 ? (
                  <span key={platform} className="flex items-center">
                    <span className="w-2 h-2 rounded-full mr-1.5" style={{ 
                      backgroundColor: platforms.find(p => p.id === platform)?.color || '#ccc' 
                    }}></span>
                    {count} on {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </span>
                ) : null
              ))}
            </div>
          </motion.div>
          
          {/* Platform links with icons (Apple-style) */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {platforms.map((platform, index) => (
              <motion.button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex items-center px-5 py-3 rounded-full transition-all duration-300 ease-out ${
                  selectedPlatform === platform.id
                    ? 'bg-white scale-105'
                    : 'bg-white/70 hover:bg-white hover:scale-[1.02]'
                }`}
                style={{
                  boxShadow: selectedPlatform === platform.id
                    ? '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.01)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {platform.logo && (
                  <div className="w-6 h-6 mr-3 relative">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="24px"
                      className="rounded-full"
                    />
                  </div>
                )}
                <span className={`font-medium ${
                  selectedPlatform === platform.id ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {platform.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Search and Filter Section (Apple-style) */}
      <div className="sticky top-20 z-10 backdrop-blur-lg bg-white/70">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search bar - Apple Design */}
            <div className="relative w-full md:w-auto md:flex-grow md:max-w-lg">
              <input
                type="text"
                placeholder="Search reviews"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full bg-[#F5F5F7] border-0 focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all duration-300"
                style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Sort buttons - Apple Design */}
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm font-medium">Sort:</span>
              <div className="bg-[#F5F5F7] p-0.5 rounded-full flex">
                <button
                  onClick={() => setActiveSort('recent')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSort === 'recent'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Recent
                </button>
                <button
                  onClick={() => setActiveSort('rating')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSort === 'rating'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Highest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Grid - Apple Design */}
      <div className="container mx-auto px-6 py-16">
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 + (index % 6) * 0.05, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                style={{ 
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.02)'
                }}
              >
                {/* Review Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    
                    {/* Platform logo - styled for emphasis */}
                    {platforms.find(p => p.id === review.platform)?.logo && (
                      <div 
                        className="w-12 h-12 relative p-1.5 rounded-full bg-white flex-shrink-0"
                        style={{ 
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                          border: '1px solid rgba(0, 0, 0, 0.03)' 
                        }}
                      >
                        <Image
                          src={platforms.find(p => p.id === review.platform)?.logo || ''}
                          alt={`${review.platform} Review`}
                            fill
                          style={{ objectFit: 'contain', padding: '2px' }}
                          sizes="48px"
                          className="rounded-full"
                          />
                        </div>
                      )}
                  </div>
                  
                  {/* Rating and date */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 ml-2">{formatDate(review.date)}</p>
                  </div>
                  
                  {/* Service type */}
                  <div className="mb-6">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                      {review.serviceType}
                    </span>
                    {review.verified && (
                      <span className="inline-block bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full font-medium ml-2">
                        <span className="inline-flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified
                        </span>
                      </span>
                    )}
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light flex-grow">{review.reviewText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No reviews found</h3>
            <p className="text-gray-500 max-w-md mx-auto text-sm font-light">
              We couldn't find any reviews matching your current filters. Try adjusting your search or browsing all reviews.
            </p>
            <motion.button
              onClick={() => {
                setSelectedPlatform('all');
                setSearchTerm('');
              }}
              className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Reviews
            </motion.button>
          </motion.div>
        )}
      </div>
      
      {/* Review CTA - Apple Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Share your experience</h2>
            <p className="text-gray-500 mb-10 font-light">
              Had a great experience with our service? Your feedback helps others find reliable appliance repair and helps us improve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://g.page/r/jk-appliance-repair/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium transition-all duration-300 hover:shadow-md"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
              >
                <div className="w-5 h-5 mr-2 relative">
                  <Image
                    src="/images/logos/google.webp"
                    alt="Google"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                Review on Google
              </a>
              <a 
                href="https://www.yelp.com/biz/jk-appliance-repair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium transition-all duration-300 hover:shadow-md"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
              >
                <div className="w-5 h-5 mr-2 relative">
                  <Image
                    src="/images/logos/yelp.webp"
                    alt="Yelp"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                Review on Yelp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage; 