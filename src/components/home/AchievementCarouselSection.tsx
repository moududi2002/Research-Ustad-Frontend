// src/components/home/AchievementCarouselSection.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button, Container, SectionHeader } from "@/components/ui/core";
import { Trophy, ArrowRight, Star, Calendar } from "lucide-react";
import Link from "next/link";
import type { Achievement } from "@/type/achievement";
import { GetAllAchievementsPublic } from "@/services/achievements";
import FallbackImage from "@/components/shared/FallbackImage";
import { Reveal } from "@/components/ui/Reveal";
import Autoplay from "embla-carousel-autoplay";

const AchievementCarouselSection = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await GetAllAchievementsPublic();
        if (response?.success && response?.data) {
          setAchievements(response.data?.slice(0, 12));
        } else {
          setAchievements([]);
        }
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError("Failed to load achievements");
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  /* ─── Loading Skeleton ─── */
  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Milestones"
            title="Our Achievements"
            description="Celebrating the milestones and recognition that showcase our team's dedication and excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-brand-border overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-slate-100" />
                <div className="p-5 space-y-3">
                  <div className="h-3 w-20 bg-slate-100 rounded" />
                  <div className="h-4 bg-slate-100 rounded" />
                  <div className="h-3 w-3/4 bg-slate-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  /* ─── Error State ─── */
  if (error) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <Trophy className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-2">
              Failed to load achievements
            </h3>
            <p className="text-sm text-brand-muted mb-6">{error}</p>
            <Button variant="primary" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  /* ─── Empty State ─── */
  if (achievements?.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-md mx-auto text-center py-16">
            <Star className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-brand-primary mb-2">
              No achievements available
            </h3>
            <p className="text-sm text-brand-muted">
              Check back later for new achievements.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  /* ─── Main Section ─── */
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Milestones"
            title="Our Achievements"
            description="Celebrating the milestones and recognition that showcase our team's dedication and excellence in research and innovation."
          />
        </Reveal>

        <Reveal delay={120} className="relative mt-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {achievements.map((achievement) => (
                <CarouselItem
                  key={achievement._id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <article className="group h-full bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(30,58,95,0.35)] hover:border-brand-secondary/30">
                    {/* Image — fixed aspect ratio for consistency */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      {achievement.imageUrl ? (
                        <FallbackImage
                          src={achievement.imageUrl}
                          alt={achievement.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400">
                          <Trophy className="w-10 h-10 mb-2" />
                          <span className="text-xs font-medium">No Image</span>
                        </div>
                      )}
                      {/* Category badge — top-left */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-brand-primary border border-brand-border shadow-sm">
                          <Trophy className="w-3 h-3 text-brand-gold" />
                          Achievement
                        </span>
                      </div>
                    </div>

                    {/* Content — always visible (better than hover-only) */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-semibold text-brand-primary text-base leading-snug line-clamp-2 group-hover:text-brand-secondary transition-colors">
                        {achievement.title}
                      </h3>
                      {achievement.description && (
                        <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">
                          {achievement.description}
                        </p>
                      )}
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel controls — refined */}
            <CarouselPrevious
              className="left-0 -translate-x-1/2 bg-white border-brand-border text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary shadow-md transition-all"
            />
            <CarouselNext
              className="right-0 translate-x-1/2 bg-white border-brand-border text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary shadow-md transition-all"
            />
          </Carousel>
        </Reveal>

        {/* CTA */}
        <Reveal delay={200} className="text-center mt-12">
          <Link href="/achievements">
            <Button variant="primary" size="lg" className="group">
              View All Achievements
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
};

export default AchievementCarouselSection;