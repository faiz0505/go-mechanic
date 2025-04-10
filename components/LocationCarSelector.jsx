"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { locations } from "@/utils/dummyData";
import { Button } from "./ui/button";
import { ChevronLeft, Droplet, Fuel, Leaf, Star } from "lucide-react";
import { carBrands, modelsByBrand } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import NoData from "./NoData";
const fuelTypes = [
  { label: "Petrol", icon: Droplet },
  { label: "Diesel", icon: Fuel },
  { label: "CNG", icon: Leaf },
];
const LocationCarSelector = ({ location, setIsModalOpen }) => {
  const [isModalSelectOpen, setIsModalSelectOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    location: location,
    carPreferences: {
      brand: "",
      model: "",
      fuel: "",
    },
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});
  const searchParams = useSearchParams();
  useEffect(() => {
    const location = searchParams.get("location");
    const brand = searchParams.get("brand");

    setFormData((prev) => ({
      ...prev,
      location: location || prev.location,
      carPreferences: {
        ...prev.carPreferences,
        brand: brand || prev.carPreferences.brand,
      },
    }));
  }, [searchParams]);

  const handleCheck = () => {
    const newErrors = {};

    if (!formData.location) {
      newErrors.location = "Please select a location";
    }

    if (!formData.carPreferences.brand) {
      newErrors.brand = "Please select a car brand";
    }

    if (!formData.carPreferences.model) {
      newErrors.model = "Please select a car model";
    }

    if (!formData.carPreferences.fuel) {
      newErrors.fuel = "Please select a fuel type";
    }

    if (!formData.mobileNumber || formData.mobileNumber.length < 10) {
      newErrors.mobileNumber = "Please enter a valid mobile number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    localStorage.setItem("preferences", JSON.stringify(formData));
    setIsModalOpen(false);
  };

  return isModalSelectOpen ? (
    <CarModalSelector
      setIsModalSelectOpen={setIsModalSelectOpen}
      formData={formData}
      setFormData={setFormData}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      setErrors={setErrors}
    />
  ) : (
    <div>
      <p className="text-red-500 text-sm">
        {errors.location || errors.fuel || errors.mobileNumber}
      </p>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={formData.location || "Select Location"} />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem value={location} key={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div
        className="border h-10 w-full font-bold p-2 mt-2 cursor-pointer"
        onClick={() => {
          if (formData.carPreferences.brand) {
            setActiveStep((pre) => pre + 1);
          }
          setIsModalSelectOpen(true);
        }}
      >
        {formData.carPreferences.brand ||
        formData.carPreferences.model ||
        formData.carPreferences.fuel ? (
          <>
            {formData.carPreferences.brand?.name ||
              formData.carPreferences.brand}
            {formData.carPreferences.model &&
              ` ${formData.carPreferences.model}`}
            {formData.carPreferences.fuel && ` ${formData.carPreferences.fuel}`}
          </>
        ) : (
          "Select Your Car"
        )}
      </div>
      <input
        type="number"
        placeholder="Mobile Number"
        className="px-3 py-2 border w-full mt-2"
        onChange={(e) => {
          setErrors({});
          setFormData((pre) => ({ ...pre, mobileNumber: e.target.value }));
        }}
        value={formData.mobileNumber}
      />
      <Button className={"mt-4 w-full"} size={"lg"} onClick={handleCheck}>
        Check Price For Free
      </Button>
      <div className="flex items-center gap-6 text-center justify-center mt-4">
        {/* Rating Section */}
        <div className="flex items-center gap-2 border-r pr-6">
          <Star className="text-green-600 h-5 w-5 fill-green-600" />
          <div className="text-sm">
            <div className="text-green-600 font-bold text-lg leading-none">
              4.0<span className="text-sm text-green-600">/5</span>
            </div>
            <div className="text-xs text-gray-600 leading-tight">
              Based on 150000+
              <br />
              Reviews
            </div>
          </div>
        </div>

        {/* Happy Customers */}
        <div className="text-sm text-center">
          <div className="text-lg font-bold text-slate-900 leading-none">
            2 Million+
          </div>
          <div className="text-xs text-gray-600 leading-tight">
            Happy
            <br />
            Customers
          </div>
        </div>
      </div>
    </div>
  );
};

const CarModalSelector = ({
  setIsModalSelectOpen,
  formData,
  setFormData,
  activeStep,
  setActiveStep,
  setErrors,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(activeStep);

  const handleBrandSelect = (brand) => {
    setFormData((pre) => ({
      ...pre,
      carPreferences: { ...pre.carPreferences, brand, model: "" },
    }));
    setActiveStep(1);
    setSearchQuery("");
  };

  const handleModelSelect = (model) => {
    setFormData((pre) => ({
      ...pre,
      carPreferences: { ...pre.carPreferences, model },
    }));
    setActiveStep((pre) => pre + 1);
  };
  const handleFuelSelect = (fuel) => {
    setFormData((pre) => ({
      ...pre,
      carPreferences: { ...pre.carPreferences, fuel: fuel },
    }));
    setErrors({});
    setIsModalSelectOpen(false);
  };

  const filteredBrands = carBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {activeStep === 0 ? (
          <Button
            variant={"ghost"}
            onClick={() => {
              setActiveStep((pre) => pre - 1);
              setIsModalSelectOpen(false);
            }}
          >
            <ChevronLeft />
          </Button>
        ) : (
          <Button
            variant={"ghost"}
            onClick={() => setActiveStep((pre) => pre - 1)}
          >
            <ChevronLeft />
          </Button>
        )}
        <p className="font-semibold">
          {activeStep === 0 ? "Select Manufacturer" : "Select Model"}
        </p>
      </div>

      {/* Search Input */}
      <input
        type="search"
        className="w-full mb-2 border rounded px-3 py-2"
        placeholder={activeStep === 0 ? "Search Brand" : "Search Model"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Step 1: Brand selection */}
      {activeStep === 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">
          {(searchQuery ? filteredBrands : carBrands).map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => handleBrandSelect(brand)}
            >
              <div className="flex items-center justify-center h-24 w-24 border rounded-md overflow-hidden bg-lavender-light">
                <div className="h-16 w-16 flex items-center justify-center rounded hover:scale-110 transition">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/96?text=Logo")
                    }
                    className="max-h-12 max-w-12 object-contain"
                  />
                </div>
              </div>
              <h2 className="mt-2 text-sm font-medium">{brand.name}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Model selection */}
      {activeStep === 1 && (
        <div className="grid grid-cols-1 gap-2 mt-2">
          {modelsByBrand[formData.carPreferences.brand.name]?.length ? (
            modelsByBrand[formData.carPreferences.brand.name]
              .filter((model) =>
                model.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((model) => (
                <div
                  key={model}
                  className="p-3 border rounded-md cursor-pointer hover:bg-gray-100 text-sm font-medium"
                  onClick={() => handleModelSelect(model)}
                >
                  {model}
                </div>
              ))
          ) : (
            <NoData />
          )}
        </div>
      )}
      {activeStep === 2 && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {fuelTypes.map((fuel) => (
            <div
              key={fuel.label}
              className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-4 border rounded-md"
              onClick={() => handleFuelSelect(fuel.label)}
            >
              <fuel.icon className="h-6 w-6 mb-1" />
              <span className="text-sm font-medium">{fuel.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationCarSelector;
