import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS", "Git"];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-gray-800 text-lg font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
