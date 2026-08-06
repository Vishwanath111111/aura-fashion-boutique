"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Clock, Lock } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export function LimitedEdition() {
  const limitedProduct = PRODUCTS.find((p) => p.isLimitedEdition) || PRODUCTS[0];

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0C] py-24 border-t border-b border-[#D4AF37]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
              <Lock className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
                Privé Capsule • Only 15 Pieces Worldwide
              </span>
            </div>

            <h2 className="font-serif text-4xl text-stone-100 md:text-5xl lg:text-6xl leading-tight">
              {limitedProduct.name}
            </h2>

            <p className="text-xs leading-relaxed text-stone-300 sm:text-sm font-light">
              {limitedProduct.description} Each piece is individually numbered and accompanied by a signed Certificate of Authenticity by lead designer Antoine de Laurent.
            </p>

            <div className="font-mono text-2xl text-[#D4AF37] font-bold">
              {formatCurrency(limitedProduct.price)}
            </div>

            {/* Countdown Timer */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#D4AF37]" /> Reservation Portal Closes In:
              </p>
              <div className="grid grid-cols-4 gap-4 max-w-xs text-center font-mono">
                <div className="rounded-lg border border-stone-800 bg-[#141416] p-3">
                  <span className="text-xl font-bold text-stone-100">{timeLeft.days}</span>
                  <span className="block text-[9px] text-stone-500 uppercase font-sans">Days</span>
                </div>
                <div className="rounded-lg border border-stone-800 bg-[#141416] p-3">
                  <span className="text-xl font-bold text-stone-100">{timeLeft.hours}</span>
                  <span className="block text-[9px] text-stone-500 uppercase font-sans">Hours</span>
                </div>
                <div className="rounded-lg border border-stone-800 bg-[#141416] p-3">
                  <span className="text-xl font-bold text-stone-100">{timeLeft.minutes}</span>
                  <span className="block text-[9px] text-stone-500 uppercase font-sans">Mins</span>
                </div>
                <div className="rounded-lg border border-stone-800 bg-[#141416] p-3">
                  <span className="text-xl font-bold text-[#D4AF37]">{timeLeft.seconds}</span>
                  <span className="block text-[9px] text-stone-500 uppercase font-sans">Secs</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link
                href="/contact"
                className="bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all"
              >
                Reserve Via Atelier Concierge
              </Link>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative h-[520px] w-full overflow-hidden rounded-xl border border-stone-800 shadow-2xl">
            <Image
              src={limitedProduct.image}
              alt={limitedProduct.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute top-4 right-4 bg-black/80 border border-[#D4AF37] px-3 py-1.5 text-[10px] font-mono text-[#D4AF37]">
              LIMITED: NO. 04 / 15
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
