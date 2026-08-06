import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, Globe, Leaf } from "lucide-react";

export const metadata = {
  title: "Our Heritage & Sustainable Luxury Story | Maison AURA",
  description: "Read the story of AURA Atelier, from our roots in Italian silk mills to master Zardozi embroidery.",
};

export default function StoryPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-5xl px-6 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
          Heritage & Ethos
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight">
          The Story of AURA Atelier
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          An epic journey spanning generations of master weavers, Italian silk mills, and modern royal patronage.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[450px] w-full overflow-hidden rounded-xl border border-stone-800">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop"
          alt="Artisanal silk spinning"
          fill
          className="object-cover"
        />
      </div>

      {/* Chapters */}
      <div className="space-y-12 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
        <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
          <h2 className="font-serif text-2xl text-stone-100">Chapter I: The Como Silk Legacy</h2>
          <p>
            In 2001, our founders set out across Lombardy, Italy, partnering with historic silk looms that had supplied European royal houses for over two centuries. The foundation of AURA was built upon a single promise: never compromise on raw fiber quality.
          </p>
        </div>

        <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
          <h2 className="font-serif text-2xl text-stone-100">Chapter II: Zardozi & The Royal Court</h2>
          <p>
            Recognizing the grand heritage of South Asian craftsmanship, AURA established a dedicated atelier studio in Jodhpur and Mumbai. Here, third-generation karigars execute real gold wire tilla, dabka, and semi-precious stone embellishments over hundreds of painstaking hours.
          </p>
        </div>

        <div className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
          <h2 className="font-serif text-2xl text-stone-100">Chapter III: Sustainable Conscious Luxury</h2>
          <p>
            In an era of disposable fashion, AURA creates timeless heirlooms. 100% of our silk is organic Mulberry, dyed using non-toxic botanical pigments. Every garment is crafted to be preserved and passed down through generations.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-800">
        <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-2 text-center">
          <Globe className="mx-auto h-6 w-6 text-[#D4AF37]" />
          <h3 className="font-serif text-lg text-stone-100">Global Ateliers</h3>
          <p className="text-[11px] text-stone-400">Milan • Paris • London • Mumbai</p>
        </div>

        <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-2 text-center">
          <Leaf className="mx-auto h-6 w-6 text-[#D4AF37]" />
          <h3 className="font-serif text-lg text-stone-100">Zero Waste Production</h3>
          <p className="text-[11px] text-stone-400">Made-to-order sartorial model</p>
        </div>

        <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 space-y-2 text-center">
          <Award className="mx-auto h-6 w-6 text-[#D4AF37]" />
          <h3 className="font-serif text-lg text-stone-100">Museum Quality</h3>
          <p className="text-[11px] text-stone-400">Heirloom garments built to last</p>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link
          href="/collections"
          className="inline-block bg-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl"
        >
          Explore Iconic Creations
        </Link>
      </div>
    </div>
  );
}
