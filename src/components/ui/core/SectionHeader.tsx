// src/components/ui/core/SectionHeader.tsx
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  eyebrow?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  description,
  align = "center",
  eyebrow,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-brand-secondary" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-secondary">
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-brand-secondary" />
        </div>
      )}

      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-brand-primary leading-tight tracking-tight">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-brand-muted leading-relaxed",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
};

export default SectionHeader;