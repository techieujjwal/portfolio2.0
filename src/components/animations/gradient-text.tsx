"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: string;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      className={`gradient-text-animated inline-block ${className}`}
      style={{
        backgroundImage: "linear-gradient(to right, #4ECDC4, #D8B2F2, #4ECDC4, #D8B2F2)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}
