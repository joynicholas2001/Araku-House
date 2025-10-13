import React from "react";
import { Instagram as InstagramIcon } from "lucide-react";

// Simple Instagram gallery block showing clickable thumbnails that link to posts
const InstagramSection: React.FC = () => {
  // Instagram posts to link out to. Thumbnails below are local placeholders for fast loading.
  // If you want live Instagram thumbnails, we can switch to official embeds or a server-side fetch later.
  const posts = [
    {
      href: "https://www.instagram.com/arakuhouse/p/DPi8bfIEV6z/",
      src: "https://www.instagram.com/p/DPi8bfIEV6z/media/?size=l",
      alt: "Araku House Interior (Instagram)",
    },
    {
      href: "https://www.instagram.com/pictures_window/p/DOyHQt1CJuk/",
      src: "https://www.instagram.com/p/DOyHQt1CJuk/media/?size=l",
      alt: "Artisan Coffee (Instagram)",
    },
    {
      href: "https://www.instagram.com/arakuhouse/p/DPGcn4_Edj-/",
      src: "https://www.instagram.com/p/DPGcn4_Edj-/media/?size=l",
      alt: "Special Pasta (Instagram)",
    },
    {
      href: "https://www.instagram.com/arakuhouse/p/DPNr8CoEZcO/",
      src: "https://www.instagram.com/p/DPNr8CoEZcO/media/?size=l",
      alt: "Signature Dessert (Instagram)",
    },
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
            <InstagramIcon className="h-5 w-5" />
            Follow us on Instagram @arakuhouse
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={`Open Instagram post: ${post.alt}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-background font-semibold">View on Instagram</p>
              </div>
            </a>
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

export default InstagramSection;
