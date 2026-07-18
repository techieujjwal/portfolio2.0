"use client";

import { useRef, useLayoutEffect, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects as allProjects } from "@/data/projects";
import { LiquidImage } from "@/components/animations";

const BG = "#1C1B1A";

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [topOffsets, setTopOffsets] = useState<number[]>(allProjects.map(() => 0));

  const recalcOffsets = useCallback(() => {
    const offsets: number[] = [];
    let cumulative = 0;
    rowRefs.current.forEach((el) => {
      offsets.push(cumulative);
      if (el) {
        cumulative += el.getBoundingClientRect().height;
      }
    });
    setTopOffsets(offsets);
  }, []);

  useLayoutEffect(() => {
    recalcOffsets();
    window.addEventListener("resize", recalcOffsets);
    return () => window.removeEventListener("resize", recalcOffsets);
  }, [recalcOffsets]);

  useEffect(() => {
    const timer = setTimeout(recalcOffsets, 500);
    return () => clearTimeout(timer);
  }, [recalcOffsets]);

  return (
    <>
      <style>{`
        .proj-card {
          position: sticky;
          background: ${BG};
        }
        .proj-header-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
          background: ${BG};
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-sizing: border-box;
        }
        .proj-num {
          font-family: monospace;
          font-weight: 800;
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1;
        }
        .proj-title {
          font-weight: 700;
          font-size: 1.8rem;
          color: #EDEDED;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }
        .proj-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem 0 4rem;
          background: ${BG};
        }
        @media (min-width: 768px) {
          .proj-header-row {
            grid-template-columns: 120px 1fr;
            padding: 2rem 0;
          }
          .proj-num {
            font-size: 2rem;
          }
          .proj-title {
            font-size: 2.5rem;
          }
          .proj-body {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
      `}</style>

      <section
        ref={containerRef}
        id="projects"
        className="w-full text-white relative z-10 py-24 md:py-32 px-6 md:px-12 rounded-t-[2.5rem] mt-[-2rem]"
        style={{ background: BG }}
      >
        <div className="max-w-6xl mx-auto flex flex-col">
          {/* Section Header */}
          <div className="flex flex-col items-start gap-4 mb-20 relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="font-mono text-zinc-400">Selected Work</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white">
              Featured <span className="text-zinc-500">Projects</span>
            </h2>
            <p className="max-w-xl text-zinc-400 text-sm md:text-base">
              A curated showcase of engineering builds, full-stack applications, and interactive digital interfaces.
            </p>
          </div>

          {/* Stacking Projects Cards Deck */}
          <div className="relative flex flex-col w-full mt-8">
            {allProjects.map((project, index) => {
              const formattedNum = `0${index + 1}`;
              
              return (
                <div
                  key={project.id}
                  className="proj-card w-full"
                  style={{
                    top: `${topOffsets[index]}px`,
                    zIndex: 10 + index,
                  }}
                >
                  <div
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    className="proj-header-row"
                  >
                    <span className="proj-num">{formattedNum}</span>
                    <h3 className="proj-title uppercase">{project.title}</h3>
                  </div>

                  <div className="proj-body border-b border-white/10">
                    {/* Left Column: Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] group shadow-2xl">
                      {project.image ? (
                        <div className="relative w-full h-full">
                          <LiquidImage
                            src={project.image}
                            alt={project.title}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                          <Code2 className="h-12 w-12 text-zinc-500 mb-3" />
                          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">{project.category}</span>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Description */}
                    <div className="flex flex-col justify-between items-start gap-6">
                      <div className="space-y-4 w-full">
                        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                          {project.longDescription || project.description}
                        </p>

                        <div className="space-y-2">
                          <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase">Key Features</span>
                          <ul className="grid grid-cols-1 gap-2 text-xs text-zinc-400">
                            {project.features.slice(0, 4).map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className="mt-[6px] h-1 w-1 rounded-full bg-white shrink-0" />
                                <span className="leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="border border-white/10 bg-white/5 text-[10px] md:text-[11px] font-normal text-zinc-300 py-1 px-2.5 rounded-md hover:bg-white/10 hover:text-white transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Links */}
                      <div className="flex flex-wrap items-center gap-4 w-full pt-4 border-t border-white/10">
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-black bg-white hover:bg-zinc-200 py-2.5 px-5 rounded-full transition-all duration-300 group/btn"
                          >
                            Live Showcase
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        )}
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-zinc-400 hover:text-white py-2 px-4 rounded-full border border-white/20 hover:border-white transition-all group/git"
                          >
                            <Github className="h-4 w-4" />
                            Source Code
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-[40vh]" />
        </div>
      </section>
    </>
  );
}
