// jest.setup.js
import { JSDOM } from "jsdom";
import { TextEncoder } from "text-encoding";

// Polyfill TextEncoder if it's not defined
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: "node.js",
};

// Import any additional setup you have for testing
require("@testing-library/jest-dom");

module.exports = {
  // ... other Jest config options
  transform: {
    "\\.(jpg|jpeg|png|gif)$": "./transformer.js",
  },
};
