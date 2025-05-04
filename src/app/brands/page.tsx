"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Brand data - in a real app, this would come from a CMS or API
const brandsData = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.webp',
    description: 'From refrigerators to washing machines, we repair all Samsung home appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: true,
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.webp',
    description: 'Expert repair services for all LG kitchen and laundry appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: true,
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.webp',
    description: 'Specialized repair services for all Whirlpool appliance models.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: true,
  },
  {
    id: 'ge',
    name: 'GE',
    logo: '/images/brands/ge.webp',
    description: 'Comprehensive repair solutions for all GE appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: true,
  },
  {
    id: 'maytag',
    name: 'Maytag',
    logo: '/images/brands/maytag.webp',
    description: 'Reliable repairs for all Maytag appliances by our certified technicians.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers'],
    popular: true,
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire',
    logo: '/images/brands/frigidaire.webp',
    description: 'Quality repair services for all Frigidaire home appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: false,
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    logo: '/images/brands/kitchenaid.webp',
    description: 'Expert repairs for KitchenAid appliances and mixers.',
    categories: ['refrigerators', 'dishwashers', 'ovens', 'mixers'],
    popular: false,
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '/images/brands/bosch.webp',
    description: 'Professional repair services for premium Bosch appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: false,
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    logo: '/images/brands/electrolux.webp',
    description: 'Specialized repairs for all Electrolux appliance models.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: false,
  },
  {
    id: 'kenmore',
    name: 'Kenmore',
    logo: '/images/brands/kenmore.webp',
    description: 'Reliable repair solutions for all Kenmore appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: false,
  },
  {
    id: 'sub-zero',
    name: 'Sub-Zero',
    logo: '/images/brands/sub-zero.webp',
    description: 'Premium repair services for high-end Sub-Zero refrigeration units.',
    categories: ['refrigerators', 'freezers'],
    popular: false,
  },
  {
    id: 'wolf',
    name: 'Wolf',
    logo: '/images/brands/wolf.webp',
    description: 'Specialized repairs for professional-grade Wolf cooking appliances.',
    categories: ['ovens', 'ranges', 'cooktops'],
    popular: false,
  },
  {
    id: 'miele',
    name: 'Miele',
    logo: '/images/brands/miele.webp',
    description: 'Expert repair services for premium Miele appliances.',
    categories: ['washers', 'dryers', 'dishwashers', 'ovens', 'vacuum-cleaners'],
    popular: false,
  },
  {
    id: 'thermador',
    name: 'Thermador',
    logo: '/images/brands/thermador.webp',
    description: 'Professional repairs for luxury Thermador kitchen appliances.',
    categories: ['refrigerators', 'dishwashers', 'ovens', 'ranges', 'cooktops'],
    popular: false,
  },
  {
    id: 'amana',
    name: 'Amana',
    logo: '/images/brands/amana.webp',
    description: 'Affordable repair solutions for all Amana appliance models.',
    categories: ['refrigerators', 'washers', 'dryers', 'dishwashers', 'ovens'],
    popular: false,
  },
  {
    id: 'haier',
    name: 'Haier',
    logo: '/images/brands/haier.webp',
    description: 'Complete repair services for Haier home appliances.',
    categories: ['refrigerators', 'washers', 'dryers', 'air-conditioners'],
    popular: false,
  },
];

// Appliance categories for filtering
const categories = [
  { id: 'all', name: 'All Brands' },
  { id: 'refrigerators', name: 'Refrigerators' },
  { id: 'washers', name: 'Washing Machines' },
  { id: 'dryers', name: 'Dryers' },
  { id: 'dishwashers', name: 'Dishwashers' },
  { id: 'ovens', name: 'Ovens & Ranges' },
];

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter brands based on search term and selected category
  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brand.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Group brands: popular ones first, then the rest
  const popularBrands = filteredBrands.filter(brand => brand.popular);
  const otherBrands = filteredBrands.filter(brand => !brand.popular);

  return (
    <div className="pt-32 bg-white min-h-screen">
      {/* Hero Section - Apple-style clean and minimal hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 tracking-tight mb-8">
              Brands We Service
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Our certified technicians are experts at repairing appliances from all major manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section - Clean, spacious filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Category Pills */}
            <div className="w-full md:w-auto flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="w-full md:w-auto relative">
              <input
                type="text"
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-5 py-3 pl-12 rounded-full border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all"
              />
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      {popularBrands.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold text-gray-900 mb-16 text-center"
            >
              Popular Brands
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {popularBrands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/brands/${brand.id}`} className="block">
                    <div className="bg-gray-50 rounded-3xl p-8 transition-all hover:shadow-lg h-full flex flex-col items-center text-center">
                      <div className="w-32 h-20 relative mb-8 flex items-center justify-center">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={120}
                          height={80}
                          className="object-contain transition-transform group-hover:scale-110 duration-500"
                        />
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4">{brand.name}</h3>
                      <p className="text-gray-500 font-light mb-6">{brand.description}</p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-black font-medium group-hover:underline">
                          View services
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Brands Section */}
      {otherBrands.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold text-gray-900 mb-16 text-center"
            >
              Additional Brands We Service
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherBrands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/brands/${brand.id}`} className="block">
                    <div className="bg-white rounded-2xl p-6 transition-all hover:shadow-md h-full flex flex-col items-center text-center">
                      <div className="w-24 h-16 relative mb-4 flex items-center justify-center">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={80}
                          height={60}
                          className="object-contain transition-transform group-hover:scale-110 duration-500"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{brand.name}</h3>
                      <p className="text-sm text-gray-500 font-light line-clamp-2">{brand.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results Message */}
      {filteredBrands.length === 0 && (
        <div className="py-32 text-center">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-medium text-gray-900 mb-3">No brands found</h3>
          <p className="text-gray-500 text-lg font-light max-w-md mx-auto">
            We couldn&apos;t find any brands matching your search criteria. Please try a different search or filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f2f7fd] rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">
            Don't see your brand?
            </h2>
            <p className="text-lg text-[#424245] max-w-3xl mx-auto mb-10 leading-relaxed">
              We service most major appliance brands, even if not listed above. Contact us with your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/book" 
                className="px-8 py-4 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-all shadow-lg"
              >
                Book a Repair
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#e5e5ea] text-[#1d1d1f] rounded-full font-medium hover:bg-[#d1d1d6] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
     

     
    </div>
  );
} 