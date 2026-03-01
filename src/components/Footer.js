import React from "react";

const Footer = () => {
  return (
    <footer className="bg-apple-light border-t border-gray-200/50 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs text-apple-gray">&copy; {new Date().getFullYear()} Dara Newsome. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/newsyd04" className="text-xs text-apple-gray hover:text-apple-black transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dara-newsome/" className="text-xs text-apple-gray hover:text-apple-black transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
