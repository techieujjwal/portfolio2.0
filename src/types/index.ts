// Global TypeScript type definitions

// Re-export all data types
export * from '@/data/projects';
export * from '@/data/skills';
export * from '@/data/experience';
export * from '@/data/achievements';

// Common types
export interface SectionProps {
  className?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

// Theme types
export type Theme = 'light' | 'dark';

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}