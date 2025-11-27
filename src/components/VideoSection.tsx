import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import lifestyleImg2 from "@/assets/lifestyle-2.jpg";

export const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              See It in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch how our headphones deliver an unmatched audio experience
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <div className="aspect-video relative">
              <img
                src={lifestyleImg2}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-accent hover:bg-accent/90 text-white transition-all hover:scale-110 shadow-2xl"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
