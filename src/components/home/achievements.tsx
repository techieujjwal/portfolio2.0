"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "Hack India Finalist",
    description: "Top 15 teams nationwide",
    metric: "Top 15"
  },
  {
    icon: Award,
    title: "ZeroDay Apocalypse",
    description: "GDSC Hackathon - Among top 15 teams",
    metric: "Top 15"
  },
  {
    icon: Target,
    title: "Hack With Uttar Pradesh",
    description: "Ranked Top 50 out of 2500+ teams",
    metric: "Top 50 / 2500"
  },
  {
    icon: Users,
    title: "Coders Circle",
    description: "Co-founded a tech community",
    metric: "1500+ Members"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements & Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hackathons, community building, and real-world impact through tech.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-2xl mb-2">
                      {achievement.metric}
                    </h3>
                    <p className="font-medium mb-1">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
