"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ClipboardList } from "lucide-react";
import Modal from "../ui/Modal";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCartItems = () => {
    const getItems = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (item) => ({
        ...item,
        quantity: item.quantity || 1,
        addons:
          item.addons?.map((addon) => ({
            ...addon,
            quantity: addon.quantity || 1,
          })) || [],
      })
    );
    setCartItems(getItems);
  };

  useEffect(() => {
    fetchCartItems();

    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        fetchCartItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const updateServiceQuantity = (index, delta) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity = Math.max(
        1,
        (newItems[index].quantity || 1) + delta
      );
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateAddonQuantity = (serviceIndex, addonIndex, delta) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const addon = newItems[serviceIndex].addons[addonIndex];
      addon.quantity = Math.max(1, (addon.quantity || 1) + delta);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const totalCartAmount = cartItems.reduce((acc, item) => {
    const serviceQty = item.isMultipleSelectable ? item.quantity || 1 : 1;
    const base = (item.totalAmount || 0) * serviceQty;
    const addonsTotal =
      item.addons?.reduce((sum, addon) => {
        const addonQty = item.isMultipleSelectable ? addon.quantity || 1 : 1;
        return sum + addon.price * addonQty;
      }, 0) || 0;
    return acc + base + addonsTotal;
  }, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-4 rounded-full h-12 w-12 shadow-lg bg-royal-purple text-white hover:bg-royal-purple/90"
        >
          <ClipboardList size={26} />
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Your Cart">
        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          {cartItems.map((item, serviceIndex) => (
            <div
              key={item.serviceId}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="font-semibold text-lg">
                Service Option: {item.selectedOption || "N/A"}
              </div>
              <div className="text-gray-600 flex items-center justify-between mt-2">
                <span>Base: ₹{item.totalAmount}</span>
                {item.isMultipleSelectable && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateServiceQuantity(serviceIndex, -1)}
                      className="px-2 py-1 bg-gray-700 text-white rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateServiceQuantity(serviceIndex, 1)}
                      className="px-2 py-1 bg-gray-700 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              {item.addons && item.addons.length > 0 && (
                <div className="mt-4">
                  <div className="font-medium mb-2">Addons:</div>
                  {item.addons.map((addon, addonIndex) => (
                    <div
                      key={addon.label}
                      className="flex items-center justify-between mb-2"
                    >
                      <span>
                        {addon.label} - ₹{addon.price}
                      </span>
                      {item.isMultipleSelectable ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateAddonQuantity(serviceIndex, addonIndex, -1)
                            }
                            className="px-2 py-1 bg-gray-700 text-white rounded"
                          >
                            -
                          </button>
                          <span>{addon.quantity || 1}</span>
                          <button
                            onClick={() =>
                              updateAddonQuantity(serviceIndex, addonIndex, 1)
                            }
                            className="px-2 py-1 bg-gray-700 text-white rounded"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">Qty: 1</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <div className="mt-6 w-full">
          <Button className="w-full" size={"lg"}>
            ₹{totalCartAmount} Checkout
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
