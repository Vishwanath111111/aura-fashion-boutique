"use client";

import React, { useState } from "react";
import { Ruler, ShieldCheck } from "lucide-react";

export default function SizeGuidePage() {
  const [bust, setBust] = useState<number>(86);
  const [waist, setWaist] = useState<number>(68);
  const [hips, setHips] = useState<number>(94);

  const calculateRecommendedSize = () => {
    if (bust <= 82 && waist <= 64 && hips <= 90) return "XS (EU 34 / US 2)";
    if (bust <= 88 && waist <= 70 && hips <= 95) return "S (EU 36 / US 4)";
    if (bust <= 94 && waist <= 76 && hips <= 100) return "M (EU 38 / US 6)";
    if (bust <= 100 && waist <= 82 && hips <= 106) return "L (EU 40 / US 8)";
    return "Custom Bespoke Fitting Recommended";
  };

  return (
    <div className="pt-28 pb-24 mx-auto max-w-5xl px-6">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[#D4AF37]">
          <Ruler className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.4em] font-semibold">
            Precision Measurement
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Atelier Size & Fitting Guide
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Every AURA piece is hand-tailored to international sizing standards. Use our interactive estimator below or schedule a private fitting.
        </p>
      </div>

      {/* Estimator */}
      <div className="rounded-xl border border-[#D4AF37]/40 bg-[#141416] p-8 shadow-2xl space-y-6 mb-12">
        <h2 className="font-serif text-2xl text-stone-100 flex items-center gap-2">
          Interactive Sizing Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase text-stone-300 mb-2">
              Bust: <span className="font-mono text-[#D4AF37] font-bold">{bust} cm</span>
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
            <label className="block text-xs uppercase text-stone-300 mb-2">
              Waist: <span className="font-mono text-[#D4AF37] font-bold">{waist} cm</span>
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

          <div>
            <label className="block text-xs uppercase text-stone-300 mb-2">
              Hips: <span className="font-mono text-[#D4AF37] font-bold">{hips} cm</span>
            </label>
            <input
              type="range"
              min="80"
              max="120"
              value={hips}
              onChange={(e) => setHips(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
          </div>
        </div>

        <div className="border-t border-stone-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-400">Estimated Sizing Recommendation:</span>
          <span className="font-mono text-base font-bold text-[#D4AF37] border border-[#D4AF37] px-4 py-2 bg-[#0E0E10]">
            {calculateRecommendedSize()}
          </span>
        </div>
      </div>

      {/* Sizing Table */}
      <div className="rounded-xl border border-stone-800 bg-[#141416] p-6 overflow-x-auto">
        <h3 className="font-serif text-xl text-stone-100 mb-4">International Sizing Table</h3>
        <table className="w-full text-left text-xs text-stone-300">
          <thead className="bg-[#0E0E10] text-[#D4AF37] uppercase font-mono">
            <tr>
              <th className="p-3">Standard</th>
              <th className="p-3">EU</th>
              <th className="p-3">US</th>
              <th className="p-3">UK</th>
              <th className="p-3">Bust (cm)</th>
              <th className="p-3">Waist (cm)</th>
              <th className="p-3">Hips (cm)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            <tr>
              <td className="p-3 font-bold">XS</td>
              <td className="p-3 font-mono">34</td>
              <td className="p-3 font-mono">2</td>
              <td className="p-3 font-mono">6</td>
              <td className="p-3 font-mono">80 - 83</td>
              <td className="p-3 font-mono">60 - 64</td>
              <td className="p-3 font-mono">86 - 90</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">S</td>
              <td className="p-3 font-mono">36</td>
              <td className="p-3 font-mono">4</td>
              <td className="p-3 font-mono">8</td>
              <td className="p-3 font-mono">84 - 88</td>
              <td className="p-3 font-mono">65 - 69</td>
              <td className="p-3 font-mono">91 - 95</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">M</td>
              <td className="p-3 font-mono">38</td>
              <td className="p-3 font-mono">6</td>
              <td className="p-3 font-mono">10</td>
              <td className="p-3 font-mono">89 - 93</td>
              <td className="p-3 font-mono">70 - 74</td>
              <td className="p-3 font-mono">96 - 100</td>
            </tr>
            <tr>
              <td className="p-3 font-bold">L</td>
              <td className="p-3 font-mono">40</td>
              <td className="p-3 font-mono">8</td>
              <td className="p-3 font-mono">12</td>
              <td className="p-3 font-mono">94 - 98</td>
              <td className="p-3 font-mono">75 - 79</td>
              <td className="p-3 font-mono">101 - 105</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
