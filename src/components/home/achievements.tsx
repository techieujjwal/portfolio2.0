"use client";

import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const achievements = [
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        className="w-7 h-7 object-contain"
      />
    ),
    title: "Google Student Ambassador",
    description:
      "Organized workshops, tech sessions, and campus events to spread awareness about Google technologies. Empowered students through AI, Cloud, and Open Source programs — bridging learning with real-world innovation.",
    metric: "Nov 2025 – Feb 2026",
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
      "Contributed to AI-driven business automation by enhancing model accuracy and performance. Assisted in building intelligent systems for data-driven insights and process optimization.",
    metric: "Aug 2025 – Oct 2025",
  },
  {
    icon: Award,
    title: "Hack India Finalist",
    description:
      "Developed an AI-powered fashion chatbot(fashionista) integrating voice, text, and image. Offered personalized fashion advice using weather, location, and event context — Top 15 nationwide.",
    metric: "Top 15",
  },
  {
    icon: Users,
    title: "Coders Circle",
    description:
      "Co-founded a tech-driven community fostering mentorship and collaboration. Helped hundreds of juniors and developers accelerate their learning through open-source and events.",
    metric: "1700+ Members",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white"
    >
      {/* 🌌 Starry Sky Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85),transparent_85%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 via-white to-gray-400 drop-shadow-lg"
        >
          Achievements & Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Showcasing milestones of innovation, collaboration, and real-world impact through
          technology and leadership.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className="
                  relative group
                  bg-gradient-to-b from-neutral-900/70 to-neutral-800/30
                  backdrop-blur-xl
                  border border-white/10
                  shadow-[0_0_25px_rgba(255,255,255,0.05)]
                  rounded-2xl
                  p-6
                  flex flex-col justify-between
                  w-full h-full
                  hover:scale-[1.04]
                  hover:border-white/20
                  transition-all duration-500
                  min-h-[360px]
                "
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] transition-opacity duration-700" />

                <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-gray-600/20 to-gray-300/10 rounded-full flex items-center justify-center mb-5 group-hover:from-white/20 transition-all duration-500">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                      {achievement.metric}
                    </h3>
                    <p className="font-semibold text-lg mb-2 tracking-wide">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Light haze top & bottom */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
