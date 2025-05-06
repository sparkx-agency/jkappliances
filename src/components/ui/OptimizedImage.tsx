'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'onLoad'> {
  src: string;
  mobileSrc?: string;
  fadeIn?: boolean;
  sizes?: string;
  preserveAspectRatio?: boolean;
}

export default function OptimizedImage({
  src,
  mobileSrc,
  alt,
  width,
  height,
  fill,
  fadeIn = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  preserveAspectRatio = false,
  ...rest
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  // Use responsive image source based on screen width
  useEffect(() => {
    const updateImageSrc = () => {
      if (mobileSrc && window.innerWidth < 768) {
        setImageSrc(mobileSrc);
      } else {
        setImageSrc(src);
      }
    };

    // Set initial source
    updateImageSrc();

    // Update image source on window resize
    window.addEventListener('resize', updateImageSrc);
    return () => window.removeEventListener('resize', updateImageSrc);
  }, [src, mobileSrc]);

  // Prepare the class name with fade-in effect if enabled
  const imageClassName = `
    ${className}
    ${fadeIn && !isLoaded ? 'opacity-0' : 'opacity-100'}
    ${fadeIn ? 'transition-opacity duration-500' : ''}
    ${!preserveAspectRatio ? 'mobile-aspect-ratio' : ''}
  `.trim();

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={imageClassName}
      onLoad={() => setIsLoaded(true)}
      {...rest}
    />
  );
} 