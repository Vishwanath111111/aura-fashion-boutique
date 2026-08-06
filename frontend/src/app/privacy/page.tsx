import React from "react";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Maison AURA",
  description: "Privacy and data protection policy for AURA Atelier patrons.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-4xl px-6 space-y-8 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
      <div className="text-center space-y-2 border-b border-stone-800 pb-8">
        <h1 className="font-serif text-4xl text-stone-100">Privacy Policy</h1>
        <p className="text-xs text-stone-500 font-mono">Last Updated: August 2026</p>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-xl text-stone-100">1. Commitment to Patron Privacy</h2>
        <p>
          At {SITE_CONFIG.name}, protecting your personal information and maintaining absolute discretion is integral to our luxury service ethos. This privacy statement outlines how we collect, store, and utilize patron data across our digital platforms and private salons.
        </p>

        <h2 className="font-serif text-xl text-stone-100">2. Collection of Information</h2>
        <p>
          We collect personal data only when voluntarily submitted during private fitting appointment requests, newsletter subscriptions, or WhatsApp concierge interactions. This includes your name, email address, contact phone number, garment sizing parameters, and occasion requirements.
        </p>

        <h2 className="font-serif text-xl text-stone-100">3. Use of Personal Data</h2>
        <p>
          Your data is used solely to facilitate haute couture tailoring, manage appointment schedules, deliver insured private courier shipments, and send VIP invitations to seasonal trunk shows. We never sell, lease, or share patron records with third-party marketers.
        </p>

        <h2 className="font-serif text-xl text-stone-100">4. Contact & Inquiries</h2>
        <p>
          If you have questions regarding our privacy practices or wish to request data deletion, contact our Data Protection Officer at:{" "}
          <span className="text-[#D4AF37] font-mono">{SITE_CONFIG.contact.email}</span>.
        </p>
      </div>
    </div>
  );
}
