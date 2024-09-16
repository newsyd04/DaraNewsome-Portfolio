import React from "react";

const Projects = () => {
  const projectList = [
    { title: "Goblin Clothing", description: "A cool project using React and Tailwind.", link: "#" },
    { title: "Streetwise", description: "A Node.js backend API.", link: "#" },
    { title: "Synergia", description: "A portfolio site.", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:text-blue-600 mt-4 block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
