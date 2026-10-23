// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/40 focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover hover:shadow-md hover:-translate-y-[1px]",
        secondary:
          "bg-brand-secondary text-white shadow-sm hover:bg-brand-secondary/90 hover:shadow-md hover:-translate-y-[1px]",
        outline:
          "border border-brand-border bg-white text-brand-primary hover:bg-brand-surface hover:border-brand-secondary/40",
        ghost:
          "text-brand-primary hover:bg-brand-surface",
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        link: "text-brand-secondary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3 [&_svg]:size-3.5",
        md: "h-10 rounded-md px-5 [&_svg]:size-4",
        lg: "h-12 rounded-md px-7 text-base [&_svg]:size-5",
        icon: "size-9",
        default: "h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };