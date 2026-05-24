"use client";

interface GradientTextProps {
  children: string;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`inline-block text-foreground ${className}`}>
      {children}
    </span>
  );
}
