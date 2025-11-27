import productView1 from "@/assets/product-view-1.jpg";
import productView2 from "@/assets/product-view-2.jpg";
import productView3 from "@/assets/product-view-3.jpg";
import productView4 from "@/assets/product-view-4.jpg";
import lifestyleImg1 from "@/assets/lifestyle-1.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const GridGallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Designed for Perfection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every detail crafted with precision. Premium materials meet innovative engineering 
            to deliver an unparalleled audio experience.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Top row - 3 images */}
          <div className="group relative overflow-hidden rounded-2xl aspect-square">
            <img
              src={productView1}
              alt="Product detail 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl aspect-square">
            <img
              src={productView2}
              alt="Product detail 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl aspect-square">
            <img
              src={productView3}
              alt="Product detail 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom row - 2 images, centered */}
          <div className="md:col-start-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img
                src={productView4}
                alt="Product detail 4"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img
                src={lifestyleImg1}
                alt="Product detail 5"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
