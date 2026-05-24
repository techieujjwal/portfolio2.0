"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`Route changed to: ${url}`);
    
    const handleRouteChange = () => {
      document.removeEventListener('click', () => {});
      
      document.body.style.display = 'none';
      void document.body.offsetHeight;
      document.body.style.display = '';
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  return null;
}
