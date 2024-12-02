import React from "react";

const TechTag = ({ name, color, logo }) => (
  <span
    className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full shadow-sm transform transition-all hover:scale-105 hover:shadow-lg"
    style={{ backgroundColor: color, color: "white" }}
  >
    <img src={logo} alt={name} className="w-4 h-4" />
    {name}
  </span>
);

const Projects = () => {
  const technologies = {
    React: {
      color: "#20232A",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    "Tailwind CSS": {
      color: "#385ef8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    "Node.js": {
      color: "#3C873A",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    MongoDB: {
      color: "#4A6E55",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg",
    },
    AWS: {
      color: "#666666",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    Stripe: {
      color: "#32325D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    },
    Python: {
      color: "#37aba5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    SQL: {
      color: "#336791",
      logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    },
    Figma: {
      color: "#1D1D1D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    Arduino: {
      color: "#00499d",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
    },
    Grafana: {
      color: "#222222",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    },
    GenAI: {
      color: "#6eb7ff",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/OpenAI_Logo_%282%29.svg",
    },
    "3D Printing": {
      color: "#9122ff",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Logo_for_Cura_Software.png"
    }
  };

  const projectList = [
    {
      title: "Goblin Clothing",
      description:
        "eCommerce site using React, Tailwind CSS, Node.js, MongoDB, AWS, and Stripe.",
      tech: ["React", "Tailwind CSS", "MongoDB", "AWS", "Stripe"],
      link: "https://www.goblinclothing.com",
    },
    {
      title: "Streetwise",
      description:
        "Application to help users avoid dangerous areas and find safer routes.",
      tech: ["Python", "SQL", "Figma", "GenAI"],
      link: "#",
    },
    {
      title: "Synergia",
      description:
        "Motion-sensing device showing ideal heating times based on tracked activity patterns.",
      tech: ["AWS", "Arduino", "Grafana", "3D Printing"],
      link: "https://epic-project-5rew35tym-newsyd04s-projects.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ minHeight: "280px" }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {project.tech.map((tech, i) => (
                    <TechTag
                      key={i}
                      name={tech}
                      color={technologies[tech]?.color || "#ccc"}
                      logo={technologies[tech]?.logo || ""}
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 mt-auto"
              >
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
