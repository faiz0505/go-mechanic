import React, { useState } from "react";
import { Circle, CircleCheck, Plus, Check } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
const EngineOilOptions = ({
  service,
  engineOilOptions,
  suggestedAddOns,
  handleAddWithAddons,
}) => {
  const [selectedOil, setSelectedOil] = useState(engineOilOptions[0]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Calculate total dynamically
  const totalAmount =
    service.price +
    selectedOil.price +
    selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  // Handle oil selection
  const handleSelectOil = (oil) => {
    setSelectedOil(oil);
  };

  // Handle Add-On Selection
  const toggleAddOn = (addOn) => {
    setSelectedAddOns(
      (prevSelected) =>
        prevSelected.some((item) => item.id === addOn.id)
          ? prevSelected.filter((item) => item.id !== addOn.id) // Remove if already selected
          : [...prevSelected, addOn] // Add new add-on
    );
  };

  return (
    <div>
      <p className="text-dark-gray font-semibold mb-2">Select Engine Oil</p>
      <div className="grid grid-cols-2 gap-4">
        {engineOilOptions.map((oil) => (
          <div
            key={oil.id}
            className={`p-4 border rounded cursor-pointer ${
              selectedOil.id === oil.id
                ? "bg-lavender-light border-royal-purple"
                : "bg-white"
            }`}
            onClick={() => handleSelectOil(oil)}
          >
            <h3 className="text-lg font-bold">{oil.name}</h3>
            <p className="text-red-500 font-semibold">{oil.brand}</p>
            <p className="text-gray-600 text-sm">{oil.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-lg">SAR {oil.price}</span>
              {selectedOil.id === oil.id ? (
                <CircleCheck size={20} className="text-royal-purple" />
              ) : (
                <Circle size={20} className="text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Add-Ons Section */}
      <div className="p-2 bg-lavender-mist my-4">
        <h2 className="text-center text-xl font-bold">Boost Your Service</h2>
        <p className="text-center text-dark-gray capitalize">
          for better Performance & mileage
        </p>
      </div>

      <div className="flex flex-col gap-4 relative">
      {suggestedAddOns.map((addOn) => {
        const isSelected = selectedAddOns.some((item) => item.id === addOn.id);

        return (
          <div
            key={addOn.id}
            onClick={() => toggleAddOn(addOn)}
            className={`flex flex-col gap-4 p-5 rounded-lg shadow-sm cursor-pointer border transition-all duration-200 hover:shadow-md ${
              isSelected ? "bg-green-50 border-green-500" : "bg-white"
            }`}
          >
            {/* Top Section - Icon, Title & Description */}
            <div className="flex items-start gap-4">
              <Image
                src={addOn.icon}
                alt={addOn.service}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-gray-800">
                  {addOn.service}
                </h3>
                <p className="text-sm text-gray-600">{addOn.description}</p>
              </div>
            </div>

            {/* AddOn Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Services/addOns/%20Font%202%402x.png"
                  alt="Time Taken"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-gray-700">{addOn.frequency}</span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Services/addOns/%20Font%203%402x.png"
                  alt="Warranty"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-gray-700">{addOn.warranty}</span>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Services/addOns/Font%2032%402x.png"
                  alt="Includes"
                  width={24}
                  height={24}
                />
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Includes:</span> {addOn.includes}
                </span>
              </div>
            </div>

            {/* Footer - Price & Toggle Icon */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-base font-semibold text-gray-800">
                SAR {addOn.price}
              </span>
              {isSelected ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Plus size={20} className="text-gray-400" />
              )}
            </div>
          </div>
        );
      })}
    </div>

      <div className="h-0.5 w-full bg-lavender-mist my-4 relative"></div>

      {/* Total and Add Button */}
      <div className="sticky bottom-0 w-full bg-white border-t rounded-md border-gray-200 px-4 py-3 z-50 shadow-md flex justify-between items-center">
        <p className="text-lg font-bold">Total SAR. {totalAmount}</p>
        <Button
          onClick={() =>
            handleAddWithAddons(service._id, totalAmount, selectedOil.name, selectedAddOns)
          }
          className="border uppercase border-royal-purple px-4 py-2 flex items-center gap-2 bg-royal-purple text-white"
        >
          <Plus size={16} /> Add
        </Button>
      </div>
    </div>
  );
};

const OptionModal = ({ service, options, handleAddWithAddons }) => {
  // State to track selected option type
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // Calculate total price
  const totalAmount = service.price + selectedOption.price;

  return (
    <div className="relative">
      <p className="text-dark-gray font-semibold mb-2 relative">{service.optionTitle}</p>

      {/* Battery Options */}
      <div className="grid gap-4">
        {options.map((option) => (
          <div
            key={option.name}
            className={`p-4 border rounded cursor-pointer ${
              selectedOption.name === option.name
                ? "bg-lavender-light border-royal-purple"
                : "bg-white"
            }`}
            onClick={() => setSelectedOption(option)}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-lg font-bold ${
                  selectedOption.name === option.name
                    ? "text-black"
                    : "text-gray-700"
                }`}
              >
                {option.name}
              </h3>
              {selectedOption.name === option.name ? (
                <CircleCheck size={20} className="text-royal-purple" />
              ) : (
                <Circle size={20} className="text-gray-400" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{option.description}</p>
            <span className="font-bold text-lg">SAR {option.price}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-0.5 w-full bg-lavender-mist my-4"></div>

      {/* Total and Add Button */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold">Total SAR. {totalAmount}</p>
        <Button
          onClick={() =>
            handleAddWithAddons(
              service._id,
              totalAmount,
              selectedOption.name,
              []
            )
          }
          className="border uppercase border-royal-purple px-4 py-2 flex items-center gap-2 bg-royal-purple text-white"
        >
          <Plus size={16} /> Add
        </Button>
      </div>
    </div>
  );
};

export { EngineOilOptions, OptionModal };
