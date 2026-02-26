"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import { projects as allProjects, type Project } from "@/data/projects";

const CATEGORY_LABEL: Record<Project["category"], string> = {
  web: "Web App",
  mobile: "Mobile App",
  blockchain: "Blockchain",
  ai: "AI / Data",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);


  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set((y - centerY) / 15);
    rotateY.set((centerX - x) / 15);
    spotlightX.set(x);
    spotlightY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative group"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10"
      >
        {/* Animated glow border */}
        <div className="absolute -inset-[1px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              background: "conic-gradient(from 0deg, rgba(78,205,196,0.4), rgba(216,178,242,0.3), rgba(78,205,196,0.1), rgba(216,178,242,0.4), rgba(78,205,196,0.4))",
              animation: "spin-slow 4s linear infinite",
            }}
          />
          <div className="absolute inset-[1px] rounded-2xl bg-zinc-950" />
        </div>

        <Card className="relative z-10 h-full rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-white shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(78,205,196,0.15)]">

          {/* Cursor spotlight effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: `radial-gradient(350px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(78,205,196,0.06), transparent 70%)`,
              }}
            />
          )}

          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <CardTitle className="text-base md:text-lg font-semibold group-hover:text-teal-light transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-xs md:text-sm text-zinc-400">
                  {project.description}
                </p>
              </div>

              <Badge
                variant="outline"
                className="border-zinc-600/70 bg-transparent text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-300 shrink-0"
              >
                <Code2 className="mr-1 h-3 w-3" />
                {CATEGORY_LABEL[project.category]}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-1 relative z-10">
            {/* Tech badges with stagger animation */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05, duration: 0.3 }}
                >
                  <Badge
                    variant="secondary"
                    className="border-none bg-zinc-800/80 text-[11px] font-normal text-zinc-100 hover:bg-zinc-700/80 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.technologies.length > 5 && (
                <Badge
                  variant="outline"
                  className="border-zinc-600/60 bg-transparent text-[11px] text-zinc-300"
                >
                  +{project.technologies.length - 5} more
                </Badge>
              )}
            </div>

            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-teal/60 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-2 text-xs text-zinc-400 border-t border-zinc-800/50">
              <span className="font-mono truncate max-w-[40%]">
                {project.category.toUpperCase()}
              </span>

              <div className="flex items-center gap-3">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-100 hover:text-teal-light transition-colors group/link"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-100 transition-colors group/link"
                  >
                    Code
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const projects = allProjects;

  return (
    <section
      id="projects"
      className="relative py-24 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle radial dark glow for focus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_80%)]" />

      {/* faint grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em]"
            >
              <Sparkles className="h-3 w-3 text-teal" />
              <span className="font-mono">Selected Work</span>
            </motion.div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
              A mix of personal projects and real-world work — each one taught me something new about building for the web.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-3 text-xs md:text-sm text-zinc-400"
          >
            <p className="max-w-sm text-right md:text-right">
              Every project links to a live demo or repo
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
