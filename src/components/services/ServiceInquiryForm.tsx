"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/config";
import { ACADEMIC_LEVELS, RESEARCH_SERVICES } from "@/data/researchServices";

type InquiryForm = {
  name: string;
  email: string;
  university: string;
  department: string;
  academicLevel: string;
  service: string;
  details: string;
  contactNumber: string;
  website: string; // Hidden anti-bot honeypot.
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  university: "",
  department: "",
  academicLevel: "",
  service: "",
  details: "",
  contactNumber: "",
  website: "",
};

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

export default function ServiceInquiryForm() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof InquiryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    if (form.details.trim().length < 20) {
      toast.error("Please explain your requirements in at least 20 characters.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${api.baseUrl}/contact/service-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not submit your inquiry.");
      }
      toast.success("Inquiry submitted! Our team will contact you.");
      setForm(initialForm);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="service-inquiry" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
            <Mail className="h-4 w-4" /> Start a Conversation
          </div>
          <h2 className="text-3xl font-black leading-tight text-[#07284c] sm:text-5xl">
            Tell us about your <span className="text-[#087c55]">research goals.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            আপনার প্রয়োজনীয় সেবা নির্বাচন করে বিস্তারিত লিখুন। Research Ustad
            টিম আপনার দেওয়া তথ্য review করে ইমেইলের মাধ্যমে যোগাযোগ করবে।
          </p>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-sm leading-7 text-slate-700">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
            আমরা আপনার তথ্য কেবল service inquiry-এর উত্তর দেওয়ার উদ্দেশ্যে ব্যবহার করব।
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_25px_80px_-30px_rgba(8,35,62,0.3)] sm:p-9"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-[#082b50]">Service Inquiry Form</h3>
            <p className="mt-2 text-sm text-slate-500">Fields marked * are required.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Full Name *
              <input className={inputClass} required maxLength={100} autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Email Address *
              <input className={inputClass} type="email" required maxLength={254} autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="name@example.com" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              University / Institution *
              <input className={inputClass} required maxLength={150} value={form.university} onChange={(e) => update("university", e.target.value)} placeholder="Your university" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Department *
              <input className={inputClass} required maxLength={120} value={form.department} onChange={(e) => update("department", e.target.value)} placeholder="e.g. CSE, EEE, BBA" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Academic Level *
              <select className={inputClass} required value={form.academicLevel} onChange={(e) => update("academicLevel", e.target.value)}>
                <option value="" disabled>Select your academic level</option>
                {ACADEMIC_LEVELS.map((level) => <option key={level} value={level}>{level}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              WhatsApp / Phone (optional)
              <input className={inputClass} type="tel" maxLength={30} autoComplete="tel" value={form.contactNumber} onChange={(e) => update("contactNumber", e.target.value)} placeholder="+8801..." />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Which service do you need? *
            <select className={inputClass} required value={form.service} onChange={(e) => update("service", e.target.value)}>
              <option value="" disabled>Choose a research / academic service</option>
              {RESEARCH_SERVICES.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
            </select>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Describe your requirements *
            <textarea
              className={`${inputClass} min-h-40 resize-y`}
              required minLength={20} maxLength={3000}
              value={form.details}
              onChange={(e) => update("details", e.target.value)}
              placeholder="Tell us your topic, current progress, deadline, challenges, and the type of guidance you are looking for..."
            />
            <span className="mt-1 block text-right text-xs font-normal text-slate-400">{form.details.length}/3000 characters</span>
          </label>

          <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label>Leave this blank<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label>
          </div>

          <button
            type="submit" disabled={submitting}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#092e53] to-[#087d56] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 enabled:hover:-translate-y-0.5 enabled:hover:shadow-xl disabled:cursor-wait disabled:opacity-65"
          >
            {submitting ? <><LoaderCircle className="h-5 w-5 animate-spin" /> Sending inquiry...</> : <>Submit Service Inquiry <ArrowRight className="h-5 w-5" /></>}
          </button>
          <p className="mt-4 text-center text-xs leading-6 text-slate-500">No account required. Submission does not guarantee publication or admission.</p>
        </form>
      </div>
    </section>
  );
}
