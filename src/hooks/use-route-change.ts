"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useRouteChange(callback?: () => void) {
  const pathname = usePathname();

  useEffect(() => {
    // Trigger callback on route change
    if (callback) {
      callback();
    }
    
    // Force layout recalculation
    document.documentElement.style.display = 'none';
    void document.documentElement.offsetHeight; // Trigger reflow
    document.documentElement.style.display = '';
    
  }, [pathname, callback]);
}
