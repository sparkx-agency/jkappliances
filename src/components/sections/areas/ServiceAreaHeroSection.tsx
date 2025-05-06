"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceAreaHeroSectionProps {
  areaName: string;
  fullAreaName?: string;
  heroImage: string;
  description?: string;
  phone?: string;
}

const ServiceAreaHeroSection = ({
  areaName,
  fullAreaName,
  heroImage,
  description = "Fast, reliable appliance repair services with same-day service available.",
  phone = "647-560-8966"
}: ServiceAreaHeroSectionProps) => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
              Appliance Repair in {areaName}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {description} Serving all neighborhoods in the {fullAreaName || areaName} area.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/book" 
                className="px-8 py-4 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm text-lg"
              >
                Book a Repair
              </Link>
              <Link 
                href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                className="px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium transition-all hover:bg-gray-200 text-lg"
              >
                Call {phone}
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={heroImage}
                alt={`${areaName} Appliances`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaHeroSection; 