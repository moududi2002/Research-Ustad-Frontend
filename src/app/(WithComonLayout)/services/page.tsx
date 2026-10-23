import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, ArrowUpRight, BookOpenCheck, FilePenLine, FlaskConical,
  GraduationCap, LockKeyholeOpen, Microscope, Presentation, Users,
  UsersRound, ClipboardList, CheckCircle2,
} from "lucide-react";
import ServiceInquiryForm from "@/components/services/ServiceInquiryForm";
import { RESEARCH_SERVICES } from "@/data/researchServices";

export const metadata: Metadata = {
  title: "Our Services | Research Ustad",
  description: "Explore Research Ustad's research mentorship, thesis, academic project, journal publication and premium paper access support services.",
};

const icons = [
  UsersRound, Users, FlaskConical, ClipboardList, GraduationCap,
  Presentation, FilePenLine, BookOpenCheck, LockKeyholeOpen,
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden bg-[#f8fbff]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061f3d] via-[#0b3d56] to-[#087450] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8">
          <div className="ru-service-entry">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-100">
              Learn • Research • Publish
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Empower Your Research Journey
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              আপনার গবেষণা, থিসিস, একাডেমিক প্রজেক্ট কিংবা পাবলিকেশন—প্রতিটি
              গুরুত্বপূর্ণ ধাপে অভিজ্ঞ মেন্টরের দিকনির্দেশনা।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#service-inquiry" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#073859] shadow-lg transition hover:-translate-y-1">
                Request Guidance <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="#all-services" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Explore 9 Services <ArrowDown className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-4 text-xs font-medium text-emerald-50 sm:gap-6 sm:text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> One-to-One Support</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Academic Guidance</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Research Mentorship</span>
            </div>
          </div>
          <div className="ru-service-entry relative mx-auto w-full max-w-[440px] rounded-[30px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm" style={{ animationDelay: "120ms" }}>
            <Image
              src="/img/research-services-promo.webp"
              width={900} height={900}
              alt="Research Ustad academic and research guidance services poster"
              className="h-auto w-full rounded-[20px]"
              priority
              sizes="(max-width: 1024px) 92vw, 440px"
            />
          </div>
        </div>
      </section>

      <section id="all-services" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#087b55]">
              <Microscope className="h-5 w-5" /> What we offer
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#082b50] sm:text-5xl">Our Academic & Research Services</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">আপনার প্রয়োজন অনুযায়ী সঠিক সেবা নির্বাচন করুন এবং মেন্টরশিপের জন্য যোগাযোগ করুন।</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {RESEARCH_SERVICES.map((service, index) => {
              const Icon = icons[index] || BookOpenCheck;
              return (
                <article key={service.id} className="ru-service-entry group relative flex flex-col rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-[0_12px_45px_-30px_rgba(8,35,62,0.4)] transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl" style={{ animationDelay: `${Math.min(index * 70, 490)}ms` }}>
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e7f3ff] to-[#dcf9ed] text-[#08664d] transition group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-extrabold tracking-widest text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-extrabold leading-7 text-[#092e53]">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => <span key={highlight} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">{highlight}</span>)}
                  </div>
                  <Link href="#service-inquiry" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#087850] transition group-hover:gap-3">
                    Get Guidance <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950">
            <strong>Important:</strong> Zero Publication Fee-এর সুযোগ জার্নাল ও পেপারের যোগ্যতার ওপর নির্ভরশীল; কোনো acceptance guarantee নেই। Premium Paper Access সেবা শুধু আইনসম্মত open-access, preprint, author-shared অথবা অনুমোদিত institutional access-এর মাধ্যমে সহায়তা করে।
          </p>
        </div>
      </section>

      <div className="bg-white">
        <ServiceInquiryForm />
      </div>
    </div>
  );
}
