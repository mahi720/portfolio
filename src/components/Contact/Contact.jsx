// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_x7mfw8o",  // EmailJS Service ID
//         "template_30zwm6o",  // EmailJS Template ID
//         form.current,
//         "Cnqtyj2E98A9t06hj"  // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setIsSent(true);
//           form.current.reset(); // Reset form fields after sending
//           toast.success("Message sent successfully! ✅", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         },
//         (error) => {
//           console.error("Error sending message:", error);
//           toast.error("Failed to send message. Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           Let me know if you want it in a more friendly, professional, or formal
//           tone!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="mt-4 flex flex-col space-y-4"
//         >
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Send Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn-very-slow");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7mfw8o", // EmailJS Service ID
        "template_30zwm6o", // EmailJS Template ID
        form.current,
        "Cnqtyj2E98A9t06hj", // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("✨ Message sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            icon: "🚀",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("❌ Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-32 px-[7vw] md:px-[7vw] lg:px-[20vw] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse-very-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-float-particle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-400/20 rounded-full animate-float-particle-delay"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-float-particle-slow"></div>
      </div>

      {/* Toast Container with custom styling */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
      />

      {/* Section Title with slow fade */}
      <div className="text-center mb-16 animate-fadeIn-very-slow">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient-very-slow">
            GET IN TOUCH
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto rounded-full animate-width-grow-slow"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fadeIn-very-slower">
          Have a question or want to work together? I'd love to hear from you!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="relative w-full max-w-2xl animate-slideIn-slow">
        {/* Glow effect behind form */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-2xl opacity-20 blur-xl animate-pulse-very-slow"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-10 blur-2xl animate-pulse-very-slower"></div>

        {/* Main form card */}
        <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8245ec] via-[#a855f7] to-[#8245ec] bg-300% animate-gradient-x-slow"></div>

          {/* Header with decorative elements */}
          <div className="relative px-8 pt-8 pb-4 text-center border-b border-gray-800">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-pink-600/10 rounded-full blur-2xl"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Let's Connect
              <span className="inline-block ml-2 animate-bounce-slow">🚀</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Fill out the form below and I'll get back to you soon!
            </p>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="relative group">
                <label className="absolute -top-2 left-3 px-2 bg-gray-900 text-xs text-gray-400 transition-all duration-500">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full p-4 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition-all duration-500 hover:border-purple-400/50 pl-12"
                    placeholder="Jackiee deo"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="absolute -top-2 left-3 px-2 bg-gray-900 text-xs text-gray-400 transition-all duration-500">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    required
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full p-4 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition-all duration-500 hover:border-purple-400/50 pl-12"
                    placeholder="jackiee@example.com"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative group">
              <label className="absolute -top-2 left-3 px-2 bg-gray-900 text-xs text-gray-400 transition-all duration-500">
                Subject
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  required
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition-all duration-500 hover:border-purple-400/50 pl-12"
                  placeholder="What's this about?"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <label className="absolute -top-2 left-3 px-2 bg-gray-900 text-xs text-gray-400 transition-all duration-500">
                Your Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-gray-800/50 text-white rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition-all duration-500 hover:border-purple-400/50 pl-12 resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
                <svg
                  className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="relative w-full group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-xl opacity-100"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold text-lg">
                <span>Send Message</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>

            {/* Success message */}
            {isSent && (
              <div className="text-center text-green-400 text-sm mt-4 animate-fadeIn-very-slow">
                ✨ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact info footer */}
          <div className="px-8 py-4 bg-gray-800/30 border-t border-gray-800 flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-500 flex items-center gap-2"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Email</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-500 flex items-center gap-2"
            >
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                />
              </svg>
              <span className="text-sm">Website</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for slow animations */}
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
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes pulse-very-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-very-slower {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.1);
          }
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
            transform: translateY(-40px) translateX(20px);
            opacity: 0.5;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes width-grow-slow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
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

        .animate-pulse-very-slow {
          animation: pulse-very-slow 5s ease-in-out infinite;
        }

        .animate-pulse-very-slower {
          animation: pulse-very-slower 7s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }

        .animate-float-particle-delay {
          animation: float-particle 14s ease-in-out infinite 2s;
        }

        .animate-float-particle-slow {
          animation: float-particle 16s ease-in-out infinite 1s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-width-grow-slow {
          animation: width-grow-slow 2s ease-out forwards;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Contact;
