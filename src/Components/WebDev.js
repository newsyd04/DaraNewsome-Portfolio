import React from "react";
import ddImage from "../images/dd-screengrab.png";
import kerryber from "../images/kerryber.png";
import school from "../images/school-site.png";
import trucking from "../images/sp-trucking.png";
import abe from "../images/abe-picture.png";
import sof from "../images/sof-pic.png"
import webdev from "../images/webdev.png"

const WebDev = () => {
  const projectList = [
    {
      title: "My Web Development Portfolio",
      description:
        "Showcasing my work in web development, featuring past projects, design services, and contact details.",
      image: webdev,
      link: "https://www.webdev.daranewso.me",
    },   
    {
      title: "Scoil Bhreac Chluain",
      description:
        "Website for Scoil Bhreac Chluain primary school, showcasing events, announcements, and resources.",
      image: school,
      link: "https://www.scoilbhreacchluain.ie",
    },
    {
      title: "Direct Drywall Website",
      description:
        "Website designed for Direct Drywall to showcase services and contact info.",
      image: ddImage,
      link: "https://newsyd04.github.io/direct-drywall-site/",
    },
    {
      title: "Abe's Art Studio",
      description:
        "Website for a local artist, showcasing pieces and providing contact and lesson details.",
      image: abe,
      link: "https://newsyd04.github.io/abes-art-site/",
    },
    {
      title: "SP Trucking Website",
      description:
        "A website designed to showcase SP Trucking's services and fleet information.",
      image: trucking,
      link: "https://newsyd04.github.io/sp-trucking-site/",
    },
    {
      title: "Kerry BER",
      description:
        "A website for Kerry BER, a certified domestic BER assessor business.",
      image: kerryber,
      link: "https://kerryber.ie",
    },
    {
      title: "Secrets of Flowers",
      description:
        "A website for a local photographer, showcasing their favourite pieces and providing contact and sales details.",
      image: sof,
      link: "https://www.secrets-of-flowers.daranewso.me/",
    }, 
  ];

  return (
    <section id="webdev" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Commercial Web Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Clickable Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-4"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-40 object-cover"
                />
              </a>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDev;
