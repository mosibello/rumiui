import React from "react";
import parse from "html-react-parser";
import { stegaClean } from "@sanity/client/stega";

const Description = ({ children, className = "u__p", disableParse }) => {
  const renderChildren = () => {
    if (disableParse) {
      return children;
    }

    // Only parse if children is a string
    if (typeof children === "string") {
      return children.includes("<span")
        ? parse(stegaClean(children))
        : parse(children);
    }

    // Return children as-is if not a string (React elements, numbers, etc.)
    return children;
  };

  return (
    <>
      {children && (
        <p className={`c__description ${stegaClean(className)}`}>
          {renderChildren()}
        </p>
      )}
    </>
  );
};

export default Description;
