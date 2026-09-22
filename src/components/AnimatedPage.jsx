import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 24,
    scale: 0.99
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: -24,
    scale: 0.99
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 1, 0.5, 1],
  duration: 0.35
};

export default function AnimatedPage({ children, className = '' }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`w-full min-h-[calc(100vh-80px)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
