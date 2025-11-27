import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import productThumb from "@/assets/product-thumb.jpg";

export const ProductCard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-muted p-8 flex items-center justify-center">
                <img
                  src={productThumb}
                  alt="Product"
                  className="w-full max-w-sm object-contain"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(2,847 reviews)</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Pro Sport Headphones
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Engineered for athletes and outdoor enthusiasts. IPX7 waterproof rating, 
                  secure-fit ear hooks, and 30-hour battery life to power through your 
                  toughest workouts and adventures.
                </p>

                <ul className="space-y-2 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>IPX7 waterproof rating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Secure-fit sport ear hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>30-hour battery life</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Sweat and weather resistant</span>
                  </li>
                </ul>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-xl text-muted-foreground line-through">$399</span>
                  <span className="text-sm text-accent font-semibold">Save 25%</span>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 rounded-full transition-all hover:scale-105"
                  asChild
                >
                  <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
