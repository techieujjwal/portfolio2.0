"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapText({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.char');
    
    const ctx = gsap.context(() => {
      gsap.fromTo(chars, 
        { 
          y: 100, 
          opacity: 0,
          rotateX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);
    
    // Refresh ScrollTrigger after Framer Motion page transition completes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`overflow-hidden flex flex-wrap ${className}`} style={{ perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className="char inline-block origin-bottom" 
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
