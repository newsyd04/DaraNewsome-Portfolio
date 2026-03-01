import React, { useState, useEffect } from "react";

const sections = ["home", "experience", "projects", "webdev", "skills", "contact"];
const labels = {
  home: "Home",
  experience: "Experience",
  projects: "Projects",
  webdev: "Web Dev",
  skills: "Skills",
  contact: "Contact",
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="#home" className="text-base sm:text-sm font-semibold text-apple-black tracking-tight">
            Dara Newsome
          </a>

          <button
            className="block md:hidden text-apple-black focus:outline-none p-2 -mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-7">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    activeSection === id
                      ? "text-apple-black font-medium"
                      : "text-apple-gray hover:text-apple-black"
                  }`}
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-1 pb-6 pt-1">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block text-base py-2.5 text-center transition-colors ${
                    activeSection === id
                      ? "text-apple-black font-medium"
                      : "text-apple-gray hover:text-apple-black"
                  }`}
                  onClick={toggleMenu}
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
