"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import { PRODUCTS } from "@/data/products";
import { Product, Category, Gender } from "@/types/product";
import { Search, SlidersHorizontal, UserCheck } from "lucide-react";

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedGender, setSelectedGender] = useState<"All" | Gender>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories: Category[] = [
    "All",
    "Men's Royal Couture",
    "Women's Royal Couture",
    "Royal Bridal",
    "Indo-Western Fusion",
    "Banarasi & Heritage",
    "Haute Couture",
    "Accessories",
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesGender =
        selectedGender === "All" || product.gender === selectedGender;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesGender && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedGender, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-24 mx-auto max-w-7xl px-6">
      {/* Header */}
      <div className="mb-10 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
          The Complete Maison Catalog
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Royal Indian & International Haute Couture
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Explore mastercrafted Men's Royal Sherwanis, Maharani Zardozi Bridal Lehengas, Banarasi Brocades, and High Fashion Outerwear.
        </p>

        {/* Gender Division Filter Pills */}
        <div className="pt-4 flex justify-center gap-3">
          {(["All", "Men", "Women", "Unisex"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGender(g)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                selectedGender === g
                  ? "border border-[#D4AF37] bg-[#D4AF37] text-black shadow-lg"
                  : "border border-stone-800 bg-[#141416] text-stone-300 hover:border-stone-600"
              }`}
            >
              {g === "All" ? "All Divisions" : g === "Men" ? "Men's Royal Collection" : g === "Women" ? "Women's Royal Collection" : "Accessories"}
            </button>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-800 pb-6">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-stone-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sherwani, lehenga, saree..."
            className="w-full rounded-md border border-stone-800 bg-[#141416] pl-10 pr-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-3.5 py-1.5 text-[11px] uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black font-bold"
                  : "border-stone-800 bg-[#141416] text-stone-400 hover:border-stone-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs text-stone-400">
          <SlidersHorizontal className="h-4 w-4 text-[#D4AF37]" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="rounded-md border border-stone-800 bg-[#141416] px-3 py-2 text-xs text-stone-100 focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center text-stone-400">
          <p className="font-serif text-xl">No creations match your search parameters.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedGender("All");
              setSearchQuery("");
            }}
            className="mt-4 border border-[#D4AF37] px-5 py-2 text-xs uppercase text-[#D4AF37]"
          >
            Reset Catalog Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setActiveProduct(p)}
            />
          ))}
        </div>
      )}

      <QuickViewModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
