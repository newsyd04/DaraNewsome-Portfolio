import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-white">
      <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Dara</h1>
      <p className="text-xl text-gray-600 mt-4">Software Engineering Student & Aspiring Developer</p>
      <a href="#projects" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
