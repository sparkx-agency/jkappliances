"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogCategories, blogPosts } from '@/data/blogData';

// Main Blog Page - Lists all blog posts with filtering options
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Format date to a readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Filter posts by category and search term
  const filteredPosts = blogPosts
    .filter(post => activeCategory ? post.categories.includes(activeCategory) : true)
    .filter(post => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Appliance Repair Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert advice, maintenance tips, and troubleshooting guides for all your appliance needs
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 px-6 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl -mt-6">
        {/* Category Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Post (latest post) */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <Link href={`/blog/${filteredPosts[0].slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                <div className="relative h-72 lg:h-auto">
                  <Image
                    src={filteredPosts[0].featuredImage}
                    alt={filteredPosts[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      {filteredPosts[0].categories.slice(0, 2).map((categoryId) => {
                        const category = blogCategories.find(c => c.id === categoryId);
                        return (
                          <span 
                            key={categoryId}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                          >
                            {category?.name || categoryId}
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">{formatDate(filteredPosts[0].publishDate)}</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-gray-700 transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mt-auto">
                    {filteredPosts[0].author.avatar ? (
                      <Image 
                        src={filteredPosts[0].author.avatar} 
                        alt={filteredPosts[0].author.name}
                        width={40} 
                        height={40} 
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {filteredPosts[0].author.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{filteredPosts[0].author.name}</p>
                      <p className="text-xs text-gray-500">{filteredPosts[0].readTime} min read</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      {post.categories.slice(0, 2).map((categoryId) => {
                        const category = blogCategories.find(c => c.id === categoryId);
                        return (
                          <span 
                            key={categoryId}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                          >
                            {category?.name || categoryId}
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">{formatDate(post.publishDate)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mt-auto">
                    {post.author.avatar ? (
                      <Image 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        width={32} 
                        height={32} 
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {post.author.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.readTime} min read</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory(null);
              }}
              className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 