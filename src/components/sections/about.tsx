"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { 
  ScrollReveal, 
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building innovative solutions at the intersection of
              cloud computing, full-stack development, and emerging technologies.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
  <p className="text-lg leading-relaxed">
    Hi! I&apos;m Ujjwal Shukla, currently pursuing my B.Tech in Computer Science Engineering
    at Lloyd Institute of Engineering and Technology, Delhi. With a strong interest in
    technology, community building, and full-stack development, I love creating impactful
    solutions and digital experiences that make a real difference.
  </p>

  <p className="text-lg leading-relaxed">
    I completed an App Designing Internship at MakeIntern, where I designed their
    website UI, focusing on user experience, layout structuring, and visual consistency.
    This experience strengthened my design thinking and practical implementation skills.
    I&apos;m passionate about leveraging technology and design to solve real-world problems.
  </p>

  <p className="text-lg leading-relaxed">
    As the Co-founder of Coders Circle, a tech community with 1500+ developers and students,
    I&apos;ve been building a strong coding culture through events, mentorship, and collaborative
    learning, helping students grow individually and as a community.
  </p>
</div>

            
            {/* Education Cards */}
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>
                      {edu.gpa && (
                        <p className="mt-2 text-sm font-medium">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}