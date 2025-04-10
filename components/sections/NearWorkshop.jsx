"use client"; // If using Next.js App Router

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
    src: "https://gomechprod.blob.core.windows.net/gomech-crap/workshop_docs/staging/733/733_ihero.jpg",
    alt: "Banner 1",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-crap/workshop_docs/staging/7/7_ihero.jpg",
    alt: "Banner 2",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/gomech-crap/workshop_docs/staging/236/236_ihero.jpg",
    alt: "Banner 3",
  },
  {
    src: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/locate-us.png",
    alt: "LOCATE US",
  },
];

const NearWorkshop = () => {
  return (
    <section className="py-10 paddings">
      <SectionHeading
        title={"Choose the Workshop Near You"}
        subTitle={"Schedule a Pickup today!"}
      />
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-full h-60 md:h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
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

export default NearWorkshop;
