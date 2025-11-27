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

const carouselImages = [
  { src: lifestyleImg1, title: "Immersive Experience" },
  { src: lifestyleImg2, title: "Premium Craftsmanship" },
  { src: productView1, title: "Studio Quality" },
  { src: productView2, title: "Ergonomic Design" },
  { src: productView3, title: "Wireless Freedom" },
];

export const HorizontalCarousel = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover what makes our headphones extraordinary
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl aspect-video shadow-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-xl">{image.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
