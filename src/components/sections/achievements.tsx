"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Award, Users, TrendingUp } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Leadership & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Making a positive impact through mentorship and technical leadership
            in the developer community.
          </p>
        </motion.div>

        {/* Achievements Cards */}
        <div className="space-y-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                 
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium mb-3">{achievement.organization}</p>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>                    
                    {/* Impact Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievement.impact.map((impact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{impact}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-3 gap-4 text-center"
        >
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold gradient-text">15+</p>
            <p className="text-sm text-muted-foreground">Developers Mentored</p>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold gradient-text">60%</p>
            <p className="text-sm text-muted-foreground">Skill Improvement</p>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold gradient-text">30%</p>
            <p className="text-sm text-muted-foreground">Performance Boost</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
