import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Book Private Consultation & Fitting | Maison AURA",
  description: "Schedule a fitting session at our Bandra West flagship studio or request a private virtual consultation.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 mx-auto max-w-7xl px-6 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-[#D4AF37]">
          <Calendar className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.4em] font-semibold">
            Private Appointment
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-100">
          Book Your Fitting Session
        </h1>
        <p className="text-xs text-stone-400">
          Experience private fitting suites, bespoke champagne consultations, and direct guidance from our master tailors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="rounded-xl border border-stone-800 bg-[#141416] p-8 shadow-2xl space-y-6">
          <h2 className="font-serif text-2xl text-stone-100">Consultation Request Form</h2>
          <ContactForm />
        </div>

        {/* Studio Info & Map */}
        <div className="space-y-8">
          <div className="rounded-xl border border-stone-800 bg-[#141416] p-8 space-y-6">
            <h2 className="font-serif text-2xl text-stone-100">Flagship Studio Details</h2>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-100 text-sm">Studio Location</strong>
                  <span>{SITE_CONFIG.contact.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-100 text-sm">Appointment Hours</strong>
                  <span>{SITE_CONFIG.contact.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-100 text-sm">Direct Concierge Phone</strong>
                  <span className="font-mono text-[#D4AF37]">{SITE_CONFIG.contact.phoneDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-100 text-sm">Official Email</strong>
                  <span>{SITE_CONFIG.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-xl border border-stone-800 bg-stone-900">
            <iframe
              title="AURA Flagship Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.491321747864!2d72.829876!3d19.052636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917246e4b9d%3A0xa5e5a26b64d1f2e1!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.9) contrast(1.2) invert(0.9)" }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
