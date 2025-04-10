"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React from "react";
const QueryLink = ({ label, param, value, className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = () => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set(param, value.split("%20").join("-"));
    console.log(value);

    pathname === "/"
      ? router.push(`/services//sheduled-services?${currentParams.toString()}`)
      : router.push(`${pathname}?${currentParams.toString()}`);
  };

  return (
    <li
      onClick={handleClick}
      className={
        className ||
        "hover:text-lavender-light hover:underline cursor-pointer bg-transparent border-none p-0"
      }
    >
      {label}
    </li>
  );
};

export default QueryLink;
