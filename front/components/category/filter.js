"use client"
import { Switch } from "@mui/material";
import RangePrice from "../product/range";
import { useState } from "react";

export default function Filter() {
  const [selected, setSelected] = useState("")
  
  return (
    <section className="py-2 px-3 bg-black product-filter min-w-[150px]">
      <div><p className="px-2"></p>
        <select name="sort" value={selected} onChange={({ target }) => setSelected(target.value)} className="w-full">
          <option value="" disabled>
            դասավորել
          </option>
          <option value="default">սովորական</option>
          <option value="price-desc">ըստ գնի նվազման</option>
          <option value="price-asc">ըստ գնի աճման</option>
          <option value="date-added">ըստ ավելացման ամսաթվի</option>
        </select>
      </div>

      <div>
        <p>Ըստ գնի</p>
        <div className="px-2"><RangePrice /></div>
      </div>
      <div>
        <p>Ըստ Չափսի</p>
        <div className="flex gap-3 flex-wrap justify-center size">
          {
            ["XS", "S", "M", "L", "XL", "XXL"].map((e) => <div key={e}>{e}</div>)
          } </div>
        <div>
          ըստ հումքի
          <label>
            <input type="checkbox" name="g" id="s1" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s2" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s3" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s4" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s5" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s6" />
            vs
          </label>
          <label>
            <input type="checkbox" name="g" id="s7" />
            vs
          </label>
        </div>
        <div>
          <p>Ակցիա</p>
          <Switch inputProps={{ "aria-label": "akcia switch" }} />
        </div>
      </div>
    </section>
  )
}
