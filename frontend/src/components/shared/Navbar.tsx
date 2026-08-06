"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-stone-800/80 bg-[#0E0E10]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-serif text-2xl uppercase tracking-widest text-stone-100">
          Aura <span className="font-sans text-xs tracking-widest text-[#D4AF37]">Atelier</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden space-x-8 text-xs uppercase tracking-widest text-stone-300 md:flex">
          <a href="#collection" className="hover:text-[#D4AF37] transition-colors">Collection</a>
          <a href="#heritage" className="hover:text-[#D4AF37] transition-colors">Heritage</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Consultation</a>
        </nav>

        <a
          href="#collection"
          className="hidden md:inline-block border border-[#D4AF37] px-4 py-2 text-xs uppercase tracking-widest text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-black"
        >
          Explore Lookbook
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-stone-300 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-800 bg-[#0E0E10] px-6 py-6 md:hidden space-y-4 text-xs uppercase tracking-widest">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-[#D4AF37]"
          >
            Collection
          </a>
          <a
            href="#heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-[#D4AF37]"
          >
            Heritage
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-300 hover:text-[#D4AF37]"
          >
            Consultation
          </a>
        </div>
      )}
    </header>
  );
};