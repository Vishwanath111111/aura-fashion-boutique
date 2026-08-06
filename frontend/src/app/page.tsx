import { Hero } from "@/components/home/Hero";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { BrandStory } from "@/components/home/BrandStory";
import { NewArrivals } from "@/components/home/NewArrivals";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { LookbookSection } from "@/components/home/LookbookSection";
import { LimitedEdition } from "@/components/home/LimitedEdition";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InstaGallery } from "@/components/home/InstaGallery";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { StoreLocation } from "@/components/home/StoreLocation";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <NewArrivals />
      <TrendingProducts />
      <LookbookSection />
      <LimitedEdition />
      <CategoriesSection />
      <TestimonialsSection />
      <InstaGallery />
      <NewsletterSection />
      <StoreLocation />
      <FAQSection />
      <CTASection />
    </div>
  );
}