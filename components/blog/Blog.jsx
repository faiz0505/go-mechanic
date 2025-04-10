"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Blog = ({ heading, data }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-deep-purple text-center mb-8">
        {heading}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {data.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="flex flex-col border-lavender border-1 w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Link href={`/blog/${item.url}`} passHref>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-52 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <Link href={`/blog/${item.url}`} passHref>
                <h3 className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  {item.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 flex-grow">
                {item.description}
              </p>
              <div className="flex justify-between text-xs text-gray-500 mt-auto">
                <p>{item.author}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={loadMore}
            className="px-6 py-2 bg-deep-purple text-white rounded-lg hover:bg-purple-700 transition"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Blog;
