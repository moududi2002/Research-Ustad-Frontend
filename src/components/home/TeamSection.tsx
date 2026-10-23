// src/components/home/TeamSection.tsx
"use client";

import { Container, SectionHeader, Button } from "@/components/ui/core";
import { useState, useEffect } from "react";
import UserAvatar from "@/components/shared/UserAvatar";
import { GetAllResearchAssociate } from "@/services/reserarchers";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Link from "next/link";
import { Star, AlertCircle, ArrowRight, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  institution: string;
  image: string;
  shortBio: string;
}

const ErrorState = ({ error, onRetry }: { error: string; onRetry: () => void }) => (
  <section className="py-20 lg:py-28 bg-white">
    <Container>
      <div className="max-w-md mx-auto text-center py-16">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-brand-primary mb-2">
          Failed to load team members
        </h3>
        <p className="text-sm text-brand-muted mb-6">{error}</p>
        <Button variant="primary" onClick={onRetry}>Try Again</Button>
      </div>
    </Container>
  </section>
);

const LoadingState = () => (
  <section className="py-20 lg:py-28 bg-white">
    <Container>
      <SectionHeader
        eyebrow="Our People"
        title="Meet Our Team"
        description="Meet the distinguished scholars and researchers who form the backbone of Research Ustad."
      />
      <div className="flex items-center justify-center h-64 mt-14">
        <LoadingSpinner size="md" variant="border" text="Loading team members..." />
      </div>
    </Container>
  </section>
);

const EmptyState = () => (
  <section className="py-20 lg:py-28 bg-white">
    <Container>
      <div className="max-w-md mx-auto text-center py-16">
        <Star className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-brand-primary mb-2">
          No team members available
        </h3>
        <p className="text-sm text-brand-muted">Check back later for our academic team.</p>
      </div>
    </Container>
  </section>
);

const TeamSection = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await GetAllResearchAssociate();
        if (response?.success && Array.isArray(response.data)) {
          setMembers(
            response.data.map((member: any) => ({
              id: member._id,
              name: member.fullName || "Unknown Member",
              title: member.designation || member.role || "Member",
              institution: member.current?.institution || "",
              image: member.image || "/default-avatar.jpg",
              shortBio: member.shortBio || "",
            }))
          );
        } else {
          setMembers([]);
        }
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members");
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (error) return <ErrorState error={error} onRetry={() => window.location.reload()} />;
  if (loading) return <LoadingState />;
  if (!members || members.length === 0) return <EmptyState />;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Our People"
            title="Meet Our Team"
            description="Meet the distinguished scholars and researchers who form the backbone of Research Ustad."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {members.slice(0, 6).map((member, idx) => (
            <Reveal key={member.id} delay={idx * 80}>
              <article className="group h-full bg-white border border-brand-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(30,58,95,0.25)] hover:border-brand-secondary/30">
                {/* Photo — consistent square aspect */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-surface to-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                      <UserAvatar
                        src={member.image}
                        alt={member.name}
                        name={member.name}
                        size="lg"
                        className="object-cover w-full h-full"
                        fallbackClassName="text-4xl font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center space-y-2">
                  <Link href={`/team-members/${member.id}`}>
                    <h3 className="text-lg font-semibold text-brand-primary hover:text-brand-secondary transition-colors line-clamp-1">
                      {member.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-medium text-brand-secondary line-clamp-1">
                    {member.title}
                  </p>
                  {member.institution && (
                    <p className="text-xs text-brand-muted line-clamp-1">
                      {member.institution}
                    </p>
                  )}
                  {member.shortBio && (
                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-2 pt-2 border-t border-brand-border mt-3">
                      {member.shortBio}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200} className="text-center mt-12">
          <Link href="/team-members">
            <Button variant="primary" size="lg" className="group">
              <Users className="w-4 h-4" />
              View All Team Members
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
};

export default TeamSection;