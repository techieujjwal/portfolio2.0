"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";

interface Skill {
  name: string;
  logo: string;
}

const allSkills: Skill[] = [
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs&theme=dark" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Material UI", logo: "https://skillicons.dev/icons?i=materialui" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=dark" },
  { name: "Flask", logo: "https://skillicons.dev/icons?i=flask&theme=dark" },
  { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql" },
  { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase&theme=dark" },
  { name: "AWS", logo: "https://skillicons.dev/icons?i=aws&theme=dark" },
  { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel&theme=dark" },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  { name: "Pandas", logo: "https://skillicons.dev/icons?i=react" },
  { name: "NumPy", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Matplotlib", logo: "https://skillicons.dev/icons?i=react" },
];

// Split skills into two rows for the marquee
const firstRow = allSkills.slice(0, 10);
const secondRow = allSkills.slice(10, 19);

export function SkillsShowcase() {
  return (
    <section className="relative z-30 bg-[#1C1B1A] rounded-t-[2.5rem] mt-[-2rem] py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <StarsBackground />

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,27,26,0.5),transparent_85%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center mb-20 px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="font-mono text-zinc-400">Toolkit</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-white uppercase">
          Technical <span className="text-zinc-500">Skills</span>
        </h2>
        <p className="text-zinc-400 text-lg font-light max-w-xl mx-auto">
          The technologies and frameworks I use to build scalable web applications.
        </p>
      </motion.div>

      {/* Infinite Marquee Container */}
      <div className="relative z-10 w-full max-w-[100vw] overflow-hidden flex flex-col gap-8 md:gap-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1: Moves Left */}
        <div className="flex w-max">
          <motion.div
            className="flex gap-8 md:gap-12 pr-8 md:pr-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {/* Duplicate the array twice for seamless looping */}
            {[...firstRow, ...firstRow].map((skill, index) => (
              <SkillIcon key={`${skill.name}-row1-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex w-max self-end">
          <motion.div
            className="flex gap-8 md:gap-12 pr-8 md:pr-12"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {/* Duplicate the array twice for seamless looping */}
            {[...secondRow, ...secondRow].map((skill, index) => (
              <SkillIcon key={`${skill.name}-row2-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center group w-20 h-28 md:w-24 md:h-32 shrink-0 cursor-pointer"
    >
      <div className="relative">
        {/* Hover Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        {/* Glassmorphic Icon Container */}
        <div className="relative z-10 p-3 md:p-4 rounded-2xl bg-[#111111] border border-white/5 group-hover:border-white/20 group-hover:bg-[#1A1A1A] transition-all duration-300 shadow-xl">
          {imgError ? (
            <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-black rounded-lg">
              <span className="text-[10px] text-zinc-400 text-center px-1 font-mono">
                {skill.name}
              </span>
            </div>
          ) : (
            <div className="w-10 h-10 md:w-14 md:h-14 relative flex items-center justify-center">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={56}
                height={56}
                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                unoptimized
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      </div>

      <span className="mt-4 text-[10px] md:text-xs font-mono font-semibold tracking-wider text-zinc-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
        {skill.name}
      </span>
    </motion.div>
  );
}
