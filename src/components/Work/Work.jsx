import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const modalRef = useRef(null);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Get projects for carousel (first 6 for mobile)
  const carouselProjects = projects.slice(0, 6);

  // Auto-slide for mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === carouselProjects.length - 1 ? 0 : prev + 1,
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [carouselProjects.length]);

  // Modal body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Scroll animation for desktop cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [visibleProjects]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left - next slide
      setCurrentSlide((prev) =>
        prev === carouselProjects.length - 1 ? 0 : prev + 1,
      );
    } else if (touchStartX - touchEndX < -50) {
      // Swipe right - previous slide
      setCurrentSlide((prev) =>
        prev === 0 ? carouselProjects.length - 1 : prev - 1,
      );
    }
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleSeeMore = () => {
    setVisibleProjects(projects.length);
    setIsExpanded(true);
  };

  const handleSeeLess = () => {
    setVisibleProjects(6);
    setIsExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">
            PROJECTS
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* ============================================================ */}
      {/* 📱 MOBILE CAROUSEL VIEW */}
      {/* ============================================================ */}
      <div className="md:hidden relative">
        {/* Carousel Container */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-full px-2"
                onClick={() => handleOpenModal(project)}
              >
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 rounded-full text-[10px] font-medium border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-gray-500 text-[10px]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {carouselProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-8 h-2 bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_20px_rgba(130,69,236,0.5)]"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Swipe indicator text */}
        <div className="text-center mt-3">
          <span className="text-gray-500 text-xs">
            👆 Swipe left/right to explore
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 💻 DESKTOP GRID VIEW */}
      {/* ============================================================ */}
      <div className="hidden md:grid gap-8 grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="project-card group relative cursor-pointer opacity-0 h-full"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            {/* Card glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>

            {/* Main card */}
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 h-full flex flex-col">
              {/* Image container */}
              <div className="relative overflow-hidden h-48 sm:h-56 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
                  <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button (Desktop Only) */}
      {projects.length > 6 && (
        <div className="hidden md:flex justify-center mt-16">
          <button
            onClick={isExpanded ? handleSeeLess : handleSeeMore}
            className="group relative px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40"
          >
            <span className="flex items-center gap-2">
              {isExpanded ? (
                <>
                  <svg
                    className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Show More
                </>
              )}
            </span>
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL - Same for both views */}
      {/* ============================================================ */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

          <div
            ref={modalRef}
            className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-gray-800 transform transition-all duration-500 scale-95 opacity-0 animate-modalIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-gray-800/80 hover:bg-purple-600 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 group backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col">
              <div
                className="relative w-full bg-gray-800 rounded-t-2xl overflow-hidden"
                style={{ maxHeight: "60vh" }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white text-sm font-semibold mb-3">
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30 hover:border-purple-500 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold text-center transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Code
                    </span>
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative px-6 py-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white rounded-xl font-semibold text-center transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                        />
                      </svg>
                      View Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
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

        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .project-card {
          opacity: 0;
          transition:
            opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(40px);
        }

        .project-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }

        .animate-modalIn {
          animation: modalIn 0.4s ease-out forwards;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Work;
