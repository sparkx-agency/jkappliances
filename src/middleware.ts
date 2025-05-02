import { NextResponse, NextRequest } from 'next/server';

// Array of static file extensions that should be cached
const STATIC_FILE_EXTENSIONS = [
  'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp',
  'js', 'css', 'woff', 'woff2', 'ttf', 'eot',
  'ico', 'webmanifest'
];

// Check if a URL is for a static asset
const isStaticAsset = (url: string): boolean => {
  const extension = url.split('.').pop()?.toLowerCase() || '';
  return STATIC_FILE_EXTENSIONS.includes(extension);
};

// Redirects configuration
const redirects = [
  {
    source: '/services',
    destination: '/',
    permanent: true,
  },
];

// Brand specific redirects
const brandRedirects = [
  { source: '/brand/lg', destination: '/brands/lg' },
  { source: '/brand/samsung', destination: '/brands/samsung' },
  { source: '/brand/whirlpool', destination: '/brands/whirlpool' },
  { source: '/brand/ge', destination: '/brands/ge' },
  { source: '/brand/kitchenaid', destination: '/brands/kitchenaid' },
  { source: '/brand/bosch', destination: '/brands/bosch' },
]

// Main middleware function
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Check main redirects
  for (const redirect of redirects) {
    if (pathname === redirect.source) {
      return NextResponse.redirect(new URL(redirect.destination, request.url), {
        status: redirect.permanent ? 308 : 307,
      });
    }
  }

  // Check for service redirects
  if (pathname === '/services') {
    return NextResponse.redirect(new URL('/#services', request.url), {
      status: 308, // Permanent redirect
    });
  }

  // Check for brand redirects
  for (const redirect of brandRedirects) {
    if (pathname === redirect.source) {
      return NextResponse.redirect(new URL(redirect.destination, request.url), {
        status: 308, // Permanent redirect
      });
    }
  }

  const response = NextResponse.next();

  // Add caching headers for static assets
  if (isStaticAsset(pathname)) {
    // Cache static assets for 1 year (31536000 seconds)
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    // Set ETag for caching validation
    const etag = `W/"${Date.now().toString(16)}"`;
    response.headers.set('ETag', etag);
    
    // Add Vary header to tell browsers to cache based on Accept-Encoding
    response.headers.set('Vary', 'Accept-Encoding');
  } else {
    // For HTML and other non-static assets, use a shorter cache time
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  return response;
}

export const config = {
  matcher: [
    '/services',
    '/brand/:path*',
    // Add other paths that need middleware processing
  ],
}; 