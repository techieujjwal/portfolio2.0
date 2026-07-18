"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink, Github, Smartphone, Globe, Link2, Brain } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";
import { GsapText } from "@/components/animations";

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
    <section className="relative z-30 min-h-screen bg-black text-white py-32 rounded-t-[2.5rem] mt-[-2rem] overflow-hidden">
      <StarsBackground />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="font-mono text-white">Portfolio</span>
          </div>

          <GsapText 
            text="Featured Projects" 
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 justify-center"
          />
          <p className="text-white text-lg font-light max-w-2xl mx-auto">
            Here&apos;s what I&apos;ve been working on — from web apps to data tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-mono transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-white text-black font-bold"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative flex flex-col rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-700"
              >
                <div className="relative h-64 overflow-hidden bg-black/50 border-b border-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <span className="text-white/20 font-mono text-sm">No Image Provided</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-white font-mono">
                      {categoryIcons[project.category]}
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:translate-x-1 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm font-light leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono tracking-wider uppercase rounded-sm bg-white/5 text-white border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[10px] font-mono tracking-wider rounded-sm bg-white/5 text-white border border-white/5">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono tracking-wider text-white hover:text-zinc-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono tracking-wider text-white hover:text-zinc-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}