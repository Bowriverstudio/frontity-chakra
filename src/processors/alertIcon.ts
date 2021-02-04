import { AlertIcon } from "@chakra-ui/react";
import { Element, Processor } from "@frontity/html2react/types";

const alertIcon: Processor<Element> = {
  name: "alerticon",
  priority: 20,
  test: ({ node }) => node.component === "alerticon",
  processor: () => {
    return {
      component: AlertIcon,
    };
  },
};

export default alertIcon;
