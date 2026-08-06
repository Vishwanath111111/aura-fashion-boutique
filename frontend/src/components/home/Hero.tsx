"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center text-white space-y-6 pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
            Haute Couture • Autumn / Winter 2026
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-stone-100">
          Timeless Elegance, <br />
          <span className="font-normal italic text-stone-300">Tailored Perfection.</span>
        </h1>

        <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-stone-300 font-light">
          Handcrafted luxury apparel combining classic Italian tailoring with modern minimalist aesthetics. Designed for those who seek uncompromised refinement.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections"
            className="w-full sm:w-auto bg-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl"
          >
            Explore Collections
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all backdrop-blur-sm"
          >
            Book Private Fitting
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#featured-collection"
        aria-label="Scroll down to featured collection"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[10px] uppercase tracking-widest text-stone-400 hover:text-[#D4AF37] transition-colors"
      >
        <span className="mb-2">Scroll To Discover</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
}
