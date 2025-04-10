"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialMediaLinks } from "@/utils";
import Link from "next/link";

const ContactPage = () => {
  // Form state & error handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error); // Check if there are any errors
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate sending the form
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };
  const socialMedia = [
    {
      icon: <Facebook />,
      url: socialMediaLinks.facebook,
    },
    {
      icon: <Instagram />,
      url: socialMediaLinks.instagram,
    },
    {
      icon: <Twitter />,
      url: socialMediaLinks.twitter,
    },

    {
      icon: <Youtube />,
      url: socialMediaLinks.youtube,
    },
  ];

  return (
    <div className="py-10 paddings">
      <SectionHeading title={"Contact Us"} />

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-lavender-light p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-deep-purple mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-royal-purple text-white px-4 py-2 w-full hover:bg-deep-purple"
            >
              <Send size={16} className="mr-2" /> Send Message
            </Button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-between bg-lavender-light p-6 rounded-lg shadow-md">
          <div className="">
            <h2 className="text-xl font-semibold text-deep-purple mb-4">
              Get in Touch
            </h2>

            {/* Address */}
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="text-royal-purple" />
              <p className="text-gray-700">
                123 Auto Street, Riyadh, Saudi Arabia
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="text-royal-purple" />
              <p className="text-gray-700">+966 123 456 789</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="text-royal-purple" />
              <p className="text-gray-700">support@gomechanic.com</p>
            </div>
          </div>
          <ul className="text-royal-purple flex gap-6 mt-8">
            {socialMedia.map((item, i) => (
              <li key={i} className="hover:text-lavender">
                <Link href={item.url}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
