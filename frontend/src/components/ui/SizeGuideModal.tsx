"use client";

import React, { useState } from "react";
import { X, Ruler } from "lucide-react";

interface SizeGuideModalProps {
  onClose: () => void;
}

export function SizeGuideModal({ onClose }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<"gowns" | "jackets" | "footwear">("gowns");
  const [bust, setBust] = useState<number>(86);
  const [waist, setWaist] = useState<number>(68);

  const calculateRecommendedSize = () => {
    if (bust <= 82 && waist <= 64) return "XS (EU 34 / US 2)";
    if (bust <= 88 && waist <= 70) return "S (EU 36 / US 4)";
    if (bust <= 94 && waist <= 76) return "M (EU 38 / US 6)";
    if (bust <= 100 && waist <= 82) return "L (EU 40 / US 8)";
    return "Custom Bespoke Made-to-Measure";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
      <div className="relative max-w-2xl w-full border border-stone-800 bg-[#141416] p-6 shadow-2xl md:p-8 rounded-xl">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 rounded-full bg-stone-900 p-2 text-stone-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-[#D4AF37]">
          <Ruler className="h-5 w-5" />
          <h2 className="font-serif text-2xl text-stone-100">Atelier Sizing Guide</h2>
        </div>
        <p className="mt-1 text-xs text-stone-400">
          All measurements are listed in centimeters. Select your parameters below for instant sizing recommendations.
        </p>

        {/* Calculator Widget */}
        <div className="mt-6 rounded-lg border border-[#D4AF37]/30 bg-[#0E0E10] p-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
            Interactive Size Estimator
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] text-stone-300 mb-1">
                Bust Circumference: <span className="font-mono text-[#D4AF37]">{bust} cm</span>
              </label>
              <input
                type="range"
                min="75"
                max="115"
                value={bust}
                onChange={(e) => setBust(Number(e.target.value))}
                className="w-full accent-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-[11px] text-stone-300 mb-1">
                Waist Circumference: <span className="font-mono text-[#D4AF37]">{waist} cm</span>
              </label>
              <input
                type="range"
                min="55"
                max="95"
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full accent-[#D4AF37]"
              />
            </div>
          </div>
          <div className="border-t border-stone-800 pt-3 flex items-center justify-between text-xs">
            <span className="text-stone-400">Recommended Size:</span>
            <span className="font-mono font-bold text-[#D4AF37]">{calculateRecommendedSize()}</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-6 flex border-b border-stone-800">
          {(["gowns", "jackets", "footwear"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-[#D4AF37] text-[#D4AF37]"
                  : "border-transparent text-stone-500 hover:text-stone-300"
              }`}
            >
              {tab === "gowns" ? "Couture Gowns" : tab === "jackets" ? "Blazers & Coats" : "Footwear"}
            </button>
          ))}
        </div>

        {/* Sizing Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="bg-[#0E0E10] text-[#D4AF37] uppercase tracking-wider font-mono">
              <tr>
                <th className="p-2.5">Size</th>
                <th className="p-2.5">EU</th>
                <th className="p-2.5">Bust (cm)</th>
                <th className="p-2.5">Waist (cm)</th>
                <th className="p-2.5">Hips (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              <tr>
                <td className="p-2.5 font-bold">XS</td>
                <td className="p-2.5 font-mono">34</td>
                <td className="p-2.5 font-mono">80-83</td>
                <td className="p-2.5 font-mono">60-64</td>
                <td className="p-2.5 font-mono">86-90</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">S</td>
                <td className="p-2.5 font-mono">36</td>
                <td className="p-2.5 font-mono">84-88</td>
                <td className="p-2.5 font-mono">65-69</td>
                <td className="p-2.5 font-mono">91-95</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">M</td>
                <td className="p-2.5 font-mono">38</td>
                <td className="p-2.5 font-mono">89-93</td>
                <td className="p-2.5 font-mono">70-74</td>
                <td className="p-2.5 font-mono">96-100</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">L</td>
                <td className="p-2.5 font-mono">40</td>
                <td className="p-2.5 font-mono">94-98</td>
                <td className="p-2.5 font-mono">75-79</td>
                <td className="p-2.5 font-mono">101-105</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}