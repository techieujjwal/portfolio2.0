"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { TextRoll, MaskedHeading } from "@/components/animations";

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#1C1B1A] text-white py-20 px-6 md:py-32 md:px-12 rounded-t-[2.5rem] relative z-50 mt-[-2rem]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top CTA */}
        <div className="flex flex-col items-start gap-6">
          <MaskedHeading 
            text="Have a project in mind?"
            className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-tight leading-none text-white uppercase whitespace-nowrap"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href={`mailto:${SITE_CONFIG.links.email}`} className="inline-block mt-4">
              <button className="group relative overflow-hidden px-8 py-5 bg-white text-black rounded-full font-sans text-base md:text-lg font-bold tracking-wide inline-flex items-center justify-center gap-3 cursor-pointer select-none shadow-md border border-transparent">
                {/* Sweeping background fill */}
                <span className="absolute inset-0 z-10 block overflow-hidden rounded-full pointer-events-none">
                  <span className="block h-full w-full translate-y-full rounded-t-[10rem] bg-zinc-200 border border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0 group-hover:rounded-none" />
                </span>
                {/* Sliding text */}
                <span className="relative z-20 block overflow-hidden h-fit transition-colors duration-300">
                  <span className="flex items-center gap-1.5 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] translate-y-0 group-hover:-translate-y-full text-black">
                    Get in touch <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                  <span aria-hidden="true" className="absolute top-0 left-0 w-full flex items-center gap-1.5 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] translate-y-full group-hover:translate-y-0 text-black">
                    Get in touch <span className="inline-block">↗</span>
                  </span>
                </span>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Navigation, Socials and Local Time Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 border-t border-white/10 pt-16 mt-8">
          
          {/* Menu */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-zinc-500 text-[0.75rem] tracking-[0.2em] uppercase font-bold">
              Menu
            </span>
            <ul className="flex flex-col gap-3 font-sans font-semibold text-[1rem]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <TextRoll 
                    text={item.label} 
                    href={item.href} 
                    className="text-zinc-400 hover:text-white transition-colors duration-200" 
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-zinc-500 text-[0.75rem] tracking-[0.2em] uppercase font-bold">
              Socials
            </span>
            <ul className="flex flex-col gap-3 font-sans font-semibold text-[1rem]">
              {[
                { name: "LinkedIn ↗", url: SITE_CONFIG.links.linkedin },
                { name: "GitHub ↗", url: SITE_CONFIG.links.github },
                { name: "Phone ↗", url: "tel:+918882194557" }
              ].map((item) => (
                <li key={item.name}>
                  <TextRoll 
                    text={item.name} 
                    href={item.url} 
                    className="text-zinc-400 hover:text-white transition-colors duration-200" 
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Famous Quote */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4 text-left md:text-right md:items-end">
            <span className="font-mono text-zinc-500 text-[0.75rem] tracking-[0.2em] uppercase font-bold">
              Words to live by
            </span>
            <div className="flex flex-col gap-3 mt-1 md:items-end max-w-[280px]">
              <p className="text-zinc-300 font-serif italic text-lg leading-relaxed">
                &quot;Talk is cheap. Show me the code.&quot;
              </p>
              <span className="font-mono text-zinc-500 text-xs uppercase tracking-widest">
                — Linus Torvalds
              </span>
            </div>
          </div>

        </div>

        {/* Footer Credit Line */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8 mt-4 text-[0.85rem] font-mono text-zinc-500">
          <span>&copy; {new Date().getFullYear()} UJJWAL SHUKLA</span>
          <span className="mt-2 sm:mt-0 flex items-center gap-1">
            Designed &amp; Built by Ujjwal Shukla <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
          </span>
        </div>

      </div>
    </footer>
  );
}