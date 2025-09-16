// src/primitives/create-tag-name/create-tag-name.ts
import { isString } from "@kobalte/utils";
import {
  createEffect,
  createSignal
} from "solid-js";
function createTagName(ref, fallback) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
  createEffect(() => {
    setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
  });
  return tagName;
}
function stringOrUndefined(value) {
  return isString(value) ? value : void 0;
}

export {
  createTagName
};
