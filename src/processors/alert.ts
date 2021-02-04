import { Alert } from "@chakra-ui/react";
import { Element, Processor } from "@frontity/html2react/types";

const alert: Processor<Element> = {
  name: "alert",
  priority: 20,
  test: ({ node }) => node.component === "alert",
  processor: ({ node }) => {
    return {
      component: Alert,
      children: node.children,
    };
  },
};

export default alert;
