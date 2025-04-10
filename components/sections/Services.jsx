import { customServices, services } from "@/utils/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Divider from "../ui/Divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SectionHeading from "../ui/SectionHeading";

const Services = () => {
  return (
    <section className="py-10 paddings" id="service">
      <SectionHeading
        title={"Car Services Available In Riyadh"}
        subTitle={
          "  Get discounted and professional periodic car service, car repair, wheel care services, cashless insurance claim and much more in Riyadh."
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {services.map((service, index) => (
          <Link key={index} href={service.url} className="group block">
            <div
              className="p-5 bg-lavender-light shadow-md rounded-lg flex flex-col items-center text-center
                        transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="h-auto w-auto mb-3">
                <Image
                  src={service.icon}
                  alt={service.name}
                  height={50}
                  width={50}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-royal-purple">
                {service.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <Divider />

      {/* custom service */}
      <div>
        <SectionHeading title={" Curated Custom Services"} />
        <Carousel
          opts={{
            align: "start",
            loop: true,
            auto: true,
            autoSpeed: 4000,
          }}
          className={""}
        >
          <CarouselContent>
            {customServices.map((service) => {
              return (
                <CarouselItem
                  key={service.icon}
                  className={"basis-1/2 md:basis-1/3 lg:basis-1/5"}
                >
                  <Link href={service.url} className="group block">
                    <div
                      className="flex flex-col items-center text-center
                        transition-transform transform hover:scale-105"
                    >
                      <div className="relative mb-3">
                        <Image
                          src={service.icon}
                          alt={service.name}
                          height={80}
                          width={80}
                        />
                        {service.badge && (
                          <span className="absolute bg-green-500 rounded text-white font-semibold px-2 py-0.5 -bottom-1.5 text-sm left-1/2 -translate-x-1/2 uppercase">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700 group-hover:text-royal-purple">
                        {service.name}
                      </h3>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
