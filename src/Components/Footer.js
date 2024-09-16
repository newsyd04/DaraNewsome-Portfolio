import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">&copy; 2024 Dara Newsome. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://github.com/newsyd04" className="text-gray-600 hover:text-gray-900 mx-2">GitHub</a>
          <a href="https://www.linkedin.com/in/dara-newsome/" className="text-gray-600 hover:text-gray-900 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
