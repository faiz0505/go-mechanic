import React from "react";
import Blog from "@/components/blog/Blog";
import { goMechanicBasics } from "@/utils/blog";
const Page = () => {
  return (
    <div>
      <Blog heading={"GoMechanic Basic"} data={goMechanicBasics} />
    </div>
  );
};

export default Page;
