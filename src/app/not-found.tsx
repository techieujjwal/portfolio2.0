"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

export default function NotFound() {
  return (
    <div className="relative z-30 min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      <StarsBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none z-10" />

      <div className="relative z-20 text-center space-y-8 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-4"
        >
          <h1 className="text-[10rem] leading-none font-black text-white tracking-tighter opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-4xl font-bold tracking-tight text-white">Lost in Space</h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 font-light text-lg"
        >
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or is currently drifting in the void.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-300"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}