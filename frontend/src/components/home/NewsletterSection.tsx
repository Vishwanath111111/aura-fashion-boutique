"use client";

import React from "react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="bg-[#121214] py-24 border-t border-b border-stone-800">
      <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
          VIP Privé Access
        </span>
        <h2 className="font-serif text-4xl text-stone-100 md:text-5xl">
          Be First to Access Limited Drops
        </h2>
        <p className="mx-auto max-w-lg text-xs leading-relaxed text-stone-400">
          Subscribers receive direct concierge invitations to seasonal trunk shows, bespoke fitting appointments, and preview drops before public release.
        </p>
        <div className="pt-4">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
