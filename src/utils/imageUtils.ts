/**
 * Get the file extension from a file path
 * @param path - The file path
 * @returns The file extension
 */
export const getFileExtension = (path: string): string => {
  return path.split('.').pop()?.toLowerCase() || '';
};

/**
 * Get the base path without extension
 * @param path - The file path
 * @returns The base path without extension
 */
export const getBasePathWithoutExtension = (path: string): string => {
  const extension = getFileExtension(path);
  if (!extension) return path;
  return path.slice(0, -(extension.length + 1)); // +1 for the dot
};

/**
 * Generate a responsive image set path for Next.js Image component
 * For use with the OptimizedImage component
 * 
 * @param imagePath - The original image path
 * @param size - The size variant ("sm", "md", "lg", etc.)
 * @param preferWebp - Whether to prefer WebP format if available
 * @returns The optimized image path
 */
export const getResponsiveImagePath = (
  imagePath: string, 
  size: 'sm' | 'md' | 'lg' = 'md',
  preferWebp = true
): string => {
  // If the path already includes a size indicator, return it as is
  if (imagePath.includes('-sm.') || imagePath.includes('-md.') || imagePath.includes('-lg.')) {
    return imagePath;
  }

  const extension = getFileExtension(imagePath);
  const basePath = getBasePathWithoutExtension(imagePath);
  
  // If WebP is preferred and source isn't already WebP, check if WebP version exists
  if (preferWebp && extension !== 'webp') {
    const webpPath = `${basePath}-${size}.webp`;
    // In a real app, you would check if this file exists
    // Here we'll assume if we're calling this function, the optimized versions exist
    return webpPath;
  }
  
  // Otherwise return the sized version with original extension
  return `${basePath}-${size}.${extension}`;
};

/**
 * Get a set of responsive image paths for different screen sizes
 * 
 * @param imagePath - The original image path
 * @returns Object with sm, md, and lg paths
 */
export const getResponsiveImageSet = (imagePath: string): {
  sm: string;
  md: string;
  lg: string;
} => {
  return {
    sm: getResponsiveImagePath(imagePath, 'sm'),
    md: getResponsiveImagePath(imagePath, 'md'),
    lg: getResponsiveImagePath(imagePath, 'lg'),
  };
}; 