import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Experience = () => {
  const [ref, isVisible] = useFadeIn();
  const experiences = [
    {
      title: "Internship at Irish Department of Justice",
      date: "Jan 2025 - May 2025",
      role: "Software Engineer",
      description: [
        "Built an AI-powered teaching assistant that speaks and teaches in the style of real lecturers using large language model fine-tuning.",
        "Created a full-stack web app for the assistant that enabled educational dialogue through combining fine-tuned LLMs with contextual retrieval from lecture slides and online sources.",
      ],
    },
    {
      title: "Internship at Becton, Dickinson and Company",
      date: "Jun 2024 - Aug 2024",
      role: "Software Engineer",
      description: [
        "Spearheaded the creation of a modern internal developer portal using React, Vite, and Tailwind CSS, enhancing UI and performance.",
        "Led implementation of key features like upvote/downvote board for feature requests and interactive Grafana dashboard integration, increasing user engagement.",
        "Optimized API performance by reducing calls and utilizing session storage, improving response times and efficiency.",
      ],
    },
    {
      title: "Second Chapter",
      date: "Feb 2023 - Jun 2024",
      role: "Co-Founder",
      description: [
        "Developed a mobile app using Flutter for textbook trading within schools, allowing students to buy, sell, and trade books easily.",
        "Built an asset management platform for schools to track, manage, and assign textbooks to students, streamlining resource management.",
        "Accepted into the NDRC pre-accelerator program, gaining support and mentorship to further develop and scale the business.",
      ],
    },
    {
      title: "Internship at KX",
      date: "Sep 2023 - Dec 2023",
      role: "Software Engineer",
      description: [
        "Developed a performance testing benchmark application that evaluated the company’s vector database product against competitors.",
        "Gained experience scripting and developing applications using the Ubuntu OS and virtual machines.",
        "Designed web-based documentation using Jupyter Notebooks and Markdown.",
      ],
    },
    {
      title: "Internship at Mastercard",
      date: "Jun 2023 - Aug 2023",
      role: "Software Engineer",
      description: [
        "Developed interactive API-based applications using Python, FastAPI, and React.",
        "Adhered to coding standards, updated documentation, and engaged in peer code reviews.",
        "Performed and communicated effectively as part of a multinational team engaging in agile methodologies.",
      ],
    },
    {
      title: "Script",
      date: "Jul 2021 - Jul 2022",
      role: "Co-Founder",
      description: [
        "Developed the Script Web Application MVP, including front-end, back-end, and visual design.",
        "Awarded 10,000 Euro in preliminary funding from Tangent Incubator, Trinity College Dublin.",
        "Gained experience pitching in front of large groups and working remotely.",
      ],
    },
    {
      title: "Specs",
      date: "Mar 2020 – Jan 2022",
      role: "Co-Founder",
      description: [
        "Designed multiple functioning pairs of Specs Smart Glasses for dementia patients, including software development, physical design, and manufacturing.",
        "Created video content to educate clients through the demonstration of the features of Specs.",
        "Represented Ireland and SciFest at the International Science and Engineering Fair 2021 and Hong Kong GTYSB 2021.",
        "Won multiple BT Young Scientist Awards, including Overall Runner-up 2022.",
      ],
    },
  ];

  // Identify the most recent experience
  const mostRecentExperience = experiences[0];

  return (
    <section id="experience" className="py-20 sm:py-36 bg-apple-light dot-bg">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-black text-center">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base text-apple-gray text-center mt-3 mb-10 sm:mb-16">Where I've contributed so far.</p>
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gray-200 lg:top-4"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col items-center relative ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 rounded-full ${
                    exp === mostRecentExperience
                      ? "bg-blue-500 flex items-center justify-center w-5 h-5 lg:w-7 lg:h-7"
                      : "bg-gray-300 w-3 h-3"
                  }`}
                >
                  {exp === mostRecentExperience && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 lg:h-4 lg:w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </div>

                <div
                  className={`w-full max-w-lg p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 ${
                    index % 2 === 0 ? "lg:ml-10" : "text-left lg:mr-10"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-apple-black">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-blue-500 mt-1">{exp.role}</p>
                  <p className="text-xs text-apple-gray mt-1">{exp.date}</p>
                  <ul className="text-sm text-apple-gray mt-4 space-y-2 list-disc pl-5">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
