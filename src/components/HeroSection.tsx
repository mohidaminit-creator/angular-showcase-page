import { Button } from "@/components/ui/button";
import { Play, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-headphones.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          Sports & Outdoor
          <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mt-2">Performance Gear</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Built for adventure, engineered for peak performance in any environment
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            asChild
          >
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Buy on Amazon
            </a>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="glass-effect text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            asChild
          >
            <a href="#video">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
