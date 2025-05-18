'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogMeta, Author } from '@/lib/blog-utils';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog/posts');
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || 'Failed to fetch blog posts');
        }
        
        setBlogPosts(data.posts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert tips, insights, and guides to help you maintain and repair your appliances.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6 max-w-3xl mx-auto">
            <p>{error}</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">No blog posts yet</h2>
            <p className="text-gray-600">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to get displayable author name
const getAuthorDisplay = (author: Author): string => {
  if (typeof author === 'string') {
    return author;
  }
  if (author && typeof author === 'object' && 'name' in author) {
    return author.name;
  }
  return 'Admin';
};

function BlogPostCard({ post }: { post: BlogMeta }) {
  const authorDisplay = getAuthorDisplay(post.author);
  
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-56 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority={false}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readTime} min read</span>
          </div>
          
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.slice(0, 3).map((category, index) => (
              <span key={index} className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-700 font-medium">Read more</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
} 