// src/create/once.ts
import { createMemo } from "solid-js";
var createOnce = (fn) => {
  let result;
  let called = false;
  return () => {
    if (called) {
      return result;
    } else {
      called = true;
      return result = createMemo(fn);
    }
  };
};
var once_default = createOnce;
export {
  once_default as default
};
