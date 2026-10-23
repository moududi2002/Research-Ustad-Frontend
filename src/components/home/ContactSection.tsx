// src/components/home/ContactSection.tsx
"use client";
import { useState } from "react";
import { Button, Container, SectionHeader } from "@/components/ui/core";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { CreateContact } from "@/services/contact";
import { Reveal } from "@/components/ui/Reveal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Dhaka, Bangladesh"],
    href: undefined,
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@researchustad.org"],
    href: "mailto:info@researchustad.org",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (912) 794-1871"],
    href: "tel:+19127941871",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+880 1724-653054"],
    href: "https://wa.me/8801724653054",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    try {
      await CreateContact(formData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Contact Form Error:", error);
      toast.error(error?.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-surface">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Get In Touch"
            description="Have questions about our research, mentorship, or higher-study guidance? We'd love to hear from you."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mt-14 max-w-6xl mx-auto">
          {/* ─── Left: Contact Info ─── */}
          <Reveal className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-brand-border p-7 lg:p-8 h-full">
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-7">
                Reach out through any channel below. Our team typically responds
                within 24 hours.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-primary group-hover:border-brand-primary">
                        <Icon className="w-5 h-5 text-brand-primary transition-colors group-hover:text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, i) => (
                          <p
                            key={i}
                            className="text-sm font-medium text-brand-primary break-words"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={info.title}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block rounded-xl -mx-2 px-2 py-1 hover:bg-brand-surface/50 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.title}>{content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* ─── Right: Contact Form ─── */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-brand-border p-7 lg:p-8 space-y-5"
            >
              <div>
                <h3 className="text-xl font-semibold text-brand-primary mb-1">
                  Send Us a Message
                </h3>
                <p className="text-sm text-brand-muted">
                  Fill out the form and we'll be in touch shortly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-primary">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="border-brand-border focus-visible:border-brand-secondary focus-visible:ring-brand-secondary/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-brand-primary">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="border-brand-border focus-visible:border-brand-secondary focus-visible:ring-brand-secondary/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-brand-primary">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="border-brand-border focus-visible:border-brand-secondary focus-visible:ring-brand-secondary/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-brand-primary">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your research needs..."
                  rows={5}
                  className="border-brand-border focus-visible:border-brand-secondary focus-visible:ring-brand-secondary/20 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;