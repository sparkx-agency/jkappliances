"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Common FAQs for the landing page
const faqs = [
  {
    id: 1,
    question: "How quickly can you repair my appliance?",
    answer: "In most cases, we can complete repairs within 24-48 hours of your initial contact. For common issues, our technicians often resolve the problem during the first visit. More complex repairs might require ordering specific parts, which could extend the timeline slightly."
  },
  {
    id: 2,
    question: "Do you provide a warranty on your repairs?",
    answer: "Yes, all our repairs come with a comprehensive warranty. We offer a 90-day warranty on labor and a full year warranty on replacement parts. This ensures your peace of mind and reflects our confidence in the quality of our service."
  },
  {
    id: 3,
    question: "What brands of appliances do you service?",
    answer: "We service all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, and many others. Our technicians are factory-trained and certified to work on a wide range of models and appliance types."
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We accept multiple payment methods for your convenience, including credit cards (Visa, MasterCard, American Express), debit cards, cash, and e-transfers. Payment is due upon completion of the service."
  },
  {
    id: 5,
    question: "Do you charge for service calls if the appliance can't be repaired?",
    answer: "If we diagnose your appliance and determine it cannot be repaired economically, we charge only a diagnostic fee. This fee will be applied as a credit toward a new appliance if you purchase through our referral partners."
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
            Common Questions
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Find answers to frequently asked questions about our appliance repair services
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
            Have more questions about our services?
            </p>
          <Link 
            href="/faq" 
            className="px-10 py-5 rounded-full bg-black text-white font-medium transition-all hover:bg-gray-800 shadow-sm inline-block"
          >
            View All FAQs
          </Link>
          </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 