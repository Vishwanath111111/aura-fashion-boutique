"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Compass } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function StoreLocation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Compass className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Flagship Atelier Location
            </span>
          </div>

          <h2 className="font-serif text-4xl text-stone-100 md:text-5xl leading-tight">
            Visit Our Private Fitting Studio
          </h2>

          <p className="text-xs leading-relaxed text-stone-300 font-light">
            Situated in the heart of Mumbai's luxury fashion district, our flagship salon offers private fitting suites, champagne consultation lounges, and direct access to our master tailors.
          </p>

          <div className="space-y-4 pt-2 text-xs text-stone-300">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-100 font-serif text-sm">Flagship Boutique & Salon</strong>
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-100 font-serif text-sm">Salon Hours</strong>
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-100 font-serif text-sm">Direct Concierge Line</strong>
                <span className="font-mono text-[#D4AF37]">{SITE_CONFIG.contact.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-100 font-serif text-sm">Official Email</strong>
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Embed */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-stone-800 shadow-2xl bg-stone-900">
          <iframe
            title="AURA Atelier Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.491321747864!2d72.829876!3d19.052636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917246e4b9d%3A0xa5e5a26b64d1f2e1!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.9) contrast(1.2) invert(0.9)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
