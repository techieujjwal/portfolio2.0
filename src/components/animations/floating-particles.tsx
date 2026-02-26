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
    return Array.from({ length: 50 }).map((_, i) => {
      const shapes = ["circle", "diamond", "circle", "circle", "dot"] as const;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 1,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 8,
        color: Math.random() > 0.5 ? "#4ECDC4" : "#D8B2F2",
        opacity: Math.random() * 0.4 + 0.1,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        driftX: (Math.random() - 0.5) * 60,
        driftY: Math.random() * -120 - 30,
      };
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.shape === "dot" ? particle.size * 0.5 : particle.size,
            height: particle.shape === "dot" ? particle.size * 0.5 : particle.size,
          }}
          animate={{
            y: [0, particle.driftY],
            x: [0, particle.driftX],
            opacity: [0, particle.opacity, particle.opacity, 0],
            scale: [0.5, 1, 1, 0.3],
            rotate: particle.shape === "diamond" ? [0, 180, 360] : [0, 0, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.shape === "diamond" ? (
            <div
              className="rotate-45"
              style={{
                width: "100%",
                height: "100%",
                background: particle.color,
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
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                filter: particle.shape === "dot" ? "none" : "blur(1px)",
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}30`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
