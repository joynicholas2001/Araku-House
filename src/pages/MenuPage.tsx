import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const MenuPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const preparationMessage = "All our dishes are freshly prepared after you order. Please allow a minimum of 20 minutes for service so you can enjoy your food hot and at its best.";
  const menuCategories = [
    {
      title: "Cappuccino",
      items: [
        { name: "Cappuccino", price: "₹120" },
        { name: "Hazelnut Cappuccino", price: "₹140" },
        { name: "Caramel Cappuccino", price: "₹140" },
        { name: "Vanilla Cappuccino", price: "₹140" },
      ],
    },
    {
      title: "Latte",
      items: [
        { name: "Cafe Latte", price: "₹130" },
        { name: "Hazelnut Latte", price: "₹150" },
        { name: "Caramel Latte", price: "₹150" },
        { name: "Vanilla Latte", price: "₹150" },
      ],
    },
    {
      title: "Espresso",
      items: [
        { name: "Single Shot", price: "₹100" },
        { name: "Double Shot", price: "₹130" },
        { name: "Americano", price: "₹120" },
      ],
    },
    {
      title: "Frappuccino",
      items: [
        { name: "Classic Coffee Frappuccino", price: "₹160" },
        { name: "Mocha Frappuccino", price: "₹180" },
        { name: "Caramel Frappuccino", price: "₹180" },
        { name: "Vanilla Frappuccino", price: "₹180" },
        { name: "Hazelnut Frappuccino", price: "₹180" },
      ],
    },
    {
      title: "Hot Chocolate & Mochas",
      items: [
        { name: "Classic Hot Chocolate", price: "₹140" },
        { name: "White Hot Chocolate", price: "₹150" },
        { name: "Cafe Mocha", price: "₹150" },
        { name: "White Cafe Mocha", price: "₹160" },
      ],
    },
    {
      title: "Cold Coffee",
      items: [
        { name: "Iced Coffee", price: "₹140" },
        { name: "Cold Brew", price: "₹170" },
        { name: "Iced Latte", price: "₹150" },
      ],
    },
    {
      title: "Non-Coffee Beverages",
      items: [
        { name: "Masala Tea", price: "₹60" },
        { name: "Green Tea", price: "₹80" },
        { name: "Lemon Tea", price: "₹70" },
        { name: "Fresh Lime Soda", price: "₹80" },
        { name: "Fruit Juices", price: "₹100" },
      ],
    },
    {
      title: "Sandwiches",
      items: [
        { name: "Veg Grilled Sandwich", price: "₹140" },
        { name: "Cheese Grilled Sandwich", price: "₹160" },
        { name: "Paneer Tikka Sandwich", price: "₹180" },
        { name: "Chicken Grilled Sandwich", price: "₹200" },
        { name: "Chicken Tikka Sandwich", price: "₹220" },
      ],
    },
    {
      title: "Burgers",
      items: [
        { name: "Veg Burger", price: "₹140" },
        { name: "Paneer Burger", price: "₹160" },
        { name: "Chicken Burger", price: "₹180" },
        { name: "Chicken Cheese Burger", price: "₹200" },
      ],
    },
    {
      title: "Pizza",
      items: [
        { name: "Margherita Pizza", price: "₹180" },
        { name: "Veggie Supreme Pizza", price: "₹220" },
        { name: "Paneer Tikka Pizza", price: "₹240" },
        { name: "Chicken Pizza", price: "₹260" },
      ],
    },
    {
      title: "Pasta",
      items: [
        { name: "Veg Red Sauce Pasta", price: "₹160" },
        { name: "Veg White Sauce Pasta", price: "₹170" },
        { name: "Chicken Red Sauce Pasta", price: "₹200" },
        { name: "Chicken White Sauce Pasta", price: "₹210" },
        { name: "Araku House Special Pasta", price: "₹280" },
      ],
    },
    {
      title: "Breakfast",
      items: [
        { name: "Classic Omelette", price: "₹100" },
        { name: "Masala Omelette", price: "₹120" },
        { name: "French Toast", price: "₹140" },
        { name: "Pancakes (3 pcs)", price: "₹150" },
        { name: "Avocado Toast", price: "₹220" },
        { name: "Breakfast Platter", price: "₹240" },
      ],
    },
    {
      title: "Salads & Bowls",
      items: [
        { name: "Garden Fresh Salad", price: "₹200" },
        { name: "Mediterranean Bowl", price: "₹260" },
        { name: "Quinoa Salad Bowl", price: "₹240" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Signature Chocolate Cake", price: "₹180" },
        { name: "Tiramisu", price: "₹160" },
        { name: "Cheesecake", price: "₹170" },
        { name: "Brownie Sundae", price: "₹190" },
        { name: "Artisan Tart", price: "₹150" },
      ],
    },
    {
      title: "Snacks",
      items: [
        { name: "French Fries", price: "₹100" },
        { name: "Garlic Bread", price: "₹120" },
        { name: "Nachos with Salsa", price: "₹140" },
        { name: "Spring Rolls", price: "₹130" },
      ],
    },
  ];

  return (
    <Layout>
      <Navigation />
      <main id="menu-top" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                Our Menu
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Crafted with love, sourced with care, served with pride
              </p>
              <p className="text-lg text-foreground/70">
                {preparationMessage}
              </p>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-6xl mx-auto">
              {menuCategories.map((category, categoryIndex) => (
                <Card
                  key={categoryIndex}
                  className="overflow-hidden animate-fade-in hover:shadow-strong transition-shadow duration-300"
                  style={{ animationDelay: `${categoryIndex * 50}ms` }}
                >
                  <CardHeader className="bg-secondary/30">
                    <CardTitle className="text-2xl md:text-3xl text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-secondary/20 transition-colors duration-200 group"
                        >
                          <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                            {item.name}
                          </span>
                          <span className="text-accent font-bold text-lg ml-4">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <p className="text-muted-foreground italic">
                All prices are inclusive of taxes. Menu items and prices are subject to change.
              </p>
              <p className="text-foreground/70 mt-4">
                Special dietary requirements? Let us know and we&apos;ll do our best to accommodate you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default MenuPage;
