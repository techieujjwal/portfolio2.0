import { Badge as BaseBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LavenderBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function LavenderBadge({ 
  children, 
  variant = "secondary", 
  className 
}: LavenderBadgeProps) {
  return (
    <BaseBadge
      variant={variant}
      className={cn(
        "text-xs px-2 py-0.5 transition-colors",
        variant === "outline" ? "badge-lavender-outline" : "badge-lavender",
        className
      )}
      data-badge={variant === "outline" ? "lavender-outline" : "lavender"}
    >
      {children}
    </BaseBadge>
  );
}
