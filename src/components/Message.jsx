import React from "react";

const Message = ({ message, participants }) => {
  const sender = participants.find((p) => p.id === message.sender);

  const renderMessage = () => {
    switch (message.type) {
      case "text":
        return <p className="message-content">{message.message}</p>;

      case "image":
        return <img src={message.message} alt="Chat" loading="lazy" />;

      case "video":
        return (
          <video controls preload="metadata">
            <source src={message.message} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );

      case "pdf":
        return (
          <a
            href={message.message}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View PDF Document
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`message ${
        message.sender === "customer@mail.com" ? "sender" : ""
      }`}
    >
      <div className="message-sender">
        {sender?.name || message.sender}
        <span className="role">
          {sender?.role === 0
            ? " (Admin)"
            : sender?.role === 1
            ? " (Agent)"
            : " (Customer)"}
        </span>
      </div>
      {renderMessage()}
    </div>
  );
};

export default Message;
