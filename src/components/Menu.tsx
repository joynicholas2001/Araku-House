import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Coffee, Utensils, Cake } from "lucide-react";
import pastaImage from "@/assets/pasta-special.jpg";
import dessertImage from "@/assets/dessert-special.jpg";
import coffeeImage from "@/assets/coffee-detail.jpg";

const Menu = () => {
  const coffeeItems = [
    { name: "Araku Signature Brew", description: "100% organic Araku coffee, meticulously roasted", price: "180" },
    { name: "Espresso", description: "Rich, bold, and smooth", price: "120" },
    { name: "Cappuccino", description: "Perfect balance of espresso and steamed milk", price: "150" },
    { name: "Cold Brew", description: "Smooth and refreshing, brewed for 12 hours", price: "170" },
    { name: "Latte Art Special", description: "Beautifully crafted with organic milk", price: "160" },
  ];

  const foodItems = [
    { 
      name: "Araku House Special Pasta", 
      description: "Our signature creation with organic vegetables and house-made sauce",
      price: "280",
      featured: true,
      image: pastaImage
    },
    { name: "Avocado Toast", description: "Sourdough, fresh avocado, cherry tomatoes, feta", price: "220" },
    { name: "Mediterranean Bowl", description: "Quinoa, hummus, roasted vegetables, tahini dressing", price: "260" },
    { name: "Breakfast Platter", description: "Organic eggs, artisan bread, seasonal fruits", price: "240" },
    { name: "Garden Fresh Salad", description: "Locally sourced greens with house dressing", price: "200" },
  ];

  const dessertItems = [
    { 
      name: "Signature Chocolate Cake", 
      description: "Decadent layers of Belgian chocolate",
      price: "180",
      featured: true,
      image: dessertImage
    },
    { name: "Tiramisu", description: "Classic Italian dessert with coffee-soaked layers", price: "160" },
    { name: "Cheesecake", description: "Creamy New York style with berry compote", price: "170" },
    { name: "Artisan Tart", description: "Seasonal fruit on buttery pastry", price: "150" },
    { name: "Brownie Sundae", description: "Warm brownie with organic vanilla ice cream", price: "190" },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">Our Menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every item crafted with love, sourced with care, served with pride
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full max-w-6xl mx-auto">
          <TabsList className="w-full flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-0 mb-12">
            <TabsTrigger value="coffee" className="text-sm sm:text-base">
              <Coffee className="mr-2 h-4 w-4" />
              Coffee
            </TabsTrigger>
            <TabsTrigger value="food" className="text-sm sm:text-base">
              <Utensils className="mr-2 h-4 w-4" />
              Curated Plates
            </TabsTrigger>
            <TabsTrigger value="desserts" className="text-sm sm:text-base">
              <Cake className="mr-2 h-4 w-4" />
              Signature Desserts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="coffee" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2 mb-4">
                <img
                  src={coffeeImage}
                  alt="Coffee at Araku House"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-48 md:h-64 object-cover rounded-xl shadow-medium"
                />
              </div>
              {coffeeItems.map((item, index) => (
                <Card
                  key={index}
                  tabIndex={0}
                  className="overflow-hidden transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 md:hover:-translate-y-2 md:hover:scale-105 md:focus:-translate-y-2 md:focus:scale-105 md:hover:shadow-strong"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-accent font-bold">₹{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {foodItems.map((item, index) => (
                <Card
                  key={index}
                  tabIndex={0}
                  className={`overflow-hidden transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 md:hover:-translate-y-2 md:hover:scale-105 md:focus:-translate-y-2 md:focus:scale-105 md:hover:shadow-strong ${
                    item.featured ? "md:col-span-2 bg-secondary/30" : ""
                  }`}
                >
                  {item.featured && item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="w-full h-40 md:h-64 object-cover rounded-t-xl"
                    />
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className={item.featured ? "text-2xl" : "text-xl"}>
                        {item.name}
                        {item.featured && <span className="ml-2 text-accent text-sm">★ Featured</span>}
                      </CardTitle>
                      <span className="text-accent font-bold">₹{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {dessertItems.map((item, index) => (
                <Card
                  key={index}
                  tabIndex={0}
                  className={`overflow-hidden transform-gpu transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 md:hover:-translate-y-2 md:hover:scale-105 md:focus:-translate-y-2 md:focus:scale-105 md:hover:shadow-strong ${
                    item.featured ? "md:col-span-2 bg-secondary/30" : ""
                  }`}
                >
                  {item.featured && item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="w-full h-40 md:h-64 object-cover rounded-t-xl"
                    />
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className={item.featured ? "text-2xl" : "text-xl"}>
                        {item.name}
                        {item.featured && <span className="ml-2 text-accent text-sm">★ Featured</span>}
                      </CardTitle>
                      <span className="text-accent font-bold">₹{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
