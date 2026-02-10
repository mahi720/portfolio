import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <a
          href="#about"
          onClick={() => handleScroll("about")}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold text-purple-500 hover:text-white">Sonu Kumar</h2>
        </a>
        <a href="mailto:somammahi@gmail.com" className="flex items-center justify-center pt-3 hover:text-purple-500">
          <SiGmail size={15} className="mr-2" />
          <h2 className="text-md font-normal">
            somammahi@gmail.com
          </h2>
        </a>
        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaTwitter />,
              link: "https://x.com/iammahi72?t=BtF7GWhZC5P9hEmMQsxK7w&s=08",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sonu-kumar-7812bb1a3/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/mahi720",
            },
            {
              icon: <FaYoutube />,
              link: "https://youtube.com/@mahishayari1",
            },
            {
              icon: <SiGmail />,
              link: "mailto:somammahi@gmail.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Sonu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
