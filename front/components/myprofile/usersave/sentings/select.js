import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";



export default function SelectAddres({
  data,
  region,
  setRegion,
}) {
  function handleChange(e) {
    setRegion(e.target.value);
  }
  console.log(data);
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={region}
        label="Age"
        onChange={handleChange}
      >
        {Object.entries(data)
          .sort(([, a], [, b]) => a.hy.localeCompare(b.hy, "hy"))
          .map(([key, name]) => (
            <MenuItem key={name["en"]} value={key}>
              {name["hy"]}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
