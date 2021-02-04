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
import ThemeColors from "../ThemeColors";

describe("Frontity Chakra Ui - ThemeColors", () => {
  test("ThemeColors", () => {
    const json = TestRenderer.create(
      <ChakraProvider>
        <ThemeColors />
      </ChakraProvider>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  test("ThemeColors renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ChakraProvider>
        <ThemeColors />
      </ChakraProvider>,
      div
    );
    expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
  });
});
