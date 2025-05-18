import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    
    // Check if the directory exists
    if (!fs.existsSync(BLOGS_DIRECTORY)) {
      return NextResponse.json(
        { error: 'Blog directory not found' },
        { status: 404 }
      );
    }

    // Get all markdown files from the blogs directory
    const fileNames = fs.readdirSync(BLOGS_DIRECTORY);
    const blogFilename = fileNames.find(
      (fileName) => fileName.endsWith('.md') && fileName.includes(slug)
    );

    if (!blogFilename) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Read markdown file as string
    const fullPath = path.join(BLOGS_DIRECTORY, blogFilename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Convert categories, tags, etc. to arrays if they're not already
    const ensureArray = (field: any) => {
      return Array.isArray(field) ? field : field ? [field] : [];
    };

    // Create blog post object
    const post = {
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

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
} 