"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, Star, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-[#121214] py-24 border-t border-b border-stone-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
            VIP Patron Voices
          </span>
          <h2 className="font-serif text-4xl text-stone-100 md:text-5xl">
            Client Testimonials
          </h2>
          <p className="text-xs text-stone-400">
            Hear from international collectors, art patrons, and royalty who trust AURA Atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between rounded-xl border border-stone-800 bg-[#0E0E10] p-8 shadow-xl"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-stone-800" />
              
              <div className="space-y-4">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-serif text-base italic leading-relaxed text-stone-200">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D4AF37]/40">
                    <Image src={t.avatar} alt={t.clientName} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-100">{t.clientName}</h4>
                    <p className="text-[11px] text-stone-400">{t.role} • {t.location}</p>
                  </div>
                </div>

                {t.verifiedPurchase && (
                  <span className="hidden sm:flex items-center gap-1 text-[10px] text-[#D4AF37] border border-[#D4AF37]/30 bg-[#1A1810] px-2.5 py-1 rounded-full">
                    <ShieldCheck className="h-3 w-3" /> Verified Patron
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
