'use client';

import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface MotionDivProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const MotionDiv = ({ delay = 0, children, className = "", style = {}, ...props }: MotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv; 