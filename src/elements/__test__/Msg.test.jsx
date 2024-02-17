import React from "react";
import { render } from "@testing-library/react";
import Msg from "../Msg";
import { UserAuth } from "../../context/AuthContext";

// Mock the UserAuth context to provide a currentUser
jest.mock("../../context/AuthContext", () => ({
  UserAuth: jest.fn(),
}));

describe("Msg Component", () => {
  // Mock currentUser for testing
  const mockCurrentUser = {
    uid: "mockUid123",
  };

  beforeAll(() => {
    // Mock the UserAuth hook to return the mockCurrentUser
    UserAuth.mockReturnValue({
      currentUser: mockCurrentUser,
    });
  });

  it("renders message correctly", () => {
    // Create a sample message
    const message = {
      uid: "mockUid123",
      name: "John Doe",
      text: "Hello, world!",
    };

    const { getByText } = render(<Msg message={message} />);

    // Ensure that the message content is rendered
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });

  it("applies the correct class based on the message sender", () => {
    // Create a message sent by the currentUser
    const currentUserMessage = {
      uid: "mockUid123",
      name: "You",
      text: "This is your message",
    };

    // Create a message sent by someone else
    const otherUserMessage = {
      uid: "otherUserUid",
      name: "Alice",
      text: "This is another message",
    };

    const { container } = render(
      <>
        <Msg message={currentUserMessage} />
        <Msg message={otherUserMessage} />
      </>
    );

    // Ensure that the class "chat-end" is applied to the currentUser's message
    expect(container.querySelector(".chat-end")).toBeInTheDocument();

    // Ensure that the class "chat-start" is applied to the other user's message
    expect(container.querySelector(".chat-start")).toBeInTheDocument();
  });
});
