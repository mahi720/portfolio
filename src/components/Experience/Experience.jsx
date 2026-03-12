// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A summary of my work experience and the roles I have held within my organization.
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div> */}

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">
//                     {experience.date}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React, { useEffect, useRef } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
        delay: 100, // Adding delay for smoother observation
      },
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans overflow-hidden"
    >
      {/* Background decorative elements - Slow pulsing */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse-slowest"></div>
      </div>

      {/* Section Title with slow fade */}
      <div className="text-center mb-20 animate-fadeIn-slow">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient-slow">
            EXPERIENCE
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto rounded-full animate-width-grow"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fadeIn-slower">
          A collection of my work experience and the roles I have taken in
          organizations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Animated vertical line */}
        <div className="hidden sm:block absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          {/* Main line */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#8245ec] via-[#a855f7] to-transparent animate-glow-pulse"></div>

          {/* Animated line with slow dash effect */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#8245ec] to-[#a855f7] animate-line-grow"
            style={{ transformOrigin: "top" }}
          ></div>
        </div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            ref={(el) => (timelineRefs.current[index] = el)}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-24 last:mb-0 opacity-0 transition-all duration-1000 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline Dot - Hidden on mobile, visible on desktop */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative group">
                {/* Multiple rings for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] animate-ping-very-slow opacity-30"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] opacity-20 animate-pulse-very-slow"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] opacity-10 animate-pulse-very-slower"></div>

                {/* Main dot with logo */}
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gray-900 border-4 border-transparent bg-gradient-to-r from-[#8245ec] to-[#a855f7] p-0.5 shadow-2xl hover:scale-110 transition-all duration-1000">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Year badge - Hidden on mobile, visible on desktop */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap hidden sm:block">
                  <span className="text-xs text-gray-400 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 animate-fadeIn-very-slow">
                    {experience.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "sm:mr-auto sm:pr-12" : "sm:ml-auto sm:pl-12"
              }`}
            >
              <div className="relative group">
                {/* Card glow effect - Slow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-700"></div>

                {/* Main card */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 p-6 sm:p-8">
                  {/* Header with company info */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Company logo (small version) */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-r from-[#8245ec] to-[#a855f7] p-0.5">
                      <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Role and company */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-700">
                        {experience.role}
                      </h3>
                      <h4 className="text-md text-gray-400 mt-1">
                        {experience.company}
                      </h4>

                      {/* Date with icon */}
                      <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm">{experience.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description with slow hover effect */}
                  <div className="relative mb-6">
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                      {experience.desc}
                    </p>
                  </div>

                  {/* Skills section */}
                  <div>
                    <h5 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#8245ec]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Skills & Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30 hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:bg-purple-600/20"
                          style={{ transitionDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute transform rotate-45 translate-x-8 -translate-y-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] w-20 h-2 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for slow animations */}
      <style jsx>{`
        @keyframes fadeIn-slow {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(var(--translate-x, 50px));
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-slow {
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

        @keyframes line-grow {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slowest {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.05;
            transform: scale(1.2);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes width-grow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }

        .animate-fadeIn-slow {
          animation: fadeIn-slow 1.5s ease-out forwards;
        }

        .animate-fadeIn-slower {
          animation: fadeIn-slow 2s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 1.2s ease-out forwards;
        }

        .animate-gradient-slow {
          background-size: 300% 300%;
          animation: gradient-slow 6s ease infinite;
        }

        .animate-line-grow {
          animation: line-grow 2s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-pulse-slowest {
          animation: pulse-slowest 8s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .animate-width-grow {
          animation: width-grow 2s ease-out forwards;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        /* Even/odd slide directions */
        .flex-row-reverse .animate-slideIn {
          --translate-x: -50px;
        }

        .flex-row .animate-slideIn {
          --translate-x: 50px;
        }
      `}</style>
    </section>
  );
};

export default Experience;

