import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/data/blogData';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

/**
 * Get all blog posts from the content directory
 */
function getAllBlogPosts(): BlogPost[] {
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
      try {
        // Read markdown file as string
        const fullPath = path.join(BLOGS_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        let data, content;
        try {
          const parsed = matter(fileContents);
          data = parsed.data;
          content = parsed.content;
        } catch (error) {
          console.error(`Error parsing frontmatter in ${fileName}:`, error);
          // Return null to filter this post out later
          return null;
        }
        
        // Convert categories, tags, etc. to arrays if they're not already
        const ensureArray = (field: any) => {
          return Array.isArray(field) ? field : field ? [field] : [];
        };

        // Ensure author data is properly formatted
        const authorName = typeof data.author === 'object' && data.author?.name 
          ? data.author.name 
          : typeof data.author === 'string' 
            ? data.author 
            : 'Unknown Author';

        // Create blog post object
        const blogPost: BlogPost = {
          id: data.id || fileName.replace('.md', ''),
          title: data.title || 'Untitled Post',
          slug: data.slug || fileName.replace('.md', ''),
          excerpt: data.excerpt || '',
          content: content || '', // This is the markdown content
          publishDate: data.publishDate || new Date().toISOString().split('T')[0],
          author: {
            name: authorName
          },
          featuredImage: data.featuredImage || '/images/blog/default.jpg',
          categories: ensureArray(data.categories),
          tags: ensureArray(data.tags),
          relatedServices: ensureArray(data.relatedServices),
          relatedBrands: ensureArray(data.relatedBrands),
          relatedAreas: ensureArray(data.relatedAreas),
          readTime: data.readTime || 5,
        };

        return blogPost;
      } catch (error) {
        console.error(`Error processing blog post ${fileName}:`, error);
        return null;
      }
    })
    .filter(Boolean) as BlogPost[]; // Filter out any null entries from errors

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.publishDate) < new Date(b.publishDate)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function GET() {
  try {
    const posts = getAllBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 