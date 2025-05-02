'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
  className?: string;
}

export default function FaqSection({ title, faqs, className = '' }: FaqSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Create FAQ structured data for SEO
  const createFaqStructuredData = () => {
    const mainEntity = faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': mainEntity
    };
  };

  return (
    <section className={`py-16 ${className}`}>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFaqStructuredData())
        }}
      />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 pr-12">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 