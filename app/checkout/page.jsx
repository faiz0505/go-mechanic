"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Banknote,
  CreditCard,
  LogIn,
  MapPin,
  Smartphone,
  Wallet,
} from "lucide-react";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState(1);
  const [customerMobileNumber, setCustomerMobileNumber] = useState(9876543210);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [locality, setLocality] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlineOption,setOnlineOption] = useState("")
  const localitySuggestions = ["Green Park", "Indira Nagar", "MG Road"];
  const savedAddresses = [
    { locality: "Palm Residency", flatNumber: "B-204" },
    { locality: "Sunshine Towers", flatNumber: "G-12" },
  ];

  const timeSlots = {
    morning: ["8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM"],
    afternoon: ["12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM"],
    evening: ["5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"],
  };

  const billAmount = 1200;
  const discount = 150;
  const fee = 50;
  const total = billAmount - discount + fee;

  const getNextFiveDays = () => {
    const today = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      return {
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        value: date,
      };
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Aside */}
        <aside className="w-full md:w-3/5 space-y-6">
          {!isLoggedIn ? (
            <div className="border p-4 rounded-md text-center space-y-4">
              <LogIn className="mx-auto h-6 w-6 text-gray-500" />
              <p className="text-sm">Please log in to book a service.</p>
              <Button onClick={() => setIsLoggedIn(true)}>Log In</Button>
            </div>
          ) : (
            <>
              {/* User Info */}
              <div className="border p-4 rounded-md space-y-2">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Logged In
                </h2>
                <p className="text-sm text-muted-foreground">
                  Customer |{" "}
                  <span className="font-medium">{customerMobileNumber}</span>
                </p>
              </div>
              <div className="border p-4 rounded-md space-y-4">
                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      1. Select Date and Time
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {getNextFiveDays().map((d, idx) => (
                        <Button
                          key={idx}
                          variant={
                            selectedDate?.toDateString() ===
                            d.value.toDateString()
                              ? "default"
                              : "outline"
                          }
                          onClick={() => setSelectedDate(d.value)}
                        >
                          {d.label}
                        </Button>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium mt-4">
                        Time Slot (Available)
                      </h4>
                      {Object.entries(timeSlots).map(([period, slots]) => (
                        <div key={period}>
                          <h5 className="capitalize text-muted-foreground">
                            {period}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {slots.map((slot) => (
                              <Button
                                key={slot}
                                variant={
                                  selectedTimeSlot === slot
                                    ? "default"
                                    : "outline"
                                }
                                onClick={() => setSelectedTimeSlot(slot)}
                              >
                                {slot}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleNext}
                        disabled={!selectedDate || !selectedTimeSlot}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Address */}
                {step === 2 && (
                  <div className=" space-y-4">
                    <h3 className="text-lg font-semibold">2. Enter Address</h3>
                    <Input
                      placeholder="Locality"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      list="locality-suggestions"
                    />
                    <datalist id="locality-suggestions">
                      {localitySuggestions.map((loc) => (
                        <option key={loc} value={loc} />
                      ))}
                    </datalist>
                    <Input
                      placeholder="Flat Number / Room Number"
                      value={flatNumber}
                      onChange={(e) => setFlatNumber(e.target.value)}
                    />

                    <div className="space-y-2 mt-4">
                      <h4 className="font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Saved Addresses
                      </h4>
                      {savedAddresses.map((addr, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setLocality(addr.locality);
                            setFlatNumber(addr.flatNumber);
                          }}
                          className="border rounded-md p-2 cursor-pointer hover:bg-muted"
                        >
                          {addr.flatNumber}, {addr.locality}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleNext} disabled={!locality}>
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="border p-4 rounded-md space-y-4">
                    <h3 className="text-lg font-semibold">3. Payment Method</h3>

                    {/* Pay Online Option */}
                    <label
                      className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer ${
                        paymentMethod === "online"
                          ? "bg-gray-100 border-blue-500"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={() => setPaymentMethod("online")}
                        className="accent-blue-600"
                      />
                      <CreditCard className="h-5 w-5 text-black" />
                      <span className="font-medium text-black">Pay Online</span>
                    </label>

                    {/* Online Sub-options */}
                    {paymentMethod === "online" && (
                      <div className="ml-6 space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="onlineOption"
                            value="phonepe"
                            checked={onlineOption === "phonepe"}
                            onChange={() => setOnlineOption("phonepe")}
                            className="accent-blue-600"
                          />
                          <Smartphone className="h-4 w-4 text-purple-600" />
                          PhonePe
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="onlineOption"
                            value="gpay"
                            checked={onlineOption === "gpay"}
                            onChange={() => setOnlineOption("gpay")}
                            className="accent-blue-600"
                          />
                          <Smartphone className="h-4 w-4 text-green-600" />
                          Google Pay
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="onlineOption"
                            value="netbanking"
                            checked={onlineOption === "netbanking"}
                            onChange={() => setOnlineOption("netbanking")}
                            className="accent-blue-600"
                          />
                          <Banknote className="h-4 w-4 text-gray-800" />
                          NetBanking
                        </label>
                      </div>
                    )}

                    {/* Pay with Cash Option */}
                    <label
                      className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer ${
                        paymentMethod === "cash"
                          ? "bg-gray-100 border-blue-500"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="accent-blue-600"
                      />
                      <Wallet className="h-5 w-5 text-black" />
                      <span className="font-medium text-black">
                        Pay with Cash
                      </span>
                    </label>

                    {/* Action Buttons */}
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        disabled={
                          !paymentMethod ||
                          (paymentMethod === "online" && !onlineOption)
                        }
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </aside>

        {/* Right Aside: Billing Summary */}
        <aside className="w-full md:w-2/5 border p-4 rounded-md space-y-4 h-fit">
          <h2 className="text-lg font-semibold">Bill Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Service Amount</span>
              <span>₹{billAmount}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ₹{discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Fee</span>
              <span>₹{fee}</span>
            </div>
            <hr />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <Button className="w-full">Proceed to Pay</Button>
        </aside>
      </div>
    </div>
  );
};

export default Page;
