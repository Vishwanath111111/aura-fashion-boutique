"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Calendar, Mail, User, Phone, MessageSquare } from "lucide-react";
import { submitContactForm } from "@/lib/api-client";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(10, "Valid contact phone number is required"),
  preferredDate: z.string().optional(),
  serviceType: z.enum([
    "Haute Couture Consultation",
    "Bridal Fitting",
    "Personal Styling",
    "General Inquiry",
  ]),
  message: z.string().min(10, "Please provide brief details regarding your consultation request"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: "Haute Couture Consultation",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await submitContactForm(data);
      if (res.success) {
        setSubmittedRef(res.data.referenceId);
        reset();
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="rounded-xl border border-[#D4AF37]/40 bg-[#141416] p-8 text-center backdrop-blur-md">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#D4AF37]" />
        <h3 className="mt-4 font-serif text-2xl text-stone-100">Consultation Request Confirmed</h3>
        <p className="mt-2 text-xs text-stone-400">
          Thank you for choosing AURA Atelier. Reference Code:{" "}
          <span className="font-mono text-[#D4AF37] font-semibold">{submittedRef}</span>
        </p>
        <p className="mt-4 text-xs leading-relaxed text-stone-300">
          Our senior atelier stylist will reach out within 24 hours to schedule your private fitting appointment.
        </p>
        <button
          onClick={() => setSubmittedRef(null)}
          className="mt-6 border border-[#D4AF37] px-6 py-2.5 text-xs uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-stone-500" />
            <input
              {...register("fullName")}
              type="text"
              placeholder="Countess / Lady / Mr. Full Name"
              className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
          {errors.fullName && <p className="mt-1 text-[11px] text-red-400">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-stone-500" />
            <input
              {...register("email")}
              type="email"
              placeholder="concierge@domain.com"
              className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
          {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-stone-500" />
            <input
              {...register("phone")}
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
          {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
            Preferred Appointment Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-stone-500" />
            <input
              {...register("preferredDate")}
              type="date"
              className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-2.5 text-xs text-stone-100 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
          Service Request Type *
        </label>
        <select
          {...register("serviceType")}
          className="w-full rounded-md border border-stone-800 bg-[#0E0E10] px-4 py-2.5 text-xs text-stone-100 focus:border-[#D4AF37] focus:outline-none"
        >
          <option value="Haute Couture Consultation">Haute Couture Evening Gown Consultation</option>
          <option value="Bridal Fitting">Royal Bridal Lehenga / Ensemble Fitting</option>
          <option value="Personal Styling">Personal Wardrobe Styling Session</option>
          <option value="General Inquiry">General Boutique Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-stone-400 mb-1.5">
          Garment Details & Fitting Requirements *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-stone-500" />
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Share your occasion date, preferred silhouette, or specific styling preferences..."
            className="w-full rounded-md border border-stone-800 bg-[#0E0E10] pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
        {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] py-3.5 text-xs font-semibold uppercase tracking-widest text-black hover:bg-white transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Transmitting Request...
          </>
        ) : (
          "Request Private Fitting Appointment"
        )}
      </button>
    </form>
  );
}