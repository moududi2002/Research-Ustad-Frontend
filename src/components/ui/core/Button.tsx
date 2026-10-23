// src/components/ui/core/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-semibold tracking-wide",
    "transition-all duration-300 ease-out",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/40 focus-visible:ring-offset-2",
    "cursor-pointer select-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
        secondary:
          "bg-white text-brand-primary border border-brand-border hover:bg-brand-surface hover:border-brand-secondary/40 hover:text-brand-primary shadow-sm",
        outline:
          "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white shadow-sm",
        ghost:
          "bg-transparent text-brand-primary hover:bg-brand-surface",
        disabled:
          "bg-slate-200 text-slate-500 cursor-not-allowed",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        md: "h-11 px-6 py-3 text-sm",
        lg: "h-12 px-8 py-4 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };