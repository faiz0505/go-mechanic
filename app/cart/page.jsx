"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/utils/dummyData";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);

      const mergedCart = parsedCart.map((item) => {
        const service = servicesData.find((s) => s._id === item.serviceId);
        return {
          ...item,
          ...service,
          quantity: item.isMultipleSelectable ? item.quantity || 1 : 1,
          addons: (item.addons || []).map((addon) => {
            const matchingAddon = service?.addons?.find(
              (sAddon) => sAddon.id === addon.id
            );
            return {
              ...matchingAddon,
              ...addon,
            };
          }),
        };
      });

      setCartItems(mergedCart);
    }
  }, []);

  const incrementQuantity = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index] };
      if (item.isMultipleSelectable) {
        item.quantity += 1;
        item.totalAmount =
          (item.price +
            (item.selectedOptionPrice || 0) +
            getAddonsTotal(item)) *
          item.quantity;
      }
      updated[index] = item;
      updateLocalStorage(updated);
      return updated;
    });
  };

  const decrementQuantity = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const item = { ...updated[index] };
      if (item.isMultipleSelectable && item.quantity > 1) {
        item.quantity -= 1;
        item.totalAmount =
          (item.price +
            (item.selectedOptionPrice || 0) +
            getAddonsTotal(item)) *
          item.quantity;
      }
      updated[index] = item;
      updateLocalStorage(updated);
      return updated;
    });
  };

  const getAddonsTotal = (item) => {
    return (item.addons || []).reduce(
      (sum, addon) => sum + (addon.price || 0),
      0
    );
  };

  const getFinalPrice = (item) => {
    return (
      (item.price + (item.selectedOptionPrice || 0) + getAddonsTotal(item)) *
      item.quantity
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + getFinalPrice(item), 0);
  };

  const updateLocalStorage = (items) => {
    const formatted = items.map((item) => ({
      serviceId: item._id,
      quantity: item.quantity,
      isMultipleSelectable: item.isMultipleSelectable,
      selectedOption: item.selectedOption,
      selectedOptionPrice: item.selectedOptionPrice,
      addons: item.addons?.map((addon) => ({ id: addon.id })) || [],
    }));
    localStorage.setItem("cart", JSON.stringify(formatted));
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => {
      const updated = prev.filter((_, index) => index !== indexToRemove);
      updateLocalStorage(updated);
      return updated;
    });
  };

  return (
    <div className="py-10 paddings">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded-md shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.service_name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Option: {item.selectedOption}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-royal-purple text-xl font-medium">
                      SAR {getFinalPrice(item)}
                    </span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove from cart"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                {item.addons?.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Addons:</p>
                    <ul className="list-disc pl-6 text-sm">
                      {item.addons.map((addon) => (
                        <li key={addon.id}>
                         {addon.service} - SAR {addon.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.isMultipleSelectable && (
                  <div className="mt-4 flex items-center gap-4">
                    <Button onClick={() => decrementQuantity(index)}>-</Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button onClick={() => incrementQuantity(index)}>+</Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center border-t pt-6">
            <Link href="/checkout">
              <Button className="w-full text-xl font-semibold flex items-center justify-between gap-2">
                <span>SAR {getTotalPrice()}</span>
                <span>Checkout</span>
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
