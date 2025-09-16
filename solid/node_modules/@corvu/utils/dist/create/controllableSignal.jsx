// src/create/controllableSignal.ts
import {
  createSignal,
  untrack
} from "solid-js";
function createControllableSignal(props) {
  const [uncontrolledSignal, setUncontrolledSignal] = createSignal(
    props.initialValue
  );
  const isControlled = () => props.value?.() !== void 0;
  const value = () => isControlled() ? props.value?.() : uncontrolledSignal();
  const setValue = (next) => {
    return untrack(() => {
      let nextValue;
      if (typeof next === "function") {
        nextValue = next(value());
      } else {
        nextValue = next;
      }
      if (!Object.is(nextValue, value())) {
        if (!isControlled()) {
          setUncontrolledSignal(nextValue);
        }
        props.onChange?.(nextValue);
      }
      return nextValue;
    });
  };
  return [value, setValue];
}
var controllableSignal_default = createControllableSignal;
export {
  controllableSignal_default as default
};
