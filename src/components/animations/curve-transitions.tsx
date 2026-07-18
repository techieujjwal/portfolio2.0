"use client";

import { motion, useAnimationControls } from "framer-motion";

interface CurveProps {
  controls: ReturnType<typeof useAnimationControls>;
}

// Dark Sweep Up Transition (sweeps from bottom of screen to top, covering content)
export function DarkCurveSweepUp({ controls }: CurveProps) {
  return (
    <motion.div
      initial={{ y: "115vh" }}
      animate={controls}
      variants={{
        animate: {
          y: "0vh",
          transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
          }
        }
      }}
      className="fixed inset-0 z-20 flex flex-col pointer-events-none"
    >
      <svg 
        className="w-full h-[15vh] fill-[#000000] absolute bottom-full left-0 transform translate-y-[1px]" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path d="M0 100 Q 50 0 100 100 Z" />
      </svg>
      <div className="w-full h-[120vh] bg-[#000000]" />
    </motion.div>
  );
}

// Dark Sweep Down Transition (sweeps from top of screen to bottom, revealing content)
export function DarkCurveSweepDown({ controls }: CurveProps) {
  return (
    <motion.div
      initial={{ y: "-135vh" }}
      animate={controls}
      variants={{
        animate: {
          y: "0vh",
          transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
          }
        }
      }}
      className="fixed inset-0 z-40 flex flex-col pointer-events-none"
    >
      <div className="w-full h-[120vh] bg-[#000000]" />
      <svg 
        className="w-full h-[15vh] fill-[#000000] absolute top-full left-0 transform -translate-y-[1px]" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path d="M0 0 Q 50 100 100 0 Z" />
      </svg>
    </motion.div>
  );
}
