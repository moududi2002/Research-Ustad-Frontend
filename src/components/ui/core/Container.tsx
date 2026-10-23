// src/components/ui/core/Container.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",   // 640px
  md: "max-w-screen-md",   // 768px
  lg: "max-w-screen-lg",   // 1024px
  xl: "max-w-7xl",         // 1280px — default, homepage standard
  "2xl": "max-w-screen-2xl", // 1536px
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const;

const paddingClasses = {
  none: "",
  sm: "px-4 sm:px-6 py-6",
  md: "px-4 sm:px-6 lg:px-8 py-10",
  lg: "px-4 sm:px-6 lg:px-8 py-12",   // default — responsive safe
  xl: "px-4 sm:px-6 lg:px-12 py-20",
} as const;

const Container = ({
  children,
  className,
  maxWidth = "xl",
  padding = "lg",
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;