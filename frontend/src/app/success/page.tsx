import React from "react";
import Link from "next/link";
import { CheckCircle2, Calendar, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Appointment Confirmed | Maison AURA",
  description: "Fitting consultation confirmation for AURA Atelier.",
};

export default function SuccessPage() {
  return (
    <div className="pt-36 pb-24 mx-auto max-w-2xl px-6 text-center space-y-6">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#141416]">
        <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" />
      </div>

      <span className="text-xs uppercase tracking-[0.4em] font-semibold text-[#D4AF37]">
        Request Transmitted
      </span>

      <h1 className="font-serif text-4xl text-stone-100">
        Your Fitting Request is Confirmed
      </h1>

      <p className="text-xs text-stone-300 leading-relaxed font-light">
        Thank you for choosing AURA Atelier. Our senior concierge stylist has received your request and will contact you via phone/WhatsApp within 24 hours to finalize your private salon appointment.
      </p>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="w-full sm:w-auto bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-white transition-all"
        >
          Return to Maison Homepage
        </Link>
        <Link
          href="/collections"
          className="w-full sm:w-auto border border-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
        >
          Browse Collections Catalog
        </Link>
      </div>
    </div>
  );
}
