"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and toggle navbar visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up or at top
      }
      
      // Update scroll state for shadows and backdrop
      setIsScrolled(currentScrollY > 20);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Set initial state
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // Navbar container variants for animations
  const navbarVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        mass: 0.5,
        duration: 0.1
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut" as const
      }
    }
  };

  // Navbar link item variants for animations
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-xl py-3 px-4",
            isScrolled 
              ? "bg-background/40 backdrop-blur-md border border-border/50 shadow-lg" 
              : "bg-background/20 backdrop-blur-sm border border-border/20"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo with fixed width */}
            <div className="w-[160px]">
              <Link 
                href="/"
                className="font-display text-xl font-bold transition-colors hover:text-primary"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text"
                >
                  Ujjwal shukla
                </motion.span>
              </Link>
            </div>
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex justify-center flex-1">
              <nav className="flex items-center gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-all hover:text-primary hover:bg-muted/50",
                        pathname === item.href
                          ? "text-primary bg-muted/60 font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            
            {/* Theme toggle - Right aligned with fixed width */}
            <div className="w-[160px] flex justify-end items-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
              
              </motion.div>

              {/* Mobile Navigation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="md:hidden" 
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="p-0">
                    <div className="flex flex-col h-full">
                      <div className="p-6 flex justify-between items-center">
                        <Link 
                          href="/"
                          className="font-display text-2xl font-bold transition-colors hover:text-primary"
                        >
                          <span className="gradient-text">Ujjwal shukla</span>
                        </Link>
                   
                      </div>
                      <div className="flex-1 px-6 py-8">
                        <ul className="flex flex-col gap-1">
                          {NAV_ITEMS.map((item, i) => (
                            <motion.li 
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  "block py-3 px-4 text-lg font-medium rounded-md transition-colors",
                                  pathname === item.href
                                    ? "text-primary bg-muted/60"
                                    : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                                )}
                              >
                                {item.label}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </motion.div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}