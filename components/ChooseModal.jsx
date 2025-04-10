"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";
import Modal from "./ui/Modal";
import LocationCarSelector from "./LocationCarSelector";

const ChooseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    const storedCity = localStorage.getItem("location");
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  return (
    <>
      <Button
        className={"rounded-full fixed bottom-8 right-4 z-50"}
        onClick={setIsModalOpen}
      >
        <SlidersHorizontal />
        Choose Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Experience The Best Car Services In ${selectedCity}`}
      >
        <LocationCarSelector
          location={selectedCity}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default ChooseModal;
