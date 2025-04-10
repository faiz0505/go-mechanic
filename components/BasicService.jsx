"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
const BasicService = ({ service }) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-2 mt-8">
        <ArrowLeft
          size={28}
          className="shrink-0"
          onClick={() => router.back()}
        />
        <h1 className="text-xl sm:text-2xl font-bold">
          {service.service_name}
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center p-4 sm:p-6">
        <div className="flex items-center gap-3 p-3 rounded-lg shadow-md bg-white w-full sm:w-auto min-w-[140px]">
          <Image
            src={service?.time_taken?.icon}
            alt="time-taken"
            width={40}
            height={40}
          />
          <span className="text-sm sm:text-base">
            {service.time_taken.text}
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg shadow-md bg-white w-full sm:w-auto min-w-[140px]">
          <Image
            src={service?.warranty?.icon}
            alt="warranty"
            width={40}
            height={40}
          />
          <span className="text-sm sm:text-base">{service.warranty.text}</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg shadow-md bg-white w-full sm:w-auto min-w-[140px]">
          <Image
            src={service?.recommended_interval?.icon}
            alt="recommended_interval"
            width={40}
            height={40}
          />
          <span className="text-sm sm:text-base">
            {service.recommended_interval.text}
          </span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg shadow-md bg-white w-full sm:w-auto min-w-[140px]">
          <Image
            src={service?.pickup_drop?.icon}
            alt="pickup_drop"
            width={40}
            height={40}
          />
          <span className="text-sm sm:text-base">
            {service.pickup_drop?.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicService;
