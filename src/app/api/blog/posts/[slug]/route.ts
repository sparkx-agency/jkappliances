import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/data/blogData';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

/**
 * Get a specific blog post by slug
 */
function getBlogPostBySlug(slug: string): BlogPost | null {
  // Check if the directory exists
  if (!fs.existsSync(BLOGS_DIRECTORY)) {
    console.warn(`Blog directory not found: ${BLOGS_DIRECTORY}`);
    return null;
  }

  // Get all markdown files from the blogs directory
  const fileNames = fs.readdirSync(BLOGS_DIRECTORY);
  
  // Find the file with matching slug
  let matchingFile: string | undefined;
  
  try {
    matchingFile = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .find((fileName) => {
        try {
          const fullPath = path.join(BLOGS_DIRECTORY, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);
          return data.slug === slug;
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return false;
        }
      });
  } catch (error) {
    console.error('Error finding matching file:', error);
    return null;
  }
  
  if (!matchingFile) {
    // Try matching by filename if no slug match is found
    matchingFile = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .find((fileName) => fileName === `${slug}.md`);
      
    if (!matchingFile) {
      return null;
    }
  }
  
  // Read the file and parse its contents
  try {
    const fullPath = path.join(BLOGS_DIRECTORY, matchingFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    let data, content;
    try {
      const parsed = matter(fileContents);
      data = parsed.data;
      content = parsed.content;
    } catch (error) {
      console.error(`Error parsing frontmatter in ${matchingFile}:`, error);
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
      id: data.id || matchingFile.replace('.md', ''),
      title: data.title || 'Untitled Post',
      slug: data.slug || matchingFile.replace('.md', ''),
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
    console.error(`Error processing blog post ${matchingFile}:`, error);
    return null;
  }
}

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    // Properly destructure and await the params
    const { slug } = context.params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Missing slug parameter' },
        { status: 400 }
      );
    }
    
    const post = getBlogPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
} 