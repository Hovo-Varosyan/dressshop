import Submit from "../../../ui/submit";
import regions from "../../../../assets/json/region.json";
import SelectAddres from "./select";
import { useState } from "react";
import SelectVillage from "./selectLoc";

export default function Addres({ loading }) {
  const [region, setRegion] = useState("");
  const [village, setVillage] = useState("");
  return (
    <form action="">
      <div className="my-4 flex flex-wrap div-container">
        <div>
          <label htmlFor="region">edit region </label>
          <SelectAddres data={regions} region={region} setRegion={setRegion} />
        </div>
        <div>
          <label htmlFor="city">edit city and village </label>
          <SelectVillage
            data={region}
            region={village}
            setRegion={setVillage}
          />
        </div>
        <div>
          <label htmlFor="street">edit street and home </label>
          <input type="text" id="street" />
        </div>
      </div>
      <div className="w-1/5 ">
        <Submit loading={loading} value="save" />
      </div>
    </form>
  );
}
