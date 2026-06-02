import React from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
