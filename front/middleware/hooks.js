import { useState } from "react";

function useChange(e) {
  const [data, setValue] = useState(e);
  function setData(e) {
    const { value, name } = e.target;

    setValue((prev) => ({ ...prev, [name]: value }));
  }
  return { data, setData };
}
export { useChange };
