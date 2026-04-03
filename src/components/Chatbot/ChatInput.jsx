// ChatInput.jsx
import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 md:p-4 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 rounded-b-2xl relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-20 animate-gradient-bg"></div>

      <div className="flex items-center space-x-2 relative z-10">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-purple-900/50 text-white placeholder-purple-300 border border-purple-500 rounded-full focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-2 md:p-2 rounded-full transition-all duration-200 ${
            message.trim()
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105 animate-pulse-send"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          <svg
            className="w-5 h-5 md:w-5 md:h-5"
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
        </button>
      </div>

      <style jsx>{`
        @keyframes gradient-bg {
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

        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 3s ease infinite;
        }

        @keyframes pulse-send {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-send {
          animation: pulse-send 0.5s ease-in-out;
        }
      `}</style>
    </form>
  );
};

export default ChatInput;
