"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsReady(false);

      const canvases = document.querySelectorAll('canvas');
      canvases.forEach(canvas => {
        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
        if (gl) {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      });

      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        setIsReady(true);
        previousPathname.current = pathname;
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [pathname]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Outer ring */}
          <div className="h-12 w-12 rounded-full border-2 border-primary/20 animate-spin-slow" />
          {/* Inner spinning ring */}
          <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-primary animate-spin" />
          {/* Center glow */}
          <div className="absolute inset-3 rounded-full bg-primary/20 animate-pulse-glow" />
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
