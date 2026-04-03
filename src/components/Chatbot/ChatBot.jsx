import React, { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import {
  SkillsInfo,
  experiences,
  education,
  projects,
} from "../../constants.js";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I'm Sonu's AI assistant! How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text) => {
    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      const res = await fetch("https://portfoliobackend-st9x.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          data: {
            skills: SkillsInfo,
            experience: experiences,
            education: education,
            projects: projects,
          },
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      console.log(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Backend not connected! 😅",
        },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 group bg-gradient-to-r from-purple-900 to-pink-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-pulse-slow"
        >
          {/* <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2v2m0 0a4 4 0 014 4v2h-8V8a4 4 0 014-4zm0 0V4m-6 8h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6zm4 4h4"
            />
          </svg> */}

          <span className="text-2xl md:text-2xl">🤖</span>
        </button>
      )}

      {/* Chat Window - Right Side Only */}
      {open && (
        <div
          className={`
          fixed z-50 flex flex-col bg-[#050414]/90 backdrop-blur-xl border border-purple-500/20 shadow-2xl transition-all duration-300 animate-slideIn
          // Mobile & Tablet: Right side but smaller
          bottom-2 right-4 w-[70%] max-w-[600px] h-[600px] rounded-2xl
          // Desktop
          md:bottom-4 md:right-6 md:w-[400px] md:h-[580px]
          // Large screens
          lg:w-[420px] lg:h-[550px]
        `}
        >
          {/* Header with Gradient and Online Status */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 opacity-20 animate-gradient"></div>

            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                <span className="text-2xl">🤖</span>
                {/* Online Status Indicator */}
                {/* <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse-online">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ripple"></div>
                </div> */}
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-90"> Online</p>
                </div>
              </div>
            </div>
            {/* Close Button - Always Visible */}
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition-colors relative z-10"
              aria-label="Close chat"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-transparent text-gray-200 custom-scroll">
            {messages.map((msg, i) => (
              <ChatMessage key={i} msg={msg} />
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2 mb-4 animate-fadeIn">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <span className="text-sm">🤖</span>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="bg-[#1e1b3a] text-gray-200 rounded-full px-4 py-2 border border-purple-500/20">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions - Only when no messages */}
          {messages.length === 1 && (
            <div className="px-3 md:px-4 py-2 bg-[#0a0620] border-t border-purple-500/20 border-purple-100">
              <p className="text-xs text-purple-600 mb-2 font-semibold">
                ✨ Try asking:
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Tell me about Sonu?", "Tell me about sonu's hobbies?"].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 md:px-3 py-1 rounded-full hover:shadow-lg transition-all duration-200 whitespace-nowrap transform hover:scale-105"
                    >
                      {suggestion}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}

          {/* Input Area */}
          <ChatInput onSend={sendMessage} />
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes bounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce {
          animation: bounce 1.4s infinite ease-in-out;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        @keyframes pulse-online {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse-online {
          animation: pulse-online 1.5s infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: ripple 1.5s infinite;
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .custom-scroll::-webkit-scrollbar {
          width: 4px; /* patla */
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent; /* background invisible */
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: #2e2a5a; /* dark purple */
          border-radius: 10px;
        }

        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #4c46a3; /* hover pe glow */
        }

        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #2e2a5a transparent;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
