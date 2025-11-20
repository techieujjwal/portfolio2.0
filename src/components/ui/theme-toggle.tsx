"use client";

import * as React from "react";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setTheme("dark"); 
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <button
      disabled
      className="relative h-9 w-9 rounded-md border border-input bg-background cursor-not-allowed"
      aria-label="Dark theme enabled"
    >
      <motion.div
        className="flex h-full w-full items-center justify-center"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
    </button>
  );
}
