import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const TechTag = ({ name, color, logo }) => (
  <span
    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
    style={{ backgroundColor: color, color: "white" }}
  >
    <img src={logo} alt={name} className="w-3.5 h-3.5" />
    {name}
  </span>
);

const Projects = () => {
  const [ref, isVisible] = useFadeIn();
  const technologies = {
    Java: {
      color: "#D3BC8D",
      logo: "https://img.icons8.com/?size=512&id=13679&format=png",
    },
    JavaScript: {
      color: "#6F263D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
    },
    React: {
      color: "#20232A",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    "React Leaf":{
      color: "#663399",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/320px-Leaflet_logo.svg.png",
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
      link: "https://immersivesoftwareengineering.ie/ise-gen-ai-4-good/",
    },
    {
      title: "Synergia",
      description:
        "Motion-sensing device showing ideal heating times based on tracked activity patterns.",
      tech: ["AWS", "Arduino", "Grafana", "3D Printing"],
      link: "https://newsyd04.github.io/EpicProject",
    },
    {
      title: "Domain Price Comparator",
      description:
        "App to search and compare domain prices from different providers eg. Namecheap and Register365",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/newsyd04/domain-compare-price",
    },
    {
      title: "Travel Map Visualiser",
      description:
        "Website to plot and view my previous trips and future travel plans, built using React's Leaflet library",
      tech: ["React", "React Leaf", "Tailwind CSS"],
      link: "https://newsyd04.github.io/Travel-Map",
    },
    {
      title: "Pizza Ranker",
      description:
        "Website to rank and review my favourite Pizza restaurants",
      tech: ["React", "Tailwind CSS", "Figma"],
      link: "https://newsyd04.github.io/pizza-ranker/",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-36 bg-white">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-black text-center">
          Personal Projects
        </h2>
        <p className="text-sm sm:text-base text-apple-gray text-center mt-3 mb-10 sm:mb-16">Things I've built in my own time.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-apple-light p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-colors duration-200 hover:border-gray-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-apple-black">
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
                <p className="mt-4 text-sm text-apple-gray">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium mt-auto pt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
