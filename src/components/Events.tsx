import React, { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Users, Music } from "lucide-react";

const Events = () => {
  const events = useMemo(
    () => [
      {
        title: "Grand Opening Celebration",
        date: "Recently Completed",
        description:
          "Thank you to everyone who joined us for our grand opening! The response was overwhelming and heartwarming.",
        icon: Music,
        status: "past",
      },
      {
        title: "BTS Fan Event",
        date: "Recently Hosted",
        description:
          "A special gathering for BTS fans featuring themed drinks and desserts. The purple vibes were incredible!",
        icon: Users,
        status: "past",
      },
      {
        title: "Coffee Tasting Sessions",
        date: "Coming Soon",
        description:
          "Join us for exclusive coffee tasting sessions where you'll learn about Araku's organic journey from bean to cup.",
        icon: Calendar,
        status: "upcoming",
      },
    ],
    []
  );

  return (
    <section id="events" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">Events & Celebrations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for special moments and community gatherings
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <li key={index} className="list-none">
                <Card
                  tabIndex={0}
                  className={`transform-gpu transition-transform duration-300 motion-safe:animate-fade-in focus:outline-none focus:ring-2 focus:ring-accent/30 hover:-translate-y-2 hover:scale-105 hover:shadow-strong focus:-translate-y-2 focus:scale-105 ${
                    event.status === "upcoming" ? "border-accent border-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div
                        className={`p-4 rounded-full ${
                          event.status === "upcoming" ? "bg-accent/20" : "bg-secondary"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 ${
                            event.status === "upcoming" ? "text-accent" : "text-primary"
                          }`}
                          aria-hidden
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{event.title}</CardTitle>
                    <CardDescription className="text-center">
                      {event.status === "upcoming" && (
                        <span
                          className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-2"
                          aria-live="polite"
                        >
                          Upcoming
                        </span>
                      )}
                      <p className="mt-2">
                        <time dateTime={event.date}>{event.date}</time>
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-center">{event.description}</p>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 text-center bg-secondary/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-primary">Stay Updated</h3>
          <p className="text-foreground/80 mb-6">
            Follow us on Instagram @arakuhouse to stay informed about upcoming events, special offers, and daily specials!
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Events);
