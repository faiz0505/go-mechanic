import React from "react";

const SectionHeading = ({ title, subTitle, color = "text-royal-purple" }) => {
  return (
    <div className="text-center  flex flex-col items-center gap-2 mb-4">
      <h2 className={`md:text-3xl text-2xl font-bold ${color} capitalize`}>
        {title}
      </h2>
      {subTitle && (
        <p className="text-sm max-w-xl text-dark-gray">{subTitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
