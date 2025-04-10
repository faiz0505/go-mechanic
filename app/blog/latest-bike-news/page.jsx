import React from "react";
import Blog from "@/components/blog/Blog";
import { latestBikeNews } from "@/utils/blog";
const Page = () => {
  return (
    <div>
      <Blog heading={"Latest Bike News"} data={latestBikeNews} />
    </div>
  );
};

export default Page;
