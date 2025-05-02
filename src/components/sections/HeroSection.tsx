"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
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
            <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
              Expert Appliance<br />Repair Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Professional, reliable, and affordable repair services for all major home appliances.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
              href="/book" 
                className="px-8 py-4 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm text-lg"
            >
                Book a Repair
              </Link>
              <Link 
              href="tel:647-560-8966" 
                className="px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium transition-all hover:bg-gray-200 text-lg"
            >
                Call 647-560-8966
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative h-[400px] w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl">
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
            className="text-center"
          >
            <p className="text-4xl font-semibold text-gray-900 mb-2">10k+</p>
            <p className="text-gray-500 font-light">Satisfied Customers</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl font-semibold text-gray-900 mb-2">15+</p>
            <p className="text-gray-500 font-light">Years Experience</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-4xl font-semibold text-gray-900 mb-2">90%</p>
            <p className="text-gray-500 font-light">Same-Day Repairs</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-4xl font-semibold text-gray-900 mb-2">1 Year</p>
            <p className="text-gray-500 font-light">Service Warranty</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 