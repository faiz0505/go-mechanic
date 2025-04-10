import { Car, CalendarCheck, Eye, Gift } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    id: "1",
    title: "Select The Perfect Car Service",
    description: "From GoMechanic's broad portfolio of services",
    icon: <Car className="md:w-14 md:h-14 h-10 w-10 text-red-500" />,
  },
  {
    id: "2",
    title: "Schedule Free Doorstep Pick-up",
    description: "We offer free pick-up and drop for all services booked",
    icon: <CalendarCheck className="md:w-14 md:h-14 h-10 w-10 text-blue-500" />,
  },
  {
    id: "3",
    title: "Track Your Car Service Real-Time",
    description: "We will take care of everything from here!",
    icon: <Eye className="md:w-14 md:h-14 h-10 w-10 text-green-500" />,
  },
  {
    id: "4",
    title: "Earn While We Service",
    description: "Spread the word! You get Rs.750. Your friends get Rs.750!",
    icon: <Gift className="md:w-14 md:h-14 h-10 w-10 text-yellow-500" />,
  },
];

const HowWorks = () => {
  return (
    <section className="paddings">
      <SectionHeading title={"How GoMechanic Works"} />
      <div className="relative border-l-4 border-gray-300 md:pl-6 pl-3 space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            {/* Step Number */}
            <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-deep-purple rounded-full">
              {step.id}
            </div>

            {/* Content */}
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-700">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>

            {/* Icon */}
            <div className="md:ml-auto ml-4">{step.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
