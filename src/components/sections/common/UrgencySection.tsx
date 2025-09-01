"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until end of business day (6 PM)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(18, 0, 0, 0); // 6 PM

      // If it's past 6 PM, set to next day
      if (now > endOfDay) {
        endOfDay.setDate(endOfDay.getDate() + 1);
      }

      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⚡ Same-Day Service Available Today!
            </h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Book now to secure your same-day repair slot
            </p>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Hours</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold">:</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Minutes</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold">:</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Seconds</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mt-4">
              Until end of business day
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Same-Day Service</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">No Extra Fees</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">1-Year Warranty</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/book"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Same-Day Repair
            </Link>
            <Link 
              href="tel:647-560-8966"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
            >
              Call Now: 647-560-8966
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm opacity-80 mt-6"
          >
            Limited same-day slots available. Book now to avoid waiting!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;