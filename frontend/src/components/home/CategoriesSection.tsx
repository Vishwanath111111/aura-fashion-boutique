"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { ArrowRight, Layers } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-[#D4AF37]">
          <Layers className="h-4 w-4" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">
            Fashion Categories
          </span>
        </div>
        <h2 className="font-serif text-4xl text-stone-100 md:text-5xl">
          Curated Luxury Divisions
        </h2>
        <p className="text-xs text-stone-400">
          Explore specialized departments from bespoke Haute Couture to artisanal leather accessories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={`/collections?category=${encodeURIComponent(cat.name)}`}
            className="group relative h-[420px] w-full overflow-hidden rounded-xl border border-stone-800 bg-[#141416] transition-all hover:border-[#D4AF37]/60"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                {cat.itemCount} Creations Available
              </span>
              <h3 className="font-serif text-2xl text-stone-100 group-hover:text-[#D4AF37] transition-colors">
                {cat.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-stone-300 line-clamp-2">
                {cat.description}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <span>Explore Category</span> <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
