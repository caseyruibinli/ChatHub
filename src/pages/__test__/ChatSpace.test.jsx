// ChatSpace.test.jsx
import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';

// Mock the CBox and SendMsg components
jest.mock("../../elements/CBox", () => {
  return () => <div data-testid="mock-cbox">Mocked CBox</div>;
});

jest.mock("../../elements/SendMsg", () => {
  return () => <div data-testid="mock-send-msg">Mocked SendMsg</div>;
});

import ChatSpace from "../ChatSpace";

describe("ChatSpace Component", () => {
  it("renders ChatSpace component correctly", () => {
    const { getByTestId } = render(<ChatSpace />);

    // Check if Mocked CBox component is rendered
    const cboxElement = getByTestId("mock-cbox");
    expect(cboxElement).toBeInTheDocument();

    // Check if Mocked SendMsg component is rendered
    const sendMsgElement = getByTestId("mock-send-msg");
    expect(sendMsgElement).toBeInTheDocument();
  });

  // You can add more tests specific to ChatSpace if needed
});
