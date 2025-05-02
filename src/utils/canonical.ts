import { getBaseUrl } from './environment';

/**
 * Generates a canonical URL for the given path
 * @param path The path to generate a canonical URL for
 * @returns The canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = getBaseUrl();
  
  // Remove trailing slash if present (unless it's the homepage)
  const normalizedPath = path === '/' 
    ? path 
    : path.endsWith('/') 
      ? path.slice(0, -1) 
      : path;
  
  // Generate the canonical URL
  return `${baseUrl}${normalizedPath}`;
} 