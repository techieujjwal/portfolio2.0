"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedHeading, WordReveal } from "@/components/animations";

export function StatusBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section 
      ref={containerRef}
      className="relative z-20 w-full min-h-[80vh] flex items-center justify-center bg-black sticky top-0 overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity, borderRadius }}
        className="w-full h-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center bg-[#0A0A0A] border border-white/5 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="flex flex-col items-center gap-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-4">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-100"></span>
            </span>
            <span className="font-mono text-zinc-400">Current Status</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
            <MaskedHeading text="Building the" delay={0.1} />
            <br />
            <span className="text-zinc-500">
              <MaskedHeading text="Future Web" delay={0.4} />
            </span>
          </h2>

          <div className="mt-8 text-lg md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            <WordReveal 
              text="Currently serving as a Google Student Ambassador while actively exploring opportunities in Full Stack Development and Cybersecurity."
              delay={0.8}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
