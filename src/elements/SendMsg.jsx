import { useState } from "react";
import SendIcon from "../photos/send.png";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";

const SendMsg = () => {
  // State to manage the message input value
  const [value, setValue] = useState("");

  // Accessing the current user from the authentication context
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Checking for empty input
    if (value.trim() === "") {
      alert("Please enter a message!");
      return;
    }

    if (value.length > 500) {
      // Message length limit
      alert("Message is too long. Max 500 characters.");
      return;
    }

    // Sending the message to Firebase
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    // Resetting the input field
    setValue("");
  };

  return (
    // Container for the message input and send button
    <div className="bg-gray-300 fixed bottom-0 w-full py-12 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-5 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-200 rounded-r-none text-black"
          type="text"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="w-auto bg-gray-400 hover:bg-gray-800 text-white rounded-r-lg px-8 transition duration-300 ease-in-out"
        >
          <img src={SendIcon} alt="Send" className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default SendMsg;
