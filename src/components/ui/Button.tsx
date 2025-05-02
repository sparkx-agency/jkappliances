"use client";

import React, { forwardRef, useState } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      children,
      className = '',
      disabled = false,
      type = 'button',
      onClick,
      href,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleTouchStart = () => {
      setIsPressed(true);
    };

    const handleTouchEnd = () => {
      setIsPressed(false);
    };

    const baseClasses = clsx(
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'opacity-60 cursor-not-allowed': disabled,
        'w-full': fullWidth,
      }
    );

    const variantClasses = {
      primary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950 focus:ring-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus:ring-gray-400',
      outline: 'bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-400',
      text: 'bg-transparent text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-400',
    };

    const sizeClasses = {
      small: 'text-sm px-4 py-2 rounded-full',
      medium: 'text-base px-6 py-3 rounded-full',
      large: 'text-lg px-8 py-4 rounded-full',
    };

    const pressedScale = isPressed ? 0.97 : 1;

    const content = (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href && !disabled) {
      return (
        <Link href={href}>
          <motion.span 
            className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            style={{ scale: pressedScale }}
            {...props}
          >
            {content}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={disabled}
        onClick={onClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        style={{ scale: pressedScale }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 