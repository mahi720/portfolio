// import React, { useEffect, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// // import { BiLogoGmail } from "react-icons/bi";
// import { SiGmail } from "react-icons/si";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll function
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//  // Replace the existing intersection observer useEffect
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Set active section to the current section's id
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.5,
//         rootMargin: "-100px 0px -100px 0px", // Adjusts the observation area to account for navbar height
//       }
//     );

//     const sections = document.querySelectorAll("section[id]");
//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//       observer.disconnect();
//     };
//   }, []);


//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     // { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
//         isScrolled
//           ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="text-white py-5 flex justify-between items-center">
//         {/* name logo */}
//         <div className="text-lg font-semibold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <a href="#about" onClick={() => handleMenuItemClick("about")}>
//             <span className="text-white">Sonu </span>
//             {/* <span className="text-[#8245ec]">/</span> */}
//             <span className="text-white">Kumar</span>
//             <span className="text-[#8245ec]">&gt;</span>
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] ${
//                 activeSection === item.id ? "text-[#8245ec]" : ""
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}  
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="https://github.com/mahi720"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/sonu-kumar-7812bb1a3/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//           <a
//             href="mailto:somammahi@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <SiGmail size={24} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-white ${
//                   activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/mahi720"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/sonu-kumar-7812bb1a3/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="mailto:somammahi@gmail.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-[#8245ec]"
//               >
//                 <SiGmail size={24} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBook,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiGmail, SiTailwindcss, SiJavascript } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showTooltip, setShowTooltip] = useState(null);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: "about", label: "About", icon: <FiUser className="text-lg" /> },
    { id: "skills", label: "Skills", icon: <FiCode className="text-lg" /> },
    {
      id: "work",
      label: "Projects",
      icon: <FiBriefcase className="text-lg" />,
    },
    {
      id: "education",
      label: "Education",
      icon: <FiBook className="text-lg" />,
    },
    { id: "contact", label: "Contact", icon: <FiMail className="text-lg" /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/mahi720",
      name: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/sonu-kumar-7812bb1a3/",
      name: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <SiGmail size={20} />,
      link: "mailto:somammahi@gmail.com",
      name: "Gmail",
      color: "hover:text-red-400",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-[4vw] md:px-[5vw] lg:px-[8vw] ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Animated gradient border at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8245ec] to-transparent animate-gradient-x-slow"></div> */}

      <div className="text-white py-10 flex justify-between items-center relative">
        {/* Logo with enhanced animation */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="relative cursor-pointer">
            <a
              href="#about"
              onClick={() => handleMenuItemClick("about")}
              className="flex items-center gap-1 text-xl font-bold"
            >
              <span className="text-[#8245ec] transform group-hover:rotate-12 transition-transform duration-500">
                &lt;
              </span>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                Sonu
              </span>
              <span className="text-white group-hover:text-purple-400 transition-colors duration-500">
                Kumar
              </span>
              <span className="text-[#8245ec] transform group-hover:-rotate-12 transition-transform duration-500">
                &gt;
              </span>
            </a>
          </div>

          {/* Floating tech icons */}
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <FaReact className="text-blue-400 animate-spin-slow" size={16} />
            <SiTailwindcss
              className="text-cyan-400 animate-bounce-slow"
              size={16}
            />
            <SiJavascript
              className="text-yellow-400 animate-pulse-slow"
              size={16}
            />
          </div>
        </div>

        {/* Desktop Menu with enhanced animations */}
        <ul className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 flex items-center gap-2 text-sm font-medium rounded-lg transition-all duration-500 overflow-hidden group ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Background hover effect */}
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-[#8245ec]/20 to-[#a855f7]/20 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${activeSection === item.id ? "scale-x-100" : ""}`}
                ></span>

                {/* Icon with animation */}
                <span
                  className={`relative z-10 transition-all duration-500 ${
                    hoveredItem === item.id ? "rotate-12 scale-110" : ""
                  } ${activeSection === item.id ? "text-[#8245ec]" : "text-gray-400"}`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span className="relative z-10">{item.label}</span>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#8245ec] rounded-full animate-ping-slow"></span>
                )}
              </button>

              {/* Hover tooltip with index number */}
              {hoveredItem === item.id && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-purple-500/30 animate-fadeIn-slow">
                  {index + 1}. {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons with enhanced animations */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              onMouseEnter={() => setShowTooltip(index)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full blur opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

              {/* Icon container */}
              <div
                className={`relative w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-purple-500 ${social.color}`}
              >
                {social.icon}
              </div>

              {/* Tooltip */}
              {showTooltip === index && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white text-xs py-1 px-2 rounded whitespace-nowrap animate-fadeIn-slow">
                  {social.name}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon with animation */}
        <div className="md:hidden relative">
          <button onClick={() => setIsOpen(!isOpen)} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
            <div className="relative w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500">
              {isOpen ? (
                <FiX className="text-2xl text-[#8245ec] transform rotate-90 transition-transform duration-500" />
              ) : (
                <FiMenu className="text-2xl text-[#8245ec] transform group-hover:scale-110 transition-transform duration-500" />
              )}
            </div>
          </button>

          {/* Menu open indicator */}
          {isOpen && (
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-purple-400 animate-fadeIn-slow">
              <MdKeyboardArrowDown className="text-xl animate-bounce-slow" />
            </span>
          )}
        </div>
      </div>

      {/* Mobile Menu with enhanced animations */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] md:hidden animate-slideDown">
          {/* Glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050414] to-[#0a0820] rounded-2xl border border-gray-800 shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec]/10 to-[#a855f7]/10 rounded-2xl blur-xl"></div>

          {/* Content */}
          <div className="relative p-6">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full"></div>

            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className="transform transition-all duration-500 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-500 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-[#8245ec]/20 to-[#a855f7]/20 border border-purple-500/50"
                        : "hover:bg-gray-800/50 border border-transparent"
                    }`}
                  >
                    {/* Icon with animation */}
                    <span
                      className={`text-xl transition-all duration-500 ${
                        activeSection === item.id
                          ? "text-[#8245ec] scale-110"
                          : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {/* Label */}
                    <span
                      className={`flex-1 text-left font-medium ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <span className="w-2 h-2 bg-[#8245ec] rounded-full animate-ping-slow"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Social Icons for mobile */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-purple-500 ${social.color}`}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative bottom elements */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              <span className="w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow"></span>
              <span className="w-1 h-1 bg-pink-500 rounded-full animate-pulse-slow delay-100"></span>
              <span className="w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow delay-200"></span>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-x-slow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeIn-slow {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-gradient-x-slow {
          background-size: 200% 200%;
          animation: gradient-x-slow 3s ease infinite;
        }

        .animate-fadeIn-slow {
          animation: fadeIn-slow 0.3s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

