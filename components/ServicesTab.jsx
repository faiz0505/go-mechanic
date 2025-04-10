"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { services } from "@/utils/services";

const ServicesTab = () => {
  const scrollRef = useRef(null);
  const pathname = usePathname();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center border-b">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-lavender-light text-royal-purple cursor-pointer shadow-md rounded-full p-2 hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="md:w-[90%] mx-auto overflow-x-auto flex gap-6 scrollbar-hide scroll-smooth"
      >
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.url}
            className={`group block p-2 flex-none min-w-28 ${
              pathname === service.url &&
              "bg-royal-purple/10 rounded-xs border-b-2 border-royal-purple"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="h-auto w-auto mb-3">
                <Image
                  src={service.icon}
                  alt={service.name}
                  height={30}
                  width={30}
                />
              </div>
              <h3
                className={`${
                  pathname === service.url ? "font-bold" : ""
                } text-gray-700 group-hover:text-royal-purple text-xs`}
              >
                {service.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-lavender-light text-royal-purple cursor-pointer shadow-md rounded-full p-2 hidden md:block"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ServicesTab;
