"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "logo": "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "description": SITE_CONFIG.description,
    "telephone": SITE_CONFIG.contact.whatsappPhone,
    "email": SITE_CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 Luxury Designer Boulevard",
      "addressLocality": "Bandra West",
      "addressRegion": "Mumbai",
      "postalCode": "400050",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 10:00-20:00",
    "sameAs": [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
