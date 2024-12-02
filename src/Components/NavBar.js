import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-semibold text-gray-800"><a href="#home">Dara Newsome</a></h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>            
            <li><a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
