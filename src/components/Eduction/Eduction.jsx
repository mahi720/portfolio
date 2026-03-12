// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
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
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React, { useEffect, useRef } from "react";
import { education } from "../../constants";

const Education = () => {
  const sectionRef = useRef(null);
  const educationRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn-slow");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    educationRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      educationRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to get gradient based on index
  const getGradient = (index) => {
    const gradients = [
      "from-blue-600 to-purple-600",
      "from-purple-600 to-pink-600",
      "from-pink-600 to-orange-600",
      "from-orange-600 to-yellow-600",
      "from-green-600 to-blue-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-32 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans overflow-hidden"
    >
      {/* Background decorative elements - Slow animations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse-very-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-400/20 rounded-full animate-float-particle-delay"></div>
      </div>

      {/* Section Title with slow fade */}
      <div className="text-center mb-20 animate-fadeIn-very-slow">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient-very-slow">
            EDUCATION
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto rounded-full animate-width-grow-slow"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fadeIn-very-slower">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line - Hidden on mobile, visible on desktop */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8245ec] via-[#a855f7] to-transparent animate-glow-pulse-slow"></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#8245ec] to-[#a855f7] animate-line-grow-slow"
            style={{ transformOrigin: "top" }}
          ></div>
        </div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            ref={(el) => (educationRefs.current[index] = el)}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-24 last:mb-0 opacity-0 transition-all duration-1500 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            style={{ transitionDelay: `${index * 300}ms` }}
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
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Year badge - Hidden on mobile, visible on desktop */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap hidden sm:block">
                  <span className="text-xs text-gray-400 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/30 animate-fadeIn-very-slow">
                    {edu.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
              }`}
            >
              <div className="relative group">
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-1000"></div>

                {/* Main card */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-1000 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                  {/* Colored accent bar based on index */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradient(index)} animate-gradient-x-slow`}
                  ></div>

                  <div className="p-6 sm:p-8">
                    {/* Header with school info */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* School logo */}
                      <div
                        className={`w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-r ${getGradient(index)} p-0.5 shadow-lg`}
                      >
                        <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Degree and school */}
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-1000">
                          {edu.degree}
                        </h3>
                        <h4 className="text-md text-gray-400 mt-1 flex items-center gap-2">
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
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          {edu.school}
                        </h4>
                        {/* Date for mobile only */}
                        <p className="text-sm text-gray-500 mt-2 flex items-center gap-1 sm:hidden">
                          <svg
                            className="w-3 h-3"
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
                          {edu.date}
                        </p>
                      </div>
                    </div>

                    {/* Grade with visual indicator */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm font-semibold flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Academic Performance
                        </span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {edu.grade}
                        </span>
                      </div>
                      {/* Progress bar */}
<div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
  <div
    className={`h-full bg-gradient-to-r ${getGradient(index)} animate-progress-grow`}
    style={{
      "--progress-width": edu.grade.includes("%")
        ? edu.grade
        : edu.grade.includes("CGPA")
        ? `${parseFloat(edu.grade) * 9.5}%`
        : "80%",
    }}
  ></div>
</div>
                    </div>

                    {/* Description with icon */}
                    <div className="relative mb-4">
                      <div className="absolute -left-2 top-0 text-4xl text-purple-600/20 font-serif">
                        "
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-purple-500 group-hover:border-purple-400 transition-colors duration-1000">
                        {edu.desc}
                      </p>
                    </div>

                    {/* Additional info badges */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {edu.degree.split(" ").map(
                        (word, i) =>
                          word.length > 2 && (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30 hover:border-purple-500 transition-all duration-700 hover:scale-105"
                            >
                              {word}
                            </span>
                          ),
                      )}
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-20">
                    <div className="absolute transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-r from-[#8245ec] to-[#a855f7] w-16 h-16"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden opacity-20">
                    <div className="absolute transform -rotate-45 -translate-x-8 translate-y-8 bg-gradient-to-r from-[#8245ec] to-[#a855f7] w-16 h-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for very slow animations */}
      <style jsx>{`
        @keyframes fadeIn-very-slow {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn-slow {
          from {
            opacity: 0;
            transform: translateX(var(--translate-x, 60px));
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-very-slow {
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

        @keyframes gradient-x-slow {
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

        @keyframes line-grow-slow {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes ping-very-slow {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse-very-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-very-slower {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.3);
          }
        }

        @keyframes progress-grow {
  from {
    width: 0;
  }
  to {
    width: var(--progress-width);
  }
}

.animate-progress-grow {
  animation: progress-grow 2s ease-out forwards;
}

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(30px) translateX(-20px);
          }
          66% {
            transform: translateY(-20px) translateX(20px);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-50px) translateX(30px);
            opacity: 0.5;
          }
        }

        .animate-fadeIn-very-slow {
          animation: fadeIn-very-slow 2s ease-out forwards;
        }

        .animate-fadeIn-very-slower {
          animation: fadeIn-very-slow 2.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideIn-slow {
          animation: slideIn-slow 1.8s ease-out forwards;
        }

        .animate-gradient-very-slow {
          background-size: 300% 300%;
          animation: gradient-very-slow 8s ease infinite;
        }

        .animate-gradient-x-slow {
          background-size: 200% 200%;
          animation: gradient-x-slow 6s ease infinite;
        }

        .animate-line-grow-slow {
          animation: line-grow-slow 2.5s ease-out forwards;
        }

        .animate-width-grow-slow {
          animation: line-grow-slow 2s ease-out forwards;
        }

        .animate-ping-very-slow {
          animation: ping-very-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 5s ease-in-out infinite;
        }

        .animate-pulse-very-slower {
          animation: pulse-very-slower 7s ease-in-out infinite;
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

        .animate-glow-pulse-slow {
          animation: pulse-very-slow 4s ease-in-out infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        .duration-1500 {
          transition-duration: 1500ms;
        }
      `}</style>
    </section>
  );
};

export default Education;
