import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "daranewsome01@gmail.com",
      link: "mailto:daranewsome01@gmail.com",
      icon: "https://www.svgrepo.com/show/501173/email.svg", // Email icon
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/dara-newsome",
      link: "https://www.linkedin.com/in/dara-newsome",
      icon: "https://img.icons8.com/?size=512&id=8808&format=png", // LinkedIn icon
    },
    {
      type: "GitHub",
      value: "github.com/newsyd04",
      link: "https://github.com/newsyd04",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png", // GitHub icon
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 p-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={info.icon}
                alt={info.type}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {info.type}
              </h3>
              <a
                href={info.link}
                className="text-gray-600 hover:text-blue-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
