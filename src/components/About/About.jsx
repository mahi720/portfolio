// import React from "react";
// import ReactTypingEffect from "react-typing-effect";
// import Tilt from "react-parallax-tilt";
// import profileImage from "../../assets/profile3.png";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Sonu Kumar
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <ReactTypingEffect
//               text={["Mern stack Developer.", "Web Developer.", "Coder."]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => (
//                 <span className="text-[#8245ec]">{cursor}</span>
//               )}
//             />
//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//           I am a MERN Full Stack Developer with industry experience in developing and deploying full-stack web applications. 
//           Proficient in React.js, Node.js, Express.js, and MongoDB, with strong knowledge of RESTful APIs, role-based 
//           access control, and production deployment on aaPanel Linux servers.
//           </p>
//          {/* Resume Buttons */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-5">
//             <a
//               href="https://drive.google.com/file/d/17w5zMDeq9zCfWbFIqyQcaPtnZtDa-SFY/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
//               style={{
//                 background: "linear-gradient(90deg, #8245ec, #a855f7)",
//                 boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
//               }}
//             >
//               DOWNLOAD CV
//             </a>

//             <a
//               href="https://drive.google.com/file/d/1VCRusKlC5upp3G08ACI6mRalDKF9_ul1/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#a855f7] py-3 px-8 rounded-full text-lg font-bold border-2 border-[#8245ec] transition duration-300 transform hover:scale-105 hover:bg-[#8245ec] hover:text-white"
//             >
//               DOWNLOAD CV
//             </a>
//           </div>
//         </div>
//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Sonu Kumar"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile3.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-3 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting with animation */}
          <div className="animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight tracking-wide">
              Hi, I am
            </h1>
          </div>

          {/* Name with gradient */}
          <div className="animate-fadeInUp animation-delay-200">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Sonu Kumar
              </span>
            </h2>
          </div>

          {/* Skills Heading with Typing Effect */}
          <div className="animate-fadeInUp animation-delay-400">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
              <span className="text-gray-300">I am a </span>
              <span className="bg-gradient-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent font-bold">
                <ReactTypingEffect
                  text={[
                    "MERN Stack Developer.",
                    "Full Stack Developer.",
                    "Web Developer.",
                    "Problem Solver.",
                    "Tech Enthusiast.",
                  ]}
                  speed={80}
                  eraseSpeed={40}
                  typingDelay={500}
                  eraseDelay={2000}
                  cursorRenderer={(cursor) => (
                    <span className="text-[#a855f7] ml-1 text-2xl md:text-3xl">
                      |
                    </span>
                  )}
                  displayTextRenderer={(text) => {
                    return <span>{text}</span>;
                  }}
                />
              </span>
            </h3>
          </div>

          {/* About Me Paragraph with enhanced styling */}
          <div className="animate-fadeInUp animation-delay-600">
            <div className="relative">
              {/* Decorative quote mark */}
              <span className="absolute -top-4 -left-2 text-6xl text-purple-600/20 font-serif">
                "
              </span>

              <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed relative z-10 pl-4 sm:pl-6 border-l-4 border-purple-500 text-left">
                I am a MERN Full Stack Developer with industry experience in
                developing and deploying full-stack web applications. Proficient
                in React.js, Node.js, Express.js, and MongoDB, with strong
                knowledge of RESTful APIs, role-based access control, and
                production deployment on aaPanel Linux servers.
              </p>
            </div>
          </div>

          {/* Resume Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-5 animate-fadeInUp animation-delay-800">
            <a
              href="https://drive.google.com/file/d/1GqqLPVC4N-SqCT4wRilkcuMRUmPIXRe8/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-[#8245ec] bg-300% animate-gradient"></span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                DOWNLOAD CV
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1VCRusKlC5upp3G08ACI6mRalDKF9_ul1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-[#a855f7] py-3 px-8 rounded-full text-lg font-bold border-2 border-[#8245ec] transition-all duration-300 transform hover:scale-105 hover:bg-[#8245ec] hover:text-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#8245ec] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                VIEW CV
              </span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image with enhanced tilt effect */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fadeInRight">
          <Tilt
            className="relative group"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1200}
            scale={1.1}
            transitionSpeed={1500}
            gyroscope={true}
          >
            {/* Glow rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full opacity-30 group-hover:opacity-40 blur-lg transition-all duration-500"></div>

            {/* Main image container */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-[22rem] md:h-[22rem] lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#8245ec] to-[#a855f7] p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src={profileImage}
                  alt="Sonu Kumar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-bounce">
              Full Stack Developer
            </div>
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-bounce delay-300">
              Hire Me
            </div>
          </Tilt>
        </div>
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

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
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

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default About;

