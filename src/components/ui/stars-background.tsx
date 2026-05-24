"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface StarBackgroundProps {
  className?: string;
  // Keep other props optional for backward compatibility
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const spacing = 36;
    const maxDistance = 120;
    const pullStrength = 6;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      if (mouse.x === -1000 && mouse.targetX !== -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      if (mouse.x !== -1000) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          250
        );
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.05)");
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const time = Date.now() * 0.0015;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const originalX = c * spacing;
          const originalY = r * spacing;

          const noiseX = Math.sin(time + c * 0.5 + r * 0.3) * 1.0;
          const noiseY = Math.cos(time + c * 0.3 + r * 0.5) * 1.0;

          let drawX = originalX + noiseX;
          let drawY = originalY + noiseY;

          let radius = 1.0;
          let opacity = 0.07;

          if (mouse.x !== -1000) {
            const dx = mouse.x - originalX;
            const dy = mouse.y - originalY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDistance) {
              const force = (maxDistance - dist) / maxDistance;
              drawX += (dx / dist) * pullStrength * force;
              drawY += (dy / dist) * pullStrength * force;
              radius = 1.0 + force * 1.5;
              opacity = 0.07 + force * 0.35;
            }
          }

          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0 pointer-events-none z-[1]", className)}
      style={{ mixBlendMode: "screen" }}
    />
  );
};
