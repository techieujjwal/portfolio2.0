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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog"; // REQUIRED FIX

export function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // mobile menu
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(current > 20);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.1,
      },
    },
    exit: { y: -100, opacity: 0, transition: { duration: 0.1 } },
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
            "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl py-3 px-4 transition-all bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg"
          )}
        >
          <div className="flex items-center justify-between">

            {/* LEFT — Logo */}
            <Link
              href="/"
              className="font-display text-xl font-bold transition-all hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              <span className="gradient-text tracking-tight">Ujjwal shukla</span>
            </Link>

            {/* CENTER — Desktop Nav */}
            <div className="hidden md:flex gap-6">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={item.href}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-all",
                        active
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>

                    {active && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="h-[2px] w-full bg-primary absolute -bottom-1 left-0"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT — Resume btn */}
            <div className="hidden md:flex items-center">
              <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="default"
                  className="rounded-xl font-semibold shadow-md"
                >
                  Resume
                </Button>
              </a>
            </div>

            {/* MOBILE MENU */}
            <div className="flex md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-muted/50 shadow-sm"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="p-0 bg-black text-white border-l border-white/10"
                >

                  {/* REQUIRED FIX */}
                  <DialogTitle asChild>
                    <VisuallyHidden>
                      <h2>Mobile Navigation Menu</h2>
                    </VisuallyHidden>
                  </DialogTitle>

                  <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-between">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl font-bold"
                      >
                        <span className="gradient-text">Ujjwal shukla</span>
                      </Link>
                    </div>

                    <div className="flex-1 px-6 py-6 flex flex-col gap-2">
                      {NAV_ITEMS.map((item) => (
                        <motion.div
                          whileTap={{ scale: 0.97 }}
                          key={item.href}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 px-4 text-lg font-medium rounded-md text-muted-foreground hover:bg-muted/40 hover:text-primary transition-all"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="px-6 pb-6">
                      <a
                        href="/resume/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="w-full rounded-xl font-semibold shadow-md"
                          size="lg"
                        >
                          Resume
                        </Button>
                      </a>
                    </div>
                  </div>

                </SheetContent>
              </Sheet>
            </div>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
