import React from "react";
import { latestNews } from "@/utils/blog";
import { featuredArticle } from "@/utils/blog";
import { electricCars } from "@/utils/blog";
import Blog from "@/components/blog/Blog";
const Page = () => {
  return (
    <div className="">
      <Blog heading={"Latest Car News"} data={latestNews}/>
      <Blog heading={"Featured Articles"} data={featuredArticle}/>
      <Blog heading={"Electric Cars"} data={electricCars}/>
    </div>
  );
};

export default Page;
