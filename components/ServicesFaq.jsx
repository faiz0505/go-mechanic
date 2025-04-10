'use client'
import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';
const faqs = [
  {
    question:
      "What is included in the Basic Car Service for my Mercedes Car at GoMechanic in Gurgaon?",
    answer:
      "The Basic Car Service by GoMechanic includes Engine Oil Replacement, Oil Filter Replacement, Air Filter Cleaning, Coolant Top-up, Wiper Fluid Replacement, Battery Water Top-up, Heater/Spark Plugs Checking, Car Wash, Interior Vacuuming.",
  },
  {
    question:
      "Why should I opt for a Basic Car Service for my Mercedes Car at GoMechanic in Gurgaon?",
    answer:
      "GoMechanic’s Basic Car Service is a must-have for your car as it helps you maintain your car’s essentials like Battery, Engine, Coolant to keep it in the best condition.",
  },
  {
    question:
      "How much time does it take for Basic Car Service of my Mercedes Car at GoMechanic in Gurgaon?",
    answer:
      "A typical Basic Car Service for a Mercedes Car takes around 4 hours, start to finish at any GoMechanic Workshop in Gurgaon.",
  },
  {
    question: "How much does GoMechanic charge for a Basic Car Service?",
    answer:
      "The charges for the Basic Car Service of your Mercedes Car can be checked by selecting the brand and model at www.gomechanic.in. We guarantee you the best price with the best quality work assurance in India.",
  },
  {
    question: "How often should I go for a Basic Car Service?",
    answer:
      "We recommend going for a Basic Car Service periodically once every 3 months to maintain your car’s performance and protect it from corrosion.",
  },
];

const ServicesFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-md font-semibold text-gray-700">
                {faq.question}
              </h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesFaq;
