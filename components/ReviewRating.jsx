"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import { ArrowDown } from 'lucide-react';

const ReviewRating = ({reviews}) => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Review & Rating on Basic Service
      </h2>
      <ul className="space-y-4">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <li
            key={index}
            className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src={review.avatar}
                alt={review.name}
              />
              <div className="w-full">
                <h3 className="text-md font-semibold">{review.name}</h3>
                <div className="flex justify-between w-full items-center">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{review.review}</p>
          </li>
        ))}
      </ul>
      {visibleReviews < reviews.length && (
        <button
          onClick={handleShowMore}
          className="mt-4 flex items-center justify-center w-full p-2 text-blue-600 font-semibold hover:underline"
        >
          See more
          <ArrowDown className="ml-2 w-5 h-5"
          />
        </button>
      )}
    </div>
  );
};

export default ReviewRating;
