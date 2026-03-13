import React, { useState, useEffect } from "react";

const Loader = () => {
  const [icon, setIcon] = useState("⌨️");

  const icons = ["💻", "⚛️", "⌨️", "🚀", "✨", "🔥", "🎯", "⚡"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % icons.length;
      setIcon(icons[index]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-24 h-24 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin"></div>

        {/* Inner content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl animate-bounce-slow">{icon}</div>
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max">
          <p className="text-purple-400 text-sm font-mono">
            <span className="text-gray-500"></span> loading...
            <span className="animate-pulse"></span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
