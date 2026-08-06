"use client";

import React, { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";
import { submitNewsletter } from "@/lib/api-client";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      const res = await submitNewsletter({ email });
      if (res.success) {
        setSuccessMessage(res.message);
        setEmail("");
      }
    } catch (err) {
      console.error("Newsletter error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {successMessage ? (
        <div className="flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/50 bg-[#141416] p-4 text-xs text-[#D4AF37]">
          <Check className="h-4 w-4" />
          <span>{successMessage}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your VIP email address..."
              required
              className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-3 text-xs text-stone-100 placeholder-stone-500 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="whitespace-nowrap bg-[#D4AF37] px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black hover:bg-white transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Subscribing...
              </span>
            ) : (
              "Join VIP Privé"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
