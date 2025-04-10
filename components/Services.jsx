import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
const Services = ({service}) => {
  return (
    <div className="py-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
        What's Included?
      </h1>
            {/* Essential Services */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center sm:text-left">
          Essential Services
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {service?.essential_services?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-4 sm:p-6 w-full sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={180}
                className="rounded-lg object-cover w-full h-40 sm:h-48"
              />
              <span className="text-sm sm:text-base font-medium text-gray-700 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Services */}
      <div className="space-y-6 mt-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center sm:text-left">
          Performance Services
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {service?.performance_services?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-4 sm:p-6 w-full sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={180}
                className="rounded-lg object-cover w-full h-40 sm:h-48"
              />
              <span className="text-sm sm:text-base font-medium text-gray-700 text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="mt-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center sm:text-left">
          Additional Services
        </h3>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center p-4 sm:p-6">
          {service.inclusions?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[45%] md:w-[30%]"
            >
              <div className="rounded-full p-1 bg-green-500 shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm text-gray-700">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
