import React from "react";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import coffeeImage from "@/assets/coffee-detail.jpg";
import pastaImage from "@/assets/pasta-special.jpg";
import dessertImage from "@/assets/dessert-special.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Araku House Interior" },
    { src: coffeeImage, alt: "Artisan Coffee" },
    { src: pastaImage, alt: "Special Pasta" },
    { src: dessertImage, alt: "Signature Dessert" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Step inside our cozy space and explore the moments that make Araku House special
          </p>
          <a
            href="https://www.instagram.com/arakuhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram @arakuhouse
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-background font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Experience the transformation and ambiance</p>
          <p className="text-foreground/60 italic">More photos coming soon as we capture our journey...</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
