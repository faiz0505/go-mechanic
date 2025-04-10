import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="paddings py-10">
      {/* Page Title */}
      <SectionHeading title="Privacy Policy" />

      {/* Introduction */}
      <p className="text-gray-600 mt-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our services.
      </p>

      {/* Privacy Sections */}
      <div className="mt-6 space-y-6">
        {/* 1. Information We Collect */}
        <section>
          <h2 className="text-lg font-semibold">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information such as name, email, phone number,
            and payment details when you use our services.
          </p>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2 className="text-lg font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We use your information to provide and improve our services, process
            payments, and communicate with you.
          </p>
        </section>

        {/* 3. Data Protection & Security */}
        <section>
          <h2 className="text-lg font-semibold">
            3. Data Protection & Security
          </h2>
          <p className="text-gray-600">
            We implement security measures to protect your personal data from
            unauthorized access or misuse.
          </p>
        </section>

        {/* 4. Cookies & Tracking */}
        <section>
          <h2 className="text-lg font-semibold">4. Cookies & Tracking</h2>
          <p className="text-gray-600">
            Our website may use cookies to enhance user experience and analyze
            site traffic. You can manage cookie settings in your browser.
          </p>
        </section>

        {/* 5. Third-Party Sharing */}
        <section>
          <h2 className="text-lg font-semibold">5. Third-Party Sharing</h2>
          <p className="text-gray-600">
            We do not sell or rent your personal information. However, we may
            share data with trusted service providers for operational purposes.
          </p>
        </section>

        {/* 6. Your Rights & Choices */}
        <section>
          <h2 className="text-lg font-semibold">6. Your Rights & Choices</h2>
          <p className="text-gray-600">
            You have the right to access, update, or request deletion of your
            personal data. Contact us for any such requests.
          </p>
        </section>

        {/* 7. Changes to This Policy */}
        <section>
          <h2 className="text-lg font-semibold">7. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy periodically. Changes will be
            reflected on this page.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-lg font-semibold">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:support@yourcompany.com" className="text-blue-500">
              support@yourcompany.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
