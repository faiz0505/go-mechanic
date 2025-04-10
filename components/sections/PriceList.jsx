"use client";
import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { priceList } from "@/utils/dummyData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

const PriceList = () => {
  const location = "Jeddah";
  const locationData = priceList.find((item) => item.location === location);

  if (!locationData) {
    return (
      <section className="paddings">
        <SectionHeading
          title={`Car service price list in ${location}, Saudi Arabia 2025`}
        />
        <p className="text-medium-gray text-center py-4">
          No pricing data available for {location}.
        </p>
      </section>
    );
  }

  const { services } = locationData;
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="paddings">
      <SectionHeading
        title={`Car service price list in ${location}, Saudi Arabia 2025`}
      />
      <Table className="bg-cream rounded">
        <TableHeader>
          <TableRow>
            <TableHead className="border-r">Service Type</TableHead>
            <TableHead className="border-r">Price Starts From (SAR)</TableHead>
            <TableHead className="border-r">Savings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleServices.length > 0 ? (
            visibleServices.map((service, i) => (
              <TableRow key={i}>
                <TableCell className="border-r">{service.name}</TableCell>
                <TableCell className="border-r">
                  ﷼ {service.price.toLocaleString()}
                </TableCell>
                <TableCell className="border-r">{service.savings}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan="3"
                className="text-center py-4 text-medium-gray"
              >
                No services available for {location}.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Show More / Show Less Button */}
      {services.length > 4 && (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setShowAll(!showAll)} variant="ghost">
            {showAll ? "See Less" : "See More"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default PriceList;
