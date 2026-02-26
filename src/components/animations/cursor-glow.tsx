"use client";

import { useEffect, useState, useCallback } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    // Detect hoverable elements
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

    // Initial scan
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
  }, [handleMouseMove]);

  // Hide on mobile/touch
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main glow orb */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? 60 : 400,
          height: isHovering ? 60 : 400,
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(78, 205, 196, 0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(78, 205, 196, 0.07) 0%, rgba(216, 178, 242, 0.04) 40%, transparent 70%)",
          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Small dot cursor */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? 12 : 6,
          height: isHovering ? 12 : 6,
          borderRadius: "50%",
          background: "rgba(78, 205, 196, 0.8)",
          boxShadow: "0 0 15px rgba(78, 205, 196, 0.5), 0 0 30px rgba(78, 205, 196, 0.2)",
          transition: "width 0.2s ease, height 0.2s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
