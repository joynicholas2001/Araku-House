import React from "react";
import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Araku House</h3>
            <p className="text-primary-foreground/80 mb-4">
              Cafe & Organic Store
            </p>
            <p className="text-primary-foreground/60 italic text-sm">
              &quot;Brew Local, Take Global&quot;
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#events" className="hover:text-accent transition-colors">Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Visit Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <a
              href="https://www.instagram.com/arakuhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors mb-4"
            >
              <Instagram className="h-5 w-5" aria-hidden />
              <span className="sr-only">Instagram</span>
              <span>@arakuhouse</span>
            </a>
            <p className="text-primary-foreground/60 text-sm mb-2">#arakuhouse</p>
            <address className="not-italic text-primary-foreground/80 text-sm">
              Above Dumont, opposite Loyola auditorium<br />
              Vijayawada
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
            <span>© {currentYear} Araku House.</span>
            <span className="inline-flex items-center" aria-hidden>
              Made with <Heart className="h-4 w-4 text-accent fill-accent ml-2" />
            </span>
            <span className="sr-only">for coffee lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
