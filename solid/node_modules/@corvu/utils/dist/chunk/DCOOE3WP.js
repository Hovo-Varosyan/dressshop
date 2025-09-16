import { tagName_default } from './ZFSWB5ZX.js';
import { isButton } from './VPNLJWYW.js';
import { mergeRefs } from './ZV6G25TT.js';
import { createComponent, Dynamic as Dynamic$1, mergeProps } from 'solid-js/web';
import { splitProps, createMemo, untrack, createSignal } from 'solid-js';

var Dynamic = (props) => {
  const [localProps, otherProps] = splitProps(props, ["as"]);
  const cached = createMemo(() => localProps.as ?? "div");
  const memoizedDynamic = createMemo(() => {
    const component = cached();
    switch (typeof component) {
      case "function":
        return untrack(() => component(otherProps));
      case "string":
        return createComponent(Dynamic$1, mergeProps({
          component
        }, otherProps));
    }
  });
  return memoizedDynamic;
};
var Dynamic_default = Dynamic;

// src/dynamic/DynamicButton.tsx
var DynamicButton = (props) => {
  const [ref, setRef] = createSignal(null);
  const [localProps, otherProps] = splitProps(props, ["ref", "type"]);
  const tagName = tagName_default({
    element: ref,
    fallback: "button"
  });
  const memoizedIsButton = createMemo(() => {
    return isButton(tagName(), localProps.type);
  });
  return createComponent(Dynamic_default, mergeProps({
    as: "button",
    ref(r$) {
      var _ref$ = mergeRefs(setRef, localProps.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get type() {
      return memoizedIsButton() ? "button" : void 0;
    },
    get role() {
      return !memoizedIsButton() ? "button" : void 0;
    }
  }, otherProps));
};
var DynamicButton_default = DynamicButton;

export { DynamicButton_default, Dynamic_default };
