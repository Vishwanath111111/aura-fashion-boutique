"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";
import { Sparkles, ArrowRight } from "lucide-react";

export function NewArrivals() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-stone-800/80">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Seasonal Drop
            </span>
          </div>
          <h2 className="mt-2 font-serif text-4xl text-stone-100 md:text-5xl">
            New Autumn / Winter Arrivals
          </h2>
        </div>

        <Link
          href="/new-arrivals"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-white transition-colors"
        >
          View All New Drops <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => setActiveProduct(p)}
          />
        ))}
      </div>

      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
