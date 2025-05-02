import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

interface ContainerProps<T extends ElementType = 'div'> {
  children: ReactNode;
  className?: string;
  as?: T;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = <T extends ElementType = 'div'>({
  children,
  className = '',
  as,
  size = 'lg',
}: ContainerProps<T>) => {
  const Component = as || 'div';
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <Component className={clsx('mx-auto px-4 sm:px-6 w-full', maxWidthClasses[size], className)}>
      {children}
    </Component>
  );
};

export default Container; 