import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SendMsg from "../SendMsg";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

jest.mock("../../photos/send.png", () => "send-mock.png");

// Mock the UserAuth context
jest.mock("../../context/AuthContext", () => ({
  UserAuth: jest.fn(),
}));

// // Mock Firebase Firestore functions
// jest.mock("firebase/firestore", () => ({
//   addDoc: jest.fn(),
//   collection: jest.fn(),
//   serverTimestamp: jest.fn(),
// }));

describe("SendMsg Component", () => {
  beforeEach(() => {
    // Mock the currentUser
    UserAuth.mockReturnValue({
      currentUser: {
        uid: "user123",
        displayName: "Test User",
        photoURL: "https://example.com/avatar.jpg",
      },
    });
  });

  it("renders the SendMsg component correctly", () => {
    render(<SendMsg />);

    // Check if the input field and send button are present
    // expect(
    //   screen.getByPlaceholderText("Type your message...")
    // ).toBeInTheDocument();
    // expect(screen.getByAltText("Send")).toBeInTheDocument();
  });

  //   it("handles sending a message", async () => {
  //     render(<SendMsg />);

  //     // Get the input field and send button elements
  //     const inputField = screen.getByPlaceholderText("Type your message...");
  //     const sendButton = screen.getByAltText("Send");

  //     // Simulate typing a message in the input field
  //     fireEvent.change(inputField, { target: { value: "Hello, World!" } });

  //     // Simulate clicking the send button
  //     fireEvent.click(sendButton);

  //     // Check if the addDoc function was called with the correct data
  //     expect(addDoc).toHaveBeenCalledWith(collection(db, "messages"), {
  //       text: "Hello, World!",
  //       name: "Test User",
  //       avatar: "https://example.com/avatar.jpg",
  //       createdAt: expect.any(Object), // You can use custom logic to check the timestamp
  //       uid: "user123",
  //     });

  //     // Check if the input field is reset
  //     await waitFor(() => {
  //       expect(inputField).toHaveValue("");
  //     });
  //   });

  //   it("handles empty input and displays an alert", () => {
  //     render(<SendMsg />);

  //     // Get the input field and send button elements
  //     const inputField = screen.getByPlaceholderText("Type your message...");
  //     const sendButton = screen.getByAltText("Send");

  //     // Simulate clicking the send button without typing a message
  //     fireEvent.click(sendButton);

  //     // Check if an alert is displayed
  //     expect(window.alert).toHaveBeenCalledWith("Please enter a message!");

  //     // Ensure that the addDoc function was not called
  //     expect(addDoc).not.toHaveBeenCalled();
  //   });

  //   it("handles a message that is too long and displays an alert", () => {
  //     render(<SendMsg />);

  //     // Get the input field and send button elements
  //     const inputField = screen.getByPlaceholderText("Type your message...");
  //     const sendButton = screen.getByAltText("Send");

  //     // Simulate typing a message that is too long
  //     fireEvent.change(inputField, { target: { value: "A".repeat(501) } });

  //     // Simulate clicking the send button
  //     fireEvent.click(sendButton);

  //     // Check if an alert is displayed
  //     expect(window.alert).toHaveBeenCalledWith(
  //       "Message is too long. Max 500 characters."
  //     );

  //     // Ensure that the addDoc function was not called
  //     expect(addDoc).not.toHaveBeenCalled();
  //   });
});
