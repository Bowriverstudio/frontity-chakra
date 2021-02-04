/**
 * React / Frontity dependencies
 */
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";

/**
 * Internal dependencies
 */
import BreakPoints from "../BreakPoints";

describe("Frontity Chakra Ui - Breakpoints", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test("Breakpoints", () => {
    const json = TestRenderer.create(
      <ChakraProvider>
        <BreakPoints />
      </ChakraProvider>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  test("Breakpoints renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChakraProvider>
        <BreakPoints />
      </ChakraProvider>,
      div
    );
    expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
  });
});
