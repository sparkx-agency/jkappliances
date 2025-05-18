"use client";

import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogAdminPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const markdownInputRef = useRef<HTMLTextAreaElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    categories: '',
    tags: '',
    author: '',
    readTime: 5,
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate slug from title
  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    setFormData(prev => ({
      ...prev,
      slug
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setError('');

    try {
      // Validate form
      if (!formData.title || !formData.slug || !formData.excerpt || !markdownInputRef.current?.value) {
        throw new Error('Please fill in all required fields');
      }

      // Get the markdown content
      const markdownContent = markdownInputRef.current?.value;
      
      // Get the image file
      const imageFile = fileInputRef.current?.files?.[0];
      
      // Create form data for API request
      const apiFormData = new FormData();
      apiFormData.append('title', formData.title);
      apiFormData.append('slug', formData.slug);
      apiFormData.append('excerpt', formData.excerpt);
      apiFormData.append('content', markdownContent);
      apiFormData.append('categories', formData.categories);
      apiFormData.append('tags', formData.tags);
      apiFormData.append('author', formData.author || 'Admin');
      apiFormData.append('readTime', formData.readTime.toString());
      
      if (imageFile) {
        apiFormData.append('image', imageFile);
      }
      
      // Send the data to our API endpoint
      const response = await fetch('/api/blog/upload', {
        method: 'POST',
        body: apiFormData,
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to create blog post');
      }
      
      // Show success message
      setMessage(`Blog post created successfully! Saved to ${result.filePath}`);
      
      // Reset form after successful submission
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        categories: '',
        tags: '',
        author: '',
        readTime: 5,
      });
      if (markdownInputRef.current) markdownInputRef.current.value = '';
      if (fileInputRef.current) fileInputRef.current.value = '';
      
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
          
          <p className="mb-8 text-gray-600">
            Use this form to create a new blog post. The content will be saved as a Markdown file in the
            <code className="bg-gray-100 px-2 py-1 rounded">src/content/blogs</code> directory.
          </p>
          
          {message && (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
              {message}
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  onBlur={generateSlug}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories (comma separated) *
                </label>
                <input
                  type="text"
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  placeholder="maintenance, troubleshooting"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated) *
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="refrigerator, cooling issues"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time (minutes)
                </label>
                <input
                  type="number"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Image will be saved to /public/images/blog/[slug].jpg
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content (Markdown) *
              </label>
              <textarea
                ref={markdownInputRef}
                rows={15}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono"
                placeholder="# Heading\n\nWrite your blog post content here using Markdown syntax."
                required
              />
            </div>
            
            <div className="flex justify-between items-center">
              <Link 
                href="/blog"
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </Link>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : 'Save Blog Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}