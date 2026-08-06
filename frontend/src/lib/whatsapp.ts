import { SITE_CONFIG } from "@/config/site";

export interface LeadDetails {
  name?: string;
  city?: string;
  weddingDate?: string;
  budget?: string;
  preferredOutfit?: string;
  phone?: string;
  occasion?: string;
  sherwaniSize?: string;
  productInterested?: string;
  size?: string;
  colorPreference?: string;
  product?: string;
  garmentType?: string;
  fabricPreference?: string;
  preferredDate?: string;
  preferredTime?: string;
  purpose?: string;
}

export type ActionType =
  | "bridal"
  | "groom"
  | "womens_wear"
  | "mens_wear"
  | "tailoring"
  | "appointment"
  | "talk_to_stylist";

/**
 * Formats a clean, professional lead message for WhatsApp.
 */
export function generateWhatsAppMessage(actionType: ActionType, details: LeadDetails): string {
  switch (actionType) {
    case "bridal":
      return (
        `Hello AURA Atelier,\n\n` +
        `I am interested in your Bridal Collection.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `City: ${details.city || "N/A"}\n` +
        `Wedding Date: ${details.weddingDate || "N/A"}\n` +
        `Budget: ${details.budget || "N/A"}\n` +
        `Preferred Outfit: ${details.preferredOutfit || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n\n` +
        `Please contact me.\n\n` +
        `Thank you.`
      );

    case "groom":
      return (
        `Hello AURA Atelier,\n\n` +
        `I am interested in your Groom Collection.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `City: ${details.city || "N/A"}\n` +
        `Occasion: ${details.occasion || "N/A"}\n` +
        `Sherwani Size: ${details.sherwaniSize || "N/A"}\n` +
        `Budget: ${details.budget || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n\n` +
        `Please contact me.\n\n` +
        `Thank you.`
      );

    case "womens_wear":
      return (
        `Hello AURA Atelier,\n\n` +
        `I am interested in your Women's Wear collection.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `Product Interested: ${details.productInterested || "N/A"}\n` +
        `Size: ${details.size || "N/A"}\n` +
        `Color Preference: ${details.colorPreference || "N/A"}\n` +
        `Budget: ${details.budget || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n\n` +
        `Please contact me.\n\n` +
        `Thank you.`
      );

    case "mens_wear":
      return (
        `Hello AURA Atelier,\n\n` +
        `I am interested in your Men's Wear collection.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `Product: ${details.product || "N/A"}\n` +
        `Size: ${details.size || "N/A"}\n` +
        `Budget: ${details.budget || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n\n` +
        `Please contact me.\n\n` +
        `Thank you.`
      );

    case "tailoring":
      return (
        `Hello AURA Atelier,\n\n` +
        `I am interested in Custom Tailoring.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `Garment Type: ${details.garmentType || "N/A"}\n` +
        `Fabric Preference: ${details.fabricPreference || "N/A"}\n` +
        `Occasion: ${details.occasion || "N/A"}\n` +
        `Budget: ${details.budget || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n\n` +
        `Please contact me.\n\n` +
        `Thank you.`
      );

    case "appointment":
      return (
        `Hello AURA Atelier,\n\n` +
        `I would like to book a Private Consultation Appointment.\n\n` +
        `Customer Details\n\n` +
        `Name: ${details.name || "N/A"}\n` +
        `Phone Number: ${details.phone || "N/A"}\n` +
        `Preferred Date: ${details.preferredDate || "N/A"}\n` +
        `Preferred Time: ${details.preferredTime || "N/A"}\n` +
        `Purpose: ${details.purpose || "N/A"}\n\n` +
        `Please confirm my appointment.\n\n` +
        `Thank you.`
      );

    case "talk_to_stylist":
      return (
        `Hello AURA Atelier,\n\n` +
        `I would like to speak with a Fashion Stylist.\n\n` +
        `Please contact me.`
      );

    default:
      return `Hello AURA Atelier,\n\nI would like to inquire about your luxury fashion collections.`;
  }
}

/**
 * Opens WhatsApp directly in a new window using the configured phone number.
 */
export function openWhatsApp(message: string): void {
  const rawNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    SITE_CONFIG.contact.whatsappPhone ||
    "919876543210";

  // Clean non-digit characters except leading '+' if present
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  if (typeof window !== "undefined") {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
}
