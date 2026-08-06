export const SITE_CONFIG = {
  name: "AURA Atelier",
  title: "AURA | Royal Indian & International Haute Couture Boutique",
  description: "Experience the pinnacle of luxury fashion. AURA Atelier crafts bespoke Indo-Western couture, royal Zardozi bridal wear, Banarasi silk brocades, and artisanal luxury accessories.",
  url: "https://aura-boutique.vjwebstudio.com",
  agency: {
    name: "VJ Web Studio",
    url: "https://vjwebstudio.com",
  },
  contact: {
    // Uses environment variable for private WhatsApp concierge number
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000",
    phoneDisplay: "Private Concierge Line",
    email: "concierge@auraatelier.com",
    address: "124 Luxury Designer Boulevard, Bandra West, Mumbai 400050",
    hours: "Monday – Saturday: 10:00 AM – 8:00 PM (By Appointment Only)",
  },
  socials: {
    instagram: "https://instagram.com/aura.atelier",
    pinterest: "https://pinterest.com/auraatelier",
    facebook: "https://facebook.com/auraatelier",
    linkedin: "https://linkedin.com/company/aura-atelier",
  },
  currency: {
    code: "INR",
    symbol: "₹",
  },
};
