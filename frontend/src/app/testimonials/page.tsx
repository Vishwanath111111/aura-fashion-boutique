import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, Star, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "VIP Client Testimonials | Maison AURA",
  description: "Read reviews and quotes from international collectors, art patrons, and royalty who wear AURA Atelier.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-7xl px-6 space-y-12">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
          VIP Voices & Quotes
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Client Testimonials
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Every creation is personal. Here is what our global patrons have to say about their private fitting experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="relative flex flex-col justify-between rounded-xl border border-stone-800 bg-[#141416] p-8 shadow-xl"
          >
            <Quote className="absolute top-6 right-6 h-12 w-12 text-stone-800" />
            
            <div className="space-y-4">
              <div className="flex gap-1 text-[#D4AF37]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-stone-200">
                "{t.quote}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D4AF37]/50">
                  <Image src={t.avatar} alt={t.clientName} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-100">{t.clientName}</h3>
                  <p className="text-xs text-stone-400">{t.role} • {t.location}</p>
                </div>
              </div>

              <span className="flex items-center gap-1 text-[10px] text-[#D4AF37] border border-[#D4AF37]/40 bg-[#0E0E10] px-3 py-1 rounded-full">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Patron
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
