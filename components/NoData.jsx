import React from "react";
import CustomImage from "./ui/CustomImage";

const NoData = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <figure className="h-80 w-80 relative">
        <CustomImage fill src={"/assets/no-data.jpg"} alt={"No Data"} />
      </figure>
      <p className="text-center font-bold text-dark-gray">No Data Found</p>
    </div>
  );
};

export default NoData;
