"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs&theme=light" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Material UI", logo: "https://skillicons.dev/icons?i=materialui" },
  { name: "Flask", logo: "https://skillicons.dev/icons?i=flask&theme=dark" },
  { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql" },
  { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase" },
  { name: "AWS", logo: "https://skillicons.dev/icons?i=aws" },
  { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel&theme=light" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=light" },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg" },
];

export function SkillsShowcase() {
  const rows = [
    skills.slice(0, 7),
    skills.slice(7, 12),
    skills.slice(12, 16),
    skills.slice(16, 19),
  ];

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6 overflow-hidden"
    >
      <ShootingStars />
      <StarsBackground />

      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(78,205,196,0.8) 0%, transparent 70%)",
            top: "20%",
            left: "10%",
            animation: "float-slow 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(216,178,242,0.8) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
            animation: "float-slow 18s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(78,205,196,0.6) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight gradient-text">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Tools and technologies I work with daily
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center space-y-12">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {row.map((skill, skillIndex) => (
              <SkillIcon
                key={skill.name}
                skill={skill}
                index={i * 7 + skillIndex}
                mousePos={mousePos}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Soft top/bottom glow */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

function SkillIcon({
  skill,
  index,
  mousePos,
}: {
  skill: Skill;
  index: number;
  mousePos: { x: number; y: number };
}) {
  const [imgError, setImgError] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const [proximity, setProximity] = useState(0);

  useEffect(() => {
    if (!iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const parent = iconRef.current.closest("section");
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();

    const iconCenterX = rect.left - parentRect.left + rect.width / 2;
    const iconCenterY = rect.top - parentRect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mousePos.x - iconCenterX, 2) +
      Math.pow(mousePos.y - iconCenterY, 2)
    );

    const maxDistance = 200;
    const p = Math.max(0, 1 - distance / maxDistance);
    setProximity(p);
  }, [mousePos]);

  const floatDelay = index * 0.3;
  const glowIntensity = proximity;

  return (
    <motion.div
      ref={iconRef}
      className="flex flex-col items-center group"
      initial={{ opacity: 0, scale: 0.3, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4 + (index % 3),
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Proximity glow ring */}
        <div
          className="absolute -inset-3 rounded-full transition-all duration-300"
          style={{
            background: `radial-gradient(circle, rgba(78,205,196,${glowIntensity * 0.3}) 0%, transparent 70%)`,
            transform: `scale(${1 + glowIntensity * 0.3})`,
          }}
        />

        {/* Glow effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg transition-opacity duration-300"
            style={{ opacity: 0.5 + glowIntensity * 0.5 }}
          />
        </div>

        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          style={{
            filter: `brightness(${1 + glowIntensity * 0.5}) drop-shadow(0 0 ${glowIntensity * 15}px rgba(78,205,196,${glowIntensity * 0.5}))`,
          }}
        >
          {imgError ? (
            <div className="w-16 h-16 flex items-center justify-center bg-zinc-800 rounded-full border border-zinc-700">
              <span className="text-xs text-white text-center px-1">
                {skill.name}
              </span>
            </div>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className="object-contain"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Skill name - always visible */}
      <motion.span
        className="mt-3 text-sm font-medium transition-all duration-300"
        style={{
          color: proximity > 0.3 ? "rgba(78,205,196,0.9)" : "rgba(156,163,175,0.7)",
          textShadow: proximity > 0.3 ? "0 0 10px rgba(78,205,196,0.3)" : "none",
        }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
}
