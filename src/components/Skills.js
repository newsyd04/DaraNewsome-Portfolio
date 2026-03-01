import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Skills = () => {
  const [ref, isVisible] = useFadeIn();
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

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <section id="skills" className="py-20 sm:py-36 bg-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-black text-center">
          Skills
        </h2>
        <p className="text-sm sm:text-base text-apple-gray text-center mt-3 mb-10 sm:mb-16">Technologies and tools I work with.</p>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-apple-black text-center mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs text-apple-gray bg-apple-light px-4 py-2 rounded-full transition-colors cursor-default"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = getRandomColor();
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#f5f5f7";
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
