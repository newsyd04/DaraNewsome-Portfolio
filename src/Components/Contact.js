import React from "react";
import useFadeIn from "../hooks/useFadeIn";

const Contact = () => {
  const [ref, isVisible] = useFadeIn();
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
    <section id="contact" className="py-20 sm:py-36 bg-apple-light dot-bg">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 sm:px-6 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-apple-black">
          Contact Me
        </h2>
        <p className="text-sm sm:text-base text-apple-gray mt-3 mb-10 sm:mb-16">Get in touch.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 transition-colors duration-200 hover:border-gray-200"
            >
              <img
                src={info.icon}
                alt={info.type}
                className="w-10 h-10 mb-5 opacity-60"
              />
              <h3 className="text-sm font-semibold text-apple-black mb-2">
                {info.type}
              </h3>
              <a
                href={info.link}
                className="text-sm text-apple-gray hover:text-blue-500 transition-colors"
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
