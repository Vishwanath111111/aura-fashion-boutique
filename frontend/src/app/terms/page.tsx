import React from "react";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Terms & Conditions | Maison AURA",
  description: "Terms of service and bespoke fitting agreement for AURA Atelier.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-4xl px-6 space-y-8 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
      <div className="text-center space-y-2 border-b border-stone-800 pb-8">
        <h1 className="font-serif text-4xl text-stone-100">Terms & Conditions</h1>
        <p className="text-xs text-stone-500 font-mono">Last Updated: August 2026</p>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-xl text-stone-100">1. Atelier Sales Agreement</h2>
        <p>
          By booking a fitting appointment or commissioning a made-to-measure Haute Couture or Royal Bridal creation with {SITE_CONFIG.name}, you agree to the terms herein.
        </p>

        <h2 className="font-serif text-xl text-stone-100">2. Bespoke Made-to-Measure Policy</h2>
        <p>
          Because every bespoke creation involves individual pattern creation, Italian silk cutting, and manual embroidery, orders cannot be canceled or refunded once fabric cutting has commenced. Initial fitting deposits are non-refundable.
        </p>

        <h2 className="font-serif text-xl text-stone-100">3. Complimentary Alterations</h2>
        <p>
          All Haute Couture garments include two complimentary fitting sessions and lifetime minor alterations at our flagship salon in Bandra West, Mumbai, or designated international pop-up ateliers.
        </p>

        <h2 className="font-serif text-xl text-stone-100">4. Intellectual Property</h2>
        <p>
          All gown designs, lookbook imagery, Zardozi motifs, and digital media are protected under international copyright law and remain the sole property of {SITE_CONFIG.name}.
        </p>
      </div>
    </div>
  );
}
