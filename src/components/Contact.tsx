import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "../components/ui/button";

const Contact = () => {
  const openInstagram = () => {
    const username = "arakuhouse";
    const webUrl = "https://www.instagram.com/arakuhouse?igsh=MXAwd3dvMzg2cmd3OQ==";
    const appUrl = `instagram://user?username=${username}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const fallback = setTimeout(() => {
        window.open(webUrl, "_blank");
      }, 700);
      window.location.href = appUrl;
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
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">Visit Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience the warmth of Araku House
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card tabIndex={0} className="transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 hover:-translate-y-2 hover:scale-105 hover:shadow-strong animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                <strong>Araku House</strong><br />
                Ground floor, 108A, Sri Nilaya Apartments, Loyola College Rd, Opposite Loyola Auditorium, Veterinary Colony, Vijayawada, Andhra Pradesh 520008<br />
                Vijayawada, Andhra Pradesh
              </p>
              <Button 
                variant="outline"
                onClick={() => window.open("https://maps.google.com/?q=Araku+House+Vijayawada", "_blank")}
              >
                Open in Google Maps
              </Button>
            </CardContent>
          </Card>

          <Card tabIndex={0} className="transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 hover:-translate-y-2 hover:scale-105 hover:shadow-strong animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="h-6 w-6 text-accent" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-foreground/80">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span>8:00 AM - 11:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Hours may vary during special events
                </p>
              </div>
            </CardContent>
          </Card>

          <Card tabIndex={0} className="transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 hover:-translate-y-2 hover:scale-105 hover:shadow-strong animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Phone className="h-6 w-6 text-accent" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 99999 99999</span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors cursor-default"
                aria-disabled="true"
                title="Email preview"
              >
                <span>hello@arakuhouse.com</span>
              </a>
            </CardContent>
          </Card>

          <Card tabIndex={0} className="transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 hover:-translate-y-2 hover:scale-105 hover:shadow-strong animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Instagram className="h-6 w-6 text-accent" />
                Social Media
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Follow us for daily updates, special offers, and behind-the-scenes content
              </p>
              <Button 
                variant="default"
                onClick={openInstagram}
                className="w-full"
              >
                <Instagram className="mr-2 h-4 w-4" />
                @arakuhouse
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                #arakuhouse #brewlocaltakeglobal
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
