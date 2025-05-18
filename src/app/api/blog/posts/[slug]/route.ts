import { NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/lib/blog-utils';

// Updated type definition to match Next.js 15 expectations
type Params = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Params) {
  try {
    // Await the params Promise to get the actual values
    const { slug } = await params;
    
    const post = getBlogPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error(`Error fetching blog post:`, error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
} 