"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost, blogPosts, blogCategories, getRecentPosts } from '@/data/blogData';
import BlogSection from '@/components/sections/BlogSection';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Get related posts based on categories and tags
      const related = blogPosts
        .filter(p => p.id !== foundPost.id) // exclude current post
        .filter(p => {
          // Check for matching categories or tags
          const hasMatchingCategory = p.categories.some(cat => foundPost.categories.includes(cat));
          const hasMatchingTag = p.tags.some(tag => foundPost.tags.includes(tag));
          const relatedByService = p.relatedServices.some(service => foundPost.relatedServices.includes(service));
          const relatedByBrand = p.relatedBrands.some(brand => foundPost.relatedBrands.includes(brand));
          
          return hasMatchingCategory || hasMatchingTag || relatedByService || relatedByBrand;
        })
        .sort((a, b) => {
          // Sort by relevance (number of matching categories and tags)
          const aMatchingCats = a.categories.filter(cat => foundPost.categories.includes(cat)).length;
          const aMatchingTags = a.tags.filter(tag => foundPost.tags.includes(tag)).length;
          const bMatchingCats = b.categories.filter(cat => foundPost.categories.includes(cat)).length;
          const bMatchingTags = b.tags.filter(tag => foundPost.tags.includes(tag)).length;
          
          return (bMatchingCats + bMatchingTags) - (aMatchingCats + aMatchingTags);
        })
        .slice(0, 3); // Get top 3 related posts
      
      setRelatedPosts(related);
    }
  }, [slug]);
  
  // Format date to a readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Return to Blog
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              {post.categories.map((categoryId) => {
                const category = blogCategories.find(c => c.id === categoryId);
                return (
                  <Link 
                    key={categoryId}
                    href={`/blog/category/${categoryId}`}
                  >
                    <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
                      {category?.name || categoryId}
                    </span>
                  </Link>
                );
              })}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center mr-6">
                <span className="text-gray-700 font-medium">{post.author.name}</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{formatDate(post.publishDate)}</span>
                </div>
                
                <div className="flex items-center text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{post.readTime} min read</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">
                    About {post.author.name}
                  </h3>
                  <p className="text-gray-600 text-center sm:text-left">
                    {post.author.name} is an appliance repair specialist with over 10 years of experience working with all major brands. They specialize in troubleshooting and repairing complex appliance issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="mt-10 flex justify-center sm:justify-start">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Share this article:</span>
              <button aria-label="Share on Facebook" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </button>
              <button aria-label="Share on Twitter" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </button>
              <button aria-label="Share via Email" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative h-56 w-full">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-2">
                          {relatedPost.categories.slice(0, 1).map((categoryId) => {
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
                        <span className="text-xs text-gray-400 ml-auto">{formatDate(relatedPost.publishDate)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-gray-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <div className="mt-24 bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Need Professional Appliance Repair?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Our certified technicians are ready to diagnose and fix your appliance issues quickly and affordably. We service all major brands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/book" 
              className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Book a Service
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-white text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 