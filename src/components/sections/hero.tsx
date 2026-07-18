"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Typewriter,
  MagneticButton,
  MaskedHeading
} from "@/components/animations";
import { ChevronDown } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

function AnimatedName() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40; // max 20px shift
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative group inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.h1 
        style={{ x: smoothX, y: smoothY }}
        className="relative z-20 font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 overflow-hidden select-none pb-4 tracking-tighter text-white cursor-pointer transition-colors duration-500 group-hover:text-white/20"
      >
        <MaskedHeading text="Ujjwal Shukla" delay={0.3} />
      </motion.h1>
      
      {/* Floating Hover Photo with Inverse Parallax */}
      <motion.div 
        style={{ x: useTransform(smoothX, x => -x * 1.5), y: useTransform(smoothY, y => -y * 1.5) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-64 md:h-80 pointer-events-none z-10 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-500 ease-out -rotate-6 group-hover:rotate-3"
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
          <Image
            src="/images/profile.jpg"
            alt="Ujjwal Shukla"
            fill
            className="object-cover object-[center_25%]"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-mono font-bold">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4 text-zinc-400" />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const borderRadius = useTransform(scrollY, [0, 500], [0, 24]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden sticky top-0 z-0 bg-[#000000]"
    >
      <StarsBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ scale, opacity, borderRadius }}
        className="container mx-auto px-4 py-20 relative z-10 origin-top text-center max-w-5xl flex flex-col items-center justify-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto flex flex-col items-center"
        >


          <motion.div
            variants={ANIMATION_VARIANTS.fadeDown}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-mono text-zinc-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Hello, I am
          </motion.div>

          <AnimatedName />

          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-3xl text-zinc-400 mb-12 font-light tracking-wide"
          >
            <span className="block mt-2">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Cybersecurity Enthusiast",
                  "Community Builder",
                  "Open Source Contributor"
                ]}
                className="text-zinc-300 font-medium"
              />
            </span>
          </motion.div>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
          >
            <MagneticButton>
              <Button asChild size="lg" className="h-14 px-8 text-sm sm:text-base font-bold rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <Link href="/projects">
                  View Projects
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-sm sm:text-base font-bold rounded-full bg-transparent border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <Link href="/about">About Me</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
