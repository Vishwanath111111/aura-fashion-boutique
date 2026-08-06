"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

export default function FeaturedPage() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const featured = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <div className="pt-28 pb-24 mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[#D4AF37]">
          <Star className="h-4 w-4 fill-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.4em] font-semibold">
            Iconic Masterpieces
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Featured Maison Creations
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          The signature silhouettes that define AURA Atelier. Crafted with museum-grade craftsmanship and timeless design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => setActiveProduct(p)}
          />
        ))}
      </div>

      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
