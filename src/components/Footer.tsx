import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const username = "arakuhouse";
    const webUrl = "https://www.instagram.com/arakuhouse?igsh=MXAwd3dvMzg2cmd3OQ==";
    const appUrl = `instagram://user?username=${username}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Try to open the Instagram app; if it fails, fall back to web after a short delay.
      const fallback = setTimeout(() => {
        window.open(webUrl, "_blank");
      }, 700);
      // Attempt deep link
      window.location.href = appUrl;
      // Extra safety fallback if the document stays visible
      setTimeout(() => {
        if (!document.hidden) {
          window.open(webUrl, "_blank");
        }
        clearTimeout(fallback);
      }, 1000);
    } else {
      window.open(webUrl, "_blank");
    }
  };

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
                {/* Gallery section removed */}
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
              href="https://www.instagram.com/arakuhouse?igsh=MXAwd3dvMzg2cmd3OQ=="
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors mb-4"
            >
              <Instagram className="h-5 w-5" aria-hidden />
              <span className="sr-only">Instagram</span>
              <span>@arakuhouse</span>
            </a>
            <p className="text-primary-foreground/60 text-sm mb-2"></p>
            <address className="not-italic text-primary-foreground/80 text-sm">
              Above Dumont, opposite Loyola auditorium<br />
              Vijayawada
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Araku House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
