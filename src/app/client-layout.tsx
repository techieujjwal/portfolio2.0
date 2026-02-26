"use client";

import { CursorGlow } from "@/components/animations/cursor-glow";
import { ScrollProgress } from "@/components/animations/scroll-progress";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="noise-overlay">
      <CursorGlow />
      <ScrollProgress />
      {children}
    </div>
  );
}