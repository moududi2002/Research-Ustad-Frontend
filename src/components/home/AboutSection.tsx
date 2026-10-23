// src/components/home/AboutSection.tsx
import { Container, SectionHeader } from "@/components/ui/core";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { BookOpen, Users, Globe2 } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Interdisciplinary Research",
    description:
      "Humanities, Sciences, and Social Sciences come together to produce rigorous, publishable work.",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description:
      "Experienced mentors walk with you — from first idea to final publication.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    description:
      "Pathways to international conferences, collaborations, and higher-study programs.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          title="About Research Ustad"
          description="A platform built to sharpen intellect, publish impact, and connect scholars worldwide."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-14">
          {/* Left — Text */}
          <Reveal className="space-y-6">
            <p className="text-lg text-brand-ink leading-relaxed">
              Research Ustad is a platform dedicated to sharpening your
              intellectuality. Our interdisciplinary team brings together
              decades of experience across Humanities, Sciences, and Social
              Sciences to provide comprehensive support tailored to your
              academic needs.
            </p>
            <p className="text-lg text-brand-muted leading-relaxed">
              The platform is a gateway to the emerging world of innovation
              and invention — where curiosity becomes contribution, and
              contribution becomes global impact.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-brand-border bg-brand-surface/60 hover:bg-white hover:shadow-md hover:border-brand-secondary/30 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-brand-secondary mb-3" />
                  <h4 className="font-semibold text-brand-primary text-sm mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Image */}
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-border shadow-[0_20px_60px_-25px_rgba(30,58,95,0.25)]">
              <Image
                src="/img/aboutsection.png"
                alt="Research Ustad team collaborating"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-brand-secondary/10 -z-10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;