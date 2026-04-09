"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, Users, ExternalLink, Zap, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

// --- Types ---
interface Achievement {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  metric: string;
  color: string;
  glow: string;
}

// --- Icons ---
const GoogleIcon = ({ className }: { className?: string }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    alt="Google"
    className={className || "w-6 h-6 object-contain"}
  />
);

const IBMIcon = ({ className }: { className?: string }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    alt="IBM"
    className={(className || "w-6 h-6 object-contain") + " brightness-200"}
  />
);

// --- Sub-components ---

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  
  const { prefix, targetNum, postfix } = useMemo(() => {
    const match = value.match(/(\d+)/);
    if (!match) return { prefix: value, targetNum: 0, postfix: "" };
    
    return {
      prefix: value.split(match[0])[0],
      targetNum: parseInt(match[0], 10),
      postfix: value.split(match[0])[1],
    };
  }, [value]);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView && targetNum > 0) {
      motionValue.set(targetNum);
    }
  }, [inView, targetNum, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString());
    });
    return () => unsubscribe();
  }, [springValue]);

  if (targetNum === 0) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {prefix}{display}{postfix}
    </span>
  );
}

const achievements: Achievement[] = [
  {
    icon: GoogleIcon,
    title: "Google Student Ambassador",
    description: "Orchestrating technical ecosystems for the 2026-27 cohort. Scaled campus outreach by hosting high-impact workshops on Vertex AI and Cloud architecture.",
    metric: "2026 – 2027 Batch",
    color: "from-blue-500/20 to-emerald-500/20",
    glow: "rgba(66, 133, 244, 0.15)",
  },
  {
    icon: IBMIcon,
    title: "AI Engineer Intern @ IBM",
    description: "Architected RAG-based automation pipelines, improving model retrieval accuracy. Deployed enterprise-grade AI features to streamline internal data intelligence.",
    metric: "98% Accuracy",
    color: "from-purple-500/20 to-blue-600/20",
    glow: "rgba(138, 63, 252, 0.15)",
  },
  {
    icon: Award,
    title: "Hack India Finalist",
    description: "Engineered 'Fashionista', a multi-modal AI stylist using computer vision. Outperformed 500+ teams to secure a position in the National Top 15.",
    metric: "Top 15 Nationally",
    color: "from-amber-500/20 to-orange-600/20",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: Users,
    title: "Coders Circle Founder",
    description: "Built and scaled a premier developer community from the ground up. Established a mentorship framework connecting 1.7k+ engineers with industry experts.",
    metric: "1700+ Engineers",
    color: "from-cyan-500/20 to-blue-500/20",
    glow: "rgba(6, 182, 212, 0.15)",
  },
];

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const Icon = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${e.clientX - left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseMove={handleMouseMove}
    >
      <Card 
        ref={cardRef}
        className="relative h-full min-h-[400px] border-white/[0.05] bg-neutral-950/50 backdrop-blur-2xl overflow-hidden transition-colors hover:border-white/[0.15]"
        style={{ "--x": "0px", "--y": "0px" } as React.CSSProperties}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--x) var(--y), ${item.glow}, transparent 40%)`,
          }}
        />

        <CardContent className="p-8 flex flex-col h-full relative z-10">
          <div className="mb-8 flex justify-between items-start">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <Zap className="w-4 h-4 text-neutral-600 group-hover:text-yellow-500 transition-colors" />
          </div>

          <div className="mt-auto">
            <h4 className="text-3xl font-bold tracking-tight text-white mb-2">
              <AnimatedCounter value={item.metric} />
            </h4>
            <p className="text-lg font-medium text-neutral-200 mb-3 group-hover:text-cyan-400 transition-colors">
              {item.title}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {item.description}
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-tighter cursor-pointer hover:text-white">
            View Project <ExternalLink className="w-3 h-3" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Achievements() {
  const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <section id="achievements" className="relative min-h-screen flex flex-col justify-center bg-[#030303] py-24 overflow-hidden">
      <ShootingStars />
      <StarsBackground />
      
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: noiseBg }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">Track Record</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
          >
            Metrics of <span className="text-neutral-500">Impact.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <AchievementCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
