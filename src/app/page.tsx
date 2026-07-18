"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Preloader } from "@/components/animations";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { StatusBanner } from "@/components/home/status-banner";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <FeaturedProjects />
          <StatusBanner />
          <SkillsShowcase />
          <Achievements />
        </motion.div>
      )}
    </>
  );
}

