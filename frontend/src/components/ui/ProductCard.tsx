"use client";

import React from "react";
import Image from "next/image";
import { Eye, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/site";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const handleOrderWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello AURA Atelier, I would like to inquire/order: *${product.name}* (SKU: ${product.sku}) priced at ${formatCurrency(product.price)}.`;
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="group relative flex flex-col border border-stone-800/80 bg-[#141416] transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
        {product.isNewArrival && (
          <span className="bg-[#D4AF37] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black">
            New Drop
          </span>
        )}
        {product.isLimitedEdition && (
          <span className="bg-black/90 border border-[#D4AF37] px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#D4AF37]">
            Limited Edition
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative h-96 w-full overflow-hidden bg-stone-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
        />

        {/* Hover Quick View Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="flex items-center gap-2 rounded-full border border-[#D4AF37] bg-black/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            <Eye className="h-4 w-4" /> Quick View
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#D4AF37]">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-stone-400">
              <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="mt-1.5 font-serif text-base text-stone-100 group-hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-stone-400">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-stone-800/80 pt-3.5">
          <span className="font-mono text-sm font-medium text-stone-200">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={handleOrderWhatsApp}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Concierge Order
          </button>
        </div>
      </div>
    </div>
  );
}
