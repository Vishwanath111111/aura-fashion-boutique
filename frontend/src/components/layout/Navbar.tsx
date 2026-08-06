"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShoppingBag, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "Our Story", href: "/story" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-stone-800/80 bg-[#0E0E10]/90 backdrop-blur-md py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#141416] text-[#D4AF37] group-hover:scale-105 transition-all">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-serif text-2xl font-bold uppercase tracking-widest text-stone-100 group-hover:text-[#D4AF37] transition-colors">
            Aura <span className="font-sans text-xs tracking-[0.3em] font-light text-[#D4AF37]">Atelier</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-stone-300">
          {navLinks.slice(0, 7).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-[#D4AF37] relative py-1 ${
                  isActive ? "text-[#D4AF37] font-semibold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Callout */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[11px] tracking-wider uppercase">Private Concierge</span>
          </a>
          <Link
            href="/contact"
            className="border border-[#D4AF37] px-5 py-2 text-xs uppercase tracking-widest font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-black shadow-lg"
          >
            Private Fitting
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-2 text-stone-200 lg:hidden hover:text-[#D4AF37]"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] z-50 border-b border-stone-800 bg-[#0E0E10]/98 p-6 backdrop-blur-xl lg:hidden shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-widest transition-colors py-1 border-b border-stone-900 ${
                  pathname === link.href ? "text-[#D4AF37] font-semibold" : "text-stone-300 hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[#D4AF37] py-3 text-xs uppercase tracking-widest font-bold text-black"
              >
                Book Private Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
