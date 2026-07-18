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

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

      setScrolled(current > 20);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl py-3 px-4 transition-all duration-500",
            scrolled
              ? "bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.03] shadow-lg"
          )}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(255,255,255,0.03) 100%)",
              }}
            />
          </div>

          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-xl font-bold transition-all hover:opacity-80 group"
            >
              <span className="tracking-tight text-white">
                Ujjwal Shukla
              </span>
            </Link>

            <div className="hidden md:flex gap-1">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={item.href}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-all px-3 py-1.5 rounded-lg",
                        active
                          ? "text-white bg-white/10"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>

                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    variant="default"
                    className="rounded-xl font-semibold shadow-md relative overflow-hidden group bg-white text-black hover:bg-zinc-200 border-transparent"
                  >
                    <span className="relative z-10">Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(200,200,200,0.5)] to-[rgba(255,255,255,0.5)] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-shift_2s_ease_infinite] transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </a>
            </div>

            <div className="flex md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.06] shadow-sm"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="p-0 bg-[#0A0A0A]/95 backdrop-blur-3xl text-white border-l border-white/[0.06]"
                >
                  <VisuallyHidden>
                    <h2>Mobile Navigation Menu</h2>
                  </VisuallyHidden>

                  <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-between border-b border-white/[0.04]">
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="font-display text-2xl font-bold"
                      >
                        <span className="text-white">
                          Ujjwal Shukla
                        </span>
                      </Link>
                    </div>

                    <div className="flex-1 px-6 py-8 flex flex-col gap-3">
                      {NAV_ITEMS.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block py-3 px-4 text-lg font-medium rounded-xl transition-all border border-transparent",
                              pathname === item.href
                                ? "text-white bg-white/10 border-white/20"
                                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="px-6 pb-8">
                      <a
                        href="/resume/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="w-full rounded-xl font-bold shadow-md bg-white text-black hover:bg-zinc-200"
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
