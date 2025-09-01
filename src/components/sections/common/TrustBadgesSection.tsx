"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const TrustBadgesSection = () => {
  const trustBadges = [
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your protection"
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      description: "Consistently rated 5 stars by our customers"
    },
    {
      icon: "⚡",
      title: "Same-Day Service",
      description: "Most repairs completed the same day"
    },
    {
      icon: "🔧",
      title: "Certified Technicians",
      description: "Factory-trained and certified technicians"
    },
    {
      icon: "💰",
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises"
    },
    {
      icon: "📋",
      title: "1-Year Warranty",
      description: "Full warranty on parts and labor"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ApplianceServicePlus.ca?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best appliance repair experience with transparent pricing and guaranteed results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-gray-600">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by Thousands of Customers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600">Same-Day Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  BBB Accredited
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Same-Day Service
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1-Year Warranty
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;