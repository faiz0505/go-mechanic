import React from "react";
import CustomImage from "./ui/CustomImage";
import { Button } from "./ui/button";
import { CircleCheck, Clock, Plus } from "lucide-react";
import Link from "next/link";
import AddToCartButton from "./cart/AddToCartButton";

const ServiceCard = ({ service, serviceSlug }) => {
  const {
    _id,
    service_name,
    original_price,
    price,
    warranty,
    recommended_interval,
    inclusions,
    time_taken,
    badge,
  } = service;
  return (
    <div className="p-2 border rounded shadow">
      <Link
        href={`/services/${serviceSlug}/${_id}`}
        className="flex flex-col md:flex-row items-center md:items-start gap-3"
      >
        <figure className="h-40 md:w-40 w-full overflow-hidden relative rounded flex-none">
          {badge && (
            <div className="absolute z-20 bg-green-500/80 uppercase text-xs font-bold py-1 px-2 text-white top-1 left-1 rounded">
              {badge}
            </div>
          )}
          <CustomImage
            src={"/banner2.jpg"}
            alt={service_name}
            className="object-cover"
          />
        </figure>
        <div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">{service_name}</h1>
              <div className="flex items-center gap-1 text-xs py-1 px-3 bg-dark-gray/15 w-fit ">
                <Clock size={12} />
                <p>{time_taken.text}</p>
              </div>
            </div>
            <ol className="list-disc text-sm font-semibold text-gray-600 grid grid-cols-2 gap-4 ml-4 mt-2">
              <li className="">{warranty.text}</li>
              <li className="">{recommended_interval.text}</li>
            </ol>
            <ul className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-600 mt-4">
              {inclusions
                .slice(0, inclusions.length > 4 ? 3 : 4)
                .map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CircleCheck
                      size={16}
                      className="text-green-500 flex-none"
                    />
                    {item}
                  </li>
                ))}

              {/* If more than 4 items exist, show the "X more" item */}
              {inclusions.length > 4 && (
                <li className="flex items-start gap-2 text-royal-purple cursor-pointer font-bold">
                  {`+ ${inclusions.length - 3} more`}
                </li>
              )}
            </ul>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center mt-4">
        <div className="space-x-2">
          <span className="line-through text-xs text-dark-gray font-semibold">
            SAR {original_price}
          </span>
          <span className="font-semibold text-lg">SAR {price}</span>
        </div>
        <AddToCartButton
          text={"Add to Cart"}
          service={service}
          serviceSlug={serviceSlug}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
