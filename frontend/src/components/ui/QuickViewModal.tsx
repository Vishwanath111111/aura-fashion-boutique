"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ShoppingBag, ShieldCheck, Sparkles, Ruler } from "lucide-react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/site";
import { SizeGuideModal } from "./SizeGuideModal";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  React.useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.sizes[0] || "");
      setSelectedColor(product.colors[0] || "");
    }
  }, [product]);

  if (!product) return null;

  const handleOrderWhatsApp = () => {
    const sz = selectedSize ? ` (Size: ${selectedSize})` : "";
    const clr = selectedColor ? ` (Color: ${selectedColor})` : "";
    const message = `Hello AURA Atelier, I wish to inquire/order: *${product.name}*${sz}${clr} priced at ${formatCurrency(product.price)}. SKU: ${product.sku}.`;
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md">
      <div className="relative my-8 max-w-4xl w-full border border-stone-800 bg-[#141416] p-6 shadow-2xl md:p-8 rounded-xl">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 rounded-full bg-stone-900/80 p-2 text-stone-400 hover:bg-[#D4AF37] hover:text-black transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gallery View */}
          <div className="space-y-4">
            <div className="relative h-96 w-full overflow-hidden rounded-lg bg-stone-900 border border-stone-800">
              <Image
                src={selectedImage || product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 ${
                      selectedImage === img ? "border-[#D4AF37]" : "border-stone-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Gallery image ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details View */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  {product.category}
                </span>
                <span className="font-mono text-xs text-stone-500">SKU: {product.sku}</span>
              </div>
              <h2 className="mt-1 font-serif text-3xl text-stone-100">{product.name}</h2>
              <p className="mt-2 font-mono text-2xl font-semibold text-[#D4AF37]">
                {formatCurrency(product.price)}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-stone-300">{product.description}</p>

              {/* Sizes Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Select Size
                    </span>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="flex items-center gap-1 text-[11px] text-[#D4AF37] hover:underline"
                    >
                      <Ruler className="h-3.5 w-3.5" /> Size Guide Calculator
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`border px-4 py-2 text-xs font-mono transition-all ${
                          selectedSize === sz
                            ? "border-[#D4AF37] bg-[#D4AF37] text-black font-bold"
                            : "border-stone-800 text-stone-300 hover:border-stone-600"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-5">
                  <span className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                    Available Palette
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((clr) => (
                      <button
                        key={clr}
                        onClick={() => setSelectedColor(clr)}
                        className={`border px-3.5 py-1.5 text-xs transition-all ${
                          selectedColor === clr
                            ? "border-[#D4AF37] bg-[#1A1810] text-[#D4AF37]"
                            : "border-stone-800 text-stone-400 hover:border-stone-600"
                        }`}
                      >
                        {clr}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Composition & Care */}
              <div className="mt-6 border-t border-stone-800/80 pt-4 space-y-2 text-xs text-stone-400">
                <p>
                  <strong className="text-stone-300">Material:</strong> {product.materials}
                </p>
                <p>
                  <strong className="text-stone-300">Garment Care:</strong> {product.care}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <button
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-xl"
              >
                <ShoppingBag className="h-4 w-4" /> Order via WhatsApp Concierge
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" /> 100% Authentic Haute Couture
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" /> Bespoke Fitting Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSizeGuideOpen && <SizeGuideModal onClose={() => setIsSizeGuideOpen(false)} />}
    </div>
  );
}
