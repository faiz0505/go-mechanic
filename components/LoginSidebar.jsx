"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Login({ open, onOpenChange }) {
  const [step, setStep] = useState(1);
  const [countryCode] = useState("+966"); // Saudi code fixed
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log(`Sending OTP to ${countryCode}${phone}`);
    setStep(2);
    toast.success(`OTP sent to ${countryCode}${phone}`);
  };

  const handleVerifyOtp = () => {
    console.log(`Verifying OTP: ${otp}`);
    toast.success("OTP Verified Successfully!");
    onOpenChange(false);
    setStep(1);
    setPhone("");
    setOtp("");
  };

  const handleBack = () => {
    setStep(1);
    setOtp("");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="ml-auto w-full max-w-sm border-l shadow-xl">
        <DrawerHeader className="pb-0">
          <div className="flex items-center gap-2">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-muted-foreground hover:text-primary transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <DrawerTitle className="text-lg font-semibold">
                {step === 1 ? "Login with Phone" : "Verification"}
              </DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground">
                {step === 1
                  ? "Enter your phone number to receive an OTP."
                  : `OTP sent to ${countryCode}${phone}`}
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        <div className="p-4 space-y-6">
          {step === 1 ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center gap-2">
                  <span className="flex items-center px-3 py-2 border rounded-md bg-muted text-sm font-medium">
                    {countryCode}
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="5XXXXXXXX"
                    required
                    className="flex-1"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send OTP
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1.5">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="text-center tracking-widest text-lg"
                  required
                />
              </div>
              <Button className="w-full" onClick={handleVerifyOtp}>
                Verify OTP
              </Button>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
