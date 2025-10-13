import React from "react";
// Update the import path below if your Button component is located elsewhere
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6">
          Araku House
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-light">
          Cafe & Organic Store
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-white text-sm md:text-base mb-8">
          <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">100% Organic Coffee</span>
          <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Curated Plates</span>
          <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Signature Desserts</span>
        </div>
        <p className="text-2xl md:text-3xl text-white mb-12 font-serif italic">
          &#34;Brew Local, Take Global&#34;
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("menu")}
            className="text-lg bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20"
          >
            View Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20"
          >
            Visit Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
