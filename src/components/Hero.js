import React from "react";
import headshotFront from "../images/headshot.png";
import useFadeIn from "../hooks/useFadeIn";

const Hero = () => {
  const [ref, isVisible] = useFadeIn(0.1);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-8"
    >
      <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <div className="w-40 h-40 sm:w-48 sm:h-48 mb-8 mx-auto">
          <img
            src={headshotFront}
            alt="Dara Newsome headshot"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-apple-black">
          Hi, I'm Dara
        </h1>
        <p className="text-lg sm:text-xl text-apple-gray mt-4 font-light">
          Immersive Software Engineering Student
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full sm:w-auto px-4 sm:px-0 justify-center">
          <a
            href="#experience"
            className="bg-blue-500 text-white text-base sm:text-sm py-3.5 sm:py-3 px-8 rounded-full hover:bg-blue-600 transition-colors text-center"
          >
            View My Work
          </a>
          <a
            href="/Dara_Newsome_resume.pdf"
            className="border border-blue-500 text-blue-500 text-base sm:text-sm py-3.5 sm:py-3 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-colors text-center"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
