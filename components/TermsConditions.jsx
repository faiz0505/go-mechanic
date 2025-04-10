import React from "react";

const TermsConditions = () => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        GoMechanic SOS Services Terms and Conditions
      </h2>
      <div className="p-4">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            GoMechanic's SOS Service will be available for 7 days from 10:00 a.m.
            to 7:00 p.m. only.
          </li>
          <li>
            GoMechanic shall not be held responsible for delay if the customer
            fails in providing the correct location due to any reason.
          </li>
          <li>
            The GoMechanic Service Buddy will provide you with an estimate for
            repair or replacement as per the visible damages.
          </li>
          <li>
            The estimate may vary depending on your vehicle's internal damage
            after a thorough inspection of your car at a GoMechanic workshop.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditions;
