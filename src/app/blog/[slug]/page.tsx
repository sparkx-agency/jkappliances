"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost, blogCategories } from '@/data/blogData';
import { markdownToHtml } from '@/utils/markdownToHtml';
import BlogSection from '@/components/sections/BlogSection';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Fetch the post with the matching slug from our API
    const loadPost = async () => {
      setIsLoading(true);
      try {
        // Fetch the main post
        const response = await fetch(`/api/blog/posts/${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            setPost(null);
            setError('Post not found');
          } else {
            throw new Error('Failed to fetch blog post');
          }
          return;
        }
        
        const foundPost = await response.json();
        
        // Convert markdown content to HTML
        const htmlContent = await markdownToHtml(foundPost.content);
        
        // Create a new post object with HTML content
        const postWithHtml = {
          ...foundPost,
          content: htmlContent
        };
        
        setPost(postWithHtml);
        setError(null);
        
        // Fetch related posts
        const allPostsResponse = await fetch('/api/blog/posts');
        if (allPostsResponse.ok) {
          const allPosts = await allPostsResponse.json();
          
          // Filter out the current post and find related posts
          const related = allPosts
            .filter((p: BlogPost) => p.id !== foundPost.id)
            .filter((p: BlogPost) => {
              // Check for matching categories or tags
              const hasMatchingCategory = p.categories.some(cat => 
                foundPost.categories.includes(cat));
              const hasMatchingTag = p.tags.some(tag => 
                foundPost.tags.includes(tag));
              const relatedByService = p.relatedServices.some(service => 
                foundPost.relatedServices.includes(service));
              const relatedByBrand = p.relatedBrands.some(brand => 
                foundPost.relatedBrands.includes(brand));
              
              return hasMatchingCategory || hasMatchingTag || relatedByService || relatedByBrand;
            })
            .sort((a: BlogPost, b: BlogPost) => {
              // Sort by relevance (number of matching categories and tags)
              const aMatchingCats = a.categories.filter(cat => 
                foundPost.categories.includes(cat)).length;
              const aMatchingTags = a.tags.filter(tag => 
                foundPost.tags.includes(tag)).length;
              const bMatchingCats = b.categories.filter(cat => 
                foundPost.categories.includes(cat)).length;
              const bMatchingTags = b.tags.filter(tag => 
                foundPost.tags.includes(tag)).length;
              
              return (bMatchingCats + bMatchingTags) - (aMatchingCats + aMatchingTags);
            })
            .slice(0, 3);
          
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPost();
  }, [slug]);
  
  // Format date to a readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="pt-32 pb-24 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }
  
  // Error or not found state
  if (error || !post) {
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
    <div className="pt-20 pb-24 bg-gray-50">
      {/* Hero Section with Featured Image */}
      <div className="w-full relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="relative h-72 md:h-96 w-full">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="p-6 md:p-10">
              {/* Categories */}
              <div className="flex flex-wrap items-center mb-4">
                {post.categories.map((categoryId) => {
                  const category = blogCategories.find(c => c.id === categoryId);
                  return (
                    <Link 
                      key={categoryId}
                      href={`/blog/category/${categoryId}`}
                    >
                      <span className="mr-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors">
                        {category?.name || categoryId}
                      </span>
                    </Link>
                  );
                })}
                <span className="text-sm text-gray-500 ml-auto">{formatDate(post.publishDate)}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              {/* Author & Reading Time */}
              <div className="flex items-center mb-6 text-sm text-gray-600">
                <span className="font-medium mr-4">By {post.author.name}</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} min read
                </span>
              </div>
              
              {/* Main Content */}
              <article className="prose prose-lg max-w-none prose-headings:text-blue-800 prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h3:text-lg prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700 prose-a:text-blue-600">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-gray-200">
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
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 text-xl font-bold mb-4 sm:mb-0 sm:mr-4">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.author.name}
                      </h3>
                      <p className="text-gray-600">
                        Appliance repair specialist with over 10 years of experience working with all major brands. Specializes in troubleshooting and repairing complex appliance issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="mt-8 flex items-center">
                <span className="text-gray-700 mr-4 font-medium">Share:</span>
                <div className="flex space-x-2">
                  <button aria-label="Share on Facebook" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button aria-label="Share on Twitter" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </button>
                  <button aria-label="Share via Email" className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-12 py-8 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Professional Appliance Repair?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Our certified technicians are ready to diagnose and fix your appliance issues quickly and affordably. We service all major brands.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Book a Service Call
          </Link>
        </div>
      </div>
      
      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{formatDate(relatedPost.publishDate)}</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Cities We Serve */}
      <div className="mt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Appliance Repair in These Cities</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Richmond Hill', 
              'Markham', 'Oakville', 'Burlington', 'Hamilton', 'Oshawa'].map(city => (
              <Link key={city} href={`/service-areas/${city.toLowerCase()}`} className="text-blue-700 hover:underline">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* More Articles Section */}
      <div className="mt-16">
        <BlogSection 
          title="More Appliance Repair Guides"
          subtitle="Explore more of our expert appliance repair guides and maintenance tips"
        />
      </div>
    </div>
  );
}