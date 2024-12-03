import React from "react";

const Timeline = () => {
  const experiences = [
    {
      title: "Internship at Justice Department",
      date: "Jan 2025 - May 2025",
      role: "Software Engineer",
      description: ["Internship beginning in early 2025."],
    },
    {
      title: "Internship at Becton, Dickinson and Company",
      date: "Jun 2024 - Aug 2024",
      role: "Software Engineer",
      description: [
        "Spearheaded the creation of a modern internal developer portal using React, Vite, and Tailwind CSS, enhancing UI and performance.",
        "Led implementation of key features like upvote/downvote board for feature requests and interactive Grafana dashboard integration, increasing user engagement.",
        "Optimized API performance by reducing calls and utilizing session storage, improving response times and efficiency",
      ],
    },
    {
      title: "Second Chapter",
      date: "Feb 2023 - Jun 2024",
      role: "Co-Founder",
      description: [
        "Developed a mobile app using Flutter for textbook trading within schools, allowing students to buy, sell, and trade books easily",
        "Built an asset management platform for schools to track, manage, and assign textbooks to students, streamlining resource management",
        "Accepted into the NDRC pre-accelerator program, gaining support and mentorship to further develop and scale the business",
      ],
    },
    {
      title: "Internship at KX",
      date: "Sep 2023 - Dec 2023",
      role: "Software Engineer",
      description: [
        "Developed a performance testing benchmark application that evaluated the company’s vector database product against competitors.",
        "Gained experience scripting and developing applications using the Ubuntu OS and virtual machines",
        "Designed web-based documentation using Jupyter Notebooks and Markdown",
      ],
    },
    {
      title: "Internship at Mastercard",
      date: "Jun 2023 - Aug 2023",
      role: "Software Engineer",
      description: [
        "Developed interactive API-based applications using Python, FastAPI, and React.",
        "Adhered to coding standards, updated documentation, and engaged in peer code reviews",
        "Performed and communicated effectively as part of a multinational team engaging in agile methodologies",
      ],
    },
    {
      title: "Script",
      date: "Jul 2021 - Jul 2022",
      role: "Co-Founder",
      description: [
        "Developed the Script Web Application MVP, including front-end, back-end, and visual design.",
        "Awarded 10,000 Euro in preliminary funding from Tangent Incubator, Trinity College Dublin",
        "Gained experience pitching in front of large groups and working remotely",
      ],
    },
    {
      title: "Specs",
      date: "Mar 2020 – Jan 2022",
      role: "Co-Founder",
      description: [
        "Designed multiple functioning pairs of Specs Smart Glasses for dementia patients, including software development, physical design, and manufacturing",
        "Created video content to educate clients through the demonstration of the features of Specs",
        "Represented Ireland and SciFest at the International Science and Engineering Fair 2021 and Hong Kong GTYSB 2021",
        "Won multiple BT Young Scientist Awards, including, Overall Runner-up 2022",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Work Experience
        </h2>
        <div className="relative">
          {/* Up Arrow */}
          <div className="flex justify-center items-center mb-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
              </div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

          {/* Timeline Items */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col items-center relative ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="bg-blue-500 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div
                  className={`w-full max-w-lg p-6 rounded-lg shadow-lg bg-white ${
                    index % 2 === 0 ? "lg:ml-10" : "text-left lg:mr-10"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{exp.role}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  <ul className="text-gray-700 mt-4 list-disc pl-5">
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

export default Timeline;
