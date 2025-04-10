"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Reviews } from "@/utils/dummyData";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";

const REVIEWS_PER_PAGE = 5;

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(Reviews.length / REVIEWS_PER_PAGE);

  const [paginatedReviews, setPaginatedReviews] = useState([]);

  useEffect(() => {
    const start = (page - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    setPaginatedReviews(Reviews.slice(start, end));
  }, [page]);

  const handlePageChange = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    router.push(`/reviews?page=${pageNum}`);
  };

  return (
    <div className="mx-auto pt-8">
      {/* Header Section */}
      <div className="bg-white py-6 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            <span className="text-green-700">11,21,300 </span>
            <span className="block md:inline mt-1 md:mt-0">
              Car Owners Made The Smarter Choice
            </span>
          </h1>
          <h2 className="text-base md:text-lg text-gray-500 mt-2">
            This is their Love for Us!
          </h2>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl font-semibold text-green-700">
              4.7
            </div>
            <div className="flex flex-col">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-green-700 stroke-green-700"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">Overall Rating</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800">
              41,248
            </p>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-green-600 font-medium">
                <Check size={16} />
                <span className="text-sm">Verified</span>
              </div>
              <span className="text-sm text-gray-600">User Reviews</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-gray-500 mt-4">
          Ratings and reviews received in last 3 months
        </p>
      </div>

      {/* Reviews Section */}
      <div className=" bg-gray-100">
        <div className="mx-auto px-4 py-8 max-w-5xl">
          <h3 className="text-xl md:text-2xl text-center py-4 font-bold">
            Recently Added Reviews
          </h3>

          <ul className="space-y-4">
            {paginatedReviews.map((review, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    src={review.avatar}
                    alt={review.name}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between flex-col md:flex-row">
                      <h3 className="text-sm md:text-base font-semibold">
                        {review.name}
                      </h3>
                      <span className="text-xs md:text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="currentColor"
                            className="stroke-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={`px-3 py-2 rounded border flex items-center gap-1 ${
                  page === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-2 text-sm rounded border ${
                        pageNum === page
                          ? "bg-blue-600 text-white"
                          : "bg-white text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={`px-3 py-2 rounded border flex items-center gap-1 ${
                  page === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
