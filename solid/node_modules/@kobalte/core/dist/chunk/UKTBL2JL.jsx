import {
  createTagName
} from "./OYES4GOP.jsx";
import {
  Polymorphic
} from "./FLVHQV4A.jsx";
import {
  __export
} from "./5WXHJDCZ.jsx";

// src/button/index.tsx
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  Root: () => ButtonRoot
});

// src/button/button-root.tsx
import { mergeDefaultProps, mergeRefs } from "@kobalte/utils";
import { createMemo, splitProps } from "solid-js";

// src/button/is-button.ts
var BUTTON_INPUT_TYPES = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
];
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button") {
    return true;
  }
  if (tagName === "input" && element.type) {
    return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
  }
  return false;
}

// src/button/button-root.tsx
function ButtonRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps(
    { type: "button" },
    props
  );
  const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);
  const tagName = createTagName(
    () => ref,
    () => "button"
  );
  const isNativeButton = createMemo(() => {
    const elementTagName = tagName();
    if (elementTagName == null) {
      return false;
    }
    return isButton({ tagName: elementTagName, type: local.type });
  });
  const isNativeInput = createMemo(() => {
    return tagName() === "input";
  });
  const isNativeLink = createMemo(() => {
    return tagName() === "a" && ref?.getAttribute("href") != null;
  });
  return <Polymorphic
    as="button"
    ref={mergeRefs((el) => ref = el, local.ref)}
    type={isNativeButton() || isNativeInput() ? local.type : void 0}
    role={!isNativeButton() && !isNativeLink() ? "button" : void 0}
    tabIndex={!isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0}
    disabled={isNativeButton() || isNativeInput() ? local.disabled : void 0}
    aria-disabled={!isNativeButton() && !isNativeInput() && local.disabled ? true : void 0}
    data-disabled={local.disabled ? "" : void 0}
    {...others}
  />;
}

// src/button/index.tsx
var Button = ButtonRoot;

export {
  ButtonRoot,
  Button,
  button_exports
};
