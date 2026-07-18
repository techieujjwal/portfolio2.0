"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";
import { GsapText } from "@/components/animations";

export function Experience() {
  return (
    <section className="relative z-30 min-h-screen bg-black text-white py-32 rounded-t-[2.5rem] mt-[-2rem] overflow-hidden">
      <StarsBackground />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="font-mono text-white">Timeline</span>
          </div>

          <GsapText 
            text="Work Experience" 
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 justify-center"
          />
          <p className="text-white text-lg font-light max-w-2xl mx-auto">
            A chronicle of my professional journey, internships, and roles in tech.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Glowing Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative flex items-start mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-black border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20" />
              </div>
              
              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-[45%] group">
                <div className="relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-700">
                  {/* Sweep Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">
                          {exp.role}
                        </h3>
                        <p className="text-white font-medium flex items-center gap-2 transition-colors duration-500">
                          <Building2 className="w-4 h-4 text-white" />
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end gap-2 text-xs font-mono text-white tracking-wider">
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                          <Calendar className="w-3 h-3 text-white" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5">
                          <MapPin className="w-3 h-3 text-white" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-white text-sm leading-relaxed mb-6 font-light transition-colors duration-500">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 transition-colors duration-500" />
                          <p className="text-sm text-white transition-colors duration-500 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>                
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase rounded-full bg-white/5 text-white border border-white/5 group-hover:border-white/10 transition-all duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}