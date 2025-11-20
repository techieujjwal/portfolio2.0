"use client";

import { FloatingSocials } from "@/components/common/floating-socials";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { useRouteChange } from "@/hooks/use-route-change";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Handle route changes
  useRouteChange();
  
  return (
    <>
      {children}
      <FloatingSocials />
      <ScrollToTop />
    </>
  );
}