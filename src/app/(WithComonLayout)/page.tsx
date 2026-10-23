// src/app/(WithComonLayout)/page.tsx
"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServiceSection";
import ResearchImpactSection from "@/components/home/ResearchImpactSection";
import ResearchFocusSection from "@/components/home/ResearchFocusSection";
import AchievementCarouselSection from "@/components/home/AchievementCarouselSection";
import InternationalConferenceCarouselSection from "@/components/home/InternationalConferenceCarouselSection";
import TeamSection from "@/components/home/TeamSection";
import ContactSection from "@/components/home/ContactSection";
import ServicesPromoPopup from '@/components/home/ServicesPromoPopup';

const HomePage = () => {
  return (
    <div>
      <ServicesPromoPopup />

      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — About */}
      <div id="about">
        <AboutSection />
      </div>

      {/* 3 — Impact (numbers) */}
      <div id="impact">
        <ResearchImpactSection />
      </div>

      {/* 4 — Services / Wings */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 5 — Focus Areas */}
      <div id="focus">
        <ResearchFocusSection />
      </div>

      {/* 6 — Achievements */}
      <div id="achievements">
        <AchievementCarouselSection />
      </div>

      {/* 7 — Conferences */}
      <div id="conferences">
        <InternationalConferenceCarouselSection />
      </div>

      {/* 8 — Team */}
      <div id="team">
        <TeamSection />
      </div>

      {/* 9 — Contact */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;