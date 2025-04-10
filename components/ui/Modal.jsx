"use client";
import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, subTitle, children, size = "md" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    max: "max-w-max",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50 scrollbar-hide">
      <div
        className={`bg-white rounded-lg shadow-lg w-full m-4 overflow-y-auto max-h-[90vh] scrollbar-hide ${sizeClasses[size]}`}
      >
        <div className="flex justify-between items-center p-3 border-b border-light-200">
          <div>
            <h2 className="text-md text-black font-semibold">{title}</h2>
            {subTitle && <p className="text-sm text-dark-gray">{subTitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-black cursor-pointer focus:outline-none"
          >
            <X />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
