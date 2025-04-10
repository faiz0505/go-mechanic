import NoData from "@/components/NoData";
import ServiceCard from "@/components/ServiceCard";
import ServicesTab from "@/components/ServicesTab";
import { servicesData } from "@/utils/dummyData";
import React from "react";

const page = async ({ params }) => {
  const serviceSlug = (await params).service;
  const filterData = servicesData.filter(
    (service) => serviceSlug === service.category
  );
  return (
    <div className="paddings py-10">
      <ServicesTab />
      {filterData.length ? (
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {filterData.map((service) => {
            return (
              <ServiceCard
                key={service._id}
                service={service}
                serviceSlug={serviceSlug}
              />
            );
          })}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default page;
