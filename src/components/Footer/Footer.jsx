// import React from "react";
// import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
// // import { BiLogoGmail } from "react-icons/bi";
// import { SiGmail } from "react-icons/si";


// const Footer = () => {
//   // Smooth scroll function
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
//       <div className="container mx-auto text-center">
//         {/* Name / Logo */}
//         <a
//           href="#about"
//           onClick={() => handleScroll("about")}
//           className="flex flex-col items-center"
//         >
//           <h2 className="text-xl font-semibold text-purple-500 hover:text-white">Sonu Kumar</h2>
//         </a>
//         <a href="mailto:somammahi@gmail.com" className="flex items-center justify-center pt-3 hover:text-purple-500">
//           <SiGmail size={15} className="mr-2" />
//           <h2 className="text-md font-normal">
//             somammahi@gmail.com
//           </h2>
//         </a>
//         {/* Navigation Links - Responsive */}
//         <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             // { name: "Experience", id: "experience" },
//             { name: "Projects", id: "work" },
//             { name: "Education", id: "education" },
//             { name: "Contact", id: "contact" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="hover:text-purple-500 text-sm sm:text-base my-1"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Social Media Icons - Responsive */}
//         <div className="flex flex-wrap justify-center space-x-4 mt-6">
//           {[
//             {
//               icon: <FaTwitter />,
//               link: "https://x.com/iammahi72?t=BtF7GWhZC5P9hEmMQsxK7w&s=08",
//             },
//             {
//               icon: <FaLinkedin />,
//               link: "https://www.linkedin.com/in/sonu-kumar-7812bb1a3/",
//             },
//             {
//               icon: <FaGithub />,
//               link: "https://github.com/mahi720",
//             },
//             {
//               icon: <FaYoutube />,
//               link: "https://youtube.com/@mahishayari1",
//             },
//             {
//               icon: <SiGmail />,
//               link: "mailto:somammahi@gmail.com",
//             },
//           ].map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>

//         {/* Copyright Text */}
//         <p className="text-sm text-gray-400 mt-6">
//           © 2026 Sonu Kumar. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect, useRef } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn-very-slow");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative text-white py-12 px-[7vw] md:px-[7vw] lg:px-[20vw] overflow-hidden opacity-0"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl animate-float-slower"></div>

        {/* Gradient line at top */}
        <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

        {/* Floating particles */}
        <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-float-particle"></div>
        <div className="absolute top-10 right-1/4 w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-float-particle-delay"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Logo with animation */}
        <div className="mb-6 animate-slideIn-slow">
          <a
            href="#about"
            onClick={() => handleScroll("about")}
            className="inline-block group"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>

              {/* Logo */}
              <h2 className="relative text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-700">
                Sonu Kumar
              </h2>
            </div>
          </a>
        </div>

        {/* Email with animation */}
        <div className="mb-8 animate-slideIn-slow animation-delay-200">
          <a
            href="mailto:thesonukumar62@gmail.com"
            className="inline-flex items-center gap-2 group relative"
          >
            <span className="absolute -inset-2 bg-gradient-to-r from-[#8245ec]/20 to-[#a855f7]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            <MdEmail className="text-xl text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
            <span className="text-md text-gray-400 group-hover:text-white transition-colors duration-500">
              thesonukumar62@gmail.com
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-2 sm:gap-y-2 mb-8 animate-slideIn-slow animation-delay-400">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="group relative px-3 py-1 text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] group-hover:w-full transition-all duration-700"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slideIn-slow animation-delay-600">
          {[
            {
              icon: <FaTwitter />,
              link: "https://x.com/iammahi72?t=BtF7GWhZC5P9hEmMQsxK7w&s=08",
              name: "Twitter",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sonu-kumar-7812bb1a3/",
              name: "LinkedIn",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/mahi720",
              name: "GitHub",
            },
            {
              icon: <FaYoutube />,
              link: "https://youtube.com/@mahishayari1",
              name: "YouTube",
            },
            {
              icon: <SiGmail />,
              link: "mailto:thesonukumar62@gmail.com",
              name: "Gmail",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={item.name}
            >
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                {item.name}
              </span>

              {/* Icon with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="relative text-2xl text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Copyright with heart animation */}
        <div className="relative animate-fadeIn-very-slow animation-delay-800">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
              Sonu Kumar.
            </span>
            <span> All rights reserved.</span>
          </p>

          {/* Made with love */}
          {/* <p className="text-xs text-gray-600 mt-2 flex items-center justify-center gap-1">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse-slow" />
            <span>using React & Tailwind</span>
          </p> */}
        </div>

        {/* Back to top button */}
        <button
          onClick={() => handleScroll("about")}
          className="absolute left-1 md:left-auto md:right-4 bottom-7 group"
          aria-label="Back to top"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500">
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Custom CSS for slow animations */}
      <style jsx>{`
        @keyframes fadeIn-very-slow {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn-slow {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(20px) translateX(-10px);
          }
          66% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.5;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-fadeIn-very-slow {
          animation: fadeIn-very-slow 2s ease-out forwards;
        }

        .animate-slideIn-slow {
          animation: slideIn-slow 1.5s ease-out forwards;
          opacity: 0;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 15s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }

        .animate-float-particle-delay {
          animation: float-particle 12s ease-in-out infinite 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
