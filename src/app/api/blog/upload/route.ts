import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';

// Define the content directory paths
const BLOGS_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
const IMAGES_DIRECTORY = path.join(process.cwd(), 'public/images/blog');

// Ensure the directories exist
function ensureDirectoriesExist() {
  if (!fs.existsSync(BLOGS_DIRECTORY)) {
    fs.mkdirSync(BLOGS_DIRECTORY, { recursive: true });
  }
  
  if (!fs.existsSync(IMAGES_DIRECTORY)) {
    fs.mkdirSync(IMAGES_DIRECTORY, { recursive: true });
  }
}

// Create a markdown file with frontmatter
async function createMarkdownFile(data: any, content: string) {
  const { slug } = data;
  const filePath = path.join(BLOGS_DIRECTORY, `${slug}.md`);
  
  // Create frontmatter
  const frontmatter = [
    '---',
    ...Object.entries(data).map(([key, value]) => {
      // Handle nested objects and arrays
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          return `${key}:\n${value.map(item => `  - ${item}`).join('\n')}`;
        } else {
          return `${key}:\n${Object.entries(value).map(([k, v]) => `  ${k}: ${v}`).join('\n')}`;
        }
      }
      return `${key}: ${value}`;
    }),
    '---',
    '',
    content
  ].join('\n');
  
  await writeFile(filePath, frontmatter, 'utf8');
  return filePath;
}

// Save an uploaded image
async function saveImage(file: File, filename: string) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(IMAGES_DIRECTORY, filename);
  await writeFile(filePath, buffer);
  return `/images/blog/${filename}`;
}

export async function POST(request: NextRequest) {
  try {
    // Ensure directories exist
    ensureDirectoriesExist();
    
    // Parse the form data
    const formData = await request.formData();
    
    // Extract the blog data
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const categories = (formData.get('categories') as string).split(',').map(cat => cat.trim());
    const tags = (formData.get('tags') as string).split(',').map(tag => tag.trim());
    const author = formData.get('author') as string || 'Admin';
    const readTime = parseInt(formData.get('readTime') as string) || 5;
    
    // Handle the image upload
    const imageFile = formData.get('image') as File | null;
    let featuredImage = '/images/blog/default.jpg';
    
    if (imageFile) {
      const fileExtension = imageFile.name.split('.').pop() || 'jpg';
      const filename = `${slug}.${fileExtension}`;
      featuredImage = await saveImage(imageFile, filename);
    }
    
    // Create the blog post data
    const blogData = {
      id: slug,
      title,
      slug,
      excerpt,
      publishDate: new Date().toISOString().split('T')[0],
      author: {
        name: author
      },
      featuredImage,
      categories,
      tags,
      relatedServices: [],
      relatedBrands: [],
      relatedAreas: [],
      readTime
    };
    
    // Save the markdown file
    const filePath = await createMarkdownFile(blogData, content);
    
    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      filePath: filePath.replace(process.cwd(), ''),
      featuredImage
    });
    
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'An error occurred while creating the blog post'
      },
      { status: 500 }
    );
  }
}