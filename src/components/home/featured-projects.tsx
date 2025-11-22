"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Cpu, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { projects as allProjects, type Project } from "@/data/projects";

const CATEGORY_LABEL: Record<Project["category"], string> = {
  web: "Web App",
  mobile: "Mobile App",
  blockchain: "Blockchain",
  ai: "AI / Data",
};

export function FeaturedProjects() {
  // if you want only some, you can slice/filter here
  const projects = allProjects; // or allProjects.slice(0, 3)

  return (
    <section
      id="projects"
      className="relative py-24 md:py-28 bg-black text-white overflow-hidden"
    >
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#000_55%)]" />
      </div>

      {/* faint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em]">
              <Sparkles className="h-3 w-3" />
              <span className="font-mono">Selected Work</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Featured <span className="text-zinc-400">Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
  Frontend-focused projects where I craft{" "}
  <span className="font-semibold text-zinc-100">
    interactive, scalable UI
  </span>{" "}
  with{" "}
  <span className="font-semibold text-zinc-100">
    clean design systems
  </span>{" "}
  and smooth user flows — from portfolios to full-scale platforms.
</p>

          </div>

          <div className="flex flex-col items-start md:items-end gap-3 text-xs md:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-zinc-200" />
              <span className="font-mono uppercase tracking-[0.2em]">
                Built, not imagined
              </span>
            </div>
            <p className="max-w-sm text-right md:text-right">
              Every card below maps to a real repo / demo
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Glow border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_140deg,_rgba(244,244,245,0.16),_rgba(39,39,42,0.2),_rgba(148,163,184,0.35),_rgba(244,244,245,0.16))] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

              <Card className="relative z-10 h-full rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-white shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-base md:text-lg font-semibold">
                        {project.title}
                      </CardTitle>
                      <p className="text-xs md:text-sm text-zinc-400">
                        {project.description}
                      </p>
                    </div>

                    <Badge
                      variant="outline"
                      className="border-zinc-600/70 bg-transparent text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-300"
                    >
                      <Code2 className="mr-1 h-3 w-3" />
                      {CATEGORY_LABEL[project.category]}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pt-1">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border-none bg-zinc-800/80 text-[11px] font-normal text-zinc-100"
                      >
                        {tech}
                      </Badge>
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

                  {/* Key features (first 2–3) */}
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-zinc-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
                    <span className="font-mono truncate max-w-[40%]">
                      {project.category.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-3">
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-100 hover:text-white"
                        >
                          Live Demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-100"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
