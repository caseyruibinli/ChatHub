import { render, waitFor } from "@testing-library/react";
import CBox from "../CBox";
import React from "react";

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("CBox", () => {
  // Test if CBox component renders without crashing
  it("renders without crashing", () => {
    render(<CBox />);
  });
});
