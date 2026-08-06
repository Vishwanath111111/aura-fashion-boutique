"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <div className="pt-28 pb-24 mx-auto max-w-4xl px-6 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[#D4AF37]">
          <HelpCircle className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.4em] font-semibold">
            Boutique Support
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Frequently Asked Questions
        </h1>
        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Comprehensive guidance on our private fitting sessions, international courier policies, and silk garment preservation.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-xl border border-stone-800 bg-[#141416] transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-serif text-xl text-stone-100 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-stone-800/80 px-6 py-4 text-xs leading-relaxed text-stone-300 space-y-2">
                  <p>{faq.answer}</p>
                  <span className="block font-mono text-[10px] uppercase text-[#D4AF37]">
                    Category: {faq.category}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-[#D4AF37]/30 bg-[#0E0E10] p-8 text-center space-y-3">
        <h3 className="font-serif text-2xl text-stone-100">Have a Specific Inquiry?</h3>
        <p className="text-xs text-stone-400">
          Our private concierge team is available Monday through Saturday to assist with bespoke orders.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] px-8 py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all"
          >
            <PhoneCall className="h-4 w-4" /> Speak with Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
