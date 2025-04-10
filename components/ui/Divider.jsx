import React from "react";

const Divider = ({ size = "md" }) => {
  const widthClasses = {
    xs: "w-1/6",
    sm: "w-1/3", // Small: 1/3 width
    md: "w-1/2", // Medium (Default): 1/2 width
    lg: "w-full", // Large: Full width
  };

  return React.createElement("div", {
    className: `h-[2px] mx-auto bg-sunflower rounded-full my-8 ${widthClasses[size]}`,
  });
};

export default Divider;
