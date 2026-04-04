import React, { useEffect, useState } from "react";

const ChatMessage = ({ msg, scrollToBottom }) => {
  const isUser = msg.role === "user";
  const [displayedText, setDisplayedText] = useState("");

  const formatMessage = (text) => {
    const regex = /(https?:\/\/[^\s]+)|([\w.-]+@[\w.-]+\.\w+)|(\+?\d{10,13})/g;

    return text.split(regex).map((part, i) => {
      if (!part) return null;

      // 🌐 URL
      if (part.match(/https?:\/\/[^\s]+/)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline hover:text-purple-300"
          >
            {part}
          </a>
        );
      }

      // 📧 Email
      if (part.match(/[\w.-]+@[\w.-]+\.\w+/)) {
        return (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-blue-400 underline hover:text-blue-300"
          >
            {part}
          </a>
        );
      }

      // 📞 Phone
      if (part.match(/\+?\d{10,13}/)) {
        return (
          <a
            key={i}
            href={`tel:${part}`}
            className="text-green-400 underline hover:text-green-300"
          >
            {part}
          </a>
        );
      }

      return part;
    });
  };

  useEffect(() => {
    if (!msg.isNew) {
      setDisplayedText(msg.content);
      return;
    }
    setDisplayedText("");

    const words = msg.content.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        // setDisplayedText((prev) => prev + words[index] + " ");
        setDisplayedText((prev) => prev + (words[index] || "") + " ");
        index++;
        scrollToBottom();
      } else {
        clearInterval(interval);
        msg.isNew = false;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [msg.content]);

  return (
    <div
      className={`flex items-start space-x-2 mb-3 md:mb-4 animate-fadeIn ${
        isUser ? "flex-row-reverse space-x-reverse" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center relative ${
          isUser
            ? "bg-gradient-to-r from-purple-600 to-pink-600"
            : "bg-[#0a0620] border border-purple-500/30"
        }`}
      >
        {isUser ? (
          <svg
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-white"
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
        ) : (
          <>
            <span className="text-sm md:text-base">🤖</span>
            {/* Online dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-[#050414]"></div>
          </>
        )}
      </div>

      {/* Message Bubble */}
      <div className={`flex-1 ${isUser ? "flex justify-end" : ""}`}>
        <div
          className={`inline-block max-w-[90%] md:max-w-[85%] px-3 md:px-4 py-2 rounded-2xl shadow-md ${
            isUser
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none"
              : "bg-[#0f0a2a] text-gray-200 border border-purple-500/20 rounded-bl-none"
          }`}
        >
          {/* <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
            {/* {msg.content} */}
          {/* {formatMessage(msg.content)} */}
          {/* </p> */}

          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
            {isUser ? formatMessage(msg.content) : formatMessage(displayedText)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
