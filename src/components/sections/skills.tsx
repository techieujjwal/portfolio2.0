"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/animations";

const categoryDescriptions: Record<string, string> = {
  "Programming Languages": "Proficient in multiple paradigms including OOP, functional, and procedural programming",
  "Frontend Development": "Creating responsive, interactive, and performant user interfaces with modern frameworks",
  "Backend & Databases": "Building scalable server-side applications and managing both SQL and NoSQL databases",
  "Cloud & DevOps": "Expertise in multi-cloud environments with focus on automation and infrastructure as code",
  "ML & Data Science": "Developing intelligent systems using deep learning, neural networks, and data analysis",
  "Blockchain & Web3": "Building decentralized applications and smart contracts on various blockchain platforms"
};

const getProficiencyLevel = (level: number) => {
  if (level >= 90) return { text: "Expert", color: "text-teal" };
  if (level >= 80) return { text: "Advanced", color: "text-lavender" };
  if (level >= 70) return { text: "Proficient", color: "text-primary" };
  return { text: "Learning", color: "text-muted-foreground" };
};

export function Skills() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive toolkit spanning cloud computing, full-stack development,
            machine learning, and blockchain technologies. Continuously learning and adapting to new technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <TiltCard className="h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-3xl mr-3">{category.icon}</span>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs border-lavender/50 badge-lavender-outline">
                        {category.skills.length} skills
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {categoryDescriptions[category.title]}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const proficiency = getProficiencyLevel(skill.level);
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium flex items-center gap-2">
                                {skill.icon && <span className="text-lg">{skill.icon}</span>}
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-medium ${proficiency.color}`}>
                                  {proficiency.text}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <div className="relative h-2.5 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-lavender via-teal to-lavender rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1.2,
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                  ease: "easeOut"
                                }}
                              />
                              <div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                  animation: "shimmer 2s infinite",
                                  animationDelay: `${skillIndex * 0.1}s`
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Category Stats */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Average Proficiency</span>
                        <span className="font-medium text-foreground">
                          {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}