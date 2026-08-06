import { Category } from "@/types/product";

export interface CategoryInfo {
  name: Category;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    name: "Men's Royal Couture",
    title: "Men's Royal Couture",
    subtitle: "Zardozi Sherwanis & Silk Bandhgalas",
    description: "Royal Kadhwa Banarasi sherwanis, velvet Achkans, and hand-embroidered tuxedos for grooms and gala events.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1600&auto=format&fit=crop",
    itemCount: 26,
  },
  {
    name: "Women's Royal Couture",
    title: "Women's Royal Couture",
    subtitle: "Maharani Lehengas & Anarkalis",
    description: "Monuments of hand embroidery created over 400+ artisan hours featuring authentic dabka, tilla, and semi-precious stone work.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop",
    itemCount: 38,
  },
  {
    name: "Indo-Western Fusion",
    title: "Indo-Western Fusion",
    subtitle: "Draped Capes & Bandhgala Blazers",
    description: "Architectural fusion tailored tuxedos, velvet jackets, Chikankari organza suits, and fluid silk capes combining East & West.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    itemCount: 32,
  },
  {
    name: "Banarasi & Heritage",
    title: "Banarasi & Kanjeevaram",
    subtitle: "Pure Gold Handloom Sarees",
    description: "Centuries-old weaving techniques from Varanasi and Kanchipuram using real 24k gold zari and Mulberry silk.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
    itemCount: 45,
  },
  {
    name: "Haute Couture",
    title: "Global Haute Couture",
    subtitle: "Silk Velvet Evening Gowns & Coats",
    description: "Floor-length Italian silk gowns, double-breasted Mongolian cashmere overcoats, and corseted evening wear.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1600&auto=format&fit=crop",
    itemCount: 20,
  },
  {
    name: "Accessories",
    title: "Artisanal Accessories",
    subtitle: "Gold Minaudières, Mojaris & Veils",
    description: "Hand-sculpted 18k gold clutches, hand-embroidered velvet juttis, royal brooches, and cathedral freshwater pearl veils.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1600&auto=format&fit=crop",
    itemCount: 24,
  },
];
