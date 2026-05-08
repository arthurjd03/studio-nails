"use client"

import Services from "@/components/Services";
import { Service } from "@/types/service";
import { useState } from "react";
import PriceCalculator from "@/components/PriceCalculator";

export default function SelectorService() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  return (
    <>
    <Services
      selectedServices={selectedServices}
      setSelectedServices={setSelectedServices}
    />
    <PriceCalculator selectedServices={selectedServices}/>
    </>
  );
}