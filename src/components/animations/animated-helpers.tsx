"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// TextRoll Hover Component (sliding hover text effect)
export function TextRoll({ text, href, className = "" }: { text: string; href: string; className?: string }) {
  const isHash = href.startsWith("#");

  const content = (
    <>
      <span className="block w-full transition-transform duration-[0.5s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
        {text}
      </span>
      <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full block transition-transform duration-[0.5s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
      >
        {text}
      </span>
    </>
  );

  if (isHash) {
    return (
      <a 
        className={`group relative block h-fit overflow-hidden cursor-pointer select-none ${className}`} 
        href={href}
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      className={`group relative block h-fit overflow-hidden cursor-pointer select-none ${className}`} 
      href={href}
    >
      {content}
    </Link>
  );
}

// WordReveal Paragraph Component (fade-slide up words sequentially)
export function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <motion.span 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-[0.05em]">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// MaskedHeading Heading Component (letters rising from hidden overflow)
export function MaskedHeading({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const chars = Array.from(text);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay
      }
    }
  };

  const charVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <motion.span 
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-40px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {chars.map((char, idx) => (
        <span key={idx} className="inline-block overflow-hidden">
          <motion.span variants={charVariants} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
