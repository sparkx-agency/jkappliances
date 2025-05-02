'use client';

import { useRef, ReactNode, ElementType } from 'react';
import { useInView } from 'framer-motion';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  threshold?: number;
  onVisible?: () => void;
  as?: ElementType;
}

/**
 * A section component that lazy loads its content when it scrolls into view
 */
export default function LazySection({
  children,
  className = '',
  offset = 100,
  threshold = 0.1,
  onVisible,
  as: Component = 'section',
}: LazySectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: `${offset}px` 
  });
  
  // Call the onVisible callback when the section comes into view
  if (isInView && onVisible) {
    onVisible();
  }

  return (
    <Component ref={ref} className={className}>
      {isInView ? children : null}
    </Component>
  );
} 