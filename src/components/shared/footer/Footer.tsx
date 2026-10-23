// src/components/shared/footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const footerLinks = {
  research: [
    { name: "Publications", href: "/published" },
    { name: "Ongoing Projects", href: "/ongoing-projects" },
    { name: "International Conferences", href: "/international-conferences" },
    { name: "Achievements", href: "/achievements" },
  ],
  platform: [
    { name: "Courses", href: "/course" },
    { name: "Events", href: "/event" },
    { name: "Blogs", href: "/blog" },
    { name: "Team", href: "/team-members" },
  ],
  company: [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" },
    { name: "Higher Study", href: "/higher-study" },
    { name: "Login", href: "/login" },
  ],
};

const socials = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/8801724653054", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand + Contact */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Research Ustad"
                width={1000}
                height={100}
                className="w-12 h-12 rounded-full bg-white p-0.5"
              />
              <h2 className="font-serif font-bold text-2xl tracking-tight">
                Research<span className="text-brand-secondary">Ustad</span>
              </h2>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Advancing research. Empowering global scholars through
              publications, mentorship, and international collaboration.
            </p>

            <div className="space-y-2.5 pt-2">
              <a
                href="mailto:info@researchustad.org"
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-brand-secondary group-hover:scale-110 transition-transform" />
                info@researchustad.org
              </a>
              <a
                href="tel:+19127941871"
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-secondary group-hover:scale-110 transition-transform" />
                +1 (912) 794-1871
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/80">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-4">
              Research
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.research.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-4">
              Connect
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Follow our research updates and join the conversation.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand-secondary hover:text-white hover:border-brand-secondary transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-secondary hover:text-white transition-colors group"
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
            <p>
              © {new Date().getFullYear()} ResearchUstad. All rights reserved.
            </p>
            <p>
              Developed by{" "}
              <a
                href="https://moududi.researchustad.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-secondary hover:text-white transition-colors"
              >
                Research Ustad Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;