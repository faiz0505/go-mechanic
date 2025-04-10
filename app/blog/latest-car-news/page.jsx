import React from "react";
import Blog from "@/components/blog/Blog";
import { latestCarNews } from "@/utils/blog";
const Page = () => {
  return (
    <div>
      <Blog heading={"Latest Car News"} data={latestCarNews} />
    </div>
  );
};

export default Page;
