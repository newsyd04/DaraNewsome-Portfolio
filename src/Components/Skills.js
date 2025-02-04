import React, { useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "Javascript",
        "Typescript",
        "SQL (MySQL, SQLite)",
        "Dart",
        "Shell Scripting",
        "C++",
        "Go",
      ],
    },
    {
      title: "Web Development",
      skills: [
        "React",
        "Vue JS",
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Markdown",
        "PHP",
        "Flutter",
        "Vercel",
        "Tailwind CSS",
        "Eleventy",
      ],
    },
    {
      title: "Modeling",
      skills: ["SolidWorks", "Fusion360", "Creality CR-10V3", "Prusa"],
    },
    {
      title: "Operating Systems",
      skills: ["Ubuntu", "Mac OS", "Raspbian", "Windows 10 and 11"],
    },
    {
      title: "Hardware",
      skills: [
        "Arduino",
        "Raspberry Pi (4,3, ZeroW)",
        "PC Assembly",
        "RP2040",
        "ESP8266",
        "ESP32",
      ],
    },
    {
      title: "Editing",
      skills: ["DaVinci Resolve", "GIMP"],
    },
  ];

  const colors = [
    "#fededb",
    "#fcfedb",
    "#dbeafe",
    "#fedbea",
    "#dedbfe",
    "#feefdb",
    "#dbfeef",
  ];

  // Utility function to get a random color
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Skills
        </h2>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm transition transform"
                    onMouseEnter={(e) => {
                      const randomColor = getRandomColor();
                      e.target.style.backgroundColor = randomColor;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#f3f4f6"; // Default Tailwind gray
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
