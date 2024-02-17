import React from "react";
import { UserAuth } from "../context/AuthContext";

const Msg = ({ message }) => {
  const { currentUser } = UserAuth();

  // Function to generate a consistent color based on the user's UID
  const getColorClass = (uid) => {
    const colors = ["bg-custom-blue", "bg-custom-orange", "bg-custom-green"];
    // Use a simple hashing function to select a color
    const index =
      uid.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };

  // Determine the color class for the message bubble
  const bubbleColorClass = getColorClass(message.uid);

  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-header">{message.name}</div>
        <div className={`chat-bubble ${bubbleColorClass} text-gray-600`}>
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Msg;
