"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericMatch = value.match(/(\d+)/);
  const targetNum = numericMatch ? parseInt(numericMatch[1]) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ""));
  const postfix = value.substring(
    value.indexOf(numericMatch?.[0] || "") +
      (numericMatch?.[0]?.length || 0)
  );

  useEffect(() => {
    if (!inView || targetNum === 0) return;

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, targetNum]);

  if (targetNum === 0) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {inView ? count : 0}
      {postfix}
    </span>
  );
}

const achievements = [
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Google Student Ambassador (2x)",
    description:
      "Selected again for the 2026–2027 cohort. Led workshops, tech sessions, and scaled student engagement across AI, Cloud, and Open Source initiatives.",
    metric: "2025 – 2027",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        alt="IBM Logo"
        className="w-6 h-6 object-contain brightness-125"
      />
    ),
    title: "AI Intern @ IBM",
    description:
      "Worked on improving model accuracy for business automation tasks. Got to build and test systems that pulled insights from data and helped speed up internal processes.",
    metric: "Aug 2025 – Oct 2025",
    color: "rgba(216, 178, 242, 0.15)",
  },
  {
    icon: Award,
    title: "Hack India Finalist",
    description:
      "Built a fashion chatbot (Fashionista) that took voice, text, and image input and gave outfit suggestions based on weather, location, and event context. We placed Top 15 nationally.",
    metric: "Top 15",
    color: "rgba(78, 205, 196, 0.15)",
  },
  {
    icon: Users,
    title: "Coders Circle",
    description:
      "Co-founded a coding community from scratch. We run events, pair juniors with mentors, and help people get into open-source. It’s been cool watching it grow.",
    metric: "1700+ Members",
    color: "rgba(216, 178, 242, 0.15)",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white py-20"
    >
      <ShootingStars />
      <StarsBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(78,205,196,0.8) 0%, transparent 70%)",
            top: "10%",
            right: "5%",
          }}
          animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(216,178,242,0.8) 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
          }}
          animate={{ y: [20, -20, 20], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold gradient-text drop-shadow-lg"
        >
          Achievements & Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Some things I&apos;m proud of — from hackathons to community work.
        </motion.p>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                rotateY: -30,
                scale: 0.85,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="flex"
              style={{ perspective: 1000 }}
            >
              <Card className="relative group bg-gradient-to-b from-neutral-900/70 to-neutral-800/30 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_25px_rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-between w-full h-full hover:border-white/20 transition-all duration-500 min-h-[360px] overflow-hidden">
                
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}, transparent 60%)`,
                  }}
                />

                <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                  <motion.div
                    className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ background: achievement.color }}
                    />
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <Icon />
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      <AnimatedCounter value={achievement.metric} />
                    </h3>
                    <p className="font-semibold text-lg mb-2">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
