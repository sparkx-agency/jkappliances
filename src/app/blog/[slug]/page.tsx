'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BlogPost, Author } from '@/lib/blog-utils';
import ReactMarkdown from 'react-markdown';
import ModernCTASection from '@/components/sections/common/ModernCTASection';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [slug, setSlug] = useState<string | null>(null);

  // Set the slug from params
  useEffect(() => {
    const getSlug = async () => {
      try {
        // Await the params promise
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
      } catch (err) {
        console.error('Error resolving params:', err);
        setError('Failed to load page parameters');
      }
    };
    
    getSlug();
  }, [params]);

  // Fetch blog post when slug is available
  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetch(`/api/blog/posts/${slug}`);
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || 'Failed to fetch blog post');
        }
        
        setPost(data.post);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 text-red-800 p-6 rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Error Loading Blog Post</h1>
            <p className="mb-4">{error || 'Blog post not found'}</p>
            <Link
              href="/blog"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Extract author name for display
  const getAuthorDisplay = (author: Author): string => {
    if (typeof author === 'string') {
      return author;
    }
    if (author && typeof author === 'object' && 'name' in author) {
      return author.name;
    }
    return 'Admin';
  };

  const authorDisplay = getAuthorDisplay(post.author);

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="mr-6">
                <span className="block text-sm font-medium">By {authorDisplay}</span>
                <span className="block text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div>
                <span className="block text-sm font-medium">{post.readTime} min read</span>
                <div className="flex gap-2 mt-1">
                  {post.categories.slice(0, 2).map((category, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </header>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        <ModernCTASection />
      </div>
    </div>
  );
} 