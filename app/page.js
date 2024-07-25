"use client";
import Image from "next/image";
import Navbar from "./Navbar";

import { useTheme } from "next-themes";
import Slider from "./pages/Slider";
import React, { useState } from 'react';


export default function Page() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <>
      <Navbar sliderIndex={sliderIndex} />
      <Slider setSliderIndex={setSliderIndex} />
    </>
  );
};
