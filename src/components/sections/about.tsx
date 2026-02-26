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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A bit about who I am, what I do, and where I&apos;m headed.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Intro + Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — About Text */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hi! I&apos;m Ujjwal Shukla, currently pursuing my B.Tech in Computer Science Engineering
                at Lloyd Institute of Engineering and Technology, Delhi. I like building
                things for the web, getting involved in communities, and figuring out how
                stuff works end-to-end.
              </p>

              <p>
                I did an App Designing Internship at MakeIntern where I worked on their
                website UI — layouts, visual consistency, and making things feel right.
                That&apos;s when I really started caring about how design and code come together.
              </p>

              <p>
                As the Co-founder of Coders Circle, a tech community with 1500+ developers and students,
                I&apos;ve been building a strong coding culture through events, mentorship, and collaborative
                learning, helping students grow individually and as a community.
              </p>
            </div>

            {/* RIGHT — FLOATING PHOTO + CARD */}
            <div className="relative flex flex-col items-center">

              {/* FLOATING IMAGE */}
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full">

                    <img
                      src="/me/me.png"
                      alt="Ujjwal Shukla"
                      className="object-cover w-full h-full"
                    />

                  </div>
                </div>

              </div>
              <br /><br /><br />

              {/* EDUCATION CARD — moved down for spacing */}
              <div className="pt-40 w-full space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
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
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
