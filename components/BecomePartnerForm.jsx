"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Wrench, Package } from "lucide-react";

const BecomePartnerForm = () => {
  const [partnerType, setPartnerType] = useState("workshop");
  const [formData, setFormData] = useState({
    contactName: "",
    mobile: "",
    locality: "",
    workshopName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    contactName: "",
    mobile: "",
    locality: "",
  });

  const handleToggle = (type) => {
    setPartnerType(type);
    setFormData({
      contactName: "",
      mobile: "",
      locality: "",
      workshopName: "",
      email: "",
    });
    setErrors({
      contactName: "",
      mobile: "",
      locality: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = { contactName: "", mobile: "", locality: "" };

    if (!formData.contactName) newErrors.contactName = "Name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.locality) newErrors.locality = "Locality is required";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-lavender-light p-4 rounded-lg shadow">
      <SectionHeading title={"Become a Partner"} />

      {/* Toggle Buttons */}
      <div className="flex space-x-4 mb-6 justify-center">
        <Button
          onClick={() => handleToggle("workshop")}
          className={cn(
            "flex items-center space-x-2 px-4 py-2 transition",
            partnerType === "workshop"
              ? "bg-royal-purple text-white"
              : "bg-lavender text-deep-purple hover:bg-lilac"
          )}
        >
          <Wrench size={16} />
          <span>Car Workshop</span>
        </Button>

        <Button
          onClick={() => handleToggle("retailer")}
          className={cn(
            "flex items-center space-x-2 px-4 py-2 transition",
            partnerType === "retailer"
              ? "bg-royal-purple text-white"
              : "bg-lavender text-deep-purple hover:bg-lilac"
          )}
        >
          <Package size={16} />
          <span>Spares Retailer</span>
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Person Name */}
        <div>
          <Input
            name="contactName"
            placeholder="Contact Person Name"
            value={formData.contactName}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
          {errors.contactName && (
            <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <Input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Locality */}
        <div>
          <Input
            name="locality"
            placeholder="Locality"
            value={formData.locality}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
          {errors.locality && (
            <p className="text-red-500 text-sm mt-1">{errors.locality}</p>
          )}
        </div>

        {/* Workshop Name (Only for Workshop) */}
        {partnerType === "workshop" && (
          <div>
            <Input
              name="workshopName"
              placeholder="Workshop Name (Optional)"
              value={formData.workshopName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        )}

        {/* Email (Only for Retailer) */}
        {partnerType === "retailer" && (
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-royal-purple text-white px-4 py-2 w-full hover:bg-deep-purple flex items-center justify-center"
        >
          Request a Call
        </Button>
      </form>
    </div>
  );
};

export default BecomePartnerForm;
