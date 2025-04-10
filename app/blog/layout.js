import React from "react";
import { Car } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
const Layout = ({children}) => {
  return (
    <div>
      <div className="bg-charcoal text-white h-16 flex gap-2 items-center justify-center">
        <Car size={48} />
        <div className="text-2xl font-bold">Blog</div>
      </div>
      <hr />
      <BlogHeader />
      {children}
    </div>
  );
};

export default Layout;
