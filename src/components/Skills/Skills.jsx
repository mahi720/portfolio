// // src/components/Skills/Skills.jsx
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-8">
//       <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">
//         A collection of my technical skills and expertise honed through various
//         projects.
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//       {SkillsInfo.map((category) => (
//         <div
//           key={category.title}
//           className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//         >
//           <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//             {category.title}
//           </h3>

//           {/* Skill Items - 3 per row on larger screens */}
//           <Tilt
//             key={category.title}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={`${skill.name} logo`}
//                     className="w-6 h-6 sm:w-8 sm:h-8"
//                   />
//                   <span className="text-xs sm:text-sm text-gray-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </Tilt>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;


// src/components/Skills/Skills.jsx
import React, { useEffect, useRef } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">
            SKILLS
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and continuous learning.
        </p>
      </div>

      {/* Skill Categories */}
      {/* <div className="flex flex-wrap gap-6 lg:gap-8 py-10 justify-center"> */}
      <div className="flex flex-wrap gap-6 lg:gap-8 mt-6 justify-center">
        {SkillsInfo.map((category, index) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1500}
            gyroscope={true}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] skill-card opacity-0"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative group h-full">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>

              {/* Card content */}
              <div className="relative h-full bg-gray-900/90 backdrop-blur-sm px-6 sm:px-8 py-8 rounded-2xl border border-gray-800 shadow-xl hover:border-purple-500/50 transition-all duration-300">
                {/* Category title with icon */}
                <div className="flex items-center justify-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Items - 3 per row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill relative flex flex-col items-center justify-center p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white text-xs py-1 px-2 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {skill.name}
                      </div>

                      {/* Skill logo */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain filter drop-shadow-lg group-hover/skill:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Skill name (hidden on mobile, shown on larger screens) */}
                      <span className="text-xs sm:text-sm text-gray-300 font-medium text-center line-clamp-1">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .skill-card {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;

