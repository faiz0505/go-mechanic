"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "../ui/SectionHeading";

// Image Data Array
const images = [
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/bosch.jpg",
    alt: "Bosch",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/valeo.jpg",
    alt: "Valeo",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/mahle.jpg",
    alt: "Mahle",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/ntn.jpg",
    alt: "NTN",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/sachs.jpg",
    alt: "Sachs",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/original_spare_parts_icons/textar.jpg",
    alt: "Textar",
  },
];

const SpareSlider = () => {
  return (
    <section className="py-10 paddings">
      <SectionHeading
        title="Original Spare Parts"
        subTitle="Extended Warranty with GoMechanic!"
      />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={false}
          loop={true}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 lg:w-36 lg:h-32 xl:w-40 xl:h-36">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SpareSlider;
