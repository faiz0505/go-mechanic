import { locations } from "@/utils/dummyData";
import { services } from "@/utils/services";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 paddings py-10">
      {locations.map((city, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold mb-2 text-royal-purple">{city}</h2>
          <p>
            <strong>Go to City:</strong>{" "}
            <Link className="underline" href={`/${city.toLowerCase()}`}>
              {city}
            </Link>
          </p>
          <p className="my-2">
            <strong>Categories:</strong>
          </p>
          <ul className="text-sm space-y-2 ">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:underline">
                  {service.name} in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default page;
