"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Check, Plus } from "lucide-react";
import Modal from "../ui/Modal";
import { EngineOilOptions, OptionModal } from "./AddToCartModals";
import { toast } from "sonner";

const AddToCartButton = ({ service }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    const alreadyExists = cartItems.find(
      (item) => item.serviceId === service._id
    );
    if (alreadyExists) return;

    const needsCustomization =
      service.has_addons ||
      (service.other_options && service.other_options.length > 0);

    if (!needsCustomization) {
      const newItem = {
        serviceId: service._id,
        totalAmount: service.price,
        addons: [],
        selectedOption: "",
        isMultipleSelectable: service.is_multiple_selectable,
      };
      const updatedCart = [...cartItems, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setIsInCart(true);
      toast.success("Added to cart successfully!");
    } else {
      setIsModalOpen(true);
    }
  };
  const handleAddWithAddons = (
    serviceId,
    totalAmount,
    selectedOption,
    addons
  ) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const newItem = {
      serviceId: serviceId,
      totalAmount: totalAmount,
      addons: [...addons],
      selectedOption: selectedOption,
      isMultipleSelectable: service.is_multiple_selectable,
    };
    const updatedCart = [...cartItems, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Added to cart successfully!");
    setIsModalOpen(false);
    setIsInCart(true);
  };
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const checkInCart = cartItems.find(
      (item) => item.serviceId === service._id
    );
    if (checkInCart) {
      setIsInCart(true);
    }
  }, []);
  return (
    <>
      <Button
        onClick={handleAddToCart}
        variant={isInCart ? "ghost" : "default"}
      >
        {isInCart ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Added
          </>
        ) : (
          <>
            <Plus className="w-4 h-4 mr-2" />
            Add to Cart
          </>
        )}
      </Button>
      <Modal
        title={service.service_name}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        {service.includesEngineOil ? (
          <EngineOilOptions
            service={service}
            engineOilOptions={service.options}
            suggestedAddOns={service.addons}
            handleAddWithAddons={handleAddWithAddons}
          />
        ) : (
          <OptionModal
            service={service}
            options={service.options}
            suggestedAddOns={service.addons}
            handleAddWithAddons={handleAddWithAddons}
          />
        )}
      </Modal>
    </>
  );
};

export default AddToCartButton;
