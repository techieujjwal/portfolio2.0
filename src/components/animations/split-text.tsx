"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const charVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotate: -10,
  },
  reveal: { 
    opacity: 1, 
    y: 0,
    rotate: 0,
  }
};

export function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const chars = children.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02, delayChildren: delay }}
      viewport={{ once: true }}
      className={className}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          transition={{ 
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          variants={charVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
