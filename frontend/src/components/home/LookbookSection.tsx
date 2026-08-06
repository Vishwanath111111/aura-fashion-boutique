"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LOOKBOOK_ITEMS } from "@/data/lookbook";
import { Camera, MapPin, ArrowRight } from "lucide-react";

export function LookbookSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Camera className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Editorial Gallery
            </span>
          </div>
          <h2 className="mt-2 font-serif text-4xl text-stone-100 md:text-5xl">
            The Autumn / Winter Editorial
          </h2>
        </div>

        <Link
          href="/lookbook"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-white transition-colors"
        >
          View Full Lookbook <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LOOKBOOK_ITEMS.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col border border-stone-800 bg-[#141416] overflow-hidden rounded-xl"
          >
            <div className="relative h-[450px] w-full overflow-hidden bg-stone-900">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.season}
                </span>
                <h3 className="font-serif text-2xl text-stone-100">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                  <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
