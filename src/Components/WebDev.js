import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import kerryber from "../images/kerryber.png";
import school from "../images/school-site.png";
import abe from "../images/abe-picture.png";
import sof from "../images/sof-pic.png";
import mindseye from "../images/mindseye.png";
import scoilMhaolcheadair from "../images/scoil-mhaolcheadair.gif";


const WebDev = () => {
  const [ref, isVisible] = useFadeIn();
  const projectList = [
    {
      title: "Scoil Bhreac Chluain",
      description:
        "Website for Scoil Bhreac Chluain primary school, showcasing events, announcements, and resources.",
      image: school,
      link: "https://www.scoilbhreacchluain.ie",
    },
    {
      title: "Abe's Art Studio",
      description:
        "Portfolio site for a local artist, showcasing pieces and providing contact and purchasing details.",
      image: abe,
      link: "https://abeboland.art",
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
    {
      title: "Mind's Eye Resilience & Wellbeing",
      description:
        "A website for Mind's Eye Resilience & Wellbeing, a mental health and wellness service.",
      image: mindseye,
      link: "https://mindseyeresilience.com/",
    },
    {
      title: "Scoil Mhaolcheadair",
      description:
        "Website for Scoil Mhaolcheadair primary school, showcasing school information, news, and resources.",
      image: scoilMhaolcheadair,
      link: "https://scoil-mhaolcheadair-website.vercel.app/",
    },
  ];

  return (
    <section id="webdev" className="py-20 sm:py-36 bg-apple-light dot-bg">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-black text-center">
          Commercial Web Development
        </h2>
        <p className="text-sm sm:text-base text-apple-gray text-center mt-3 mb-10 sm:mb-16">Websites built for real clients and businesses.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col transition-colors duration-200 hover:border-gray-200"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-44 object-cover transition-opacity duration-200 hover:opacity-90"
                />
              </a>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-apple-black mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-apple-gray mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDev;
