import React from "react";
import SectionHeading from "../ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqsByLocation } from "@/utils/faqs";

const location = "Riyadh";

const Faq = ({ title }) => {
  const faqs = faqsByLocation.find((faq) => faq.location === location);

  return (
    <section className="paddings">
      <SectionHeading
        title={`${title || "Common Car Service Questions in"} ${
          !title ? location : ""
        }`}
      />

      {faqs && faqs.questions.length > 0 ? (
        <Accordion className="space-y-1" collapsible>
          {faqs.questions.map((faq, i) => (
            <AccordionItem
              key={i}
              value={faq.q}
              className={"rounded px-2 bg-lavender-light "}
            >
              <AccordionTrigger className={"md:text-lg text-md"}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className={"text-sm text-deep-purple"}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-medium-gray text-center mt-4">
          🚘 No FAQs available for {location}. Please check back later!
        </p>
      )}
    </section>
  );
};

export default Faq;
