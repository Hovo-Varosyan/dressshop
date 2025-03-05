"use client";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function RangePrice() {
  const marks = [
    { value: 0, label: "0" },
    { value: 15000, label: "15000" },
  ];

  const [value, setValue] = useState([0, 15000]);
  const minDistance = 2000;

  function valuetext(value) {
    return `${value}`;
  }
  const handleChange = (
    _,
    newValue,
    activeThumb
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Slider
      getAriaLabel={() => "Minimum distance "}
      value={value}
      onChange={handleChange}
      getAriaValueText={valuetext}
      marks={marks}
      min={0}
      max={15000}
      valueLabelDisplay={"on"}
      disableSwap
    />
  );
}
