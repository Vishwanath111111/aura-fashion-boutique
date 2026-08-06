"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-[#0B0B0C] text-stone-400">
      {/* Newsletter Block */}
      <div className="border-b border-stone-800/80 bg-[#121214] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF37]">
            Inner Circle Privé
          </span>
          <h2 className="font-serif text-3xl text-stone-100 md:text-4xl">
            Join the AURA VIP Circle
          </h2>
          <p className="mx-auto max-w-lg text-xs leading-relaxed text-stone-400">
            Receive private invitations to seasonal trunk shows, bespoke fitting appointments, and preview drops.
          </p>
          <div className="pt-2">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#141416] text-[#D4AF37]">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-serif text-2xl font-bold uppercase tracking-widest text-stone-100">
                Aura <span className="font-sans text-xs tracking-widest text-[#D4AF37]">Atelier</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-stone-400 max-w-sm">
              Handcrafted luxury apparel combining classic Italian sartorial technique with modern minimalist aesthetics. Made for those who appreciate true elegance.
            </p>
            <div className="pt-2 flex items-center space-x-4 text-stone-400">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#D4AF37]">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#D4AF37]">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#D4AF37]">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/collections" className="hover:text-stone-100">Haute Couture</Link></li>
              <li><Link href="/collections?category=Bridal" className="hover:text-stone-100">Royal Bridal</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-stone-100">Autumn/Winter 2026</Link></li>
              <li><Link href="/featured" className="hover:text-stone-100">Iconic Masterpieces</Link></li>
              <li><Link href="/lookbook" className="hover:text-stone-100">Editorial Lookbook</Link></li>
            </ul>
          </div>

          {/* Maison Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              The Maison
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about" className="hover:text-stone-100">About Atelier</Link></li>
              <li><Link href="/story" className="hover:text-stone-100">Heritage & Craft</Link></li>
              <li><Link href="/testimonials" className="hover:text-stone-100">VIP Testimonials</Link></li>
              <li><Link href="/size-guide" className="hover:text-stone-100">Sizing Guide</Link></li>
              <li><Link href="/faq" className="hover:text-stone-100">Boutique FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Studio */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Concierge
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp Concierge Direct
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-16 border-t border-stone-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-300">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Crafted by</span>
            <a
              href={SITE_CONFIG.agency.url}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#D4AF37] hover:underline inline-flex items-center gap-0.5"
            >
              {SITE_CONFIG.agency.name} <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
