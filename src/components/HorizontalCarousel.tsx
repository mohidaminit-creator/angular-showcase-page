import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productView1 from "@/assets/product-view-1.jpg";
import productView2 from "@/assets/product-view-2.jpg";
import productView3 from "@/assets/product-view-3.jpg";
import lifestyleImg1 from "@/assets/lifestyle-1.jpg";
import lifestyleImg2 from "@/assets/lifestyle-2.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const carouselImages = [
  { src: lifestyleImg1, title: "Built for Adventure" },
  { src: lifestyleImg2, title: "Extreme Performance" },
  { src: productView1, title: "Rugged Design" },
  { src: productView2, title: "All-Weather Ready" },
  { src: productView3, title: "Ultimate Durability" },
];

export const HorizontalCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Discover what makes our sports & outdoor gear extraordinary
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className={`w-full transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CarouselContent className="-ml-8">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-8 basis-full md:basis-4/5 lg:basis-3/4">
                <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-12">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                      <h3 className="text-white font-display font-bold text-4xl md:text-5xl mb-2">
                        {image.title}
                      </h3>
                      <div className="w-24 h-1 bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 w-14 h-14 border-2" />
          <CarouselNext className="right-8 w-14 h-14 border-2" />
        </Carousel>
      </div>
    </section>
  );
};
