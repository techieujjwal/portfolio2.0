
"use client";

import Image from "next/image";
import { useState } from "react";

// Skill type
interface Skill {
  name: string;
  logo: string;
}

// Bright icons for dark background
const skills: Skill[] = [
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },

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
  // auto split evenly based on screen
  const rows = [
    skills.slice(0, 6),
    skills.slice(6, 11),
    skills.slice(11, 15),
    skills.slice(15, 18),
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20 px-6">
      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Skills I have mastered yet
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-12">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {row.map((skill) => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// icon component
function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* glow effect */}
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

      <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </div>
  );
}
