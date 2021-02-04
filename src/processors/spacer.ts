import { Spacer } from "@chakra-ui/react";
import { Element, Processor } from "@frontity/html2react/types";

const spacer: Processor<Element> = {
  name: "spacer",
  priority: 20,
  test: ({ node }) => node.component === "spacer",
  processor: () => {
    return {
      component: Spacer,
    };
  },
};

export default spacer;
