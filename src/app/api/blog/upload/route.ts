import { NextResponse } from 'next/server';
import { saveBlogPost } from '@/lib/blog-utils';

export async function POST(request: Request) {
  try {
    // Get the form data
    const formData = await request.formData();
    
    // Extract data from form
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const categories = formData.get('categories') as string;
    const tags = formData.get('tags') as string;
    const author = formData.get('author') as string || 'Admin';
    const readTime = parseInt(formData.get('readTime') as string) || 5;
    const image = formData.get('image') as File | null;
    
    // Validate required fields
    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Save the blog post
    const result = await saveBlogPost(
      slug,
      title,
      excerpt,
      content,
      author,
      readTime,
      categories,
      tags,
      image || undefined
    );
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog post saved successfully',
      filePath: result.filePath
    });
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save blog post' },
      { status: 500 }
    );
  }
} 