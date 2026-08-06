"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";
import { Sparkles, Award, ShieldCheck } from "lucide-react";

export function BrandStory() {
  return (
    <section className="border-t border-b border-stone-800/80 bg-[#121214] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Imagery Stack */}
          <div className="relative">
            <div className="relative h-[480px] w-full overflow-hidden rounded-xl border border-stone-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop"
                alt="Atelier Craftsmanship"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-xl border border-[#D4AF37]/50 bg-[#141416] p-5 shadow-2xl backdrop-blur-md max-w-xs">
              <Sparkles className="h-8 w-8 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="font-serif text-sm font-bold text-stone-100">Hand-Draped in Milan</p>
                <p className="text-[11px] text-stone-400">100% Certified Italian Mulberry Silk</p>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
              Maison Heritage & Philosophy
            </span>
            <h2 className="font-serif text-4xl text-stone-100 md:text-5xl leading-tight">
              Where Couture Meets Architectural Artistry.
            </h2>
            <p className="text-xs leading-relaxed text-stone-300 sm:text-sm font-light">
              Founded with a singular vision to redefine international luxury, AURA Atelier unites classic Italian sartorial technique with modern minimalist aesthetics. Every seam, pleat, and Zardozi wire is meticulously placed by hand in our private studios.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-800">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Artisanal Heritage
                  </h4>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Over 400 hours of precision embroidery per bridal creation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Bespoke Fitting
                  </h4>
                  <p className="mt-1 text-[11px] text-stone-400">
                    Private consultations and lifetime complimentary alterations.
                  </p>
                </div>
              </div>
            </div>

            {/* Animated Counters Block */}
            <div className="grid grid-cols-4 gap-4 rounded-xl border border-stone-800 bg-[#0E0E10] p-6 text-center">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  <Counter end={25} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-400">Years Heritage</p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  <Counter end={140} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-400">Master Artisans</p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  <Counter end={6} suffix="" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-400">Global Flagships</p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  <Counter end={1200} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-400">Couture Pieces</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/story"
                className="inline-block border-b-2 border-[#D4AF37] pb-1 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-white transition-colors"
              >
                Read Our Full Maison Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
