import React from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Events />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Index;