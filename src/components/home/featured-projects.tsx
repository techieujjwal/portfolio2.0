"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem,
  MagneticButton 
} from "@/components/animations";

export function FeaturedProjects() {
  // Get featured projects - prioritizing blockchain and AI projects
  const featuredProjects = [
    projects.find(p => p.id === "billrewards"),
    projects.find(p => p.id === "cryptovault-ipfs"),
    projects.find(p => p.id === "lightning-time")
  ].filter(Boolean) as typeof projects;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0.2} width="100%">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 w-full mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing full-stack development and cloud computing
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id} className="mx-auto w-full max-w-sm md:max-w-none">
                <ProjectCard project={project} detailed={true} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <MagneticButton>
            <Link href="/projects">
              <Button size="lg" className="group bg-lavender hover:bg-lavender-dark text-white">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
