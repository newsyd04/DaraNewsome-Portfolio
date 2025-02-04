import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import WebDev from "./Components/WebDev";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-100">
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
