"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, X } from "lucide-react";

const SESSION_KEY = "ru-services-promo-2026-v1";
const DISPLAY_MS = 30_000;

export default function ServicesPromoPopup() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Show once per browser tab/session, only on the homepage.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "shown") return;
      sessionStorage.setItem(SESSION_KEY, "shown");
    } catch {
      // Storage can be disabled: the promotion can still be displayed.
    }

    setOpen(true);
  }, []);

  // Separate effect keeps the timeout working with React Strict Mode.
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), DISPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03172a]/75 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="ru-promo-title"
        className="ru-service-entry relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-[28px] border border-white/30 bg-white shadow-2xl lg:flex-row"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close services promotion"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-[#092746] p-2.5 text-white shadow-lg transition hover:scale-110 hover:bg-[#087c55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087c55]"
        >
          <X className="h-5 w-5" />
        </button>

        <Link
          href="/services"
          onClick={() => setOpen(false)}
          aria-label="Explore Research Ustad services"
          className="group relative flex min-h-0 w-full items-center justify-center bg-[#f4fbf8] p-2 sm:p-4 lg:w-[52%]"
        >
          <Image
            src="/img/research-services-promo.webp"
            alt="Research Ustad: one-to-one mentorship, research, thesis, academic project and journal publication support"
            width={900}
            height={900}
            priority
            sizes="(max-width: 1024px) 90vw, 450px"
            className="max-h-[43dvh] w-auto max-w-full rounded-xl object-contain shadow-lg transition duration-500 group-hover:scale-[1.02] lg:max-h-[75dvh]"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-center gap-4 bg-gradient-to-br from-white via-[#f3fbf7] to-[#e7f4ef] p-5 sm:gap-6 sm:p-9 lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-emerald-800 shadow-sm">
            <GraduationCap className="h-4 w-4" /> RESEARCH USTAD • STUDENT SUPPORT
          </div>
          <h2 id="ru-promo-title" className="text-2xl font-black leading-tight tracking-tight text-[#07284c] sm:text-4xl">
            Your Research.
            <span className="block text-[#087c55]">Our Support.</span>
          </h2>
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            Thesis, research paper, journal publication, lab report কিংবা
            academic project—আপনার প্রতিটি ধাপে অভিজ্ঞ মেন্টরের গাইডলাইন।
          </p>
          <div className="rounded-2xl border border-emerald-100 bg-white/80 p-4 text-sm font-semibold leading-6 text-[#123b58]">
            <span className="text-[#087c55]">৯টি বিশেষায়িত সেবা</span> • One-to-One Mentorship
            • Premium Paper Access • Publication Support
          </div>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#073b60] to-[#07845b] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-800/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            See Details &amp; Explore Services <ArrowUpRight className="h-5 w-5" />
          </Link>
          <p className="text-center text-xs text-slate-500">
            এই ঘোষণা ৩০ সেকেন্ড পর নিজে বন্ধ হবে। চাইলে এখনই বন্ধ করতে পারেন।
          </p>
        </div>
      </section>
    </div>
  );
}
