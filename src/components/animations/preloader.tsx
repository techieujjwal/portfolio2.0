"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { DarkCurveSweepUp, DarkCurveSweepDown } from "./curve-transitions";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const introTextControls = useAnimationControls();
  const curveUpControls = useAnimationControls();
  const counterControls = useAnimationControls();
  const curveDownControls = useAnimationControls();

  const [showOverlays, setShowOverlays] = useState(true);
  const [percent, setPercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const sequence = async () => {
      try {
        // Step 1: Text reveal "Are You Ready?" on a solid dark screen
        await introTextControls.start("animate");

        // Step 2: Sweep up first curve
        await curveUpControls.start("animate");

        // Step 3: Show percentage loader
        setIsRunning(true);
        await counterControls.start("animate");

        // Step 4: Sweep down second curve
        await curveDownControls.start("animate");

        // Hide overlays to reveal home content
        setShowOverlays(false);
        onComplete();
      } catch (err) {
        console.error("Preloader animation failed", err);
      } finally {
        document.body.style.overflow = "";
      }
    };

    sequence();

    return () => {
      document.body.style.overflow = "";
    };
  }, [introTextControls, curveUpControls, counterControls, curveDownControls, onComplete]);

  // RequestAnimationFrame percentage counter
  useEffect(() => {
    if (!isRunning) return;

    const duration = 2800; // time in ms
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setPercent(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isRunning]);

  if (!showOverlays) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none w-screen h-screen select-none font-sans">
      {/* 1. Solid Pre-Load Backdrop Layer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={introTextControls}
        variants={{
          animate: {
            opacity: [1, 1, 0],
            transition: {
              duration: 2.6,
              times: [0, 1.8 / 2.6, 1],
              ease: "easeInOut"
            }
          }
        }}
        className="absolute inset-0 bg-[#000000] flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={introTextControls}
          variants={{
            animate: {
              opacity: [0, 1, 1, 0],
              y: [15, 0, 0, -10],
              transition: {
                duration: 2.6,
                times: [0, 0.8 / 2.6, 1.8 / 2.6, 1],
                ease: "easeInOut"
              }
            }
          }}
          className="text-white text-3xl md:text-5xl uppercase tracking-[0.2em] font-light text-center px-4"
        >
          Are You Ready?
        </motion.h1>
      </motion.div>

      {/* 2. Curve Sweep Up Transition */}
      <DarkCurveSweepUp controls={curveUpControls} />

      {/* 3. Progress Counter Dashboard Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={counterControls}
        variants={{
          animate: {
            opacity: [0, 1, 1, 0],
            transition: {
              duration: 3.1,
              times: [0, 0.05, 0.9, 1],
              ease: "easeInOut"
            }
          }
        }}
        className="absolute inset-0 flex items-center justify-center z-30"
      >
        <div className="flex flex-col items-center gap-4 w-[280px] md:w-[380px]">
          <div className="flex items-baseline justify-between w-full px-1">
            <span className="text-white/60 text-xs font-mono tracking-[0.3em] uppercase">
              INITIALIZING PORTFOLIO
            </span>
            <span className="text-white/80 text-xs font-mono tabular-nums">
              {percent}%
            </span>
          </div>

          <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-white/90"
              initial={{ width: "0%" }}
              variants={{
                animate: {
                  width: "100%",
                  transition: { duration: 2.8, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* 4. Curve Sweep Down Transition */}
      <DarkCurveSweepDown controls={curveDownControls} />
    </div>
  );
}
