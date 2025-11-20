// Fix for Next.js navigation issues
export const navigationFix = {
  // Force re-render on navigation
  scrollRestoration: false,
  
  // Ensure proper hydration
  experimental: {
    scrollRestoration: false,
  }
};

// Navigation prefetch config
export const linkConfig = {
  prefetch: true,
  scroll: true,
  replace: false,
};
