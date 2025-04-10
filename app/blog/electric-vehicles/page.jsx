import React from "react";
import Blog from "@/components/blog/Blog";
import { electricCars } from "@/utils/blog";
const Page = () => {
  return (
    <div>
      <Blog heading={"Electric Vehicles"} data={electricCars} />
    </div>
  );
};

export default Page;
