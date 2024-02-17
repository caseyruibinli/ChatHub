import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { UserAuth } from "../../context/AuthContext";

// Mock the UserAuth context
jest.mock("../../context/AuthContext", () => ({
  UserAuth: jest.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    // Mock the currentUser and logout function
    UserAuth.mockReturnValue({
      currentUser: {
        /* mock user data */
      },
      logout: jest.fn(),
    });
  });

  it("renders the Navbar component correctly", () => {
    render(<Navbar />);

    // Check if the "ChatHub" text is present in the Navbar
    const chatHubText = screen.getByText("ChatHub");
    expect(chatHubText).toBeInTheDocument();
  });

  it("displays the 'Signout' button when a user is logged in", () => {
    render(<Navbar />);

    // Check if the "Signout" button is present when a user is logged in
    const signoutButton = screen.getByText("Signout");
    expect(signoutButton).toBeInTheDocument();
  });
});
