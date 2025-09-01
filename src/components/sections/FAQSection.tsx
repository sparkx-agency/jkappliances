"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Common FAQs for the landing page
const faqs = [
  {
    id: 1,
    question: "Do you offer same-day appliance repair service?",
    answer: "Yes! We offer same-day service for most appliance repairs. Our technicians are available 7 days a week and can often complete repairs the same day you call. For urgent repairs, we prioritize same-day service to get your appliances working quickly."
  },
  {
    id: 2,
    question: "What warranty do you provide on repairs?",
    answer: "We provide a comprehensive 1-year warranty on all parts and labor. This includes both the replacement parts and the work performed. Our warranty covers any defects in materials or workmanship, giving you complete peace of mind."
  },
  {
    id: 3,
    question: "How much does appliance repair cost?",
    answer: "Our pricing is transparent and competitive. We offer free estimates and don't charge hidden fees. Most repairs range from $150-$400 depending on the appliance and issue. We'll provide a detailed quote before starting any work."
  },
  {
    id: 4,
    question: "What brands of appliances do you repair?",
    answer: "We repair all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, and many others. Our certified technicians are trained on all major brands and models."
  },
  {
    id: 5,
    question: "Are your technicians licensed and insured?",
    answer: "Absolutely! All our technicians are licensed, bonded, and insured. We're also BBB accredited and carry full liability insurance to protect your home and our technicians during repairs."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, cash, and e-transfers. Payment is due upon completion of the service, and we provide detailed invoices for all work performed."
  }
];

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Get answers to common questions about our same-day appliance repair services
          </p>
        </motion.div>

          <div className="space-y-4">
          {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm"
              >
                <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full text-left px-8 py-6 focus:outline-none"
                >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        openQuestion === faq.id ? 'rotate-45' : ''
                    }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </div>
                </button>
              
              {openQuestion === faq.id && (
                    <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                    >
                  <p className="text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                  </p>
                    </motion.div>
                  )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
          >
          <p className="text-gray-700 mb-6 font-light">
            Ready to book your same-day appliance repair?
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
            >
              Book Same-Day Repair
            </Link>
            <Link 
              href="tel:647-560-8966" 
              className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold transition-all hover:bg-green-700 shadow-lg hover:shadow-xl inline-block transform hover:scale-105"
            >
              Call Now: 647-560-8966
            </Link>
          </div>
          </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 