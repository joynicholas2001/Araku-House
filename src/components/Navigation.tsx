import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (item: { id?: string; path?: string; type: string }) => {
    if (item.type === "link" && item.path) {
      navigate(item.path);
      setIsMobileMenuOpen(false);
    } else if (item.id) {
      // If we're on the menu page, navigate to home first, then scroll
      if (location.pathname === "/menu") {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(item.id!);
        }, 100);
      } else {
        // Already on home page, just scroll
        scrollToSection(item.id);
      }
    }
  };

  const navItems = [
    { label: "Home", id: "home", type: "scroll" },
    { label: "About", id: "about", type: "scroll" },
    { label: "Our Menu", path: "/menu", type: "link" },
    { label: "Events", id: "events", type: "scroll" },
    { label: "Visit Us", id: "contact", type: "scroll" },
  ];

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border/40 shadow-sm`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/menu") {
                navigate("/");
              } else {
                scrollToSection("home");
              }
            }}
            className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            aria-label="Araku House Home"
          >
            <span className="text-xl md:text-2xl font-bold leading-none">Araku House</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "link" && item.path ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 py-4 border-t border-border animate-slide-up">
            {navItems.map((item) => (
              item.type === "link" && item.path ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
                  className="block w-full text-left py-3 text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
                  className="block w-full text-left py-3 text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
