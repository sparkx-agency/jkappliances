import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog-utils';

export async function GET() {
  try {
    const posts = getAllBlogPosts();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 