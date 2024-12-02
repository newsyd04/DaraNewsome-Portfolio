import React, { useState } from "react";
import headshotFront from "../images/headshot.png"; // Front image

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSpin = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id="home"
      className="h-screen mt-7 flex flex-col justify-center items-center text-center bg-white"
    >
      {/* Image Container */}
      <div
        className="relative w-48 h-48"
        style={{ perspective: "1000px" }} // Enables 3D perspective
        onClick={handleSpin} // Click event for flipping
      >
        <div
          className={`relative w-full h-full rounded-full shadow-lg transition-transform duration-700 transform`}
        >
          {/* Front Side */}
          <img
            src={headshotFront}
            alt="Front Headshot"
            className="absolute w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-5xl font-bold text-gray-800 mt-5">Hi, I'm Dara</h1>
      <p className="text-xl text-gray-600 mt-4">
        Immersive Software Engineering Student
      </p>
      <a
        href="#projects"
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600"
      >
        View My Work
      </a>
      <a
        href="../images/Dara_Newsome_resume.pdf"
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600" download
      >
        Download my Resume
      </a>
    </section>
  );
};

export default Hero;
