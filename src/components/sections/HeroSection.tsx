"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import OptimizedImage from '@/components/ui/OptimizedImage';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
              Same-Day Appliance<br />Repair Service
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Professional, reliable, and affordable repair services for all major home appliances. <span className="font-semibold text-blue-600">Same-day service available!</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Same-Day Service
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                1-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Certified Technicians
              </div>
            </div>
            <div className="flex flex-nowrap gap-4 justify-center">
              <Link 
              href="/book" 
                className="px-8 sm:px-10 py-4 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl text-lg whitespace-nowrap transform hover:scale-105"
            >
                Book Same-Day Repair
              </Link>
              <Link 
              href="tel:647-560-8966" 
                className="px-8 sm:px-10 py-4 rounded-full bg-green-600 text-white font-semibold transition-all hover:bg-green-700 shadow-lg hover:shadow-xl text-lg whitespace-nowrap transform hover:scale-105"
            >
                Call Now: 647-560-8966
              </Link>
            </div>
            
            {/* HomeStars Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex justify-center"
            >
              <Link 
                href="https://www.homestars.com/profile/2976736-jk-appliance-repair-inc" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-transform hover:scale-105 duration-300 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md"
                title="View our HomeStars profile"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Image 
                    src="/images/homestars.svg" 
                    alt="HomeStars Top Rated Service" 
                    width={140} 
                    height={56}
                    className="h-auto w-auto sm:w-160"
                    priority
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative h-[200px] sm:h-[400px] w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
            <OptimizedImage 
              src="/images/hero-image.webp" 
              alt="Appliance repair technician" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-4xl font-bold text-blue-600 mb-2">15k+</p>
            <p className="text-gray-700 font-medium">Happy Customers</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-4xl font-bold text-green-600 mb-2">20+</p>
            <p className="text-gray-700 font-medium">Years Experience</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-4xl font-bold text-orange-600 mb-2">95%</p>
            <p className="text-gray-700 font-medium">Same-Day Service</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-4xl font-bold text-purple-600 mb-2">1 Year</p>
            <p className="text-gray-700 font-medium">Full Warranty</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 