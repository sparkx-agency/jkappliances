import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email } = data;
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Here you would integrate with your newsletter service
    // For example, using Mailchimp, SendGrid, ConvertKit, etc.
    
    // For now, just log the subscription
    console.log(`New newsletter subscription: ${email}`);
    
    // TODO: Add real newsletter integration
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 