import { Car, Settings, ShieldCheck, BadgeDollarSign } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const guarantees = [
  {
    icon: <Car className="w-8 h-8 text-blue-600" />,
    title: "Free Pickup Drop",
    bg: "bg-blue-50",
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-600" />,
    title: "Genuine Parts",
    bg: "bg-purple-50",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "30 Days Warranty",
    bg: "bg-green-50",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-yellow-600" />,
    title: "Affordable Prices",
    bg: "bg-yellow-50",
  },
];

const Guarantee = () => {
  return (
    <section className="paddings">
      <SectionHeading title={"GoMechanic Guarantee"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {guarantees.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col justify-between items-center p-4 gap-2 rounded-lg shadow-md ${item.bg} transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="">{item.icon}</div>
            <h3 className="md:text-lg font-semibold text-gray-700 text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guarantee;
