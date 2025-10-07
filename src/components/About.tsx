import React from "react";
import coffeeImage from "@/assets/coffee-detail.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                This isn&apos;t just coffee. It&apos;s a journey from the misty hills of Araku Valley to your cup, 
                carrying stories of indigenous farmers, organic cultivation, and a commitment to purity.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                At Araku House, we believe in the poetry of slow mornings, the comfort of warm conversations, 
                and the magic that happens when community gathers around great food.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our curated plates tell stories through ingredients sourced with care. Our signature desserts 
                are crafted with love. Every element in our space is designed to make you feel at home.
              </p>
              <p className="text-accent font-semibold text-xl mt-8 italic">
                We brew local, to take it global.
              </p>
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src={coffeeImage}
              alt="Artisan coffee at Araku House"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="rounded-2xl shadow-strong w-full h-64 md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
