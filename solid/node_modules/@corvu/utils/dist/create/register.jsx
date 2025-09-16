import {
  access
} from "../chunk/U42ECMND.jsx";

// src/create/register.ts
import { createMemo, createSignal, mergeProps } from "solid-js";
var createRegister = (props) => {
  const defaultedProps = mergeProps(
    {
      initialRegistered: false
    },
    props
  );
  const [isRegistered, setIsRegistered] = createSignal(
    defaultedProps.initialRegistered
  );
  const registerable = createMemo(() => {
    if (!isRegistered()) return void 0;
    return access(defaultedProps.value);
  });
  return [
    registerable,
    () => {
      setIsRegistered(true);
    },
    () => {
      setIsRegistered(false);
    }
  ];
};
var register_default = createRegister;
export {
  register_default as default
};
