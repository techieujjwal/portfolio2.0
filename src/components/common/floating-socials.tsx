"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingSocials() {
  const socials = [
    {
      icon: <Github className="h-5 w-5" />,
      href: SITE_CONFIG.links.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: SITE_CONFIG.links.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${SITE_CONFIG.links.email}`,
      label: "Email",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          className="p-3 rounded-full bg-background border shadow-lg hover:shadow-xl hover:text-primary transition-all"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
      
      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="w-px h-20 bg-border mx-auto mt-4"
        style={{ originY: 0 }}
      />
    </motion.div>
  );
}