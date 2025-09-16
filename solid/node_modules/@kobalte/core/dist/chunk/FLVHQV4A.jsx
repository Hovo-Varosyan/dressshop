// src/polymorphic/polymorphic.tsx
import {
  splitProps
} from "solid-js";
import { Dynamic } from "solid-js/web";
function Polymorphic(props) {
  const [local, others] = splitProps(props, ["as"]);
  if (!local.as) {
    throw new Error(
      "[kobalte]: Polymorphic is missing the required `as` prop."
    );
  }
  return (
    // @ts-ignore: Props are valid but not worth calculating
    <Dynamic {...others} component={local.as} />
  );
}

export {
  Polymorphic
};
