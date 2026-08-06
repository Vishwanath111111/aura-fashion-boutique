"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LOOKBOOK_ITEMS } from "@/data/lookbook";
import { LookbookItem } from "@/types/product";
import { MapPin, Camera, X, ShoppingBag } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function LookbookPage() {
  const [activeItem, setActiveItem] = useState<LookbookItem | null>(null);

  return (
    <div className="pt-28 pb-24 mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
          Editorial High Fashion
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          The Autumn / Winter Editorial Lookbook
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Shot across Milan, Lake Como, and Jodhpur. Click any look for high-resolution details and direct atelier concierge inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LOOKBOOK_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-stone-800 bg-[#141416] transition-all hover:border-[#D4AF37]"
          >
            <div className="relative h-[500px] w-full bg-stone-900">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {item.season}
                </span>
                <h3 className="font-serif text-2xl text-stone-100">{item.title}</h3>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <Camera className="h-3.5 w-3.5 text-stone-500" /> {item.photographer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative max-w-4xl w-full border border-stone-800 bg-[#141416] p-6 shadow-2xl md:p-8 rounded-xl">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 rounded-full bg-stone-900 p-2 text-stone-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-[480px] w-full overflow-hidden rounded-lg">
                <Image src={activeItem.image} alt={activeItem.title} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  {activeItem.season}
                </span>
                <h2 className="font-serif text-3xl text-stone-100">{activeItem.title}</h2>
                <p className="text-xs text-stone-300 leading-relaxed">{activeItem.description}</p>
                <div className="text-xs text-stone-400 space-y-1 pt-2 border-t border-stone-800 font-mono">
                  <p>Location: {activeItem.location}</p>
                  <p>Photography: {activeItem.photographer}</p>
                </div>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(
                    `Hello AURA Atelier, I would like to inquire about Look: *${activeItem.title}* from ${activeItem.season}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 bg-[#D4AF37] py-3.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all"
                >
                  <ShoppingBag className="h-4 w-4" /> Inquire This Look
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
