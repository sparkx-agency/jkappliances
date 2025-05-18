import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

export async function GET() {
  try {
    // Check if the directory exists
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      console.warn(`Blog directory not found: ${BLOGS_DIRECTORY}`);
      return NextResponse.json({ posts: [] });
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
          return Array.isArray(field) ? field : field ? [field] : [];
        };

        // Create blog post object
        return {
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
      });

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => {
      if (new Date(a.publishDate) < new Date(b.publishDate)) {
        return 1;
      } else {
        return -1;
      }
    });

    return NextResponse.json({ posts: sortedPosts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 