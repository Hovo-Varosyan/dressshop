import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import locationJson from "../../../../assets/json/location.json";

export default function SelectVillage({
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
        disabled={Boolean(region)}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={region}
        label="Age"
        onChange={handleChange}
      >
        { data &&  Object.entries(locationJson[data]["city"])
          .sort(([, a], [, b]) => a.hy.localeCompare(b.hy, "hy"))
          .map(([key, name]) => (
            <MenuItem key={name["en"]} value={key}>
              {name["hy"]}
            </MenuItem>
          ))}
        {data && Object.entries(locationJson[data]["village"])
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
