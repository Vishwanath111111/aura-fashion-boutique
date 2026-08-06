export type Category =
  | "All"
  | "Royal Bridal"
  | "Men's Royal Couture"
  | "Women's Royal Couture"
  | "Indo-Western Fusion"
  | "Banarasi & Heritage"
  | "Haute Couture"
  | "Accessories";

export type Gender = "Men" | "Women" | "Unisex";

export interface Product {
  id: string;
  name: string;
  category: Category;
  gender: Gender;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  details: string[];
  sizes: string[];
  colors: string[];
  materials: string;
  care: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
  isLimitedEdition?: boolean;
  sku: string;
  rating: number;
  reviewsCount: number;
  craftsmanship?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  season: string;
  gender: Gender;
  image: string;
  description: string;
  featuredProductId?: string;
  location: string;
  photographer: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  verifiedPurchase: boolean;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Orders & Shipping" | "Custom Tailoring" | "Care & Maintenance" | "Returns & Exchanges";
}
