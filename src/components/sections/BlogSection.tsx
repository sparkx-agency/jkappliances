"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BlogPost, 
  blogCategories,
  getRelatedPostsByService,
  getRelatedPostsByBrand,
  getRelatedPostsByArea,
  getRecentPosts
} from '@/data/blogData';

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  serviceId?: string;
  brandId?: string;
  areaId?: string;
  showCategories?: boolean;
  limit?: number;
  viewAllLink?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Helpful Appliance Tips & Guides",
  subtitle = "Expert advice on maintenance, troubleshooting, and getting the most from your appliances",
  serviceId,
  brandId,
  areaId,
  showCategories = false,
  limit = 3,
  viewAllLink = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get blog posts based on context (service, brand, or area)
  const getBlogPosts = (): BlogPost[] => {
    if (serviceId) {
      return getRelatedPostsByService(serviceId, limit);
    } else if (brandId) {
      return getRelatedPostsByBrand(brandId, limit);
    } else if (areaId) {
      return getRelatedPostsByArea(areaId, limit);
    } else {
      return getRecentPosts(limit);
    }
  };
  
  const blogPosts = getBlogPosts();
  
  // If there are no blog posts, don't render the section
  if (!blogPosts.length) return null;
  
  // Format date to a readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Category Filters (Optional) */}
        {showCategories && (
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
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
        )}
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts
            .filter(post => activeCategory ? post.categories.includes(activeCategory) : true)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        
        {/* View All Link */}
        {viewAllLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Link
              href={
                serviceId 
                  ? `/blog/service/${serviceId}` 
                  : brandId 
                    ? `/blog/brand/${brandId}` 
                    : areaId 
                      ? `/blog/area/${areaId}` 
                      : '/blog'
              }
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-900 hover:bg-gray-50 transition-colors"
            >
              View all articles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 