import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";

interface SectionHeaderProps {
  title: string;
  highlight: string;
  description: string;
}

export function SectionHeader({ title, highlight, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={ANIMATION_VARIANTS.fadeUp}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}