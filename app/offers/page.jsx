import HowWorks from "@/components/sections/HowWorks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/utils/dummyData";
import { faqs } from "@/utils/faqs";
import { formatStatesValue } from "@/utils/formatter";
import { Star } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="py-10 paddings">
      {/* current offer section */}
      <section></section>
      {/* coupons and offers section */}
      <section>
        <SectionHeading title={"GoMechanic Coupons & Offer on car services"} />
        <p className="text-lg text-dark-gray text-center font-semibold max-w-[80%] mx-auto text-pretty">
          Looking to save on your car service? Get the best offers and discounts
          on car services such as Periodic Car Service, AC service, Car
          Detailing Service, Car Denting and Painting and much more. Use the
          GoMechanic Coupon Code to get the best deals and savings!
        </p>
      </section>
      {/* popular services section  */}
      <section></section>
      <Divider />
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-y-1 text-center"
            >
              <h3 className="text-2xl font-bold text-deep-purple">
                {stat.isRating ? (
                  <span className="flex items-center gap-1">
                    {stat.value} <Star className="w-5 h-5 text-yellow-500" />
                  </span>
                ) : (
                  formatStatesValue(stat.value)
                )}
              </h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <HowWorks />
      </section>
      <Divider />
      <section className="">
        <SectionHeading title={"Frequently Asked Questions"} />
        <Accordion className="space-y-1 mt-4" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={faq.question}
              className={"rounded px-2 bg-lavender-light "}
            >
              <AccordionTrigger className={""}>{faq.question}</AccordionTrigger>
              <AccordionContent className={"text-sm text-deep-purple"}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default page;
