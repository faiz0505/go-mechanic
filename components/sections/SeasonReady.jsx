import { seasonData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators
} from "@/components/ui/carousel";
import SectionHeading from "../ui/SectionHeading";

const SeasonReady = () => {
  return (
    <section className="py-10 paddings">
      <div>
        <SectionHeading title="Get Summer Ready With GoMechanic" />
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              auto: false,
            }}
          >
            <CarouselContent>
              {seasonData.map((service) => (
                <CarouselItem
                  key={service.icon}
                  className="basis-1/2 sm:basis-1/3"
                >
                  <Link href="/" className="group block">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative pb-4">
                        <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden transition-transform transform hover:scale-105">
                          <Image
                            src={service.icon}
                            alt={service.name}
                            height={176}
                            width={176}
                            className="h-full w-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-700 transition-colors duration-300 group-hover:text-royal-purple">
                        {service.name}
                      </h3>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
        <CarouselIndicators
          className="mt-8 mx-auto"
        />
          </Carousel>
        </div>
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {seasonData.map((service) => (
            <Link key={service.icon} href="/" className="group block">
              <div className="flex flex-col items-center text-center">
                <div className="relative pb-4">
                  <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden transition-transform transform hover:scale-105">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      height={176}
                      width={176}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-700 transition-colors duration-300 group-hover:text-royal-purple">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonReady;
