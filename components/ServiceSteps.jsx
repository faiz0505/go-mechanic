"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const steps = [
  "A Dedicated Service Buddy will arrange a doorstep pick-up from your location.",
  "Your Car will be serviced at the nearest GoMechanic Workshop.",
  "Any additional work will be notified and authorised by you.",
  "We'll doorstep deliver your Car in the specified service time.",
];

const ServiceSteps = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-4 border rounded-lg shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors rounded-t-lg"
      >
        <span className="text-xl font-semibold text-gray-800">
          Steps After Booking
        </span>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="px-4 pt-2 pb-4">
          <div className="relative border-l-2 border-blue-200 ml-4 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute w-8 h-8 -left-4 top-0 flex items-center justify-center text-lg font-bold text-white bg-blue-500 rounded-full">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-6 mx-4 bg-purple-100 rounded-lg ">
        <div className="flex-1 p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            GoMechanic Service Warranty
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            1 Month Replacement Warranty On Oil, Filters & Brakes
          </p>
        </div>
        <Image
          src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/KhannaBar%402x.png"
          alt="Warranty"
          width={96}
          height={96}
          className="w-24 h-24 object-cover"
        />
      </div>

      <button className="w-full mt-4 p-3 text-center text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
        KNOW MORE
      </button>
    </div>
  );
};

export default ServiceSteps;