// src/components/home/ResearchFocusSection.tsx
import { Container, SectionHeader } from "@/components/ui/core";
import { Reveal } from "@/components/ui/Reveal";
import {
  Brain,
  HeartPulse,
  ShieldCheck,
  Leaf,
  Users2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

type FocusArea = {
  icon: typeof Brain;
  title: string;
  description: string;
  topics: string[];
};

const focusAreas: FocusArea[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Applied ML, deep learning, and responsible AI for real-world research problems.",
    topics: ["Computer Vision", "NLP", "LLMs"],
  },
  {
    icon: HeartPulse,
    title: "Health & Life Sciences",
    description:
      "Interdisciplinary research in public health, bioinformatics, and clinical data.",
    topics: ["Public Health", "Bioinformatics", "Epidemiology"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Threat modeling, secure systems, and privacy-preserving computation.",
    topics: ["Network Security", "Cryptography", "Privacy"],
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    description:
      "Environmental data science and sustainable development research.",
    topics: ["Climate Data", "Renewables", "Policy"],
  },
  {
    icon: Users2,
    title: "Social Sciences",
    description:
      "Quantitative and qualitative research on society, behavior, and policy.",
    topics: ["Behavioral", "Development", "Education"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Statistical modeling, visualization, and reproducible research pipelines.",
    topics: ["Statistics", "Visualization", "Reproducibility"],
  },
];

const ResearchFocusSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="What We Study"
            title="Research Focus Areas"
            description="Interdisciplinary domains where our researchers produce published, impactful work."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={i * 70}>
                <article className="group h-full bg-white border border-brand-border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(30,58,95,0.25)] hover:border-brand-secondary/40">
                  {/* Icon + Arrow */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary group-hover:border-brand-primary">
                      <Icon className="w-5 h-5 text-brand-primary transition-colors group-hover:text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-brand-muted opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand-secondary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-brand-primary text-lg mb-2 leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {area.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-brand-primary bg-brand-surface border border-brand-border rounded-full px-2.5 py-1 group-hover:border-brand-secondary/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ResearchFocusSection;