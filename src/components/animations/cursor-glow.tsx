"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block rounded-full border border-white/30"
        style={{
          left: trailX,
          top: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          background: isHovering ? "rgba(255, 255, 255, 0.05)" : "transparent",
          transition: "width 0.2s, height 0.2s, background 0.2s",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 8 : 4,
          height: isHovering ? 8 : 4,
          transition: "width 0.2s, height 0.2s",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
