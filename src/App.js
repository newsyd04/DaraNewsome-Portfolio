import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WebDev from "./components/WebDev";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="font-sans antialiased text-apple-black bg-apple-light">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <WebDev />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
