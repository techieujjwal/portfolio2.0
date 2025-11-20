"use client";

import { Suspense, lazy } from "react";

// Lazy load the 3D component to prevent SSR issues
const EnhancedStarsBackground = lazy(() => 
  import("@/components/3d/enhanced-stars").then(mod => ({ 
    default: mod.EnhancedStarsBackground 
  }))
);

export function LazyStarsBackground() {
  return (
    <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
      <EnhancedStarsBackground />
    </Suspense>
  );
}
