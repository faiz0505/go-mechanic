import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";

const Page = () => {
  return (
    <div className="paddings py-10">
      {/* Page Title */}
      <SectionHeading title="Terms & Conditions" />

      {/* Introduction */}
      <p className="text-gray-600 mt-4">
        Welcome to [Your Company Name]. By using our website and services, you agree to the following terms and conditions. Please read them carefully.
      </p>

      {/* Terms Sections */}
      <div className="mt-6 space-y-6">
        {/* 1. Acceptance of Terms */}
        <section>
          <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using our website, you accept and agree to be bound by the terms and conditions outlined here.
          </p>
        </section>

        {/* 2. Services */}
        <section>
          <h2 className="text-lg font-semibold">2. Services</h2>
          <p className="text-gray-600">
            We provide various car services, including maintenance, repairs, and inspections. Service availability may vary by location.
          </p>
        </section>

        {/* 3. User Responsibilities */}
        <section>
          <h2 className="text-lg font-semibold">3. User Responsibilities</h2>
          <p className="text-gray-600">
            Users must provide accurate information, follow safety guidelines, and ensure timely payments for services booked through our platform.
          </p>
        </section>

        {/* 4. Payments & Refunds */}
        <section>
          <h2 className="text-lg font-semibold">4. Payments & Refunds</h2>
          <p className="text-gray-600">
            All payments are securely processed. Refunds are subject to our cancellation and refund policy.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section>
          <h2 className="text-lg font-semibold">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not responsible for indirect or consequential damages resulting from the use of our services.
          </p>
        </section>

        {/* 6. Changes to Terms */}
        <section>
          <h2 className="text-lg font-semibold">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these terms at any time. Continued use of our services after changes means you accept the revised terms.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-lg font-semibold">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms & Conditions, please contact us at{" "}
            <a href="mailto:support@yourcompany.com" className="text-blue-500">
              support@yourcompany.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
