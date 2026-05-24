"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, LayoutGroup, AnimatePresence } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 0.72], ["60vw", "-120%"]);
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsGrid(latest > 0.72);
    });
  }, [scrollYProgress]);

  const rows = [
    skills.slice(0, 7),
    skills.slice(7, 12),
    skills.slice(12, 16),
    skills.slice(16, 19),
  ];

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden py-12 px-6">
        <ShootingStars />
        <StarsBackground />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
              top: "20%",
              left: "10%",
              animation: "float-slow 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)",
              bottom: "10%",
              right: "10%",
              animation: "float-slow 18s ease-in-out infinite reverse",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

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

        <div className="relative z-10 w-full max-w-6xl flex justify-center items-center overflow-visible min-h-[300px]">
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {!isGrid ? (
                <motion.div
                  key="marquee"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-row flex-nowrap gap-12 whitespace-nowrap overflow-visible select-none py-4"
                  style={{ x }}
                >
                  {skills.map((skill) => (
                    <motion.div
                      layout
                      key={skill.name}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    >
                      <SkillIcon skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="flex flex-col items-center justify-center space-y-8 md:space-y-12 w-full py-4"
                >
                  {rows.map((row, i) => (
                    <div key={i} className="flex flex-wrap justify-center gap-8 md:gap-12">
                      {row.map((skill) => (
                        <motion.div
                          layout
                          key={skill.name}
                          transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        >
                          <SkillIcon skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group w-16 h-24">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative z-10">
          {imgError ? (
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
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
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      <span className="mt-2 text-sm text-gray-400 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}
