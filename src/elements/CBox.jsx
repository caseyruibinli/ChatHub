import Msg from "./Msg";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import React from "react";

const CBox = () => {
  // State to store messages
  const [messages, setMessages] = useState([]);
  // Reference to the end of the message list for auto-scrolling
  const messagesEndRef = useRef();

  // Function to smoothly scroll to the latest message
  const scrollToBtm = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    scrollToBtm();
  }, [messages]);

  useEffect(() => {
    // Creating a query for the last 60 messages, ordered by creation time
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(60)
    );

    // Subscribing to Firestore updates and processing the received data
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const loadedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe;
  }, []);

  // Rendering the message components and the end-of-list ref
  return (
    <div className="message-container pb-44 pt-20 contWrap">
      {messages.length > 0 ? (
        messages.map((message) => <Msg key={message.id} message={message} />)
      ) : (
        <p>Loading...</p>
      )}
      <div ref={messagesEndRef} className="messages-end-marker"></div>
    </div>
  );
};

export default CBox;
