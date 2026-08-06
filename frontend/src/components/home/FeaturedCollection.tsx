"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { Product, Category } from "@/types/product";
import { PRODUCTS } from "@/data/products";

export function FeaturedCollection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories: Category[] = [
    "All",
    "Men's Royal Couture",
    "Women's Royal Couture",
    "Royal Bridal",
    "Indo-Western Fusion",
    "Banarasi & Heritage",
    "Accessories",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="featured-collection" className="mx-auto max-w-7xl px-6 py-24">
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between border-b border-stone-800 pb-8 md:flex-row md:items-end gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
            Handcrafted Masterpieces
          </span>
          <h2 className="mt-2 font-serif text-4xl text-stone-100 md:text-5xl">
            Royal Indian & International Collections
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-4 py-2 text-[11px] uppercase tracking-wider font-medium transition-all ${
                selectedCategory === cat
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black font-bold"
                  : "border-stone-800 bg-[#141416] text-stone-400 hover:border-stone-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(p) => setActiveProduct(p)}
          />
        ))}
      </div>

      {/* Quick View Detail Modal */}
      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </section>
  );
}
