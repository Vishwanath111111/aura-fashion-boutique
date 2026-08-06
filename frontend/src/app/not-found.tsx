import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 mx-auto max-w-2xl px-6 text-center space-y-6">
      <div className="inline-flex items-center gap-2 text-[#D4AF37]">
        <Sparkles className="h-5 w-5" />
        <span className="font-mono text-sm uppercase tracking-widest">Error 404</span>
      </div>

      <h1 className="font-serif text-5xl md:text-6xl text-stone-100">
        Page Not Found
      </h1>

      <p className="text-xs text-stone-400 font-light leading-relaxed max-w-md mx-auto">
        The haute couture collection or salon page you are seeking appears to have moved or does not exist.
      </p>

      <div className="pt-6">
        <Link
          href="/"
          className="inline-block bg-[#D4AF37] px-9 py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl"
        >
          Return to Flagship Salon Home
        </Link>
      </div>
    </div>
  );
}
