import React from "react";
import Faq from "@/components/sections/Faq";

const Page = async ({ params }) => {
  const { location } = await params;

  return (
    <div className="py-10 paddings flex flex-col-reverse md:flex-row gap-4">
      {/* Left Section - FAQ */}
      <aside className="md:w-2/3 w-full">
        <Faq title="Frequently Asked Questions" />
      </aside>

      {/* Right Section - Map */}
      <aside className="md:w-1/3 w-full h-[300px] md:h-auto">
        <h2 className="capitalize text-xl font-semibold mb-4">
          GoMechanic Work shop near you
        </h2>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "5px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${location}&output=embed`}
        />
      </aside>
    </div>
  );
};

export default Page;
