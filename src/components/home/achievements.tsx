"use client";

import { motion } from "framer-motion";
import { Award, Users, ArrowUpRight } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const achievements = [
  {
    id: "google",
    icon: ({ className }: { className?: string }) => (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        width={32}
        height={32}
        className={`object-contain grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ${className || ''}`}
        unoptimized
      />
    ),
    title: "Google Student Ambassador",
    description:
      "Selected for the 2026–2027 cohort. Led workshops, tech sessions, and scaled student engagement across AI, Cloud, and Open Source initiatives across multiple universities.",
    metric: "2025 – 2027",
    className: "md:col-span-2 md:row-span-2", // Large primary card
  },
  {
    id: "ibm",
    icon: ({ className }: { className?: string }) => (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        alt="IBM Logo"
        width={28}
        height={28}
        className={`object-contain grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ${className || ''}`}
        unoptimized
      />
    ),
    title: "AI Intern @ IBM",
    description:
      "Improved model accuracy for business automation. Built and tested systems that pulled insights from data and helped speed up internal processes.",
    metric: "Aug 2025",
    className: "md:col-span-1 md:row-span-1", // Standard card
  },
  {
    id: "hack",
    icon: Award,
    title: "Hack India Finalist",
    description:
      "Built a context-aware fashion chatbot. Placed Top 15 nationally among thousands of developers.",
    metric: "Top 15",
    className: "md:col-span-1 md:row-span-1", // Standard card
  },
  {
    id: "coders",
    icon: Users,
    title: "Coders Circle Founder",
    description:
      "Co-founded a massive coding community from scratch. We run events, pair juniors with mentors, and help people get into open-source. A thriving ecosystem.",
    metric: "1700+ Members",
    className: "md:col-span-2 md:row-span-1", // Wide bottom card
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-40 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-black text-white py-24 md:py-32 rounded-t-[2.5rem] mt-[-2rem]"
    >
      <StarsBackground />

      {/* Very subtle top gradient to blend */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="font-mono text-zinc-400">Milestones</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white"
        >
          Impact & <span className="text-zinc-600 block sm:inline">Recognition</span>
        </motion.h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">
          {achievements.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className={`group relative rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/20 transition-all duration-700 ${item.className}`}
              >
                {/* Sweep hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Top Header */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
                      {item.metric}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="mt-12 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
