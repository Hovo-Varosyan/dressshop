import { clearAnnouncer, announce } from './YA7DCYMB.js';
import { Polymorphic } from './6Y7B2NEO.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps, callHandler } from '@kobalte/utils';
import { splitProps, createMemo, createEffect, on } from 'solid-js';
import { combineStyle } from '@solid-primitives/props';

// src/spin-button/spin-button.intl.ts
var SPIN_BUTTON_INTL_TRANSLATIONS = {
  // Used for voice over when text value is empty
  empty: "Empty"
};

// src/spin-button/spin-button-root.tsx
function SpinButtonRoot(props) {
  const mergedProps = mergeDefaultProps({
    translations: SPIN_BUTTON_INTL_TRANSLATIONS
  }, props);
  const [local, others] = splitProps(mergedProps, ["style", "translations", "value", "textValue", "minValue", "maxValue", "validationState", "onIncrement", "onIncrementPage", "onDecrement", "onDecrementPage", "onDecrementToMin", "onIncrementToMax", "onKeyDown", "onFocus", "onBlur"]);
  let isFocused = false;
  const textValue = createMemo(() => {
    if (local.textValue === "") {
      return local.translations?.empty;
    }
    return (local.textValue || `${local.value}`).replace("-", "\u2212");
  });
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || props.readOnly) {
      return;
    }
    switch (e.key) {
      case "PageUp":
        if (local.onIncrementPage) {
          e.preventDefault();
          local.onIncrementPage();
          break;
        }
      case "ArrowUp":
      case "Up":
        if (local.onIncrement) {
          e.preventDefault();
          local.onIncrement();
        }
        break;
      case "PageDown":
        if (local.onDecrementPage) {
          e.preventDefault();
          local.onDecrementPage();
          break;
        }
      case "ArrowDown":
      case "Down":
        if (local.onDecrement) {
          e.preventDefault();
          local.onDecrement();
        }
        break;
      case "Home":
        if (local.onDecrementToMin) {
          e.preventDefault();
          local.onDecrementToMin();
        }
        break;
      case "End":
        if (local.onIncrementToMax) {
          e.preventDefault();
          local.onIncrementToMax();
        }
        break;
    }
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    isFocused = true;
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    isFocused = false;
  };
  createEffect(on(textValue, (textValue2) => {
    if (isFocused) {
      clearAnnouncer("assertive");
      announce(textValue2 ?? "", "assertive");
    }
  }));
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    role: "spinbutton",
    get style() {
      return combineStyle({
        "touch-action": "none"
      }, local.style);
    },
    get ["aria-valuenow"]() {
      return local.value != null && !Number.isNaN(local.value) ? local.value : void 0;
    },
    get ["aria-valuetext"]() {
      return textValue();
    },
    get ["aria-valuemin"]() {
      return local.minValue;
    },
    get ["aria-valuemax"]() {
      return local.maxValue;
    },
    get ["aria-required"]() {
      return props.required || void 0;
    },
    get ["aria-disabled"]() {
      return props.disabled || void 0;
    },
    get ["aria-readonly"]() {
      return props.readOnly || void 0;
    },
    get ["aria-invalid"]() {
      return local.validationState === "invalid" || void 0;
    },
    onKeyDown,
    onFocus,
    onBlur
  }, others));
}

// src/spin-button/index.tsx
var SpinButton = SpinButtonRoot;

export { SpinButton, SpinButtonRoot };
