import { servicesData } from "@/utils/dummyData";
import React from "react";
import ServiceSteps from "@/components/ServiceSteps";
import ReviewRating from "@/components/ReviewRating";
import TermsConditions from "@/components/TermsConditions";
import ServicesFaq from "@/components/ServicesFaq";
import ServiceCarousel from "@/components/ServiceCarousel";
import BasicService from "@/components/BasicService";
import Services from "@/components/Services";
const Page = async ({ params }) => {
  const { id } = params;
  const service = servicesData.find((item) => item._id === id);
  const reviews = service.reviews;

  if (!service) {
    return (
      <div className="container text-red-500 text-center py-8">
        Service not found
      </div>
    );
  }

  return (
    <div className="paddings mx-auto py-8">
      <ServiceCarousel service={service} />
      <BasicService service={service} />
      <div className="my-4">
        <p>Special Offers</p>
      </div>
      <Services service={service} />
      <div>
        <ServiceSteps />
      </div>
      <div>
        <ReviewRating reviews={reviews} />
      </div>
      <div className="my-4">
        <ServicesFaq />
      </div>
      <div className="my-4">
        <TermsConditions />
      </div>
    </div>
  );
};

export default Page;
