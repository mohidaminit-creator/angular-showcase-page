import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productView1 from "@/assets/product-view-1.jpg";
import productView2 from "@/assets/product-view-2.jpg";
import productView3 from "@/assets/product-view-3.jpg";
import productView4 from "@/assets/product-view-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [productView1, productView2, productView3, productView4];

export const Product360Viewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startY, setStartY] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * images.length) % images.length;
          setCurrentIndex(index);
        }
      }
    });

    return () => {
      modelTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY;
    const sensitivity = 50;
    
    if (Math.abs(deltaY) > sensitivity) {
      const direction = deltaY > 0 ? -1 : 1;
      setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
      setStartY(e.touches[0].clientY);
    }
  };

  return (
    <section id="f-canvas" ref={canvasRef} className="h-screen flex items-center justify-center bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            360° Product View
          </h2>
          <p className="text-muted-foreground text-lg">
            Scroll to explore every angle
          </p>
        </div>

        <div 
          className="relative max-w-2xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-2xl">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product view ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-accent w-8" 
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`View ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
