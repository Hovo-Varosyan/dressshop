// src/primitives/create-controllable-signal/create-controllable-signal.ts
import { accessWith } from "@kobalte/utils";
import { createMemo, createSignal, untrack } from "solid-js";
function createControllableSignal(props) {
  const [_value, _setValue] = createSignal(props.defaultValue?.());
  const isControlled = createMemo(() => props.value?.() !== void 0);
  const value = createMemo(() => isControlled() ? props.value?.() : _value());
  const setValue = (next) => {
    untrack(() => {
      const nextValue = accessWith(next, value());
      if (!Object.is(nextValue, value())) {
        if (!isControlled()) {
          _setValue(nextValue);
        }
        props.onChange?.(nextValue);
      }
      return nextValue;
    });
  };
  return [value, setValue];
}
function createControllableBooleanSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? false;
  return [value, setValue];
}
function createControllableArraySignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? [];
  return [value, setValue];
}
function createControllableSetSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? /* @__PURE__ */ new Set();
  return [value, setValue];
}

export {
  createControllableSignal,
  createControllableBooleanSignal,
  createControllableArraySignal,
  createControllableSetSignal
};
