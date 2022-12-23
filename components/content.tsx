import type * as Classed from "@tw-classed/react";
import { classed } from "@tw-classed/react";

// 20vh 13.25vw 2.5rem

const BaseContent = classed.div("div", "content", {
  variants: {
    color: {
      gray: "bg-gray-500",
      blue: "bg-blue-500",
      red: "bg-red-500",
    },
  },
});

const Content = ({ children }: { children: React.ReactNode }) => {
  return <BaseContent>{children}</BaseContent>;
};

export default Content;
