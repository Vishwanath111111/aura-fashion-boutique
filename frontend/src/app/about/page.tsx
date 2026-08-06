import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

export const metadata = {
  title: "About Maison AURA | Luxury Fashion Heritage & Atelier",
  description: "Discover the heritage, master tailors, and Italian silk craftsmanship behind AURA Atelier.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
          Maison Story & Vision
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-100 max-w-4xl mx-auto leading-tight">
          Crafting Modern Legends in High Fashion.
        </h1>
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
          Founded in Milan and expanded across London, Paris, and Mumbai, AURA Atelier represents the pinnacle of modern luxury dressmaking, architectural tailoring, and royal heritage bridalwear.
        </p>
      </section>

      {/* Grid Image Showcase */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-96 overflow-hidden rounded-xl border border-stone-800">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
              alt="Silk weaving studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden rounded-xl border border-stone-800 md:mt-12">
            <Image
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop"
              alt="Haute couture fitting"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden rounded-xl border border-stone-800">
            <Image
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
              alt="Zardozi hand embroidery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-stone-800">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-100 text-center mb-12">
          The Four Pillars of AURA Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-3">
            <Sparkles className="h-6 w-6 text-[#D4AF37]" />
            <h3 className="font-serif text-xl text-stone-100">Pure Italian Silk</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              We source exclusively from historic family-owned mills in Como, Italy, guaranteeing unmatched luster and fluidity.
            </p>
          </div>

          <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-3">
            <Award className="h-6 w-6 text-[#D4AF37]" />
            <h3 className="font-serif text-xl text-stone-100">Heritage Zardozi</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Our master karigars possess multi-generational expertise in gold wire and semi-precious stone embellishments.
            </p>
          </div>

          <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-3">
            <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
            <h3 className="font-serif text-xl text-stone-100">Architectural Cut</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Every pattern is sculpted to complement individual anatomy, utilizing internal corsetry and precise bias drapes.
            </p>
          </div>

          <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-3">
            <HeartHandshake className="h-6 w-6 text-[#D4AF37]" />
            <h3 className="font-serif text-xl text-stone-100">Lifetime Concierge</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Every patron is assigned a private stylist and receives complimentary lifetime garment alterations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-12">
        <Link
          href="/contact"
          className="inline-block bg-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl"
        >
          Schedule Studio Tour & Fitting
        </Link>
      </section>
    </div>
  );
}
