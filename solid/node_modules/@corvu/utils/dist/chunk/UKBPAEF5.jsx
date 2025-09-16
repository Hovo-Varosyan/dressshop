import {
  tagName_default
} from "./XJFCWSNS.jsx";
import {
  isButton
} from "./74BWZKBI.jsx";
import {
  mergeRefs
} from "./U42ECMND.jsx";

// src/dynamic/DynamicButton.tsx
import {
  createMemo as createMemo2,
  createSignal,
  splitProps as splitProps2
} from "solid-js";

// src/dynamic/Dynamic.tsx
import {
  createMemo,
  splitProps,
  untrack
} from "solid-js";
import { Dynamic as SolidDynamic } from "solid-js/web";
var Dynamic = (props) => {
  const [localProps, otherProps] = splitProps(props, ["as"]);
  const cached = createMemo(() => localProps.as ?? "div");
  const memoizedDynamic = createMemo(() => {
    const component = cached();
    switch (typeof component) {
      case "function":
        return untrack(() => component(otherProps));
      case "string":
        return <SolidDynamic component={component} {...otherProps} />;
    }
  });
  return memoizedDynamic;
};
var Dynamic_default = Dynamic;

// src/dynamic/DynamicButton.tsx
var DynamicButton = (props) => {
  const [ref, setRef] = createSignal(null);
  const [localProps, otherProps] = splitProps2(
    props,
    ["ref", "type"]
  );
  const tagName = tagName_default({
    element: ref,
    fallback: "button"
  });
  const memoizedIsButton = createMemo2(() => {
    return isButton(tagName(), localProps.type);
  });
  return <Dynamic_default
    as="button"
    ref={mergeRefs(setRef, localProps.ref)}
    type={memoizedIsButton() ? "button" : void 0}
    role={!memoizedIsButton() ? "button" : void 0}
    {...otherProps}
  />;
};
var DynamicButton_default = DynamicButton;

export {
  Dynamic_default,
  DynamicButton_default
};
