import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/data/blogData';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

/**
 * Get all blog posts from the content directory
 */
export function getAllBlogPosts(): BlogPost[] {
  // Check if the directory exists
  if (!fs.existsSync(BLOGS_DIRECTORY)) {
    console.warn(`Blog directory not found: ${BLOGS_DIRECTORY}`);
    return [];
  }

  // Get all markdown files from the blogs directory
  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(BLOGS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);
      
      // Convert categories, tags, etc. to arrays if they're not already
      const ensureArray = (field: any) => {
        return Array.isArray(field) ? field : [field];
      };

      // Create blog post object
      const blogPost: BlogPost = {
        id: data.id,
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: content, // This is the markdown content
        publishDate: data.publishDate,
        author: {
          name: data.author.name,
        },
        featuredImage: data.featuredImage,
        categories: ensureArray(data.categories),
        tags: ensureArray(data.tags),
        relatedServices: ensureArray(data.relatedServices),
        relatedBrands: ensureArray(data.relatedBrands),
        relatedAreas: ensureArray(data.relatedAreas),
        readTime: data.readTime,
      };

      return blogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.publishDate) < new Date(b.publishDate)) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get a specific blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get recent blog posts
 */
export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.slice(0, count);
}

/**
 * Get related posts based on categories and tags
 */
export function getRelatedPosts(currentPost: BlogPost, count: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  
  // Filter out the current post and find related posts
  const related = allPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => {
      // Check for matching categories or tags
      const hasMatchingCategory = post.categories.some(cat => 
        currentPost.categories.includes(cat));
      const hasMatchingTag = post.tags.some(tag => 
        currentPost.tags.includes(tag));
      const relatedByService = post.relatedServices.some(service => 
        currentPost.relatedServices.includes(service));
      const relatedByBrand = post.relatedBrands.some(brand => 
        currentPost.relatedBrands.includes(brand));
      
      return hasMatchingCategory || hasMatchingTag || relatedByService || relatedByBrand;
    })
    .sort((a, b) => {
      // Sort by relevance (number of matching categories and tags)
      const aMatchingCats = a.categories.filter(cat => 
        currentPost.categories.includes(cat)).length;
      const aMatchingTags = a.tags.filter(tag => 
        currentPost.tags.includes(tag)).length;
      const bMatchingCats = b.categories.filter(cat => 
        currentPost.categories.includes(cat)).length;
      const bMatchingTags = b.tags.filter(tag => 
        currentPost.tags.includes(tag)).length;
      
      return (bMatchingCats + bMatchingTags) - (aMatchingCats + aMatchingTags);
    })
    .slice(0, count);
  
  return related;
}