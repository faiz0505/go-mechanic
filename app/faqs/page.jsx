import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/utils/faqs";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="py-10 paddings">
      <SectionHeading title={"Frequently Asked Questions"} />
      <section className="flex flex-col-reverse md:flex-row justify-between gap-4">
        <aside className="md:w-[65%]">
          <Accordion className="space-y-1" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={faq.question}
                className={"rounded px-2 bg-lavender-light "}
              >
                <AccordionTrigger className={""}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={"text-sm text-deep-purple"}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </aside>
        <aside className="w-full md:w-[35%] min-h-[300px] relative">
          <Image
            src={"/assets/car-service.jpg"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center absolute"
            alt="Car service image"
          />
        </aside>
      </section>
    </div>
  );
};

export default page;
