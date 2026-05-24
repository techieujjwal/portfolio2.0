"use client";

import { motion, useMotionValue } from "framer-motion";
import { useMemo, useEffect, useRef } from "react";

export function FloatingParticles() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    const shapes = ["circle", "diamond", "circle", "circle", "dot"] as const;
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 8,
      color: Math.random() > 0.5 ? "#6366f1" : "#8b5cf6",
      opacity: Math.random() * 0.4 + 0.1,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      driftX: (Math.random() - 0.5) * 60,
      driftY: Math.random() * -120 - 30,
    }));
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.shape === "dot" ? p.size * 0.5 : p.size,
            height: p.shape === "dot" ? p.size * 0.5 : p.size,
          }}
          animate={{
            y: [0, p.driftY],
            x: [0, p.driftX],
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [0.5, 1, 1, 0.3],
            rotate: p.shape === "diamond" ? [0, 180, 360] : [0, 0, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.shape === "diamond" ? (
            <div
              className="rotate-45"
              style={{
                width: "100%",
                height: "100%",
                background: p.color,
                opacity: 0.6,
                filter: "blur(0.5px)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
                filter: p.shape === "dot" ? "none" : "blur(1px)",
                boxShadow: `0 0 ${p.size * 2}px ${p.color}30`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
