"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { LazyStarsBackground } from "@/components/3d/lazy-stars";
import {
  Typewriter,
  MagneticButton,
  FloatingParticles
} from "@/components/animations";
import { ChevronDown } from "lucide-react";

function OrbitingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Outer orbit ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <div className="w-full h-full rounded-full border border-white/[0.03] animate-spin-slow" />
        {/* Orbiting dot 1 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-teal/60 shadow-[0_0_15px_rgba(78,205,196,0.5)]" />
        </div>
        {/* Orbiting dot 2 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-1.5 h-1.5 rounded-full bg-lavender/60 shadow-[0_0_15px_rgba(216,178,242,0.5)]" />
        </div>
      </div>

      {/* Inner orbit ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]">
        <div className="w-full h-full rounded-full border border-white/[0.02] animate-spin-reverse" />
        {/* Orbiting dot 3 */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-2.5 h-2.5 rounded-full bg-teal/40 shadow-[0_0_20px_rgba(78,205,196,0.4)]" />
        </div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-16 h-16 border border-teal/10 rotate-45"
        animate={{
          y: [-10, 10, -10],
          rotate: [45, 50, 45],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-12 h-12 border border-lavender/10 rounded-full"
        animate={{
          y: [10, -10, 10],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[20%] w-8 h-8 border border-teal/8"
        animate={{
          y: [-8, 8, -8],
          x: [-5, 5, -5],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[20%] w-6 h-6"
        animate={{
          y: [5, -15, 5],
          x: [5, -5, 5],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <polygon points="12,2 22,22 2,22" stroke="rgba(216,178,242,0.3)" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

function AnimatedName() {
  const text = "Ujjwal Shukla";
  const chars = text.split("");

  return (
    <motion.h1
      className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{
            background: "linear-gradient(135deg, var(--teal) 0%, var(--lavender) 50%, var(--teal-light) 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-shift 6s ease infinite",
          }}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              rotateX: -90,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-primary/60" />
      </motion.div>
      <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
    </motion.div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <LazyStarsBackground />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Orbiting Shapes */}
      <OrbitingShapes />

      {/* Aurora gradient overlay (mouse reactive) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(78,205,196,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(216,178,242,0.08) 0%, transparent 60%)",
          x: springX,
          y: springY,
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            variants={ANIMATION_VARIANTS.fadeDown}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hey there, I&apos;m
          </motion.p>

          {/* Animated Name */}
          <AnimatedName />

          {/* Tagline */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10"
          >
            <span className="block mt-2">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Cybersecurity Enthusiast",
                  "Community Builder",
                  "Open Source Contributor"
                ]}
                className="text-primary font-semibold"
              />
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <MagneticButton>
              <Button asChild size="lg" className="text-sm sm:text-base px-4 sm:px-8 relative overflow-hidden group">
                <Link href="/projects">
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal/20 via-lavender/20 to-teal/20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </Link>
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-4 sm:px-8 border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <Link href="/about">About Me</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
