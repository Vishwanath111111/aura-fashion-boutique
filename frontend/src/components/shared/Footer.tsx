import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-stone-800 bg-black py-8 text-center text-xs text-stone-500">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Aura Atelier. All rights reserved.</p>
        <p className="text-stone-400">
          Independent Demo Site built by <span className="text-[#D4AF37] font-semibold">VJ Web Studio</span>
        </p>
      </div>
    </footer>
  );
};