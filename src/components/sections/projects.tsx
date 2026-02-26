"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { ExternalLink, Github, Smartphone, Globe, Link2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LavenderBadge } from "@/components/ui/lavender-badge";

const categoryIcons: Record<string, React.ReactNode> = {
  mobile: <Smartphone className="h-4 w-4" />,
  web: <Globe className="h-4 w-4" />,
  blockchain: <Link2 className="h-4 w-4" />,
  ai: <Brain className="h-4 w-4" />,
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "mobile", label: "Mobile" },
    { value: "web", label: "Web" },
    { value: "blockchain", label: "Blockchain" },
    { value: "ai", label: "AI" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12 w-full"
        >
          <h2 className=" text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here&apos;s what I&apos;ve been working on — from web apps to data tools.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          console.error(`Failed to load image: ${project.image}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20">
                          {categoryIcons[project.category as keyof typeof categoryIcons] || "💻"}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <span className="text-2xl ml-2">
                        {categoryIcons[project.category as keyof typeof categoryIcons]}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-center">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-1 mb-4">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <p key={i} className="text-xs text-muted-foreground/80 flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span className="line-clamp-2">{feature}</span>
                        </p>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <LavenderBadge key={tech}>
                          {tech}
                        </LavenderBadge>
                      ))}
                      {project.technologies.length > 4 && (
                        <LavenderBadge variant="outline">
                          +{project.technologies.length - 4} more
                        </LavenderBadge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}