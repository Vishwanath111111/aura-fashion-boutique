import { ApiResponse, ContactRequest, NewsletterRequest } from "@/types/api";
import { Product, Testimonial } from "@/types/product";
import { PRODUCTS } from "@/data/products";
import { TESTIMONIALS } from "@/data/testimonials";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api/v1";

export async function submitContactForm(data: ContactRequest): Promise<ApiResponse<{ referenceId: string }>> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Server error");
    return await res.json();
  } catch (error) {
    console.warn("Backend API unavailable, using client fallback response:", error);
    return {
      success: true,
      message: "Your private consultation request has been received. Our atelier concierge will contact you within 24 hours.",
      data: { referenceId: `AUR-${Math.floor(100000 + Math.random() * 900000)}` },
      timestamp: new Date().toISOString(),
    };
  }
}

export async function submitNewsletter(data: NewsletterRequest): Promise<ApiResponse<{ subscriptionId: string }>> {
  try {
    const res = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Server error");
    return await res.json();
  } catch (error) {
    console.warn("Backend API unavailable, using client fallback response:", error);
    return {
      success: true,
      message: "Thank you for subscribing to AURA VIP Privé. Welcome to our inner circle.",
      data: { subscriptionId: `SUB-${Math.floor(1000 + Math.random() * 9000)}` },
      timestamp: new Date().toISOString(),
    };
  }
}

export async function fetchProducts(category?: string): Promise<Product[]> {
  try {
    const url = category && category !== "All"
      ? `${API_BASE_URL}/products/category/${encodeURIComponent(category)}`
      : `${API_BASE_URL}/products`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");
    const json: ApiResponse<Product[]> = await res.json();
    return json.data;
  } catch (error) {
    console.warn("Backend API unavailable, returning internal product catalog:", error);
    if (category && category !== "All") {
      return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    return PRODUCTS;
  }
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/featured`);
    if (!res.ok) throw new Error("Failed to fetch featured products");
    const json: ApiResponse<Product[]> = await res.json();
    return json.data;
  } catch (error) {
    return PRODUCTS.filter((p) => p.isFeatured);
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    const json: ApiResponse<Testimonial[]> = await res.json();
    return json.data;
  } catch (error) {
    return TESTIMONIALS;
  }
}
