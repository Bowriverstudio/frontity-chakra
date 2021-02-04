import { Badge, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

/**
 * BreakPoints
 */
const BreakPoints = (): JSX.Element => {
  const breakPointsLabels = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const breakPointsColors = useBreakpointValue({
    base: "green",
    sm: "red",
    md: "teal",
    lg: "blue",
    xl: "orange",
  });

  return (
    <>
      <Badge p={4} colorScheme={breakPointsColors}>
        {breakPointsLabels}
      </Badge>
    </>
  );
};

export default BreakPoints;
