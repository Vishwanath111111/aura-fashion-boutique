"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/data/faq";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#121214] py-24 border-t border-b border-stone-800">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-[#D4AF37]">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Boutique Assistance
            </span>
          </div>
          <h2 className="font-serif text-4xl text-stone-100 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-stone-400">
            Everything you need to know about our fitting consultations, international shipping, and haute couture care.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-stone-800 bg-[#0E0E10] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-lg text-stone-100 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-stone-800/80 px-6 py-4 text-xs leading-relaxed text-stone-300">
                    <p>{faq.answer}</p>
                    <span className="mt-3 block font-mono text-[10px] uppercase text-[#D4AF37]">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] hover:text-white transition-colors"
          >
            View All Frequently Asked Questions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
