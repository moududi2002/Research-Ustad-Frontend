import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/core";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Globe2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.06),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(30,58,95,0.05),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,_black_30%,transparent_75%)]"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[86vh] py-20 lg:py-24">
          {/* Left — Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface border border-brand-border">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              <span className="text-xs font-medium text-brand-primary tracking-wide uppercase">
                Interdisciplinary Research Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.08] tracking-tight">
              Advancing Research.
              <br />
              <span className="text-brand-secondary">
                Empowering Global Scholars.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl">
              Research Ustad brings together researchers, mentors, and
              scholars across Humanities, Sciences, and Social Sciences —
              turning curiosity into published impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/allpapers">
                <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                  <BookOpen className="w-4 h-4" />
                  Explore Our Research
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/higher-study">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Globe2 className="w-4 h-4" />
                  Explore Higher Study
                </Button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-brand-border">
              {[
                { label: "Peer-reviewed publications" },
                { label: "International conferences" },
                { label: "Mentorship & guidance" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-brand-muted">
                  <span className="w-1 h-1 rounded-full bg-brand-secondary" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Main image card */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-brand-border shadow-[0_20px_60px_-20px_rgba(30,58,95,0.25)]">
                <Image
                  src="/img/heroimg1.jpg"
                  alt="Researchers collaborating"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 bg-white border border-brand-border rounded-xl px-4 py-3 shadow-lg animate-float">
                <p className="text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                  Publications
                </p>
                <p className="text-xl font-bold text-brand-primary">
                  Peer-reviewed
                </p>
              </div>

              {/* Floating badge — bottom right */}
              <div
                className="absolute -bottom-4 -right-4 bg-white border border-brand-border rounded-xl px-4 py-3 shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <p className="text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                  Network
                </p>
                <p className="text-xl font-bold text-brand-primary">
                  Global scholars
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;