// src/components/home/ResearchImpactSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Container, SectionHeader } from "@/components/ui/core";
import { FileText, Users, Globe2, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Metric = {
  icon: typeof FileText;
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

// ⚠️ Verified numbers only — admin/backend থেকে পরে dynamic করা যাবে
const metrics: Metric[] = [
  {
    icon: FileText,
    value: 120,
    suffix: "+",
    label: "Publications",
    description: "Peer-reviewed papers and scholarly articles",
  },
  {
    icon: BookOpen,
    value: 25,
    suffix: "+",
    label: "Research Projects",
    description: "Ongoing and completed interdisciplinary initiatives",
  },
  {
    icon: Users,
    value: 80,
    suffix: "+",
    label: "Researchers",
    description: "Faculty, mentors, and early-career scholars",
  },
  {
    icon: Globe2,
    value: 15,
    suffix: "+",
    label: "Countries",
    description: "International collaborations and conferences",
  },
];

/* ─── Count-Up Hook ─── */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

/* ─── Single Metric Card ─── */
const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const value = useCountUp(metric.value, active);
  const Icon = metric.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-white border border-brand-border rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(30,58,95,0.25)] hover:border-brand-secondary/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-primary group-hover:border-brand-primary">
        <Icon className="w-5 h-5 text-brand-primary transition-colors group-hover:text-white" />
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-0.5 mb-2">
        <span className="font-serif text-4xl md:text-5xl font-bold text-brand-primary tabular-nums leading-none">
          {value}
        </span>
        {metric.suffix && (
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-secondary leading-none">
            {metric.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary mb-1.5">
        {metric.label}
      </p>

      {/* Description */}
      <p className="text-sm text-brand-muted leading-relaxed">
        {metric.description}
      </p>
    </div>
  );
};

/* ─── Section ─── */
const ResearchImpactSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Research Impact"
            title="Numbers that Speak"
            description="A snapshot of our scholarly output, community, and global reach — verifiable and growing."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <MetricCard metric={m} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Footnote — honesty about data */}
        <Reveal delay={400}>
          <p className="text-center text-xs text-brand-muted mt-10 max-w-xl mx-auto">
            Metrics reflect verified institutional records and are updated
            periodically.
          </p>
        </Reveal>
      </Container>
    </section>
  );
};

export default ResearchImpactSection;