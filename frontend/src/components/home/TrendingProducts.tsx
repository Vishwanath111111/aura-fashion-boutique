"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";
import { TrendingUp, ArrowRight } from "lucide-react";

export function TrendingProducts() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const trending = PRODUCTS.filter((p) => p.isTrending);

  return (
    <section className="bg-[#121214] py-24 border-t border-b border-stone-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                Sought-After Icons
              </span>
            </div>
            <h2 className="mt-2 font-serif text-4xl text-stone-100 md:text-5xl">
              Trending Haute Couture
            </h2>
          </div>

          <Link
            href="/collections"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-white transition-colors"
          >
            Explore All Trending <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveProduct(p)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
