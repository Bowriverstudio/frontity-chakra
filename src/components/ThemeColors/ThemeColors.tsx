/**
 * React / External dependencies
 */
import { Box, useTheme } from "@chakra-ui/react";
import React from "react";

import { ColorPalette, ColorPalettes, ColorWrapper } from "./color-palette";

/**
 * Theme Colors
 */
const ThemeColors = (): JSX.Element => {
  const theme = useTheme();
  const keys = Object.keys(theme.colors);

  const socialColorKeys = [
    "facebook",
    "linkedin",
    "messenger",
    "telegram",
    "twitter",
    "whatsapp",
  ];

  const colorsToRemove = [
    "black",
    "white",
    "whiteAlpha",
    "blackAlpha",
    "transparent",
    "current",
    ...socialColorKeys,
  ];
  const filteredColors = keys.filter((item) => !colorsToRemove.includes(item));

  return (
    <>
      <Header>Black And White</Header>

      <ColorWrapper>
        <ColorPalette color="black" name="Black" />
        <ColorPalette color="white" name="White" />
      </ColorWrapper>

      {filteredColors.map((color) => (
        <React.Fragment key={color}>
          <Header>{color}</Header>
          <ColorWrapper key={color}>
            <ColorPalettes color={color} />
          </ColorWrapper>
        </React.Fragment>
      ))}

      <Header>Social Color</Header>
      {socialColorKeys.map((color) => (
        <React.Fragment key={color}>
          <Header>{color}</Header>
          <ColorWrapper>
            <ColorPalettes color={color} />
          </ColorWrapper>
        </React.Fragment>
      ))}
    </>
  );
};

const Header = ({ children }) => (
  <Box
    as="h3"
    lineHeight={6}
    fontSize="lg"
    fontWeight="600"
    mt={6}
    textTransform="capitalize"
  >
    {children}
  </Box>
);

export default ThemeColors;
