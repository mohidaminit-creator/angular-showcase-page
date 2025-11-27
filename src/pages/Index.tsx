import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { Product360Viewer } from "@/components/Product360Viewer";
import { GridGallery } from "@/components/GridGallery";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <VideoSection />
      <Product360Viewer />
      <GridGallery />
      <HorizontalCarousel />
      <ProductCard />
    </main>
  );
};

export default Index;
