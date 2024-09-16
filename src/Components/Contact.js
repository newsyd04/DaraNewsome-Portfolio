import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg mb-4 shadow-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg mb-4 shadow-sm focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg mb-4 shadow-sm focus:outline-none"
            rows="5"
          ></textarea>
          <button className="w-full bg-blue-500 text-white py-2 rounded-full shadow-md hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
