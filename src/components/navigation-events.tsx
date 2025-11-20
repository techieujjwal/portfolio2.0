"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`Route changed to: ${url}`);
    
    // Force a re-render of the entire page
    const handleRouteChange = () => {
      // Remove any stale event listeners
      document.removeEventListener('click', () => {});
      
      // Force layout recalculation
      document.body.style.display = 'none';
      void document.body.offsetHeight; // Trigger reflow
      document.body.style.display = '';
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  return null;
}
