//src/components/home/ServiceSection.tsx
import { Button } from "@/components/ui/core";
import {
  BookOpen,
  TrendingUp,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/core";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const wings = [
  {
    icon: BookOpen,
    title: "Research",
    description:
      "Engage in ongoing innovative research initiatives and contribute to scholarly publications.",
    features: [
      "Current Research Projects",
      "Upcoming Courses",
      "Academic Publications",
      "International Conferences",
    ],
    status: "Active" as const,
    link: "/allpapers",
  },
  {
    icon: TrendingUp,
    title: "Trending",
    description:
      "Specialized training courses in the most in-demand technologies and skills.",
    features: [
      "Cybersecurity Training",
      "AI & Machine Learning",
      "Data Science",
      "LLM & ChatGPT",
    ],
    status: "Active" as const,
    link: "/trending",
  },
  {
    icon: GraduationCap,
    title: "Higher Study",
    description:
      "Resources and guidance for international education and scholarship opportunities.",
    features: [
      "Abroad Opportunities",
      "Scholarship News",
      "University Guidance",
      "Application Support",
    ],
    status: "Coming Soon" as const,
    link: "/higher-study",
  },
  {
    icon: Globe,
    title: "Language",
    description:
      "Language proficiency training for global academic and professional opportunities.",
    features: [
      "IELTS Preparation",
      "PTE Training",
      "Academic Writing",
      "Communication Skills",
    ],
    status: "Coming Soon" as const,
    link: "/language",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-surface">
      <Container>
        <SectionHeader
          title="Our Research Wings"
          description="Explore our specialized programs designed to support your academic journey and professional development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {wings.map((wing, idx) => (
            <Reveal key={wing.title} delay={idx * 80}>
              <div className="group relative h-full bg-white border border-brand-border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(30,58,95,0.25)] hover:border-brand-secondary/40">
                {/* Status chip */}
                <div className="absolute top-4 right-4">
                  <span
                    className={
                      wing.status === "Active"
                        ? "text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200"
                    }
                  >
                    {wing.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-primary group-hover:border-brand-primary">
                  <wing.icon className="w-6 h-6 text-brand-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-primary mb-2">
                  {wing.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed mb-5">
                  {wing.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {wing.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-brand-ink"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-secondary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={wing.link} className="mt-auto">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full group/btn justify-between"
                  >
                    Explore Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;