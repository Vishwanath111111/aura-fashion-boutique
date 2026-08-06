"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#141416] to-[#0A0A0C] py-28 text-center border-t border-stone-800">
      <div className="relative z-10 mx-auto max-w-3xl px-6 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
            Haute Couture Fitting
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-100 leading-tight">
          Begin Your Custom Sartorial Journey.
        </h2>

        <p className="mx-auto max-w-lg text-xs sm:text-sm leading-relaxed text-stone-300 font-light">
          Whether preparing for a grand wedding, royal gala, or building a bespoke capsule wardrobe, our senior master tailors are at your service.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl"
          >
            <Calendar className="h-4 w-4" /> Book Fitting Appointment
          </Link>
          <Link
            href="/collections"
            className="w-full sm:w-auto border border-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Browse Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
