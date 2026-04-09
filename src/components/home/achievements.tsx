"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericMatch = value.match(/(\d+)/);
  const targetNum = numericMatch ? parseInt(numericMatch[1]) : 0;

  useEffect(() => {
    if (!inView || targetNum === 0) return;

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, targetNum]);

  return (
    <span ref={ref}>
      {inView ? count : 0}
      {value.replace(/\d+/, "")}
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
      "Selected twice by Google. Led AI & Cloud workshops, mentored students, and scaled campus engagement.",
    metric: "2x",
  },
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        alt="IBM Logo"
        className="w-6 h-6 object-contain"
      />
    ),
    title: "AI Intern @ IBM",
    description:
      "Worked on improving ML model accuracy and building automation systems.",
    metric: "Intern",
  },
  {
    icon: Award,
    title: "Hack India Finalist",
    description:
      "Built a multimodal AI chatbot for smart outfit recommendations.",
    metric: "Top 15",
  },
  {
    icon: Users,
    title: "Co-Founder, Coders Circle",
    description:
      "Built and scaled a 1700+ developer community with events and mentorship.",
    metric: "1700+",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white py-20"
    >
      <div className="text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Achievements & Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4"
        >
          Building, leading, and scaling impact through tech.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;

          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-neutral-900 border border-white/10 rounded-2xl p-6 text-center hover:scale-[1.03] transition">
                <CardContent>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    <AnimatedCounter value={achievement.metric} />
                  </h3>

                  <p className="font-semibold mb-2">
                    {achievement.title}
                  </p>

                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white py-20"
    >
      <ShootingStars />
      <StarsBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold gradient-text"
        >
          Achievements & Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4"
        >
          A snapshot of my journey — building, leading, and scaling impact.
        </motion.p>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
              style={{ perspective: 1000 }}
            >
              <Card className="group bg-neutral-900/70 border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between w-full min-h-[340px] hover:border-white/20 transition-all duration-500">
                <CardContent className="text-center flex flex-col items-center justify-between h-full">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-white/5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon />
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      <AnimatedCounter value={achievement.metric} />
                    </h3>

                    <p className="font-semibold text-lg mb-2">
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
    </section>
  );
}    >
      <ShootingStars />
      <StarsBackground />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(78,205,196,0.8) 0%, transparent 70%)",
            top: "10%",
            right: "5%",
          }}
          animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(216,178,242,0.8) 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
          }}
          animate={{ y: [20, -20, 20], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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

      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, rotateY: -30, scale: 0.85, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex"
              style={{ perspective: 1000 }}
            >
              <Card
                className="
                  relative group
                  bg-gradient-to-b from-neutral-900/70 to-neutral-800/30
                  backdrop-blur-xl
                  border border-white/[0.08]
                  shadow-[0_0_25px_rgba(255,255,255,0.05)]
                  rounded-2xl
                  p-6
                  flex flex-col justify-between
                  w-full h-full
                  hover:border-white/20
                  transition-all duration-500
                  min-h-[360px]
                  overflow-hidden
                "
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}, transparent 60%)`,
                  }}
                />

                {/* Animated border highlight */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-teal/20 via-lavender/20 to-teal/20 bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]" />
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-neutral-900/95 to-neutral-800/95" />
                </div>

                <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                  {/* Icon with pulsing glow */}
                  <motion.div
                    className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {/* Pulsing glow halo */}
                    <div
                      className="absolute inset-0 rounded-full animate-pulse-glow"
                      style={{ background: achievement.color }}
                    />
                    <div className="relative z-10 bg-gradient-to-tr from-gray-600/20 to-gray-300/10 rounded-full flex items-center justify-center w-full h-full group-hover:from-white/20 transition-all duration-500">
                      <Icon />
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                      <AnimatedCounter value={achievement.metric} />
                    </h3>
                    <p className="font-semibold text-lg mb-2 tracking-wide group-hover:text-teal-light transition-colors duration-300">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>

                {/* Scale transform on hover */}
                <style jsx>{`
                  .group:hover {
                    transform: translateY(-4px) scale(1.02);
                  }
                `}</style>
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
