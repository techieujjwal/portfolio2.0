"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({ 
  children, 
  width = "fit-content",
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directions = {
    up: { y: 75 },
    down: { y: -75 },
    left: { x: 75 },
    right: { x: -75 }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            ...directions[direction]
          },
          visible: { 
            opacity: 1, 
            y: 0,
            x: 0
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
