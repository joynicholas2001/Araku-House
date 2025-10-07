import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-background mb-6">
          Araku House
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-background/90 mb-4 font-light">
          Cafe & Organic Store
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-background/80 text-sm md:text-base mb-8">
          <span className="bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">100% Organic Coffee</span>
          <span className="bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">Curated Plates</span>
          <span className="bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">Signature Desserts</span>
        </div>
        <p className="text-2xl md:text-3xl text-background mb-12 font-serif italic">
          &quot;Brew Local, Take Global&quot;
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("menu")}
            className="text-lg"
          >
            View Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg bg-background/10 backdrop-blur-sm border-background/40 text-background hover:bg-background/20"
          >
            Visit Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
