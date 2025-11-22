"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Grid } from "lucide-react"; // Removed unused ArrowRight
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button"; // Button is now used only in JSX, not in imports list
import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem,
} from "@/components/animations"; 
import { projects, Project } from "@/data/projects"; 


const FEATURED_PROJECT_IDS = [
  "syncverse", 
  "community-dashboard",
  "student-result-analyzer"
];

const useFeaturedProjects = (): Project[] => {
  const featuredProjects = projects.filter(project => 
    FEATURED_PROJECT_IDS.includes(project.id)
  );
  return featuredProjects;
};


export function FeaturedProjects() {
  const featuredProjects = useFeaturedProjects();

  return (
    <section 
      className="py-24 md:py-36 
                 bg-white dark:bg-gray-950 
                 text-gray-900 dark:text-gray-50 
                 relative overflow-hidden 
                 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        <ScrollReveal delay={0.1} width="100%">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-3 flex items-center justify-center">
              <Grid className="w-4 h-4 mr-2" />
              Featured Work
            </p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              A Selection of Creative & Technical Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Highlighting key projects that demonstrate versatility across design, development, and strategic problem-solving.
            </p>
          </motion.div>
        </ScrollReveal>
        
        <div className="flex justify-center mb-20">
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-0.5 bg-gray-300 dark:bg-gray-700 transform origin-center"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {featuredProjects.length > 0 && (
            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              // Removed stagger={0.15} and delay={0.4} to fix Type Error
            >
              {featuredProjects.map((project) => (
                <StaggerItem 
                  key={project.id} 
                  className="mx-auto w-full max-w-sm md:max-w-none"
                >
                  <ProjectCard 
                    project={project} 
                    detailed={true} 
                    className="
                      relative z-10 
                      transition-all duration-300 ease-out 
                      bg-white dark:bg-gray-800 
                      border border-gray-200 dark:border-gray-700 
                      shadow-md hover:shadow-lg dark:shadow-gray-700/20
                      hover:border-gray-300 dark:hover:border-gray-600 
                      rounded-lg overflow-hidden
                    "
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link 
            href="/projects" 
            className="inline-flex group" 
          >
            <Button 
              size="lg" 
              className="
                         px-8 py-3 text-lg font-semibold 
                         bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900
                         border border-transparent 
                         rounded-full 
                         transition-all duration-300 ease-out 
                         hover:bg-gray-700 dark:hover:bg-gray-300 
                         group-hover:shadow-md group-hover:shadow-gray-500/30 dark:group-hover:shadow-gray-400/30
                         flex items-center justify-center
              "
            >
              View All Projects
              <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
